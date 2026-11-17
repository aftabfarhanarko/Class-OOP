abstract class Shape {
  abstract area(): number; // Signature Line No-Implementation

  // Concrete method (Has implementation)
  displayArea(): void {
    console.log("Area of the shape is:", this.area());
  }
}

// Concrete Class
class Circle extends Shape {
  public radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  // Implementing the abstract method
  area(): number {
    return Math.PI * this.radius * this.radius;
  }

  diameter(): number {
    return 2 * this.radius;
  }
}

// Rectangle
class Rectangle extends Shape {
  private width: number;
  private hight: number;

  constructor(width: number, hight: number) {
    super();
    this.width = width;
    this.hight = hight;
  }

  area(): number {
    return this.width * this.hight;
  }
}

class Square extends Shape {
  private side: number;

  constructor(side: number) {
    super();
    this.side = side;
  }

  area(): number {
    return this.side * this.side;
  }
}

// Creating an object
const circle = new Circle(34);
const rectangle = new Rectangle(34, 56);
const square = new Square(44);

circle.displayArea();
console.log("Diameter of the circle is:", circle.diameter());
rectangle.displayArea();
square.displayArea();
