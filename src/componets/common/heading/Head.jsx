import { click } from '@testing-library/user-event/dist/click';
import React, { useState } from 'react'
import { Link , useNavigate, useLocation } from 'react-router-dom'
import AuthModal from '../../Auth/AuthModal';   


  const Navbar = () => {
    const [click, setClick] = useState(false);
    const [showAuthModal, setShowAuthModal] = useState(false);   
    const [authMode, setAuthMode] = useState("login");
        const navigate = useNavigate();

    const location = useLocation();


         const scrollToServices = (e) => {

       e.preventDefault();

       setClick(false);

       if (location.pathname !== "/") {

         navigate("/");

         setTimeout(() => {

           document.getElementById("About")?.scrollIntoView({ behavior: "smooth" });

         }, 100);

       } else {

         document.getElementById("About")?.scrollIntoView({ behavior: "smooth" });

       }

     };





     const handleSchedulePickup = () => {
       setAuthMode("login");
       setShowAuthModal(true);
     };

     const closeModal = () => {
       setShowAuthModal(false);
     };
  
  return (
    <>
      <section className="head">
        <div className="container">
          <div className="logo">
            <h1>FLASHWASH</h1>
          </div>
          <nav className="navbar">
            {/* Hamburger button  */}
            <div className="nav-menu-icon" onClick={() => setClick(!click)}>
              {" "}
              <i class="fa-solid fa-bars"></i>
            </div>
            <ul className={click ? "nav-links active" : "nav-links"}>
              <li>
                <Link to="/">Home</Link>
              </li>
               <li>
                <a href="#About" onClick={scrollToServices}>About</a>
              </li>
          
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>

              <li>
                <button onClick={handleSchedulePickup} className="nav-btn">
                  Schedule A Pickup
                  <span>
                    <i class="fa-solid fa-arrow-right"></i>
                  </span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <AuthModal
        isOpen={showAuthModal}
        onClose={closeModal}
        initialMode={authMode}
      />
    </>
  );
}

export default Navbar