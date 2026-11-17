// Method overloading is where a single method can have multiple signatures but still be strongle type base on typescripet

class Person {
  name: string;
  age: number;

  // constructor signatures
  constructor();
  constructor(name: string);
  constructor(name: string, age: number);

  // Decelerations
  constructor(name?: string, age?: number) {
    this.name = name ?? "";
    this.age = age ?? 0;
  }

  printDetics() {
    console.log(this.name, this.age);
  }
}

const p = new Person();
console.log(p.printDetics());

const p2 = new Person("C++");
console.log(p2.printDetics());

const p3 = new Person("C#", 45);
console.log(p3.printDetics());
