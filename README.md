# TypeScript OOP Learning Project

This repository is a hands-on guide to object-oriented programming (OOP) in TypeScript. It includes examples of the four OOP pillars—abstraction, encapsulation, inheritance, and polymorphism—plus smaller exercises with classes and TypeScript types.

## How OOP works

OOP organizes a program around **objects**. An object combines:

- **State:** data stored in properties, such as an account's balance.
- **Behavior:** actions provided by methods, such as depositing or withdrawing money.

A **class** describes how to create objects. Each object created from a class is called an **instance**. A constructor receives initial data and sets up the instance.

```ts
class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }
}

const account = new BankAccount(1000); // create an instance
account.deposit(500);                  // call its behavior
```

Here, `BankAccount` is the class, `account` is an object, `balance` is its state, and `deposit` is its behavior. The four pillars below are ways to organize and protect these objects as a program grows.

## The four pillars of OOP

### 1. Encapsulation — protect and manage state

Encapsulation keeps an object's data and the methods that work with that data together. It also controls which parts of the object can be accessed from outside. In TypeScript, `public`, `private`, and `protected` are access modifiers (`public` is the default).

For example, a private account balance cannot be changed directly. Public methods can validate changes first:

```ts
class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Amount must be positive");
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}
```

Callers use `deposit()` and `getBalance()` instead of editing `balance` themselves. This gives the class one place to enforce its rules.

**Repository examples:** [`Encapsulation.ts`](src/OOP/Encapsulation/Encapsulation.ts), [`Bankaccount.ts`](src/OOP/Encapsulation/Bankaccount.ts), [`BankaccountP.ts`](src/OOP/Encapsulation/BankaccountP.ts), [`account.ts`](src/OOP/Encapsulation/account.ts), [`test.ts`](src/OOP/Encapsulation/test.ts).

### 2. Abstraction — expose the essential contract

Abstraction describes what an object must do while hiding the details of how it does it. TypeScript supports this with **interfaces** and **abstract classes**. An abstract class cannot be instantiated directly; a concrete subclass must implement its abstract methods.

```ts
abstract class Shape {
  abstract area(): number;

  displayArea(): void {
    console.log(this.area());
  }
}

class Square extends Shape {
  constructor(private side: number) {
    super();
  }

  area(): number {
    return this.side * this.side;
  }
}
```

The caller can use `displayArea()` without needing to know the formula used by each shape. The abstract `area()` method defines the requirement; each concrete shape supplies its own implementation.

**Repository examples:** [`AbstructionV1.ts`](src/OOP/Abstruction/AbstructionV1.ts), [`AbstructionV2.ts`](src/OOP/Abstruction/AbstructionV2.ts), [`task.ts`](src/OOP/Abstruction/task.ts). The folder is spelled `Abstruction` in the repository.

### 3. Inheritance — reuse and specialize behavior

Inheritance lets a class derive from another class. A child class receives accessible properties and methods from its parent, and can add or override behavior. In TypeScript, `extends` declares this relationship; a child constructor calls `super()` to initialize the parent part.

```ts
class Person {
  constructor(protected name: string) {}

  describe(): string {
    return `Person: ${this.name}`;
  }
}

class Author extends Person {
  describe(): string {
    return `Author: ${this.name}`;
  }
}
```

`Author` reuses the `name` property and overrides `describe()`. Use inheritance when the child truly is a specialized form of the parent; unrelated classes can share a contract through an interface instead.

**Repository examples:** [`Inheritance.ts`](src/OOP/Inheritance/Inheritance.ts), [`InheritanceV0.ts`](src/OOP/Inheritance/InheritanceV0.ts), [`InheritanceV1.ts`](src/OOP/Inheritance/InheritanceV1.ts), [`InheritanceV.ts`](src/OOP/Inheritance/InheritanceV.ts), [`MethodOverWriting.ts`](src/OOP/Inheritance/MethodOverWriting.ts). [`MethodOverloading.ts`](src/OOP/Inheritance/MethodOverloading.ts) demonstrates method overload signatures, a related TypeScript feature.

### 4. Polymorphism — use one contract with different behaviors

Polymorphism means code can work with different object types through the same contract, while each object provides its own behavior. An interface is one way to define that contract. Classes that implement it must provide its required methods.

```ts
interface Payment {
  pay(amount: number): void;
}

class BkashPayment implements Payment {
  pay(amount: number): void {
    console.log(`Paid ${amount} with Bkash`);
  }
}

class CardPayment implements Payment {
  pay(amount: number): void {
    console.log(`Paid ${amount} with a card`);
  }
}

function checkout(payment: Payment): void {
  payment.pay(500);
}
```

`checkout()` only depends on the `Payment` contract. It can accept either class, and the `pay()` implementation that runs depends on the object passed in. This makes it easier to add another payment method without rewriting the checkout function.

**Repository examples:** [`PolymorphismV1.ts`](src/OOP/Polymorphism/PolymorphismV1.ts), [`PolymorphismV0.ts`](src/OOP/Polymorphism/PolymorphismV0.ts), and [`Payment_Management_System.ts`](src/OOP/Inheritance/Payment_Management_System.ts).

## How the pillars fit together

In a payment application, an interface can **abstract** the payment operation. A payment class can **encapsulate** its transaction state. Different payment classes can **implement** the same contract, providing **polymorphism**. If one payment type is a specialized version of another, **inheritance** may share their common behavior. Together, these ideas keep callers focused on what an object can do while each class manages its own implementation and rules.

## Project layout

```text
src/
├── OOP/
│   ├── Abstruction/    # Abstract classes and methods
│   ├── Encapsulation/  # Private state and class methods
│   ├── Inheritance/   # Parent/child classes and related exercises
│   └── Polymorphism/  # Interface-based implementations
├── index.ts           # Main TypeScript example
├── customType.ts      # Class and custom type examples
├── classType.ts       # Class example
├── pricktics.ts       # Practice example
└── V1.ts              # TypeScript language feature examples
```

## Requirements

- Node.js (a version that supports `--experimental-strip-types` to run `.ts` files directly)
- npm

## Install and build

```bash
npm install
npm run build
```

The TypeScript compiler reads `src/` and writes JavaScript files to `dist/`.

## Run examples

Run the main example with the development watcher:

```bash
npm run dev
```

Build and run the compiled main example:

```bash
npm run build
npm start
```

Run individual examples directly from source:

```bash
node --experimental-strip-types src/OOP/Abstruction/AbstructionV1.ts
node --experimental-strip-types src/OOP/Encapsulation/Bankaccount.ts
node --experimental-strip-types src/OOP/Inheritance/Inheritance.ts
node --experimental-strip-types src/OOP/Polymorphism/PolymorphismV1.ts
```

After building, compiled examples are available under the matching paths in `dist/`, for example:

```bash
node dist/OOP/Abstruction/AbstructionV1.js
```
