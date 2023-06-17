const { Circle, Square, Triangle } = require("./assets/lib/shapes");
const fs = require("fs");
const inquirer = require("inquirer");

// calls on inquirer
inquirer
  // brings up questions in terminal
  .prompt([
    {
      // shape type
      type: "list",
      message: "What shape do you want?",
      choices: ["circle", "triangle", "square"],
      name: "shape",
    },
    {
      // shape color
      type: "input",
      message: "What color do you want your shape to be?",
      name: "shapeColor",
    },
    {
      // text overlay
      type: "input",
      message:
        "Enter the text that you want to overlay your shape (max 3 characters).",
      name: "text",
    },
    {
      // text color
      type: "input",
      message: "What color do you want your text to be?",
      name: "textColor",
    },
  ])
  // inputs crietria selections specified user into the corresponding, custom fields
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
    // writes logo.svg file based on user specifications
    fs.writeFileSync("./assets/examples/logo.svg", shape.render());
  })
  // confirms logo.svg has been generated
  .then(() => {
    console.log("Generated logo.svg");
  });
