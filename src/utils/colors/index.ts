import { COLOR_MAP } from "./COLOR_MAP";

type HexTuple = [string, string, string];
type RgbTuple = [number, number, number];

// ANSI format escape codes
export const FORMAT = {
  RESET: "\x1b[0m",
  BOLD: "\x1b[1m",
  FAINT: "\x1b[2m",
  ITALIC: "\x1b[3m",
  UNDERLINE: "\x1b[4m",
  INVERT: "\x1b[7m", //swap fg & bg
  HIDDEN: "\x1b[8m",
};

// returns tuple of RGB ints from a hexadecimal color
const getRGB = (hexes: HexTuple): RgbTuple => {
  const [R, G, B] = hexes.map(hex => parseInt(hex, 16));
  return [R, G, B];
};

// returns tuple of 2 digit hexadecimal values
const getHexadecimal = (hexStr: string): HexTuple => {
  let R, G, B;
  const parsed = hexStr[0] === "#" ? hexStr.substring(1) : hexStr;
  switch (parsed.length) {
    case 3:
      const short = hexStr.match(/[0-9a-fA-F]{1}/g)!;
      [R, G, B] = short.map(hex => hex + hex);
      return [R, G, B];

    case 6:
      [R, G, B] = hexStr.match(/[0-9a-fA-F]{2}/g)!;
      return [R, G, B];

    default:
      throw new Error(`unable to parse "${hexStr}"`);
  }
};

const generateColorChoices = () => {
  return Object.keys(COLOR_MAP).map(key => {
    const hexStr = COLOR_MAP[key];
    const rgbHex = getHexadecimal(hexStr);
    const [R, G, B] = getRGB(rgbHex);
    const COLOR = "\x1b[38;2;" + R + ";" + G + ";" + B + "m";
    const name = [COLOR, key, FORMAT.RESET].join(""); // wrap text in ANSI color codes
    return { name, value: hexStr };
  });
};

const colorChoices = generateColorChoices();

export { colorChoices };
