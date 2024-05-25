// function transformKeys(user:object,change:object){
//    for(let x in user){
//      if(change.hasOwnProperty(x)){
//         x = change[x];
//      }
//    }
// }

// const user = {
//     firstName: "Tony",
//     lastName: "Stark",
//     age: 54
// }



type KeyMap = {
    [key: string]: string;
};

function transformKeys(obj: { [key: string]: any }, keyMap: KeyMap): { [key: string]: any } {
    const transformedObject: { [key: string]: any } = {};

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const newKey = keyMap[key] || key;
            transformedObject[newKey] = obj[key];
        }
    }

    return transformedObject;
}

// Example usage
const user = {
    firstName: "Tony",
    lastName: "Stark",
    age: 54,
};

const transformedUser = transformKeys(user, { firstName: 'first', lastName: 'last' });

console.log(transformedUser);
// Output: { first: 'Tony', last: 'Stark', age: 54 }
