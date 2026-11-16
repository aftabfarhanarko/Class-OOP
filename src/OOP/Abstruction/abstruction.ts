// Abstract Class
abstract class Shape {
  // Abstract method (No implementation)
  abstract area(): number;

  // Concrete method (Has implementation)
  displayArea(): void {
    console.log("Area of the shape is:", this.area());
  }
}

// Concrete Class
class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  // Implementing the abstract method
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

// Creating an object
const circle = new Circle(34);

circle.displayArea();
