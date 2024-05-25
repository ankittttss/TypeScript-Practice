type originalType = [number,string,boolean]

// Uisng without a Type
function reverseTuple<RType>(arr:RType[]){ // using challenge 1
    const arrr:RType[] =   arr.reverse();
    return arrr;
}

const arr = [42,'hello',true];
const reversedTuple = reverseTuple(arr);
console.log(reversedTuple);

// Using with a Type


function ReverseWithaType<RType>(array:RType[]){
   const answer = array.reverse();
   return answer;
}

const newarray:originalType = [42,'hello',true];
const newanswer = ReverseWithaType(newarray);
console.log(newanswer)