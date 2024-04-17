import type { ComponentChildren } from "preact";

/**
 * @title Flex
 */

export interface Props {
  children?: ComponentChildren | null;
  sectionChildrens?: Section[];
  gap?: {
    /** @default 2 */
    mobile?: "1" | "2" | "4" | "8" | "12" | "16";
    /** @default 4 */
    desktop?: "1" | "2" | "4" | "8" | "12" | "16";
  };
  direction?: {
    /** @default Row */
    mobile?: "Row" | "Col";
    /** @default Row */
    desktop?: "Row" | "Col";
  };
  align?: {
    /** @default Center */
    mobile?: "Center" | "Start" | "End" | "Baseline" | "Stretch";
    /** @default Center */
    desktop?: "Center" | "Start" | "End" | "Baseline" | "Stretch";
  };
  justify?: {
    /** @default Center */
    mobile?: "Center" | "Start" | "End" | "Between";
    /** @default Center */
    desktop?: "Center" | "Start" | "End" | "Between";
  };
  wrap?: {
    /** @default Wrap */
    mobile?: "Wrap" | "Nowrap" | "Wrap-reverse";
    /** @default wrap */
    desktop?: "Wrap" | "Nowrap" | "Wrap-reverse";
  };
}
