class BankAccount {
  private id: number;
  private accountHolder: string;
  private email: string;
  private accountNumber: string;
  private accountType: "Savings" | "Current";
  private balance: number;
  private currency: string;
  private isActive: boolean;
  private createdAt: string;

  constructor(
    id: number,
    accountHolder: string,
    email: string,
    accountNumber: string,
    accountType: "Savings" | "Current",
    balance: number,
    currency: string,
    isActive: boolean,
    createdAt: string,
  ) {
    this.id = id;
    this.accountHolder = accountHolder;
    this.email = email;
    this.accountNumber = accountNumber;
    this.accountType = accountType;
    this.balance = balance;
    this.currency = currency;
    this.isActive = isActive;
    this.createdAt = createdAt;
  }

  blanceUpdate(balance_dc:number):boolean {
    this.balance = this.balance - balance_dc;
    return true;
  }
}

const bankUser1 = new BankAccount(
  1,
  "Arko",
  "arko@gmail.com",
  "c",
  "Savings",
  5000,
  "BDT",
  true,
  "2026-01-10",
);

const bankUser2 = new BankAccount(
  2,
  "Rahim Ahmed",
  "rahim@gmail.com",
  "1001001002",
  "Current",
  125000,
  "BDT",
  true,
  "2026-02-15",
);

const bankUser3 = new BankAccount(
  3,
  "Karim Hasan",
  "karim@gmail.com",
  "1001001003",
  "Savings",
  75000,
  "BDT",
  false,
  "2026-03-20",
);

const bankUser4 = new BankAccount(
  4,
  "Nusrat Jahan",
  "nusrat@gmail.com",
  "1001001004",
  "Current",
  250000,
  "BDT",
  true,
  "2026-04-05",
);

const bankUser5 = new BankAccount(
  5,
  "Sakib Islam",
  "sakib@gmail.com",
  "1001001005",
  "Savings",
  30000,
  "BDT",
  true,
  "2026-05-12",
);

const bankUsers: BankAccount[] = [
  bankUser1,
  bankUser2,
  bankUser3,
  bankUser4,
  bankUser5,
];

bankUser1.blanceUpdate(4999);

console.log("All User", bankUsers);
