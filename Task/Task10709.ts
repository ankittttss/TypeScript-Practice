// export {}
// type DefineProperties<T> = {
//  [K in keyof T ]-?:T[K]|null
// }

// interface User {
//     agee:number,
//     numberr:string
// // }
// interface User2 {
//     namee?: string ;
//     age: undefined | number;
//     addresss?: {
//         street?: string;
//         city?: string;
//         data?:{
//             p: string
//         }
//     }
// }


// function check<T>(obj:T){
//   return typeof obj ==='object' && !Array.isArray(obj);
// }



// Example usage
interface User {
    agee: number;
    namee: string;
    address: {
        street: string;
        city: string;
        data:{
            cityy:string
        }
    };
}

type NullableProperties<T> = {
    [K in keyof T]: NullableProperties<T[K]>|null
};

// NullableUser should be { age: number | null; name: string | null; address: { street: string | null; city: string | null; } | null; }



/// fix it

// type DefinedUser1 = DefineProperties<User>
type DefinedUser4 = NullableProperties<User>


