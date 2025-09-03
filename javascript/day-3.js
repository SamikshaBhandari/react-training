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