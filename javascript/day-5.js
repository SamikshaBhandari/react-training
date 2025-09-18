//login and signup page
const database=[{
    name:"samiksha",
    password:"1234456"
}
,{
   name:"nirjala",
   password:"nirjala43" 
}]
function user(name ,password){
    let isvaliduser=false;
    for (let i=0;i<database.length;i++){
        if(database[i].name===name && database[i].password===password){
            isvaliduser=true;
            break;
        }
    }
    if(isvaliduser){
        console.log("login successfull vayo.")
    }
    else{
        console.log("Invalid login");
    }
}
user("samiksha","")

















