class Animal {
  spek() {
    console.log("Animal Spek");
  }
}
class Dog extends Animal{
  spek(){
    console.log("Dog Spaking");
    
  }
}


class Cat extends Animal{
  spek(){
    console.log("Cat Spaking");
    
  }
}


function taking(animal:Animal){
  animal.spek();
}

const d = new Dog()
const c = new Cat()

taking(d);
taking(c);
