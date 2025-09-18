import { useState } from "react";
import"./Register.css"

const Register=()=>{

    const [firstname,setFirstName]=useState('');
        const[lastname,setLastName]=useState("");
        const[faculty,setFaculty]=useState("");
        const[gender,setGender]=useState("");
        const[email,setEmail]=useState("");
       const handleSubmit=(event)=>{
        event.preventDefault();
        alert(` Register with:${firstname} ,lastname:${lastname}, Faculty:${faculty} , Gender:${gender} and Email:${email}`);
       };


    return(
        <>
        <div className="Main" >
        <div className="main-box">
        <div className="heading">
            <h1>Register Form</h1>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="name">
            <label>Name:</label><br></br>
            <input type="text" placeholder="First Name" required value={firstname} onChange={(e) =>setFirstName(e.target.value)}/>
            <input type="text" placeholder="Last Name" required value={lastname} onChange={(e) =>setLastName(e.target.value)}/>
        </div>
        <div className="faculty">
            <label>Faculty:</label>
            <input type="text"placeholder="Faculty"required value={faculty}onChange={(e)=>setFaculty(e.target.value)}/>
        </div>
        <div className="gender">
        <label>Gender:</label>
        <input type="radio" value="Male" checked={gender === "Male"} onChange={(e) => setGender(e.target.value)}/>Male
        <input type="radio" value="Female" checked={gender === "Female"} onChange={(e) => setGender(e.target.value)}/>Female
        <input type="radio" value="Others" checked={gender === "Others"} onChange={(e) => setGender(e.target.value)}/>Others
        </div>
        <div className="email-box">
        <label>Email:</label>
        <input type="email"placeholder="Email"required value={email}onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="sub">
            <button type="submit">Submit</button>
        </div>
        </form>
        </div>
        </div>
        </>
    );
};
export default Register;

