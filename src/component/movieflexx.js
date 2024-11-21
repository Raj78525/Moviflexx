import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';



function Movieflexx() {
  const [movieData, setMovieData] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');


  const handleClose = () => setShow(false);
  const handleShow = (movie) => {
    setSelectedMovie(movie);
    setShow(true);
  };

  async function Getdata() {
    const Data = await axios.get("https://omdbapi.com/?apikey=4e9e8ed7&s=series");
    console.log(Data);
    setMovieData(Data.data.Search);
  }

  useEffect(() => {
    Getdata();
    console.log("heyy");
  }, []);

  const containerStyle = {
    backgroundImage: "url('https://raw.githubusercontent.com/othneildrew/othneildrew.github.io/master/images/projects/movie-flex.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    padding: "20px",
  };
  

  return (
    <>
      <div style={containerStyle}>
      <Dropdown className="d-flex justify-content-start mt-3 ps-3">
        <Dropdown.Toggle variant="success" id="dropdown-basic" style={{color:"white" , backgroundColor:"blueviolet"}}>
          year
        </Dropdown.Toggle>

        <Dropdown.Menu style={{color:"green"}}>
          <Dropdown.Item href="#/action-1">2002</Dropdown.Item>
          <Dropdown.Item href="#/action-2">2003</Dropdown.Item>
          <Dropdown.Item href="#/action-3">2004</Dropdown.Item>
          <Dropdown.Item href="#/action-3">2005</Dropdown.Item>
          <Dropdown.Item href="#/action-3">2006</Dropdown.Item>
          <Dropdown.Item href="#/action-3">2007</Dropdown.Item>
          <Dropdown.Item href="#/action-3">2008</Dropdown.Item>
          <Dropdown.Item href="#/action-3">2009</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
              <Form.Control
                type="search"
                placeholder="Enter Movie Name"
                className="me-2"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}  />
              <Button variant="outline-primary" onClick={Getdata} style={{ marginRight: "10px",color:"white",backgroundColor:"blueviolet" }}>Search</Button> 
              <Button variant="outline-success" onClick={handleShow}>Login</Button>
            </Form>
        <Container className="mt-4">
        

          <Row className="g-4">
            {movieData.map((m) => (
              <Col xs={12} sm={6} md={4} lg={3} key={m.imdbID}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={m.Poster} alt={m.Title} />
                  <Card.Body>
                    {/* <Card.Title>{m.Title}</Card.Title> */}
                    {/* <Card.Text>
                      <strong>Year:</strong> {m.Year}
                      <br />
                      <strong>Type:</strong> {m.Type}
                    </Card.Text> */}
                    <Button variant="primary" onClick={() => handleShow(m)}>
                     movie deatil
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

    {/* this is the model for movie deatil */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedMovie?.Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p
            // src={selectedMovie?.Poster}
            alt={selectedMovie?.Title}
            style={{ width: "100%", marginBottom: "15px" }}
          />
          <p><strong>Year:</strong> {selectedMovie?.Year}</p>
          <p><strong>Type:</strong> {selectedMovie?.Type}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Movieflexx;
