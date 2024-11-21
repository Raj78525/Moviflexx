import { useState } from "react";
 function Randomnum(){
    const[num,setNum]=useState(0);
    const[sec,setSec]=useState(1);
    const handleChange=()=>{
        const x=( parseInt  (Math.random()*10));
        const y= ( parseInt  (Math.random()*10));
        
       ( setNum(x));
        parseInt (setSec(y));
    }
    return(
        <>
        <h1>{num}</h1>
        <h1>{sec}</h1>
      { num===sec ?
       (<p  style={{color:"green"}}>pass</p>):
       (<p style={{color :"red"}}> fail</p>)
    }
    
 
 
        <button onClick={handleChange}>plese fuck me</button>
        </>
    );

}
export default Randomnum;