import { useState } from "react";

const Counter=()=>{
    const [counter,setCounter]=useState(3);
    const handleIncrement=()=>{
        setCounter(counter+1);
    }
    const handleDecrement=()=>{
        setCounter(counter-1);
    }
    return(
        <div>
            <h1>Counter:{counter}</h1>
            <div>
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
            </div>
        </div>
    )
}
export default Counter;