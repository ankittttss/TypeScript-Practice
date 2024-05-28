type Reverse<T extends unknown[]> = 
    T extends [infer First, ...infer Rest] 
    ? [...Reverse<Rest>, First] 
    : [];

    type arrr = [number,string,boolean,number,number]

const reverseTuple = <T extends any[]>(...tuple: T): Reverse<T> =>
    tuple.reduceRight((acc, curr) => (acc.push(curr), acc), [] as unknown) as Reverse<T>;

// Test
const arr:arrr = [42, 'hello', true,44,48];
const arr2:[number,string,boolean,number,number] = [42,'hello',true,44,48];
const reversedTuple = reverseTuple(...arr);
const reversedTuple2 = reverseTuple(...arr)
