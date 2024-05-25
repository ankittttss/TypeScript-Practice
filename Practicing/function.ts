import { title } from "process";

function addNumber(a:number,b:number):number{
    return a + b; 
}

export default addNumber;

export const addStrings = (str1:string,str2:string=" "):string=>{
    return str1 + str2;
}

//--------------------------------------------------------------- Union Type//

export const formst = (title:string,param:string | number):string=>{
    return title + param
}

//-------------------Void Functions//-----------------------

export const func2 = (title:string,param:string|number):void=>{
    console.log(formst("Hey","Hey"))
}

//---------------Promise Functions-----------------------//

export const func = (url:string):Promise<string>=>{
   return Promise.resolve(`Data from ${url}`)
}

console.log("hi");