import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function Drop() {
  return (
    <div className="d-flex justify-content-start mt-3 ps-3">
      <Dropdown>
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
    </div>
  );
}

export default Drop;
