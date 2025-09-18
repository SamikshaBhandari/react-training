// const student={
//     name:"Samiksha",
//     age:20,
//     isStudent:true,
// }
// console.log(student);
// student.age=student.age+1;
// console.log(student);


// let arr=[1,2,3];
// console.log(arr[1]);

// let [first , second , third]=arr;
// console.log(second);
// console.log(first);
// console.log(third);

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);


// const user={
//     name:"Samiksha",
//     email:"samikshyabhandari592@gmail.com",
//     password:"samiksha",
//     userImage:"photo.jpg",
//     createdAT:"2070-7-09",
//     updatedAt:"2080-3-06",
// }
// const login=(email,password)=>{
//     if(email===user.email && password===user.password){
//         return{message:"login successfull"};
//     }
//     else{
//         return{message:"login error"};
//     }
// }
// const result=login("samikshyabhandari592@gmail.com","samiksha");
// console.log(result.message);

//sign up page

const userdata={
    name:"",
    email:"",
    password:"",
    userImage:"",
    createdAt:"",
    updatedAt:"",
}
const signup=(name,email,password,userImage)=>{
userdata.name=name;
userdata.email=email;
userdata.password=password; 
userdata.userImage=userImage;
userdata.createdAt=new Date().toISOString();
userdata.updatedAt=new Date().toISOString();
return{message:"Signup successfully.",data:userdata}
}
let result=signup("Samiksha","samikshabhandari@gmail.com","7836457","photo.jpg");
console.log(result.message);
console.log(result.data);


