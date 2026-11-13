class Human {
  private id: number;
  private name: string;
  private age: number;
  private email: string;

  constructor(id: number, name: string, age: number, email: string) {
    ((this.id = id),
      (this.name = name),
      (this.age = age),
      (this.email = email));
  }

  public changesEmail(emailChanges: string): boolean {
    this.email = emailChanges;
    return true;
  }
}

const human_1 = new Human(1, "Arko", 56, "aqweeqweqweqwrko@gmail.com");

human_1.changesEmail("helllllllllllo@gmail");

console.log(human_1);
