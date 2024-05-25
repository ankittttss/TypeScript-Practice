
// function updateObject(user:object,key:string,value:string):object{
//      return {
//         ...user,
//         [key] : value
//      }
// }
// const obj = {a:1,b:"hello",c:true};
// const updated = updateObject(obj,'b',"world");
// console.log(updated)

function upateeObject<T,K extends keyof T>(user:T,key:K,value:T[K]):T{
   return {
     ...user,
     [key]:value
   }
}

const obj1 = {a:1,b:"hello",c:true};
const updated1 = upateeObject(obj1,'b',"world");
console.log(updated1)