// we will be dealing with optional parameters/

function printIngredient(
  quantity: string,
  price: string,
  extra?: string
): void {
  console.log(`${quantity} + ${price} + ${extra ? `${extra}` : ""}`);
}

printIngredient("20", "40");
printIngredient("a", "b", "c");

interface User {
  id: string;
  namee: string;
  info?: {
    email?: string;
  };
}

function getEmail(user: User): string { // A very Complex Way to handle this
  if (user.info) {
    if (user.info.email != undefined) {
      return user.info.email;
    } else {
      return "";
    }
  } else {
    return "";
  }
}

function getEmaileasy(user:User){
  return user?.info?.email ?? "";
} 

// We will be dealing with optional Callback//

function get(x:string,y:string,callback?:()=>void){
    console.log(x,y)
}
