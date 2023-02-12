export class Shape {
  constructor(private text: string, public text_color: string) {}

  public createSvg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="200px" height="200px">
  ${this.render()}
  <text
    xmlns="http://www.w3.org/2000/svg"
    x='100'
    y='125'
    font-size="75"
    text-anchor="middle"
    fill="${this.text_color}">
      ${this.text}
  </text>
</svg>
    `;
  }

  public render() {
    throw new Error("child class must implement render() method");
  }
}
