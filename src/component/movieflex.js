import axios from 'axios';
import {useState} from 'react'

function Movieflex(){
    const[movieData,setMovieData]=useState([]);
    async function Getdata() {
        const Data=await axios.get("https://omdbapi.com/?apikey=4e9e8ed7&s=series");
        console.log (Data);
        setMovieData(Data.data.Search)
    }

    return(<div>
        <button onClick={Getdata}> about movie</button>
        <button onClick={Getdata}> about movie</button>
        {movieData.map((m)=>{
            return(<div>
                <h1>{m.Title}</h1>
                <img src={m.Poster}></img>
                </div>

            )
        })}
        
                       
                        
                   
               
                
        
    </div>
    );
} export default Movieflex;