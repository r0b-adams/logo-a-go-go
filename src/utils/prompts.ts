import io from "inquirer";
import { Circle, Square, Triangle } from "../lib";
import { validateColor, validateMonogram } from "../utils";
import { colorChoices } from "./colors";

export const enterMonogram = () => {
  return io.prompt([
    {
      message: "Enter logo monogram:",
      type: "input",
      name: "text",
      validate: validateMonogram,
    },
  ]);
};

export const selectColor = (name: "text_color" | "fill_color") => {
  return io.prompt([
    {
      name: "choice",
      message: "Would you like to enter a color or choose one from the list?",
      type: "list",
      choices: ["Enter color", "Select from list"],
    },
    {
      when: answers => answers.choice === "Enter color",
      message: "Please enter a color",
      name,
      type: "input",
      validate: validateColor,
    },
    {
      when: answers => answers.choice === "Select from list",
      message: "Select a color",
      name,
      type: "list",
      choices: colorChoices,
    },
  ]);
};

export const selectShape = () => {
  return io.prompt([
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
};
