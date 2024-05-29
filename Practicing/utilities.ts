// // interface Myuser{
// //     name:string,
// //     id:number,
// //     email?:string
// // }

// // interface MyuserOptionals{
// //     name?:string,
// //     id?:number,
// //     email?:string
// // }

// // function f(user:Myuser,overried:MyuserOptionals):Myuser{
// //       return{
// //         ...user,
// //         ...overried
// //       }
// // }

// // let obj1 = {
// //     name:"ankit",
// //     id:123
// // }

// // let obj2 = {
// //     name:"ankit"
// // }

// // console.log(f(obj1,obj2));

// // const user = {
// //     firstName: "Tony",
// //     lastName: "Stark",
// //     age: 54
// // }

//--------------------------------- Task -: 10708//
// function updateObject(user:object,key:string,value:string):object{
//      return {
//         ...user,
//         [key] : value
//      }
// }
// const obj = {a:1,b:"hello",c:true};
// const updated = updateObject(obj,'b',"world");
// console.log(updated)
//-------------------------------------Task -: 10704


// read about the generic,
/// imp....

//---------------------------Records-----------------------------------//

interface CatInfo{
    age:number,
    breed:string
}

// type CatName = "miffy"|"Margreita"|"Ravish"

// const Cat:Record<CatName,CatInfo> = {
//     miffy :{age:10,breed}
// }

//--------------Omit-----------------------------------------------------//

interface Todo{
    name:string;
    title:string;
    description:string;
    completed:boolean;
    createdAt:number
}

type TodoPreview = Omit<Todo,"name"|"title">

const todo: TodoPreview = {
    description:"dnfjd",
    completed: false,
    createdAt: 1615544252770,
  };