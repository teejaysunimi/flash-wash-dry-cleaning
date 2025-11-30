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
            <div className="nav-menu-icon" onClick={() => setClick(!click)}>
              {" "}
              <i class="fa-solid fa-bars"></i>
            </div>
            <ul className={click ? "nav-links active" : "nav-links"}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/pages">Pages</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
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