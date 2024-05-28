// type UserDefinition = {
//     firstName: string;
//     lastName: string;
//     age: number;
// };

function transformKeys<T extends Record<string, any>, U extends Record<string, string>>(obj: T, obj2: U): T {
    const transformedObject = {} as any;

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const newKey = obj2[key] || key;
            transformedObject[newKey] = obj[key];
        }
    }

    return transformedObject ;
}

// Example usage
const user = {
    firstName: "Tony",
    lastName: "Stark",
    age: 54,
};

const transformedUser = transformKeys(user, { firstName: 'first', lastName: 'last' });
console.log(transformedUser);
