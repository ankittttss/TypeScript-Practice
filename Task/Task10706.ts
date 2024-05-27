const add = (a:number,b:number):number=>{
  return a+b
}


// Logger wrapper function specifically for functions that take two numbers and return a number/make seprated type
// 
const loggerWrapper = (fn: (a: number, b: number) => number): ((a: number, b: number) => number) => {
    return (a: number, b: number): number => {
        console.log(`Calling function ${fn.name} with arguments: ${a}, ${b}`);
        return fn(a, b);
    };
};



const loggedAdd = loggerWrapper(add);
const value = loggedAdd(3,5)

// Original function to be wrapped
// const add = (a: number, b: number): number => a + b;

// // Logger wrapper function
// const loggerWrapper = <T extends (...args: any[]) => any>(fn: T): T => {
//     return ((...args: Parameters<T>): ReturnType<T> => {
//         console.log(`Calling function ${fn.name} with arguments: ${args.join(', ')}`);
//         return fn(...args);
//     }) as T;
// };

// // Wrapping the add function
// const loggedAdd = loggerWrapper(add);

// // Calling the wrapped function
// const value = loggedAdd(3, 5);
// console.log(value); // Should log: "Calling function add with arguments: 3, 5" and then output 8
