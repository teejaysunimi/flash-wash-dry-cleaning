import React from 'react'
import "./hero.css"




const hero = () => {
    const scrollToServices = () => {

    document.getElementById("About")?.scrollIntoView({ behavior: "smooth" });

  };


  return (
    <>
      <section className="hero-wrapper">
        <div className="overlay">
          <div className="text">
            <h1>
              Your Laundry,<span>Our Luxury Touch</span>
            </h1>
            <p>
              We treat every fabric with precision and care, offering a premium
              laundry experience designed for your comfort.
            </p>
            <button className="hero-btn">
                  <a href="#About" onClick={scrollToServices}>Explore Services</a>
                  <span>
                    <i class="fa-solid fa-arrow-right"></i>
              </span>
              </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default hero