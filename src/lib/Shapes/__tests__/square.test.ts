import { Shape, Square } from "..";

describe("Square", () => {
  it("extends the Shape class", () => {
    const SQUARE_COLOR = "blue";
    const square = new Square(SQUARE_COLOR);

    expect(square instanceof Shape).toBe(true);
  });

  it("is instantiated with the given color", () => {
    const SQUARE_COLOR = "blue";
    const square = new Square(SQUARE_COLOR);

    expect(square.color).toBe(SQUARE_COLOR);
  });

  it("renders a square element with the given color", () => {
    const SQUARE_COLOR = "blue";
    const square = new Square(SQUARE_COLOR);
    const squareEl = square.render();
    const testEl = `<rect width="200" height="200" fill='${SQUARE_COLOR}'/>`;

    expect(squareEl).toEqual(testEl);
  });
});
