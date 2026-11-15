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

  // Add Balance
  public balanceAdd(amount: number): boolean {
    if (amount <= 0) {
      console.log("Invalid Amount");
      return false;
    }

    if (amount > 100000) {
      console.log("Maximum Deposit Limit is 100000");
      return false;
    }

    this.balance += amount;
    return true;
  }

  // Deduct Balance (Private)
  private balanceDec(amount: number): boolean {
    if (amount <= 0) {
      console.log("Invalid Amount");
      return false;
    }

    if (amount > this.balance) {
      console.log("Not Available Balance");
      return false;
    }

    this.balance -= amount;
    return true;
  }

  // Withdraw Balance
  public withdraw(amount: number): boolean {
    return this.balanceDec(amount);
  }

  // Get Balance
  public getBalance(): number {
    return this.balance;
  }

  // getAccountInfo

  //   public getAccountInfo (){
  //     id: number;
  // name: string;
  // email: string;
  // balance: number;
  //   }{
  //   return {
  //       id: this.id,
  //       name: this.name,
  //       email: this.email,
  //       balance: this.balance,
  //     };
  //   }

  public getAccountInfo(): {
    id: number;
    name: string;
    email: string;
    balance: number;
  } {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      balance: this.balance,
    };
  }

  public transfer(receiver: Account, amount: number): boolean {
    if (amount <= 0) {
      console.log("Invalid Transfer Amount");
      return false;
    }

    if (amount > this.balance) {
      console.log("Insufficient Balance");
      return false;
    }

    this.balanceDec(amount);
    receiver.balanceAdd(amount);

    console.log("Transfer Successful");
    return true;
  }
}

const account_one = new Account(34, "Arko", "arko@gmail.com", 5000);

console.log("Initial Balance:", account_one.getBalance());

account_one.balanceAdd(10000999);

console.log("After Deposit:", account_one.getBalance());

account_one.withdraw(500);

console.log("After Withdraw:", account_one.getBalance());

console.log(account_one.getAccountInfo());

const account_two = new Account(
  35,
  "Rahim",
  "rahim@gmail.com",
  2000
);

console.log(account_two);
