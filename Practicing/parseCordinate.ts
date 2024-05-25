//Creating an interface 

interface coordinate{
    x:number,
    y:number
}

function parsecoordinate(obj:coordinate):coordinate;
function parsecoordinate(x:number,y:number):coordinate;
//---------------------------function Overloading//

function parsecoordinate(arg1:unknown,arg2?:unknown):coordinate{
    let coord:coordinate={
        x:0,
        y:0,
    };

    if(typeof arg1 === 'object'){
        coord = {
            ...(arg1 as coordinate)
        }
    }
    else{
        coord = {
             x:arg1 as number,
             y:arg2 as number
        }
    }
    return coord
}

console.log(parsecoordinate(10,20))


let ansss:any[] = [];

ansss.push("ankit");
ansss.push(10);
ansss.push({x:10})

console.log(ansss)