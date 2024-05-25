// Define the mapObject function
function mapObject(obj: { [key: string]:  any}, callback: (value: any) => any): { [key: string]: any } {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            let x  = obj[key];
            callback(x);
        }
    }
    return obj;
}

// Example usage
const originalObject = { a: 1, b: 2, c: 3 };
const mappedObject = mapObject(originalObject, (value) => value.toString());

console.log(mappedObject); // Output: { a: '1', b: '2', c: '3' }
