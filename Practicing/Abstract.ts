abstract class Animall{
    name:string;
    constructor(name:string){
      this.name = name;
    }

    Dog(){
     console.log("Woof Woof");
    }
}

class Dogg extends Animall{
    Dog(){
        console.log("Woof Woof");
    }
} 