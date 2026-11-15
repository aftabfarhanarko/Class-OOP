class Account {
  private id: number;
  private name: string;
  private email: string;
  private balance: number;

  constructor(id: number, name: string, email: string, balance: number) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.balance = balance;
  }

  public balanceAdd (balanceAdd:number):boolean {
   this.balance +=balanceAdd
   return true
  }
}

const account_one = new Account(34, "Arko", "arko@gmail.com", 5000);

console.log(account_one);
account_one.balanceAdd(999)
console.log(account_one);

