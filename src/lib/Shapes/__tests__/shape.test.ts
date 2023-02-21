import { Shape } from "..";

describe("Shape", () => {
  it("instantiates a shape with the given color", () => {
    const SHAPE_COLOR = "chartreuse";
    const shape = new Shape(SHAPE_COLOR);

    expect(shape.color).toBe(SHAPE_COLOR);
  });

  it("throws exception if render() is called", () => {
    const SHAPE_COLOR = "chartreuse";
    const shape = new Shape(SHAPE_COLOR);
    const ERROR = new Error("derived class must implement render method");

    expect(() => {
      shape.render();
    }).toThrow(ERROR);
  });
});
