interface Person {
  name: string;
  age: number;
  email: string;
}

interface Employ {
  userId: string;
  amount: number;
}

interface Student extends Person, Employ {
  // Inherits all fields from Person and Employ
}

class UniversityStudent implements Student {
  constructor(
    public name: string,
    public age: number,
    public email: string,
    public userId: string,
    public amount: number,
  ) {}
}

function printDetails(student: Student): void {
  console.log(`Name: ${student.name}`);
  console.log(`Age: ${student.age}`);
  console.log(`Email: ${student.email}`);
  console.log(`User ID: ${student.userId}`);
  console.log(`Amount: ${student.amount}`);
}

const student = new UniversityStudent(
  "Amina",
  20,
  "amina@example.com",
  "STU-101",
  5000,
);

printDetails(student);
