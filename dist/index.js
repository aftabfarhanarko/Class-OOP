// ========================================
// 1. BASIC TYPES
// ========================================
let name = "Arko";
let age = 23;
let isActive = true;
let undefinedValue = undefined;
let nullValue = null;
let anyValue = "Hello";
anyValue = 100;
anyValue = true;
let unknownValue = "TypeScript";
// ========================================
// 2. ARRAY TYPES
// ========================================
// Number Array
const numbers = [1, 2, 3, 4, 5];
// String Array
const names = ["Arko", "Rahim", "Karim"];
// Boolean Array
const statuses = [true, false, true];
// Generic Array
const ages = [20, 21, 22];
const emails = [
    "arko@gmail.com",
    "rahim@gmail.com",
];
// Mixed Array
const mixed = [
    "Arko",
    23,
    "Rahim",
    25,
];
// Any Array
const anyArray = [1, "Arko", true, null];
// Empty Array
const emptyArray = [];
// Readonly Array
const readonlyNumbers = [1, 2, 3];
// ========================================
// 3. TUPLE TYPES
// ========================================
const person = ["Arko", 23];
const student = [
    1,
    "Arko",
    true,
];
// Optional Tuple
const optionalTuple = [
    1,
    "Arko",
];
// Readonly Tuple
const coordinates = [10, 20];
// ========================================
// 4. OBJECT TYPES
// ========================================
const user = {
    id: 1,
    name: "Arko",
    email: "arko@gmail.com",
    isActive: true,
};
// Optional Property
const userInfo = {
    id: 1,
    name: "Arko",
};
// Readonly Property
const admin = {
    id: 1,
    name: "Admin",
};
const newUser = {
    id: 1,
    name: "Alice",
    age: 23,
    email: "alice@gmail.com",
    isActive: true,
};
const product = {
    id: 1,
    title: "Laptop",
    price: 75000,
    inStock: true,
};
// ========================================
// 6. UNION TYPES
// ========================================
let userId;
userId = 101;
userId = "USER-101";
const mixedData = [
    "Arko",
    23,
    "Rahim",
    25,
];
let orderStatus = "pending";
const account = {
    id: 1,
    name: "Arko",
    email: "arko@gmail.com",
    password: "123456",
};
// ========================================
// 8. ENUM TYPES
// ========================================
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Moderator"] = 2] = "Moderator";
})(Role || (Role = {}));
const userRole = Role.Admin;
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "PENDING";
    OrderStatus["Success"] = "SUCCESS";
    OrderStatus["Failed"] = "FAILED";
})(OrderStatus || (OrderStatus = {}));
// ========================================
// 9. FUNCTION TYPES
// ========================================
// Basic Function
function add(a, b) {
    return a + b;
}
// String Return
function getName(name) {
    return name;
}
// Optional Parameter
function greet(name, age) {
    return `Hello ${name}`;
}
// Default Parameter
function multiply(a, b = 2) {
    return a * b;
}
// Arrow Function
const subtract = (a, b) => {
    return a - b;
};
const divide = (a, b) => {
    return a / b;
};
// Void Function
function sayHello() {
    console.log("Hello World");
}
// Never Function
function throwError() {
    throw new Error("Something went wrong");
}
// ========================================
// 10. RECORD TYPES
// ========================================
const marks = {
    Math: 90,
    English: 85,
    Physics: 80,
};
const userData = {
    name: "Arko",
    email: "arko@gmail.com",
};
const permissions = {
    admin: true,
    user: false,
};
// ========================================
// 12. LITERAL TYPES
// ========================================
let direction;
direction = "left";
const payment = "paid";
const studentData = {
    id: 1,
    name: "Arko",
    age: 23,
    grade: "A",
    subjects: ["Math", "English", "Programming"],
    isActive: true,
};
const employee = {
    name: "Arko",
    age: 23,
    employeeId: 101,
    salary: 50000,
};
// ========================================
// 15. TYPE ASSERTION
// ========================================
let someValue = "Hello TypeScript";
let stringLength = someValue.length;
// ========================================
// 16. TYPE NARROWING
// ========================================
function printValue(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
// ========================================
// 17. NULLABLE TYPES
// ========================================
let username = "Arko";
username = null;
// ========================================
// 18. OPTIONAL FUNCTION PARAMETERS
// ========================================
function createUser(name, email, age = 23) {
    console.log(name, email, age);
}
// ========================================
// 19. GENERIC TYPES
// ========================================
// Generic Function
function identity(value) {
    return value;
}
const result1 = identity("Arko");
const result2 = identity(100);
// Generic Array
function getFirst(items) {
    return items[0];
}
const firstNumber = getFirst([10, 20, 30]);
const firstName = getFirst(["Arko", "Rahim"]);
const response = {
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
export {};
//# sourceMappingURL=index.js.map