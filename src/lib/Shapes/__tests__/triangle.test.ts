import { Shape, Triangle } from "..";

describe("Triangle", () => {
  it("extends the Shape class", () => {
    const TRIANGLE_COLOR = "red";
    const triangle = new Triangle(TRIANGLE_COLOR);

    expect(triangle instanceof Shape).toBe(true);
  });

  it("is instantiated with the given color", () => {
    const TRIANGLE_COLOR = "red";
    const triangle = new Triangle(TRIANGLE_COLOR);

    expect(triangle.color).toBe(TRIANGLE_COLOR);
  });

  it("renders a triangle element with the given color", () => {
    const TRIANGLE_COLOR = "red";
    const triangle = new Triangle(TRIANGLE_COLOR);
    const triangleEl = triangle.render();
    const testEl = `<polygon points="100 0, 0 200, 200 200" fill='${TRIANGLE_COLOR}'/>`;

    expect(triangleEl).toEqual(testEl);
  });
});
