class Calculater {
  // Method Overloading: Number Addition
  add(a: number, b: number): number;

  // Method Overloading: String Concatenation
  add(a: string, b: string): string;

  // Method Implementation: Handles both number and string
  add(a: number | string, b: number | string): number | string {
    // Check whether both arguments are numbers
    if (typeof a === "number" && typeof b === "number") {
      return a + b;
    }
    // Check whether both arguments are strings
    else if (typeof a === "string" && typeof b === "string") {
      return a + b;
    }
    // Throw an error if argument types are different
    else {
      throw new Error(
        "Invalid parameters. Both arguments must be numbers or strings.",
      );
    }
  }
}

// Create an instance of Calculator
const cal = new Calculater();

// Call add() with two number arguments
console.log(cal.add(89.77, 88.9)); // 178.67
