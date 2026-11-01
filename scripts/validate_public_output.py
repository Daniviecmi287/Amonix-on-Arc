#!/usr/bin/env python3
"""Fail-closed scan of files about to be published to the public repository."""

from __future__ import annotations

import argparse
import re
import subprocess
import sys
from pathlib import Path

SKIP_SUFFIXES = {".png", ".jpg", ".jpeg", ".webp", ".woff", ".woff2", ".ico"}
ALLOWED_DEST_EXTRA = {"DEVELOPMENT_STATUS.md"}
PROHIBITED_DEST_PREFIXES = (
    "src/lib/server/",
    "src/lib/client/circleWebSdk",
    "src/lib/client/passkeyStep",
    "src/lib/client/otp",
    "src/app/api/",
)
DEMO_API_PREFIX = "src/app/api/demo/"

# Built from fragments so this scanner does not match itself.
SENSITIVE_IMPORT = re.compile(
    "|".join(
        [
            r"(?:from|import)\s+[\"']@/lib/server(?:/[^\"']*)?[\"']",
            r"(?:from|import)\s+[\"']@/lib/client/" + "circle" + r"WebSdk[\"']",
            r"(?:from|import)\s+[\"']@/lib/client/" + "passkey" + r"Step[\"']",
            r"(?:from|import)\s+[\"']@/lib/client/" + "otp" + r"Attempt[\"']",
            "execute" + "WalletChallenge",
            "ensure" + r"DeviceId\s*\(",
        ]
    )
)

# Credential-like values. Do not print the match.
CREDENTIAL = re.compile(
    r"""(?:ghp_[A-Za-z0-9]{20,}"""
    r"""|github_pat_[A-Za-z0-9_]{20,}"""
    r"""|sk_live_[A-Za-z0-9]{16,}"""
    r"""|AKIA[0-9A-Z]{16}"""
    r"""|-----BEGIN (?:RSA |OPENSSH |EC )?PRIVATE KEY-----"""
    r"""|postgres(?:ql)?://[^:\s/]+:[^@\s/]+@"""
    r""")"""
)

ENV_ASSIGNMENT = re.compile(
    r"""(?:DATABASE_URL|ARC_STUDIO_TOKEN|SHOWCASE_SYNC_TOKEN|NEON_DATABASE_URL)\s*=\s*["']?[^"'\s]+"""
)


def refuse(message: str) -> None:
    print(message, file=sys.stderr)
    raise SystemExit(1)


def load_dests(manifest: Path) -> list[str]:
    dests: list[str] = []
    for raw in manifest.read_text(encoding="utf-8").splitlines():
        line = raw.strip()
        if not line or line.startswith("#"):
            continue
        parts = line.split("\t")
        if len(parts) != 3:
            refuse(f"Invalid manifest line: {raw!r}")
        dests.append(parts[2])
    if not dests:
        refuse("Manifest is empty.")
    return dests


def dest_prohibited(dest: str) -> bool:
    posix = dest.replace("\\", "/")
    if posix.startswith(DEMO_API_PREFIX):
        return False
    return posix.startswith(PROHIBITED_DEST_PREFIXES) or posix in {".env", ".env.local", ".env.production"}


def scan_text(rel: str, text: str) -> None:
    if SENSITIVE_IMPORT.search(text):
        refuse(f"{rel}: prohibited server/auth/signing import or symbol")
    if CREDENTIAL.search(text):
        refuse(f"{rel}: detectable credential material")
    if ENV_ASSIGNMENT.search(text):
        refuse(f"{rel}: private environment assignment")


def scan_file(root: Path, rel: str) -> None:
    path = root / rel
    if path.is_symlink():
        refuse(f"{rel}: symlink in public output")
    if not path.is_file():
        refuse(f"{rel}: missing from public output")
    if dest_prohibited(rel):
        refuse(f"{rel}: prohibited path")
    if path.suffix.lower() in SKIP_SUFFIXES:
        return
    try:
        text = path.read_text(encoding="utf-8")
    except UnicodeDecodeError:
        refuse(f"{rel}: non-text file is not an approved asset type")
    scan_text(rel, text)


def staged_names() -> list[str]:
    out = subprocess.check_output(["git", "diff", "--cached", "--name-only", "-z"], text=True)
    return [name for name in out.split("\0") if name]


def staged_blob(rel: str) -> bytes:
    return subprocess.check_output(["git", "show", f":{rel}"])


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("manifest")
    parser.add_argument("dest_root")
    parser.add_argument("--staged", action="store_true")
    args = parser.parse_args()
    manifest = Path(args.manifest)
    dest_root = Path(args.dest_root).resolve()
    if not manifest.is_file():
        refuse("Manifest not found.")
    if not dest_root.is_dir():
        refuse("Destination root not found.")

    dests = load_dests(manifest)
    allowed = set(dests) | ALLOWED_DEST_EXTRA

    if args.staged:
        staged = staged_names()
        extra = [name for name in staged if name not in allowed]
        if extra:
            refuse("Staged files are not on the allowlist.")
        for rel in staged:
            if dest_prohibited(rel):
                refuse(f"{rel}: prohibited path")
            if Path(rel).suffix.lower() in SKIP_SUFFIXES:
                continue
            blob = staged_blob(rel)
            try:
                text = blob.decode("utf-8")
            except UnicodeDecodeError:
                refuse(f"{rel}: non-text file is not an approved asset type")
            scan_text(rel, text)
        print(f"Staged public output passed ({len(staged)} files).")
        return

    for rel in dests:
        scan_file(dest_root, rel)
    status = dest_root / "DEVELOPMENT_STATUS.md"
    if status.is_file():
        scan_file(dest_root, "DEVELOPMENT_STATUS.md")
    print(f"Public output passed ({len(dests)} allowlisted files).")


if __name__ == "__main__":
    main()
