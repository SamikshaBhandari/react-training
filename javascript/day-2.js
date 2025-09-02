let a=20;
let b=10;
console.log(a % b);

const data1="samiksha";
const data2="samiksha";
console.log(data1===data2);

const num1=30;
const num2=40;
console.log(num1>num2);
console.log(num1<num2);
console.log(num1>=num2);
console.log(num1<=num2);

//logical operation(AND)
age=17;
let value=age>=18&&age<=80;
console.log(`CAn you drive a car? ${value}`);

//OR operation
let isLoggedIn=true;
let hasPermission=false;
let hasPermissionToEdit=true;
console.log(isLoggedIn);
console.log(hasPermission);
console.log(hasPermissionToEdit);
console.log(`can you edit article? ${isLoggedIn&&hasPermission&&hasPermissionToEdit}`);
console.log(`can you read article? ${isLoggedIn|| hasPermission||hasPermissionToEdit}`);

let firstName="Samiksha";
console.log(firstName.length);

let invest=10000;
let profit=4000;
let loss=2000;
if(profit<loss){
console.log("you are in loss");
}
else{
    console.log("you are in profit");
}
if(invest<loss){
    console.log("you are in loss");
}
else if(profit<loss){
console.log("you are in partial loss");
}
else{
    console.log("you are in profit");
}


age=18;
if(age<18){
    console.log("You are to young you cannot drive.");
}
else if(age>80){
    console.log("you are to old.");
}
else{
    console.log("you can drive");
}

function sumData(age,gender,address){
   console.log("Function is called");
   console.log(`Gender is ${gender}`);
   console.log(`Address is ${address}`);
    console.log(`your age is ${age}`);
if(age>=18&&age<=80){
    console.log("you can drive");
}
else{
    console.log("you cannot drive");
}
}
sumData(80,"female","itahari-2");

function add(num1,num2){
    return num1+num2;
}
let result=add(6,7)
let result2=result+7;
console.log(result2);

