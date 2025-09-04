const student={
    name:"Samiksha",
    age:20,
    isStudent:true,
}
console.log(student);
student.age=student.age+1;
console.log(student);


let arr=[1,2,3];
console.log(arr[1]);

let [first , second , third]=arr;
console.log(second);
console.log(first);
console.log(third);

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);


const user={
    name:"Samiksha",
    email:"samikshyabhandari592@gmail.com",
    password:"samiksha",
    userImage:"photo.jpg",
    createdAT:"2070-7-09",
    updatedAt:"2080-3-06",
}
const login=(email,password)=>{
    if(email===user.email && password===user.password){
        return{message:"login successfull"};
    }
    else{
        return{message:"login error"};
    }
}
const result=login("samikshyabhandari592@gmail.com","samiksha");
console.log(result.message);