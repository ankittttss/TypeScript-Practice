type threedcoordinate = [x:number,y:number,z:number];

function givethreedcoordinate(x1:threedcoordinate,x2:threedcoordinate):threedcoordinate{
      return [x1[0] + x2[0],x1[1] + x2[1],x1[2] + x2[2]];
}

console.log(givethreedcoordinate([1,2,3],[2,3,4,]));


function simpleStringState(initial:string):[()=>string,(v:string)=>void]{
    let str = initial;
    return[
        ()=>str,
        (v:string)=>{
            str = v;
        }
    ]
}

console.log(simpleStringState("ankit"))

const [stringsetter,h] = simpleStringState("hello");
stringsetter();
