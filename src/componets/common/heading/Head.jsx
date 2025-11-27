import { click } from '@testing-library/user-event/dist/click';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


  const Navbar = () => {
    const [click, setClick] = useState(false);
  
  return (
    <>
      <section className="head">
        <div className="container">
          <div className="logo">
            <h1>FLASHWASH</h1>
          </div>
          <nav className="navbar">
            {/* Hamburger button  */}
            <div className="nav-menu-icon" onclick={() => setClick(!click)}> <i class="fa-solid fa-bars"></i></div>
            <ul
            className={click ? "nav-menu active" : "nav-menu"}
            >
              <li>
                <a href="#Home">Home</a>
              </li>
              <li>
                <a href="#Home">Sevices</a>
              </li>
              <li>
                <a href="#Home">Projects</a>
              </li>
              <li>
                <a href="#Home">Pages</a>
              </li>
              <li>
                <a href="#Home">Blog</a>
              </li>
              <li>
                <a href="#Home">Contact Us</a>
              </li>

              <li>
                <button className="nav-btn">
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
    </>
  );
}

export default Navbar