import React from 'react'
import './About.css'
import Image from "../common/images/OP.jpg";
import Image1 from "../common/images/bg2.jpg";
import Image2 from "../common/images/bg1.jpg";
import Image3 from "../common/images/ironing.jpg";
 const About = () => {
  return (
    <>
      <section className="About-Us">
        <div className="LHS">
          <div className="image-wrapper">
            <img src={Image} alt="Base" className='base-image' />
            <img src={Image1} alt="Overlay" className='overlay-image' />
            <img src={Image2} alt="" className='image2' />
            <img src={Image3} alt="" className='image3' />
            
          </div>
        </div>
        <div className="RHS">
          <h3>ABOUT FLASH WASH</h3>
          <h1>
            Why Will <span>You Choose Our</span> Services?
          </h1>
          <p>
            At FlashWash Laundry Services, we combine modern cleaning
            technology with expert care to give your clothes the freshness they
            deserve. Established in Lagos, our mission is to deliver fast,
            reliable, and affordable laundry solutions right at your doorstep.
          </p>
          <ul>
            <li>
              <i className="fa fa-check-circle" aria-hidden="true"></i> Convenient
              Pickup and Delivery
          
            </li>
            <li>
              <i className="fa fa-check-circle" aria-hidden="true"></i> Convenient
              Pickup and Delivery
          
            </li>
            <li>
              <i className="fa fa-check-circle" aria-hidden="true"></i> Convenient
              Pickup and Delivery
          
            </li>
            <li>
              <i className="fa fa-check-circle" aria-hidden="true"></i> Convenient
              Pickup and Delivery
          
            </li>
            <li>
              <i className="fa fa-check-circle" aria-hidden="true"></i> Convenient
              Pickup and Delivery
          
            </li>
          </ul>
          <button className="nav-btn">
                  Schedule A Pickup
                  <span>
                    <i class="fa-solid fa-arrow-right"></i>
            </span>
            </button>
        </div>
      </section>
    </>
  );
}

export default About
