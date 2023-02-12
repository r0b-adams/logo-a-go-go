import { Shape } from "../Shape";

export class Square extends Shape {
  public shape_color: string;

  constructor(text: string, text_color: string, shape_color: string) {
    super(text, text_color);
    this.shape_color = shape_color;
  }

  render() {
    return `<rect width="200" height="200" fill='${this.shape_color}'/>`;
  }
}
