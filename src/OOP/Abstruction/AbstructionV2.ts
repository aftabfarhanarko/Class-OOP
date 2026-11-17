abstract class Person {
  abstract payTax():void
}


class Author extends Person{
  private salary : number

  constructor(salary:number){
    super()
    this.salary = salary
  }

  payTax():void{
    const tax = this.salary * 0.01
    console.log("Author Provied Tax : ", tax);
    
  }

}

const a = new Author(50000)
a.payTax();