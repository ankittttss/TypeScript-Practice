// type originalType = [number,string,boolean]

// Uisng without a Type
// function reverseTuple<RType>(arr:RType[]){ // using challenge 1
//     const arrr:RType[] =   arr.reverse();
//     return arrr;
// }

// const arr = [42,'hello',true];
// const reversedTuple = reverseTuple(arr);
// console.log(reversedTuple);

// Using with a Type


function ReverseWithaType<RType>(array:RType[]){
   const answer = array.reverse();
   return answer;
}

// what about other cases ? if we have more than 3 data ?
const newarray = [42,'hello',true,"Ankit"];
const newanswer = ReverseWithaType(newarray);
console.log(newanswer)