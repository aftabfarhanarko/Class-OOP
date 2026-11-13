class BankAccount {
  private balance: number;

  public constructor(
    public id: number,
    public accountHolder: string,
    public email: string,
    initialBalance: number,
  ) {
    this.balance = initialBalance;
  }

  public addBalance(balance_add: number): void {
    if (balance_add <= 0) {
      console.log("Deposit amount must be positive.");
      return;
    }

    this.balance += balance_add;
    console.log("Deposit successful.");
  }

  public withdrawBalance(withdraw: number): void {
    if (withdraw <= 0) {
      console.log("Withdrawal amount must be positive.");
      return;
    }

    if (withdraw > this.balance) {
      console.log("Insufficient balance.");
      return;
    }

    this.balance -= withdraw;
    console.log("Withdrawal successful.");
  }

  public getBalance(): number {
    return this.balance;
  }
}

const bankAccounts: BankAccount[] = [
  new BankAccount(1, "Arko", "arko@gmail.com", 8999),
  new BankAccount(2, "Rahim", "rahim@gmail.com", 15000),
  // new BankAccount(3, "Karim", "karim@gmail.com", 25000),
  // new BankAccount(4, "Sakib", "sakib@gmail.com", 50000),
  // new BankAccount(5, "Hasan", "hasan@gmail.com", 75000),
  // new BankAccount(6, "Nayeem", "nayeem@gmail.com", 12000),
  // new BankAccount(7, "Fahim", "fahim@gmail.com", 35000),
  // new BankAccount(8, "Rakib", "rakib@gmail.com", 45000),
];

// Display all accounts
console.log(bankAccounts);

// Deposit
bankAccounts[0].addBalance(5000);

// Withdraw
bankAccounts[1].withdrawBalance(3000);

// Check balance
console.log(bankAccounts[0].getBalance());
console.log(bankAccounts[1].getBalance());

// Display all updated accounts
console.log(bankAccounts);
