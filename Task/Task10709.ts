
type DefineProperties<T> = {
 [K in keyof T ]-?:T[K]|null
}

interface User {
    agee:number,
    numberr:string
}
interface User2 {
    namee?: string ;
    age: undefined | number;
    addresss?: {
        street?: string;
        city?: string;
        data?:{
            p: string
        }
    }
}


function check<T>(obj:T){
  return typeof obj ==='object' && !Array.isArray(obj);
}

type DefineProperties2<T> = {
    [K in keyof T]-?:T[K] extends object?T[K]|null:T[K]|null;
}


/// fix it

type DefinedUser1 = DefineProperties<User>
type DefinedUser4 = DefineProperties2<User2>


