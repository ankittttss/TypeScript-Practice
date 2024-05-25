export function printTofile(text:string,callback:()=>void):void{
   console.log(text);
   callback()
}

type Mutate = (v:number)=>number

export function arrayMutate(numbers:number[],mutate:Mutate):number[]{
  return numbers.map(mutate)
}
console.log(arrayMutate([1,2,3],(v)=>(v*10)));