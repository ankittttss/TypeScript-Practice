interface cat{
    name:String,
    readonly breed:string
}


function takecat(name:string,breed:string):Readonly<cat>{
    return{
        name:name,
        breed:breed
    }
}


const jenny = takecat("hi","hi");
console.log(jenny)

// Make a readonly Array//
