interface Inject {
  printForm(): void;
  dot(): void;
}

class InjectPrinter implements Inject {
  printForm(): void {
    console.log("Print Now");
  }

  dot(): void {
    console.log("Print Now Dot");
  }
}

class DottPrinter implements Inject {
  printForm(): void {
    console.log("Print Now");
  }

  dot(): void {
    console.log("Print Now Dot");
  }
}

// Polymorphism
function printdetlices(obj:Inject){
  obj.printForm();
  obj.dot();
}

