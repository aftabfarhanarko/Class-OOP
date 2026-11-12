
// ========================================
// 1. BASIC TYPES
// ========================================

let name: string = "Arko";
let age: number = 23;
let isActive: boolean = true;

let undefinedValue: undefined = undefined;
let nullValue: null = null;

let anyValue: any = "Hello";
anyValue = 100;
anyValue = true;

let unknownValue: unknown = "TypeScript";


// ========================================
// 2. ARRAY TYPES
// ========================================

// Number Array
const numbers: number[] = [1, 2, 3, 4, 5];

// String Array
const names: string[] = ["Arko", "Rahim", "Karim"];

// Boolean Array
const statuses: boolean[] = [true, false, true];

// Generic Array
const ages: Array<number> = [20, 21, 22];

const emails: Array<string> = [
  "arko@gmail.com",
  "rahim@gmail.com",
];

// Mixed Array
const mixed: (string | number)[] = [
  "Arko",
  23,
  "Rahim",
  25,
];

// Any Array
const anyArray: any[] = [1, "Arko", true, null];

// Empty Array
const emptyArray: number[] = [];

// Readonly Array
const readonlyNumbers: readonly number[] = [1, 2, 3];


// ========================================
// 3. TUPLE TYPES
// ========================================

const person: [string, number] = ["Arko", 23];

const student: [number, string, boolean] = [
  1,
  "Arko",
  true,
];

// Optional Tuple
const optionalTuple: [number, string, boolean?] = [
  1,
  "Arko",
];

// Readonly Tuple
const coordinates: readonly [number, number] = [10, 20];


// ========================================
// 4. OBJECT TYPES
// ========================================

const user: {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
} = {
  id: 1,
  name: "Arko",
  email: "arko@gmail.com",
  isActive: true,
};

// Optional Property
const userInfo: {
  id: number;
  name: string;
  email?: string;
} = {
  id: 1,
  name: "Arko",
};

// Readonly Property
const admin: {
  readonly id: number;
  name: string;
} = {
  id: 1,
  name: "Admin",
};


// ========================================
// 5. CUSTOM TYPES (TYPE ALIAS)
// ========================================

type User = {
  id: number;
  name: string;
  email?: string;
  age: number;
  isActive: boolean;
};

const newUser: User = {
  id: 1,
  name: "Alice",
  age: 23,
  email: "alice@gmail.com",
  isActive: true,
};

type Product = {
  id: number;
  title: string;
  price: number;
  inStock: boolean;
};

const product: Product = {
  id: 1,
  title: "Laptop",
  price: 75000,
  inStock: true,
};


// ========================================
// 6. UNION TYPES
// ========================================

let userId: string | number;

userId = 101;
userId = "USER-101";

const mixedData: (string | number)[] = [
  "Arko",
  23,
  "Rahim",
  25,
];

type Status = "pending" | "success" | "failed";

let orderStatus: Status = "pending";


// ========================================
// 7. INTERSECTION TYPES
// ========================================

type UserBasic = {
  id: number;
  name: string;
};

type Account = {
  email: string;
  password: string;
};

type UserAccount = UserBasic & Account;

const account: UserAccount = {
  id: 1,
  name: "Arko",
  email: "arko@gmail.com",
  password: "123456",
};


// ========================================
// 8. ENUM TYPES
// ========================================

enum Role {
  Admin,
  User,
  Moderator,
}

const userRole: Role = Role.Admin;

enum OrderStatus {
  Pending = "PENDING",
  Success = "SUCCESS",
  Failed = "FAILED",
}


// ========================================
// 9. FUNCTION TYPES
// ========================================

// Basic Function
function add(a: number, b: number): number {
  return a + b;
}

// String Return
function getName(name: string): string {
  return name;
}

// Optional Parameter
function greet(name: string, age?: number): string {
  return `Hello ${name}`;
}

// Default Parameter
function multiply(a: number, b: number = 2): number {
  return a * b;
}

// Arrow Function
const subtract = (a: number, b: number): number => {
  return a - b;
};

