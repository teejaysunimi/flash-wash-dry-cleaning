import React from 'react'
import "./hero.css"

const hero = () => {
  return (
    <>
      <section className="hero">
        <div className="contaianer1">
          <div className="RHS">
            <h3>Your Laundry, Our Luxury Touch</h3>
            <p>
              We treat every fabric with precision and care, offering a premium
              laundry experience designed for your comfort. Enjoy same-day
              service, delicate handling, and a fresh finish — all without
              leaving your home.
            </p>
          </div>
          <div className="LHS">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia illo nulla maiores?</p>
            <img src="/src/componets/images/bg1.jpg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default hero