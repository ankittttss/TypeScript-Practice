// // Using Generics//

// type AnyObj = Record<string, any>;

// function checkk(item: any): item is AnyObj{
//   return item && typeof item === "object" && !Array.isArray(item);
// }
// function dmerge<T extends AnyObj, U extends AnyObj>(
//   target: T,
//   Source: U
// ): T|U  { 
//   const output: AnyObj = { ...target }; // Shallow Copy
//   if (checkk(target) && checkk(Source)) {
//     for (const key in Source) {
//       if (Source.hasOwnProperty(key)) {
//         if (checkk(Source[key])) {
//           if (!(key in target)) {
//             output[key] = Source[key];
//             // console.log(output[key])
//           } else {
//             output[key] = dmerge(target[key],Source[key])
//             // console.log(output[key])
//           }
//         } else {
//           output[key] = Source[key];
//         //   console.log(Source[key])
//         }
//       }
//     }
//   }
//   return output as T|U;
// }
// Example usage:

export {}
function CheckIsObject<T>(item:T):boolean{
  return !Array.isArray(item) && typeof item!='object' && item!=null
}

function MergeTheObject<T extends Record<string,any>,U extends Record<string,any>>(object1:T,object2:U):{key:string[]}{
     const temp:T ={...object1};
     for(const x in object2){
      if(CheckIsObject(object1) && CheckIsObject(object2)){
        if(temp.hasOwnProperty(x)){
            MergeTheObject(temp[x],object2[x])
        }
        else{
          temp[x] = object2[x]
        }
     }

     else{
      temp[x] = object2[x]
     }
    }

    return temp as Record<string,any>;
}


const obj11 = { a: 1, b: { c: 2 } };
const obj2 = { b: { d: 3 }, e: 4 };

const merged = MergeTheObject(obj11, obj2);
console.log(merged);

