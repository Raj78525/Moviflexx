import React from "react";

import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from "../page.js/home";
import About from "../page.js/about";
import Contact from "../page.js/contact";
function AppRoute(props) {
    return (
      <Router {...props}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          
            <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact/>}/>
        </Routes>
      </Router>
    );
  }
  export default AppRoute;