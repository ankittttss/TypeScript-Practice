type DefinedProperties<T> = {
    [K in keyof T]-?:Exclude<T[K],null|undefined>
}


interface User{
    name?:string|null,
    age:undefined|number
}




type DefineddProperties<T> = {
    [K in keyof T]-?: T[K] extends object
        ? DefinedProperties<Exclude<T[K], null | undefined>>
        : Exclude<T[K], null | undefined>;
};




interface User2 {
    name?: string | null;
    age: undefined | number;
    address?: {
        street?: string | null;
        city?: string | null;
    } | null;
}

type DefinedUser = DefineddProperties<User2>;

/// what about nested ?
type answer = DefinedProperties<User>;