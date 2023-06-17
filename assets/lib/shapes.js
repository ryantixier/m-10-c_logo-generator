class Shapes {
  // Cir., Tri., Squ. classes inheret values from this class
  constructor(color) {
    this.color = color;
  }
}

class Circle extends Shapes {
  // values inhereted from Shapes object
  constructor(
    // Circle object parameters
    color,
    text,
    textColor
  ) {
    super(color); // origin: Shapes object
    this.text = text;
    this.textColor = textColor;
  }
  render() {
    // render command runs generator
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.color}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    // generates svg of circle logo with values linked to user input
  }
}

class Triangle extends Shapes {
  // values inhereted from Shapes object
  constructor(
    // Triangle object parameters
    color,
    text,
    textColor
  ) {
    super(color); // origin: Shapes object
    this.text = text;
    this.textColor = textColor;
  }
  render() {
    // render command runs generator
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${this.color}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg> `;
    // generates svg of trianlge logo with values linked to user input
  }
}

class Square extends Shapes {
  // values inhereted from Shapes object
  constructor(
    // Square object parameters
    color,
    text,
    textColor
  ) {
    super(color); // origin: Shapes object
    this.text = text;
    this.textColor = textColor;
  }
  render() {
    // render command runs generator
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="${this.color}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text> </svg>`;
    // square logo being generated with object values linked to user input
  }
}

// exports classes; imported in index.js, made const's
module.exports = {
  Circle,
  Square,
  Triangle,
};
