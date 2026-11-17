class Person {
  protected name: string;
  protected id: string;
  protected age: number;
  publicsh: string;
  constructor(name: string, id: string, age: number, publicsh = "") {
    console.log("Prent Call ok");
    this.name = name;
    this.id = id;
    this.age = age;
    this.publicsh = publicsh;
  }

  printDetails(): void {
    console.log(
      `Author details 02: Name: ${this.name}, ID: ${this.id}, Age: ${this.age}, Publicsh: ${this.publicsh}`,
    );
  }
}

class Author extends Person {
  salary: number;

  constructor(
    name: string,
    salary: number,
    id: string,
    age: number,
    publicsh: string,
  ) {
    super(name, id, age, publicsh);
    this.salary = salary;
    // this.name = name;
  }

  printDetails(): void {
    console.log(
      `Author details 02: Name: ${this.name}, ID: ${this.id}, Age: ${this.age}, Salary: ${this.salary}, Publicsh: ${this.publicsh}`,
    );
  }
}

class Student extends Person {
  clases: number;
  constructor(name: string, clases: number, id: string, age: number) {
    super(name, id, age);
    this.clases = clases;
  }

  printDetails(): void {
    console.log(
      `Student details: Name: ${this.name}, ID: ${this.id}, Age: ${this.age}, Classes: ${this.clases}`,
    );
  }
}

const o = new Author("OKKk", 30000, "A1001", 32, "Not");
o.printDetails();

const s = new Student("ARKO", 12, "A001", 21);
s.printDetails();
