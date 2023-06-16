// DESCRIPTION
// Jest tests for shapes
const { Circle } = require("./shapes");

describe("Circle", () => {
  describe("circle", () => {
    it("should render a dark green circle with yellow text that states, HAI", () => {
      const circle = new Circle("darkgreen", "HAI", "yellow");
      expect(circle.render()).toEqual(
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="darkgreen" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">HAI</text></svg>`
      );
      console.log(circle.render("darkgreen", "HAI", "yellow"));
    });
  });
});
