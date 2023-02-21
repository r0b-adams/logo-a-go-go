export class Shape {
  color: string;

  constructor(color: string) {
    this.color = color;
  }

  public render() {
    throw new Error("derived class must implement render method");
  }
}

export class Circle extends Shape {
  constructor(color: string) {
    super(color);
  }

  public render() {
    return `<circle cx='100' cy='100' r="100"  fill='${this.color}'/>`;
  }
}

export class Square extends Shape {
  constructor(color: string) {
    super(color);
  }

  public render() {
    return `<rect width="200" height="200" fill='${this.color}'/>`;
  }
}

export class Triangle extends Shape {
  constructor(color: string) {
    super(color);
  }

  public render() {
    return `<polygon points="100 0, 0 200, 200 200" fill='${this.color}'/>`;
  }
}
