type Personn = {  // Type Aliases
    name:string,
    class:number,
    RollNo?:number // Optional
}

const object1 : Personn = {
   name:"Ankit",
   class:12
}


console.log(object1.name)

//Index Signature


interface Options {
    [key: string]: string | number | boolean; // Index Signature
    timeout: number;
  }

