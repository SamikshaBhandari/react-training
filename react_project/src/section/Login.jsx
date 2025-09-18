import {useState} from 'react' 

const Login=()=>{
   const [email,setEmail]=useState('');
    const[password,setPassword]=useState("");
   const handleSubmit=(event)=>{
    event.preventDefault();
    alert(` Logging in with Email:${email} and password:${password}`);
   };
    return(
        <>
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
            <label>Email:</label><br></br>
            <input type="email"placeholder=" Enter your email"required value={email}onChange={(e)=>setEmail(e.target.value)}/><br></br>
            <label>Password:</label><br></br>
            <input type='password'placeholder='Enter your password'required value={password}onChange={(e)=>setPassword(e.target.value)}/><br></br>
            <button type="submit">Login</button>
        </form>
        </>
    )
}
export default Login;