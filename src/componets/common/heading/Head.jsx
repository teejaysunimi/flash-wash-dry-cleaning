import React from 'react'
import { Link } from 'react-router-dom'

const Head = () => {
  return (
    <div>
      <section className="head">
        <div className="container flexSB">
          <div className="logo">
            <h1>FLASHWASH</h1>
          </div>
          <header>
            <nav>
              <ul className="flexSB">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/pricing">Pricing</Link>
                </li>
                <li>
                  <Link to="/news">News</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </header>
          <div className="span">
            <button>
              <h2>SCHEDULE A PICKUP</h2>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Head