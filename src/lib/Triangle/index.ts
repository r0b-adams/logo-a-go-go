import { Shape } from "../Shape";

export class Triangle extends Shape {
  public shape_color: string;

  constructor(text: string, text_color: string, shape_color: string) {
    super(text, text_color);
    this.shape_color = shape_color.trim();
  }

  render() {
    return `<polygon points="100 0, 0 200, 200 200" fill='${this.shape_color}'/>`;
  }
}
