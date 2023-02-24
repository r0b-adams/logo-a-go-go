import inquirer from "inquirer";
import { ColorType, COLOR_TYPE, COLOR_ACTION } from "../utils/types";
import { Circle, Shape, Square, Triangle } from "../lib";
import { validateMonogram, colorChoices, validateColor } from "../utils";
import { FORMAT } from "../utils/colors";

export default class CLI {
  private cli = inquirer;

  public promptForText(): Promise<{ text: string }> {
    return this.cli.prompt([
      {
        message: "Enter logo monogram:",
        type: "input",
        name: "text",
        validate: validateMonogram,
      },
    ]);
  }

  public promptForColor(color_type: ColorType): Promise<{ [key in ColorType]: string }> {
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

  public promptForShape(): Promise<{ shape: typeof Shape }> {
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
}
