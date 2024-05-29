
// // function updateObject(user:object,key:string,value:string):object{
// //      return {
// //         ...user,
// //         [key] : value
// //      }
// // }
// // const obj = {a:1,b:"hello",c:true};
// // const updated = updateObject(obj,'b',"world");
// // console.log(updated)
// function upateeObject<T extends Record<string,any>,K extends keyof T>(obj:T,key:K,value:string):Record<string,any>{
//     if(obj.hasOwnProperty(key)){
//       const { [key]: oldValue, ...rest } = obj;
//       // Add the new key with the value from the old key
//       return { [value]: oldValue,...rest };
//     }
//     return obj
// }

// const obj1 = {a:1,b:"hello",c:true};
// // not
// const updated1 = upateeObject(obj1,'b',"world");
// console.log(updated1)

const userrr = {
  fname:"ankit",
  lname:"saini",
  age:54,
  addres:{
    city:"panipat",
    pincode:132103
  }
}

