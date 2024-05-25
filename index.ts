let username: string = "Ankit";
let bool: boolean = true;

username = username + true; // // 'true' is coerced to 'true', so username becomes 'Ankittrue'
console.log(username);

const char = username.split(" ");
console.log(Array.isArray(char));

const newArray: Array<Number> = [];
newArray.push(1);

console.log(newArray);


//For code reusabilty we use Interface. We will define it once and use it multiple times

interface Person{
    first:string,
    second:string;
}

const myPerson :Person = {
    first: "ankit",
    second: "saini",
  };

// Dealing with key Value Pair

const ids:Record<number,string>={
      10:'c',
      20:'b'
}

for(let i=0;i<10;i++){
    console.log(i);
}
const ans : number[]=[1,2,3,4].map((item)=>item*2);
console.log(ans)
