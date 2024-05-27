//Type Aliases
type Point={
 x:number,
 y:number
}

function PrintTheCoordinate(point1:Point,point2:Point):number{
   const x:number = ((point2.x - point1.x)/(point2.y - point1.y)); 
   return x;
}

PrintTheCoordinate({x:10,y:70},{x:90,y:90})