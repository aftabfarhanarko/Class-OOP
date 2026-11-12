class Person {
  name: string = "Arko";
  age: number = 4453455;

  printFunc() {
    console.log(this.name, this.age);
  }
}

const new_user = new Person();
new_user.printFunc();

class Person2 {
  constructor(
    public name: string,
    public age: number,
  ) {}

  printFunc() {
    console.log(this.name, this.age);
  }
}

const newUser = new Person2("Arkqwedwqo", 25);
newUser.printFunc();
