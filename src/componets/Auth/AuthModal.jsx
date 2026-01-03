import React from 'react'
import './AuthModal.css';
import Image4 from '../common/images/OX.png';

 const AuthModal = () => {
  return (
    <div className="containers">
      <div className="LHs">
        <div className="logo">
          <div className="text-1">
            <h1>FLASHWASH</h1>
            <h2>
              Your Laundry,<span>Our Luxury Touch</span>
            </h2>
          </div>
          <img src={Image4} alt="smile" />
        </div>
      </div>

      <div className="RHS">
        <div className="header">
          <div className="text">Create Account</div>
        </div>
        <div className="inputs">
          <div className="inputs">
            <i class="fa-solid fa-user"></i>
            <input type="text" placeholder="Full Name" />
          </div>
          <div className="inputs">
            <i class="fa-solid fa-envelope"></i>
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="inputs">
            <i class="fa-solid fa-lock"></i>
            <input type="password" placeholder="Password" />
            <i class="fa-solid fa-eye"></i>
            <i class="fa-solid fa-eye-slash"></i>
          </div>
        </div>
        <div className="text-1">
          <input type="checkbox" name="" id="" />
          <p>
            I agree to the <span>terms of service</span> and{" "}
            <span>privacy policy</span>
          </p>
        </div>
        <div className="submit-container">
          <button>
            <a href="#">Sign Up </a>
          </button>
        </div>
        <div className="underline">Or Sign Up with</div>
        <div className="socials">
          <i class="fa-brands fa-google"></i>
        </div>
      </div>

      {/* <div className="header">
        
        <div className="underline"></div>
      </div>
       */}
    </div>
  );
}
export default AuthModal