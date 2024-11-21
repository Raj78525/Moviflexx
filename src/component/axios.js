import axios from 'axios';
import {useState} from 'react'

function Axios(){
    const[apiData , setApiData]=useState("");
    const[repoData,setRepoData]=useState([])
    // const BASE_URL = "https://api.github.com/users";        
       async function Getdata(){
    const Data= await axios.get("https://api.github.com/users/krishnay22");
    console.log(Data);
    setApiData(Data.data);
    }
     async function Data() {
        const boom=await axios.get("https://api.github.com/users/krishnay22/repos")
        console.log(boom)
        setRepoData(boom.data)
     }

    return(
        <div>
            <button onClick={Getdata}>click me</button>
            <h1>{apiData.name}</h1>
            <h2>{apiData.id}</h2>
            <img src={apiData.avatar_url}></img>
            <button onClick={Data}> click for repo</button>
            <h1>{repoData.name}</h1>
          <p> {  
               repoData.map((d)=>{
                return (<h1>{d.name}</h1>)
              }
                
            )

           }</p>
        </div>
    );

}
export default Axios;