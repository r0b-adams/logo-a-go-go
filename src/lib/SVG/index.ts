import { Shape } from "../Shapes";

export default class SVG {
  private width: number = 300;
  private height: number = 200;
  protected text?: string;
  protected shape?: Shape;

  public getText() {
    return this.text;
  }

  public setText(text: string, color: string) {
    this.text = `<text xmlns="http://www.w3.org/2000/svg" x='100' y='125' font-size="75" text-anchor="middle" fill="${color}">${text}</text>`;
  }

  public getShape() {
    return this.shape;
  }

  public setShape(shape: Shape) {
    this.shape = shape;
  }

  public render() {
    if (!this.shape) {
      throw new Error("SVG shape has not been set");
    }
    if (!this.text) {
      throw new Error("SVG text has not been set");
    }

    return `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="${this.width}px"
      height="${this.height}px">
      ${this.shape.render()}
      ${this.text}
    </svg>
    `;
  }
}
