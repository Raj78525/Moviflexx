import { useState } from "react";
 function Num(){
    const [digit,setDigit]=useState(0)
      function handleChange(){
        setDigit(digit+1);
      }
    return(
        <div>
            <h1>{digit}</h1>
          <button onClick={handleChange}> click me</button>
        </div>
        
    );

 }
 export default Num;