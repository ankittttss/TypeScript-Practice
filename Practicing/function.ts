// import { title } from "process";

// function addNumber(a:number,b:number):number{
//     return a + b; 
// }

// export default addNumber;

// export const addStrings = (str1:string,str2:string=" "):string=>{
//     return str1 + str2;
// }

// //--------------------------------------------------------------- Union Type//

// export const formst = (title:string,param:string | number):string=>{
//     return title + param
// }

// //-------------------Void Functions//-----------------------

// export const func2 = (title:string,param:string|number):void=>{
//     console.log(formst("Hey","Hey"))
// }

// //---------------Promise Functions-----------------------//

// export const func = (url:string):Promise<string>=>{
//    return Promise.resolve(`Data from ${url}`)
// }

// console.log("hi");
// //


// function greater(fn:(a:string)=>void){
//    fn("Hello World");
// }


   

// function PrintToConsole(s:string){
//     console.log(s);
// }

// greater(PrintToConsole);/

type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
  };
  function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(6));
  }
   
  function myFunc(someArg: number) {
    return someArg > 3;
  }
  myFunc.description = "default description";
   
  doSomething(myFunc);


  // Generic Functions //
  // Using Multiple Generics//

  function Choose<Input,Output>(arr:Input[],fn:(arg:Input)=>Output):Output[]{
      return arr.map(fn)
  }

 const anss = Choose(['1','2','3','4'],(n)=>parseInt(n))
 

 //Good Ways to use Generics//

 function FirstElement<Type>(arg:Type[]){
    //
 }

 function firstElement2<Type extends any[]>(arg:Type){
   //
 }

 // Optional Parameters

 // Function Overloading//

 function makeDate(timestamp:number):Date;
 function makeDate(m:number,n:number,y:number):Date
 function makeDate(timestamp:number,n?:number):Date{
     return new Date()
 }
//---------------------