import { COLOR_MAP } from "./colors/COLOR_MAP";

// #YYY, #YYYYYY
export const VALID_HEX = /(^#[0-9A-F]{3}$)|(^#[0-9A-F]{6}$)/im;

export const validateColor = (input: string) => {
  if (input in COLOR_MAP || VALID_HEX.test(input)) {
    return true;
  }
  return "Please enter a valid color";
};

export const validateMonogram = (input: string) => {
  const text = input.trim();
  if (!text) {
    return "Please enter up to 3 characters";
  } else if (text.length > 3) {
    return "Please enter a maximum of 3 characters";
  }
  return true;
};
