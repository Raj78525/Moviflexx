import axios from 'axios';
import {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';

// import Modal from 'react-bootstrap/Modal'
function Movieflexxx(){
    const[movieData,setMovieData]=useState([]);
    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
  
    async function Getdata() {
        const Data=await axios.get("https://omdbapi.com/?apikey=4e9e8ed7&s=series");
        console.log (Data);
        setMovieData(Data.data.Search)
    } 
    // use state use here for (becausse of function will call by default we dont be need of any botton key) so we are use  useeffect
    useEffect(()=>{
        Getdata()
        console.log("heyy")
    })
    //the inline css use here  for desine the background off container
    const containerStyle = {
        backgroundImage: "url('https://raw.githubusercontent.com/othneildrew/othneildrew.github.io/master/images/projects/movie-flex.jpg')", // Replace with your image URL
        backgroundSize: "cover", // Ensures the image covers the entire container
        backgroundPosition: "center", // Center the background image
        backgroundRepeat: "no-repeat", // Prevents the image from repeating
        minHeight: "100vh", // Ensures the container takes up the full viewport height
        padding: "20px", // Adds padding inside the container
    };
    return(
        
    // <>
    //  <Container className="mt-4">
    //     <Row className="g-4">
    //         {/* <button onClick={Getdata}> about movie</button> */}
    //         { movieData.map((m)=>(
    //              
    //                 <Col  xs={12} sm={6} md={4} lg={3}>
    //         <Card style={{ width: '18rem' }}>
    //         <Card.Img variant="top" src={m.Poster} />
    //         <Card.Body>
    //             <Card.Title>{m.Title}</Card.Title>
    //             <Card.Text>
                
    //             </Card.Text>
    //             <Button variant="primary" onClick={Getdata}>Go somewhere</Button>
    //         </Card.Body>
    //         </Card>
    //         </Col>
           
    //       </>
       

    //     ))  }
          
         

    //     </Row>

    // </Container>
    // </>
    <>
 <div style={containerStyle}>
    <Container className="mt-4" style={{backgroundImage:"https://wallpapercave.com/wp/wp5063348.jpg"}}>
        <Row className="g-4">
            {movieData.map((m) => (
                <Col  xs={12} sm={6} md={4} lg={3}>
                    <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={m.Poster} alt={m.Title} />
                        <Card.Body>
                            <Card.Title>{m.Title}</Card.Title>
                            <Card.Text>
                                <strong>Year:</strong> {m.Year}
                                <br />
                                <strong>Type:</strong> {m.Type}
                            </Card.Text>
                            <Button variant="primary">Learn More</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </Container>
    </div> 
</>
);
      
    
} export default Movieflexxx;