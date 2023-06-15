// DESCRIPTION
// Jest tests for shapes
const Circle = require("./shapes");

describe("Circle", () => {
  describe("circle", () => {
    it("should render a blue cicle with white text that states, HI!");
    const circle = new Circle("darkgreen", "HEY", "yellow");
    expect(circle.render()).toEqual(
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="darkgreen" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">HEY</text></svg>`
    );
  });
});
// triangle.setColor("blue");
// expect(triangle.render()).toEqual(
//   '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
// );
