/**
 * AMONIX product UI foundation.
 *
 * When building a new feature, reuse these primitives before inventing heights,
 * radii, card styles, or button variants. See `./UI.md`.
 */

export { CONTROL_HEIGHT, RADIUS, TYPE, SPACE, SURFACE, ACTION_TILE, FOCUS } from "@/components/amonix/tokens"
export {
  BUTTON_VARIANT,
  BUTTON_SIZE,
  ACTION_PRIMARY,
  ACTION_SECONDARY,
  ACTION_TERTIARY,
  ACTION_DANGER,
  ACTION_STACK,
  ACTION_PRIMARY_BLOCK,
} from "@/components/amonix/buttonStyles"
export { Button, type AmonixButtonVariant, type AmonixButtonSize, type AmonixButtonProps } from "@/components/amonix/Button"
export { ButtonLink } from "@/components/amonix/ButtonLink"
export { IconButton, type IconButtonSize } from "@/components/amonix/IconButton"
export { ActionGroup } from "@/components/amonix/ActionGroup"
export {
  SegmentedControl,
  SEGMENT_LIST,
  SEGMENT_TRIGGER,
  SEGMENT_LIST_COMPACT,
  SEGMENT_TRIGGER_COMPACT,
  type SegmentOption,
} from "@/components/amonix/SegmentedControl"
export { FormField, TextField, AmountField, QuantityField } from "@/components/amonix/FormField"
export {
  TransactionForm,
  TransactionFormPanel,
  TransactionFormSection,
  TransactionFormActions,
  NoteField,
  FormError,
} from "@/components/amonix/TransactionForm"
export { SectionCard } from "@/components/amonix/SectionCard"
export { MetricCard, MetricGrid } from "@/components/amonix/MetricCard"
export { MetricValue, type MetricTone } from "@/components/amonix/MetricValue"
export { DetailRow } from "@/components/amonix/DetailRow"
export { Badge, type BadgeTone } from "@/components/amonix/Badge"
export { PageSection, PageIntro, SoftSection } from "@/components/amonix/PageSection"
