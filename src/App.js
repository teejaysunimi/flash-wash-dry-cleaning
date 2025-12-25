import "./App.css"           
import Header from "./componets/common/heading/Head.jsx"
 import {BrowserRouter as Router, Switch, Routes, Route } from "react-router-dom";
import "./componets/common/header.css"
import Home from "./componets/common/home/hero/home.jsx";
import About from "./componets/About/About.jsx";
import Image from "./componets/pic3.jpg"



function App () {
    return (
      <Router>
        {/* General wrapper */}
        <div className="bg-wrapper">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />   
          </Routes>
        </div>
        <About/>
      </Router>
     
    );  
}
    export default App; 

  
        
        