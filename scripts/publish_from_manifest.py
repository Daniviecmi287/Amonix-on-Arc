#!/usr/bin/env python3
"""Copy only manifest-allowlisted files into the public destination tree."""

from __future__ import annotations

import sys
from pathlib import Path

ALLOWED_KINDS = {"docs", "reused", "demo", "asset", "config"}
KIND_SOURCE_PREFIXES = {
    "reused": ("src/",),
    "asset": ("public/",),
    "docs": ("public-showcase/",),
    "demo": ("public-showcase/",),
    "config": ("public-showcase/",),
}
FORBIDDEN_DEST_PREFIXES = (".git", ".git/")


def refuse(message: str) -> None:
    print(message, file=sys.stderr)
    raise SystemExit(1)


def safe_rel(path: str) -> Path:
    rel = Path(path)
    if rel.is_absolute() or ".." in rel.parts or rel.as_posix().startswith("/"):
        refuse(f"Refusing unsafe path: {path!r}")
    return rel


def load_manifest(path: Path) -> list[tuple[str, str, str]]:
    rows: list[tuple[str, str, str]] = []
    seen_dest: set[str] = set()
    for raw in path.read_text(encoding="utf-8").splitlines():
        line = raw.strip()
        if not line or line.startswith("#"):
            continue
        parts = line.split("\t")
        if len(parts) != 3:
            refuse(f"Invalid manifest line: {raw!r}")
        kind, source, dest = parts
        if kind not in ALLOWED_KINDS:
            refuse(f"Unknown kind {kind!r}")
        prefixes = KIND_SOURCE_PREFIXES[kind]
        if not source.startswith(prefixes):
            refuse(f"Kind {kind} source is outside allowed prefixes: {source}")
        dest_posix = dest.replace("\\", "/")
        if dest_posix == ".git" or dest_posix.startswith(".git/"):
            refuse(f"Refusing destination under .git: {dest}")
        if dest in seen_dest:
            refuse(f"Duplicate destination: {dest}")
        seen_dest.add(dest)
        rows.append((kind, source, dest))
    if not rows:
        refuse("Manifest is empty.")
    return rows


def assert_inside(resolved: Path, root: Path, label: str) -> None:
    try:
        resolved.relative_to(root)
    except ValueError:
        refuse(f"{label} is outside the allowed directory.")


def main() -> None:
    if len(sys.argv) != 3:
        refuse("Usage: publish_from_manifest.py MANIFEST DEST_ROOT")
    manifest_path = Path(sys.argv[1])
    dest_root = Path(sys.argv[2]).resolve()
    repo_root = Path.cwd().resolve()
    if not manifest_path.is_file():
        refuse("Manifest not found.")
    if not dest_root.is_dir():
        refuse("Destination root not found.")
    assert_inside(dest_root, dest_root, "destination")

    copied: list[str] = []
    for kind, source, dest in load_manifest(manifest_path):
        src = repo_root / safe_rel(source)
        dst = dest_root / safe_rel(dest)
        if src.is_symlink() or dst.is_symlink():
            refuse(f"Refusing symlink: {source}")
        if not src.is_file() or src.is_symlink():
            refuse(f"Missing allowlisted source: {source}")
        src_resolved = src.resolve()
        assert_inside(src_resolved, repo_root, "source")
        prefix = KIND_SOURCE_PREFIXES[kind][0].rstrip("/")
        assert_inside(src_resolved, (repo_root / prefix).resolve(), "source")
        dst.parent.mkdir(parents=True, exist_ok=True)
        if dst.exists() and dst.is_symlink():
            refuse(f"Refusing symlink destination: {dest}")
        dst.write_bytes(src_resolved.read_bytes())
        copied.append(dest)

    print(f"Copied {len(copied)} allowlisted files.")
    for dest in copied:
        print(dest)


if __name__ == "__main__":
    main()
