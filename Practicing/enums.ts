//Enums in Typescript -: commonly used when you want to represent a set of related values and choose one 
//Values from multiple Values

//Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases.
//TypeScript provides both numeric and string-based enums.

//Numeric Enums //

enum Direction {
    Up, // 0
    Down // 1
}

enum Cars{
    Bentley=1,
    Swift
}

// String Enums 

enum Places{
    up = "UP",
    down = "DOWN",
    Left = "LEFT",
}

const data:number[]|string[] = [1,2,4];
const data2:(number|string|boolean)[] = [1,2]

let heck = (num:number|string):number|string=>{
     return 2;
}