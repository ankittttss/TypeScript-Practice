function simpleState<T>(initial:T):[()=>T,(v:T)=>void]{
    let str = initial;
    return[
        ()=>str,
        (v:T)=>{
            str = v;
        }
    ]
}

const [st1getter,st1setter] = simpleState("HelloWorld");
console.log(st1getter())
st1setter("Heya");
console.log(st1getter())

const [st2getter,st2setter] = simpleState<number|string>(1);
console.log(st2getter())
st2setter(10);
console.log(st2getter())


//--------------Example//

function ranker<RankItem>(items:RankItem[],rank:(v:RankItem)=>number):RankItem[]{
         const ranks = items.map((item)=>({
            item,
            rank:rank(item)
         }))

         ranks.sort((a,b)=>a.rank-b.rank);
         return ranks.map((rank)=>rank.item)
}