// Function Type
type Calculator = (a: number, b: number) => number;

const divide: Calculator = (a, b) => {
  return a / b;
};

// Void Function
function sayHello(): void {
  console.log("Hello World");
}

// Never Function
function throwError(): never {
  throw new Error("Something went wrong");
}


// ========================================
// 10. RECORD TYPES
// ========================================

const marks: Record<string, number> = {
  Math: 90,
  English: 85,
  Physics: 80,
};

const userData: Record<string, string> = {
  name: "Arko",
  email: "arko@gmail.com",
};

type UserRole = "admin" | "user";

const permissions: Record<UserRole, boolean> = {
  admin: true,
  user: false,
};


// ========================================
// 11. UTILITY TYPES
// ========================================

type UserProfile = {
  id: number;
  name: string;
  email: string;
  age: number;
};

// Partial: All properties optional
type PartialUser = Partial<UserProfile>;

// Required: All properties required
type RequiredUser = Required<UserProfile>;

// Readonly: All properties readonly
type ReadonlyUser = Readonly<UserProfile>;

// Pick: Select specific properties
type UserInfo = Pick<UserProfile, "name" | "email">;

// Omit: Remove specific properties
type UserWithoutEmail = Omit<UserProfile, "email">;

// Extract: Extract matching union members
type A = Extract<string | number | boolean, string | number>;

// Exclude: Exclude matching union members
type B = Exclude<string | number | boolean, string>;


// ========================================
// 12. LITERAL TYPES
// ========================================

let direction: "left" | "right" | "up" | "down";

direction = "left";

type PaymentStatus = "paid" | "unpaid" | "refunded";

const payment: PaymentStatus = "paid";


// ========================================
// 13. INTERFACE
// ========================================

interface Student {
  id: number;
  name: string;
  age: number;
  grade: string;
  subjects: string[];
  isActive: boolean;
}

const studentData: Student = {
  id: 1,
  name: "Arko",
  age: 23,
  grade: "A",
  subjects: ["Math", "English", "Programming"],
  isActive: true,
};


// ========================================
// 14. EXTENDING INTERFACE
// ========================================

interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
  salary: number;
}

const employee: Employee = {
  name: "Arko",
  age: 23,
  employeeId: 101,
  salary: 50000,
};


// ========================================
// 15. TYPE ASSERTION
// ========================================

let someValue: unknown = "Hello TypeScript";

let stringLength: number = (someValue as string).length;


// ========================================
// 16. TYPE NARROWING
// ========================================

function printValue(value: string | number): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}


// ========================================
// 17. NULLABLE TYPES
// ========================================

let username: string | null = "Arko";

username = null;


// ========================================
// 18. OPTIONAL FUNCTION PARAMETERS
// ========================================

function createUser(
  name: string,
  email?: string,
  age: number = 23
): void {
  console.log(name, email, age);
}


// ========================================
// 19. GENERIC TYPES
// ========================================

// Generic Function
function identity<T>(value: T): T {
  return value;
}

const result1 = identity<string>("Arko");
const result2 = identity<number>(100);

// Generic Array
function getFirst<T>(items: T[]): T | undefined {
  return items[0];
}

const firstNumber = getFirst<number>([10, 20, 30]);
const firstName = getFirst<string>(["Arko", "Rahim"]);


// ========================================
// 20. GENERIC INTERFACE
// ========================================

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

const response: ApiResponse<User> = {
  success: true,
  message: "User fetched successfully",
  data: {
    id: 1,
    name: "Arko",
    age: 23,
    email: "arko@gmail.com",
    isActive: true,
  },
};


// ========================================
// 21. CONSOLE OUTPUT
// ========================================

console.log("Name:", name);
console.log("Age:", age);
console.log("Numbers:", numbers);
console.log("Person:", person);
console.log("User:", newUser);
console.log("Product:", product);
console.log("Account:", account);
console.log("Role:", userRole);
console.log("Addition:", add(10, 20));
console.log("Student:", studentData);
console.log("Employee:", employee);
console.log("API Response:", response);
console.log("Generic Result:", result1, result2);
