// DESCRIPTION
// Exports `Triangle`, `Circle`, and `Square` classes

// PSEUDOCODE
// PSEUDOCODE

// think of common characteristics for Shapes
// specify shape characteristics

// PSEUDOCODE
// PSEUDOCODE

class Shapes {
  // Shapes class; specific shape (Cir., Tri., Squ.) classes will inheret placeholderX values from Shapes class object
  // ... will add new, specific values to their respective object values
  constructor(color) {
    this.color = color;
  }
}

class Circle extends Shapes {
  // creates Circle class; specifies that values will be adopted from Shapes class object
  constructor(
    // templates out the Circle class object values to be constructed
    color,
    text,
    textColor
  ) {
    super(color);
    // reflects origin template - Shapes class object
    this.text = text;
    // adds placeholderCir1 values to (this) Circle class object
    this.textColor = textColor;
    // adds placeholderCir2 values to (this) Circle class object
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.color}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
  }
}

class Triangle extends Shapes {
  // creates Triangle class; specifies that values will be adopted from Shapes class object
  constructor(
    // templates out the Triangle class object values to be constructed
    color,
    text,
    textColor
  ) {
    super(color);
    // reflects origin template - Shapes class object
    this.text = text;

    this.textColor = textColor;
    // adds placeholderTri2 values to (this) Triangle class
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${this.color}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg> `;
  }
}

class Square extends Shapes {
  // creates Square class; specifies that values will be adopted from Shapes class object
  constructor(
    // templates out the Square class object values to be constructed
    color,
    text,
    textColor
  ) {
    super(color);
    // reflects origin template - Shapes class object
    this.text = text;

    this.textColor = textColor;
    // adds placeholderSqu2 values to (this) Square class
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="${this.color}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text> </svg>`;
  }
}

const newTriangle = new Triangle(
  "pointy",
  "cool",
  "looks like a taco kinda",
  "pointy",
  "best shape"
);

console.log(newTriangle);
