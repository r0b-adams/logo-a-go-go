import { Shape, Circle } from "..";

describe("Circle", () => {
  it("extends the Shape class", () => {
    const CIRCLE_COLOR = "chartreuse";
    const circle = new Circle(CIRCLE_COLOR);

    expect(circle instanceof Shape).toBe(true);
  });

  it("should instantiate with the given color", () => {
    const CIRCLE_COLOR = "chartreuse";
    const circle = new Circle(CIRCLE_COLOR);

    expect(circle.color).toBe(CIRCLE_COLOR);
  });

  it("should render a circle element with the given color", () => {
    const CIRCLE_COLOR = "chartreuse";
    const circle = new Circle(CIRCLE_COLOR);
    const circleEl = circle.render();
    const testEl = `<circle cx='100' cy='100' r="100" fill='${CIRCLE_COLOR}'/>`;

    expect(circleEl).toEqual(testEl);
  });
});
