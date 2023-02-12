import { Shape } from "../Shape";

export class Circle extends Shape {
  public shape_color: string;

  constructor(text: string, text_color: string, shape_color: string) {
    super(text, text_color);
    this.shape_color = shape_color;
  }

  render() {
    return `<circle cx='100' cy='100' r="100"  fill='${this.shape_color}'/>`;
  }
}
