import "./App.css"           
import Header from "./componets/common/heading/Head.jsx"
 import {BrowserRouter as Router, Switch, Routes, Route } from "react-router-dom";
import "./componets/common/header.css"
import Home from "./componets/common/home/hero/home.jsx";
import About from "./componets/About/About.jsx";
import Image from "./componets/pic3.jpg"
import AuthModal from "./componets/Auth/AuthModal.jsx";
import { useState } from "react"; 
function App() {
   const [showAuth, setShowAuth] = useState(false);

    return (
      <Router>
        {/* General wrapper */}
        <div className="bg-wrapper">
          <Header onAuthOpen={() => setShowAuth(true)} />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <About onAuthOpen={() => setShowAuth(true)} />
        <AuthModal show={showAuth} onClose={() => setShowAuth(false)} />
      </Router>
    );  
}
    export default App; 

  
        
        