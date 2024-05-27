// type AnyObject = Record<string, any>;

// function isObject(item: any): item is AnyObject {
//   return item && typeof item === 'object' && !Array.isArray(item);
// }

// function deepMerge(target: any, ...sources: any[]): any {
//     if (!sources.length) return target;
//     const source = sources.shift();
//     // console.log(source)

//     if (isObject(target) && isObject(source)) {
//         for (const key in source) {
//             if (isObject(source[key])) {
//                 if (!target[key]) Object.assign(target, { [key]: {} });
//                 deepMerge(target[key], source[key]);
//             } else {
//                 Object.assign(target, { [key]: source[key] });
//             }
//         }
//     }
//     return deepMerge(target, ...sources);
// }

// Using Generics//

type AnyObj = Record<string, any>;

// function checkk(item: any): item is AnyObj{
//   return item && typeof item === "object" && !Array.isArray(item);
// }

// function dmerge<T extends AnyObj, U extends AnyObj>(
//   target: T,
//   Source: U
// ) {  // intersection of both objects
//   const output: T & U = { ...target }; // Shallow Copy
//   if (checkk(target) && checkk(Source)) { // to check whether both are objects
//     for (const key in Source) {
//       if (Source.hasOwnProperty(key)) {
//         if (check(Source[key])) {
//           if (!(key in target)) {
//             output[key] = Source[key];
//             // console.log(output[key])
//           } else {
//             output[key] = dmerge(target[key],Source[key]);
//             // console.log(output[key])
//           }
//         } else {
//           output[key] = Source[key];
//         //   console.log(Source[key])
//         }
//       }
//     }
//   }
//   return output ;
// }

// Example usage:
const obj11 = { a: 1, b: { c: 2 } };
const obj2 = { b: { d: 3 }, e: 4 };

// const merged = dmerge(obj11, obj2);
// console.log(merged);
