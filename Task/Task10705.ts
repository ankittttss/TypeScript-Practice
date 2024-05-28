// Using Generics//

type AnyObj = Record<string, any>;

function checkk(item: any): item is AnyObj{
  return item && typeof item === "object" && !Array.isArray(item);
}
function dmerge<T extends AnyObj, U extends AnyObj>(
  target: T,
  Source: U
): AnyObj  { 
  const output: AnyObj = { ...target }; // Shallow Copy
  if (checkk(target) && checkk(Source)) {
    for (const key in Source) {
      if (Source.hasOwnProperty(key)) {
        if (checkk(Source[key])) {
          if (!(key in target)) {
            output[key] = Source[key];
            // console.log(output[key])
          } else {
            output[key] = dmerge(target[key],Source[key])
            // console.log(output[key])
          }
        } else {
          output[key] = Source[key];
        //   console.log(Source[key])
        }
      }
    }
  }
  return output;
}
// Example usage:
const obj11 = { a: 1, b: { c: 2 } };
const obj2 = { b: { d: 3 }, e: 4 };

const merged = dmerge(obj11, obj2);
console.log(merged);

