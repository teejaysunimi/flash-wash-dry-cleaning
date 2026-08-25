import { click } from '@testing-library/user-event/dist/click';
import React, { useState } from 'react'
import './About.css'
import Image from "../common/images/OP.jpg";
import Image1 from "../common/images/bg2.jpg";
import Image2 from "../common/images/bg1.jpg";
import Image3 from "../common/images/ironing.jpg";
import AuthModal from '../Auth/AuthModal';   
 const About = () => {

   const [click, setClick] = useState(false);
      const [showAuthModal, setShowAuthModal] = useState(false);   
      const [authMode, setAuthMode] = useState("login");
       
   const handleSchedulePickup = () => {
       setAuthMode("login");
       setShowAuthModal(true);
     };

     const closeModal = () => {
       setShowAuthModal(false);
     };
  return (
    <>
      <section 
        id="About"
        className="About-Us">
        <div className="LHS">
          <div className="image-wrapper">
            <img src={Image} alt="Base" className="grid-image" />
            <img src={Image1} alt="Overlay" className="grid-image" />
            <img src={Image2} alt="" className="grid-image" />
            <img src={Image3} alt="" className="grid-image" />
          </div>
        </div>
        <div className="RHS">
          <h3>ABOUT FLASH WASH</h3>
          <h1>
            Why Will <span>You Choose Our</span> Services?
          </h1>
          <p>
            At FlashWash Laundry Services, we combine modern cleaning technology
            with expert care to give your clothes the freshness they deserve.
          Our mission is to deliver fast, reliable, and
            affordable laundry solutions right at your doorstep.
          </p>
          <ul>
            <li>
              <i className="fa fa-check-circle" aria-hidden="true"></i>{" "}
              Convenient Pickup and Delivery
            </li>
            <li>
              <i className="fa fa-check-circle" aria-hidden="true"></i>{" "}
              Convenient Pickup and Delivery
            </li>
            <li>
              <i className="fa fa-check-circle" aria-hidden="true"></i>{" "}
              Convenient Pickup and Delivery
            </li>
            <li>
              <i className="fa fa-check-circle" aria-hidden="true"></i>{" "}
              Convenient Pickup and Delivery
            </li>
            <li>
              <i className="fa fa-check-circle" aria-hidden="true"></i>{" "}
              Convenient Pickup and Delivery
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

export default About
