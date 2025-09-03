function functionName(){
    console.log("function is called");
}
functionName();
//function practice.


const Friend=[
    {name:"Samiksha", age:20,address:"Itahari"},
{name:"Nirjala",age:20,address:"Itahari",} 
];
for(let k of Friend){
   console.log("hamro aako data funstion bata  ",detail(k))
}
function detail(kaidata){
    return`mero sathi ko nam ${kaidata.name} ${kaidata.age}`
}

//length
// let arr=["Name","address"];
// let arraylength=arr.length;
// console.log(arraylength);
// //console.log(arr.pop());
// //console.log(arr);
// //console.log(arr.push("Phone"));
// //console.log(arr.at(-1));
// //console.log(arr.shift());
// //console.log(arr.unshift("age"));
// //console.log(arr.slice(1,2));
// console.log(arr.splice(1,2,"country","login"));
// console.log(arr);

const zoo=["Dog","Donkey","Ishan","Bipin","Ruksan"];
let zoolength=zoo.length;
console.log(zoo.length);
console.log(zoo.push("Goat"));
console.log(zoo.pop());
console.log(zoo.shift());
console.log(zoo.unshift("Dog"));
console.log(zoo);
