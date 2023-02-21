import { Circle, Square, Triangle } from "../lib/Shapes";

export const COLOR_ACTION = {
  SELECT: "Select from list",
  ENTER: "Enter color",
} as const;

export const COLOR_TYPE = {
  TEXT: "text_color",
  SHAPE: "shape_color",
} as const;

export type ColorType = typeof COLOR_TYPE[keyof typeof COLOR_TYPE];
export type ShapeChoice = typeof Circle | typeof Square | typeof Triangle;
