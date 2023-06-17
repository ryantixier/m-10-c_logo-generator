const { Circle, Square, Triangle } = require("./assets/lib/shapes");
const fs = require("fs");

const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "list",
      message: "What shape do you want?",
      choices: ["circle", "triangle", "square"],
      name: "shape",
    },
    {
      type: "input",
      message: "What color do you want your shape to be?",
      name: "shapeColor",
    },
    {
      type: "input",
      message:
        "Enter the text that you want to overlay your shape (max 3 characters).",
      name: "text",
    },
    {
      type: "input",
      message: "What color do you want your text to be?",
      name: "textColor",
    },
  ])
  .then((res) => {
    let shape;
    if (res.shape === "circle") {
      shape = new Circle(res.shapeColor, res.text, res.textColor);
    }
    if (res.shape === "triangle") {
      shape = new Triangle(res.shapeColor, res.text, res.textColor);
    }
    if (res.shape === "square") {
      shape = new Square(res.shapeColor, res.text, res.textColor);
    }
    fs.writeFileSync("./assets/examples/logo.svg", shape.render());
  })
  .then(() => {
    console.log("Generated logo.svg");
  });
