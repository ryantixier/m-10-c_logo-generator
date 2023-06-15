// DESCRIPTION
// Exports `Triangle`, `Circle`, and `Square` classes

class Shapes {
  // Shapes class; specific shape (Cir., Tri., Squ.) classes will inheret placeholderX values from Shapes class object
  // ... will add new, specific values to their respective object values
  constructor(placeholder1, placeholder2, placeholder3) {
    this.placeholder1 = placeholder1;
    this.placeholder2 = placeholder2;
    this.placeholder3 = placeholder3;
  }
}

class Circle extends Shapes {
  // creates Circle class; specifies that values will be adopted from Shapes class object
  constructor(
    // templates out the Circle class object values to be constructed
    placeholder1,
    placeholder2,
    placeholder3,
    placeholderCir1,
    placeholderCir2
  ) {
    super(placeholder1, placeholder2, placeholder3);
    // reflects origin template - Shapes class object
    this.placeholderCir1 = placeholderCir1;
    // adds placeholderCir1 values to (this) Circle class object
    this.placeholderCir2 = placeholderCir2;
    // adds placeholderCir2 values to (this) Circle class object
  }
}

class Triangle extends Shapes {
  // creates Triangle class; specifies that values will be adopted from Shapes class object
  constructor(
    // templates out the Triangle class object values to be constructed
    placeholder1,
    placeholder2,
    placeholder3,
    placeholderTri1,
    placeholderTri2
  ) {
    super(placeholder1, placeholder2, placeholder3);
    // reflects origin template - Shapes class object
    this.placeholderTri1 = placeholderTri1;
    // adds placeholderTri1 values to (this) Triangle class
    this.placeholderTri2 = placeholderTri2;
    // adds placeholderTri2 values to (this) Triangle class
  }
}

class Square extends Shapes {
  // creates Square class; specifies that values will be adopted from Shapes class object
  constructor(
    // templates out the Square class object values to be constructed
    placeholder1,
    placeholder2,
    placeholder3,
    placeholderSqu1,
    placeholderSqu2
  ) {
    super(placeholder1, placeholder2, placeholder3);
    // reflects origin template - Shapes class object
    this.placeholderSqu1 = placeholderSqu1;
    // adds placeholderSqu1 values to (this) Square class
    this.placeholderSqu2 = placeholderSqu2;
    // adds placeholderSqu2 values to (this) Square class
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

// triangle.setColor("blue");
// expect(triangle.render()).toEqual(
//   '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
// );
