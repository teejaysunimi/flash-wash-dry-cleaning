import "./App.css"           
import Header from "./componets/common/heading/Head.jsx"
 import {BrowserRouter as Router, Switch, Routes, Route } from "react-router-dom";
import "./componets/common/header.css"
import Home from "./componets/common/home/hero/home.jsx";
import About from "./componets/About/About.jsx";


function App () {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/services" element={<Services />} /> */}

            </Routes>
      </Router>
        
    );  };
    export default App; 

  
        
        