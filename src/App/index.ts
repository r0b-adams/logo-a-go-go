import fs from "fs";
import inquirer from "inquirer";

import SVG from "../lib/SVG";
import { Circle, Shape, Square, Triangle } from "../lib";
import { validateColor, validateMonogram } from "./validators";
import { ColorType, COLOR_ACTION, COLOR_TYPE } from "./types";
import { colorChoices } from "../utils";
import { FORMAT } from "../utils/colors";

export default class App {
  private static OUTPUT_PATH = "dist";
  private static cli = inquirer;

  public static async main(): Promise<void> {
    const svg = new SVG();

    const { text } = await this.promptForText();
    const { text_color } = await this.promptForColor(COLOR_TYPE.TEXT);
    svg.setText(text, text_color);

    const { shape } = await this.promptForShape();
    const { shape_color } = await this.promptForColor(COLOR_TYPE.SHAPE);
    svg.setShape(new shape(shape_color));

    this.writeToFile(this.OUTPUT_PATH, svg);
    console.log("logo generated!");
  }

  private static promptForText(): Promise<{ text: string }> {
    return this.cli.prompt([
      {
        message: "Enter logo monogram:",
        type: "input",
        name: "text",
        validate: validateMonogram,
      },
    ]);
  }

  private static promptForColor(
    color_type: ColorType
  ): Promise<{ [key in ColorType]: string }> {
    console.log(
      `${FORMAT.FAINT}${FORMAT.GREEN}?${FORMAT.RESET}${
        FORMAT.BOLD
      } What color should the ${color_type === COLOR_TYPE.TEXT ? "text" : "shape"} be?${
        FORMAT.RESET
      }`
    );
    return this.cli.prompt([
      {
        name: "choice",
        message: "Would you like to enter a color or choose one from the list?",
        type: "list",
        choices: [COLOR_ACTION.SELECT, COLOR_ACTION.ENTER],
      },
      {
        when: answers => answers.choice === COLOR_ACTION.SELECT,
        message: `Please select a color for the ${
          color_type === COLOR_TYPE.TEXT ? "text" : "shape"
        }`,
        name: color_type,
        type: "list",
        choices: colorChoices,
        validate: validateColor,
      },
      {
        when: answers => answers.choice === COLOR_ACTION.ENTER,
        message: `Please enter a color for the ${
          color_type === COLOR_TYPE.TEXT ? "text" : "shape"
        }:`,
        name: color_type,
        type: "input",
        validate: validateColor,
      },
    ]);
  }

  private static promptForShape(): Promise<{ shape: typeof Shape }> {
    return this.cli.prompt([
      {
        message: "Select background shape",
        name: "shape",
        type: "list",
        choices: [
          { name: "Circle", value: Circle },
          { name: "Square", value: Square },
          { name: "Triangle", value: Triangle },
        ],
      },
    ]);
  }

  private static writeToFile(path: string, svg: SVG): void {
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
    }
    fs.writeFileSync(`${path}/logo.svg`, svg.render());
  }
}
