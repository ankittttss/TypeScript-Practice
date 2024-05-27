type h = { [key: string]: number };

function mapObject<T extends h, U>(obj: T, callback: (value: T[keyof T]) => U): { [K in keyof T]: U } {
    const result = {} as { [K in keyof T]: U };
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            result[key] = callback(value);
        }
    }
    return result;
}

// Example usage
const originalObject = { a: 1, b: 2, c: 3 };
const mappedObject = mapObject(originalObject, (value) => value.toString());

console.log(mappedObject); // { a: "1", b: "2", c: "3" }
