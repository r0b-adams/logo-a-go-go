import fs from "fs";
import { enterMonogram, selectColor, selectShape } from "./utils/prompts";

const DIST = "examples";

const createOutputDir = (path: string) => {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }
};

const main = async () => {
  createOutputDir(DIST);

  const { text } = await enterMonogram();
  const { text_color } = await selectColor("text_color");
  const { shape } = await selectShape();
  const { fill_color } = await selectColor("fill_color");

  const svg = new shape(text, text_color, fill_color).createSvg();
  fs.writeFileSync(`${DIST}/logo.svg`, svg);
  console.log("logo generated!");
};

main();
