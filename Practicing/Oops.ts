class Car{ // Basic Class that have some getter and setter functions
    model:string;
    year:number;
    price:string;
    constructor(model:string,year:number,price:string){
      this.model = model;
      this.year = year;
      this.price = price
    } 

    drive(){
       console.log("DARIVER HAVE STARTED DRIVING");
    }

    stop(){
     console.log("STOP THE CAR")
    }
}

//The super keyword is used to reference a superclass’ properties in a subclass.

class Motor extends Car{
  color:string;
  constructor(model:string,year:number,price:string,color:string){
       super(model,year,price);
       this.color = color;
  }

}

const Hyundai = new Car("Hyundai",24,"234");


// Overriding and Extending Inherited Properties

class A{
    print(){
        console.log("I am This");
    }
}

class B extends A{
    print(){
        console.log("I am B")// Overrided The Function
    }
}

// Polymorphism in TypeScript
// Method Overloading and Method Overriding

class Ash{
    get(item:number,item2:number):void;
    get(item:string,item2:string):string;
    get(object1:any,object:any):any{
      return object1;
    }
}

class Animal {
    makeSound(): void {
        console.log('Animal makes a sound');
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log('Dog barks');
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log('Cat meows');
    }
}

const animals: Animal[] = [new Dog(), new Cat()];

for (const animal of animals) {
    animal.makeSound(); // Outputs: 'Dog barks', 'Cat meows'
}


const ashobject = new Ash();
console.log(ashobject.get(2,3));

