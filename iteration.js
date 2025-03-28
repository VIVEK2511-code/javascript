
let  salesdata=[{product:"laptop",price:5000},
    {product:"smartphone",price:10000},
    {product:"headphone",price:1500},
    {product:"macbook",price:100000}
]


//let initial=0
let totalsale=salesdata.reduce((acc,sale)=>acc+sale,0)
console.log(totalsale)

//low stock item(lesss than 50)

let inventory=[{name:"widget A",stock:30},
    {name:"widget B",stock:120},
    {name:"widget c",stock:45},
    {name:"widget d",stock:70}

]
// let lowstockitem=inventory.filter((item)=>item.stock<50)
// console.log(lowstockitem)

let lowstock=inventory.filter((item)=>{
    return item.stock<50
});
console.log(lowstock)

//find most active user
let useractivity=[{user:"Alice",activitycount:45},
    {user:"bob",activitycount:72},
    {user:"charlie",activitycount:33}
]
//using loop
let maxcount=0;
for(let i=0;i<useractivity.length;i++){
    if(useractivity[i].activitycount > maxcount){
        maxcount=useractivity[i].activitycount;
    }
}
console.log(maxcount)

//using function reduce
let mostactive=useractivity.reduce((maxuser,user)=>
    user.activitycount>maxuser.activitycount ?user:maxuser
)
console.log(mostactive)
