import fs from "fs";
import CLI from "../CLI";
import SVG from "../SVG";
import { COLOR_TYPE } from "../utils/types";

export default class App {
  private static OUTPUT_PATH = "examples";

  public static async main(...args: string[]): Promise<void> {
    const cli = new CLI();
    const svg = new SVG();

    const { text } = await cli.promptForText();
    const { text_color } = await cli.promptForColor(COLOR_TYPE.TEXT);
    svg.setText(text, text_color);

    const { shape } = await cli.promptForShape();
    const { shape_color } = await cli.promptForColor(COLOR_TYPE.SHAPE);
    svg.setShape(new shape(shape_color));

    this.writeToFile(this.OUTPUT_PATH, svg);
  }

  // TODO: add logic to increment filename if exists
  private static writeToFile(dir: string, svg: SVG): void {
    try {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
      const filepath = `${dir}/logo.svg`;
      fs.writeFileSync(filepath, svg.render());
      console.log(`LOGO GENERATED @ ${filepath}`);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }
}
