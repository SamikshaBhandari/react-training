import Button from "../component/Button";
import{useState}from "react";

const Subscribe=()=>{
    const[email,setEmail]=useState("");
    const [isLoading,setIsLoading]=useState(false);
}
const handleInputChange=(e)=>{
    setEmail(e.target.value);
    console.log(e.target.value);
}

const 


let data=["hello","World"];
const [first,second]=data;
return(
    <div>
        
<button
    onClick={handleSubmit}
    style={{padding:"10px 20px",backgroundcolor:"black",color:"white"}}>Subscribe
    </button>
    </div>
)

    // const Subscribe=()=>{
    // const[email,setEmail]=useState["123"];
    // const handleInputChange=(e)=>{
    //     setEmail(e.target.value);
    //     console.log("e",e);
    // }
//     return(
//        <form>
//         <input
//         onChange={handleInputChange}
//         value={email}
//         type="email"placeholder="Enter your email"
//         />
//         <button type="submit">Subscribe</button>
//        </form> 
//     )
// }
export default Subscribe;
