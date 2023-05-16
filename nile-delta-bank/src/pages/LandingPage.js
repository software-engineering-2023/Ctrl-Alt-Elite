import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/landing-page.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="login">
        <div className="banner">
            <img className="banner-img" src="res/banner.svg"/>
        </div>
        <div>
            <div className="join-login">
                <p className="slogan">Online Banking Made Easy.</p>
                <button className="join-button">JOIN NOW</button>
                <button className="login-button">LOGIN</button>
            </div>
        </div>
      </div>
      <div className="about">
            <img className="about-background" src="res/wave.svg" />
            <img className="about-bank-img" src="res/bank.svg" />
            <button className="about-title">ENJOY A LUXURIOUS<br></br>USER EXPERIENCE</button>
            <br></br><br></br><br></br><br></br>
            <div className="about-text">
                <div className="about-buttons">
                    <div className="button1">
                      <button className="about-button">Highest class security</button><br></br><br></br>
                    </div>
                    <div className="button2">
                      <button className="about-button">24/7 Instant customer service</button><br></br><br></br>
                    </div>
                    <div className="button3">
                      <button className="about-button">Be notified and reminded of events</button><br></br><br></br>
                    </div>
                    <div className="button4">
                      <button className="about-button">Pay bills and loans from home</button><br></br>
                    </div>
                </div>
                <div className="about-description">
                  <div className="about-desc">
                    <p id="tagline" class="fulljustify">
                    Nile Delta Bank is renowned for its impressive and prompt customer service. Our dedicated team is always available to address your concerns and answer your questions, providing personalized attention and support. Whether you prefer to connect with us online, over the phone, or in person, we are committed to delivering 
                    </p>
                    <p style={{marginTop:"-50px"}}>
                    exceptional service at every step.
                    </p>
                  </div>
                  <div className="about-desc1">
                    <p id="tagline" class="fulljustify">
                    At Nile Delta Bank, we understand that security is a top priority for our customers. That's why we have invested in state-of-the-art security measures to protect your assets and personal information. Our advanced security systems and protocols ensure that your accounts and transactions are safeguarded at all times. With Nile Delta Bank, you can trust that your financial information is in the safest hands.
                    </p>
                    <p style={{marginTop:"-50px"}}>
                    </p>
                  </div>
                  <div className="about-desc2">
                    <p id="tagline" class="fulljustify">
                    Nile Delta Bank is renowned for its impressive and prompt customer service. Our dedicated team is always available to address your concerns and answer your questions, providing personalized attention and support. Whether you prefer to connect with us online, over the phone, or in person, we are committed to delivering 
                    </p>
                    <p style={{marginTop:"-50px"}}>
                    exceptional service at every step.
                    </p>
                  </div>
                  <div className="about-desc3">
                    <p id="tagline" class="fulljustify">
                    Nile Delta Bank's notification system is an outstanding feature that keeps you informed about payment due dates and interest rate changes. Our automated alerts are designed to help you stay on top of your finances and never miss a payment or rate change. Managing your 
                    </p>
                    <p style={{marginTop:"-50px"}}>
                    finances has never been easier.
                    </p>
                  </div>
                  <div className="about-desc4">
                    <p id="tagline" class="fulljustify">
                    Nile Delta Bank's online bill payment and loan repayment options are designed to provide you with maximum convenience. You can make payments from anywhere at any time, making it easier to manage your finances on your own schedule. With Nile Delta Bank, you can securely and efficiently take care of your bills and loans without 
                    </p>
                    <p style={{marginTop:"-50px"}}>
                    ever leaving your home.
                    </p>
                  </div>
                </div>
            </div>
      </div>
      <div className="testimonials">
        <div className="testimonials-title">
            <p className="testimonials-title-text">TESTIMONIALS</p>
        </div>
        <div className="slider">
          {/*  */}
        </div>
      </div>
      <div className="app">
        <img className="app-img" src="res/logo.png" />
        <div className="app-download">
            <p className="app-download-text">Download our app.</p>
            <div className="app-download-icons">
                <img className="app-download-img" src="res/appstore.svg" />
                <img className="app-download-img" src="res/googleplay.svg" />
            </div>
        </div>
      </div>
      <div className="footer">
        <img className="footer-icon" src="res/ig.svg" />
        <img className="footer-icon" src="res/fb.svg" />
        <img className="footer-icon" src="res/mail.svg" style={{height:"20px"}} />
      </div>
    </div>
  );
};

export default LandingPage;