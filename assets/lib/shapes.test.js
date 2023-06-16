// DESCRIPTION
// Jest tests for shapes
const { Circle, Square, Triangle } = require("./shapes");

// Circle test: ✅
describe("Circle", () => {
  describe("circle", () => {
    it("should render a dark green circle with yellow text that states, HAI", () => {
      const circle = new Circle("darkgreen", "HAI", "yellow");
      expect(circle.render()).toEqual(
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="darkgreen" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">HAI</text></svg>`
      );
    });
  });
});

// Square test: ✅
describe("Square", () => {
  describe("square", () => {
    it("should render a dark red square with yellow text that states, HEY", () => {
      const square = new Square("darkred", "HEY", "yellow");
      expect(square.render()).toEqual(
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="darkred" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">HEY</text> </svg>`
      );
    });
  });
});

// Triangle test: ✅
describe("Triangle", () => {
  describe("triangle", () => {
    it("should render a dark blue triangle with yellow text that states, YO!", () => {
      const triangle = new Triangle("darkblue", "YO!", "yellow");
      expect(triangle.render()).toEqual(
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="darkblue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">YO!</text></svg> `
      );
    });
  });
});
