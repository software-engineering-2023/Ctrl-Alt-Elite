import '../css/landing-page.css';
import React, { useState } from 'react';
import TestimonialCarousel from '../components/TestimonialCarousel';
import about_text from '../data/about';

const LandingPage = () => {
  const [currentAbout, setCurrentAbout] = useState(0);

  return (
    <div className="landing-page">
      <section className="login">
        <div className="banner">
            <img className="banner-img" src="res/banner.svg" alt="" />
        </div>
        <div>
            <div className="join-login">
                <p className="slogan">Online Banking Made Easy.</p>
                <button className="button join-button">JOIN NOW</button>
                <button className="button login-button">LOGIN</button>
            </div>
        </div>
      </section>
      <section className="about">
            <img className="about-background" src="res/wave.svg" alt="" />
            <img className="about-bank-img" src="res/bank.svg" alt="" />
            <button className="about-title">ENJOY A LUXURIOUS<br></br>USER EXPERIENCE</button>
            <br></br><br></br><br></br><br></br>
            <div className="about-text">
                <div className="about-buttons">
                    <div className="button1">
                      <button className="about-button" onMouseOver={() => setCurrentAbout(1)} onMouseLeave={() => setCurrentAbout(0)}>Highest class security</button><br></br><br></br>
                    </div>
                    <div className="button2">
                      <button className="about-button" onMouseOver={() => setCurrentAbout(2)} onMouseLeave={() => setCurrentAbout(0)}>24/7 Instant customer service</button><br></br><br></br>
                    </div>
                    <div className="button3">
                      <button className="about-button" onMouseOver={() => setCurrentAbout(3)} onMouseLeave={() => setCurrentAbout(0)}>Be notified and reminded of events</button><br></br><br></br>
                    </div>
                    <div className="button4">
                      <button className="about-button" onMouseOver={() => setCurrentAbout(4)} onMouseLeave={() => setCurrentAbout(0)}>Pay bills and loans from home</button><br></br>
                    </div>
                </div>
                <div className="about-description">
                  <div className="about-desc">
                    <p id="tagline" class="fulljustify">
                    {
                      about_text[currentAbout]
                    }
                    </p>
                  </div>
                </div>
            </div>
      </section>
      <section className="testimonials">
        <div className="testimonials-title">
            <p className="testimonials-title-text">TESTIMONIALS</p>
        </div>
        <div className="testimonials-carousel">
          <TestimonialCarousel />
        </div>
      </section>
      <section className="app">
        <img className="app-img" src="res/logo.png" alt="" />
        <div className="app-download">
            <p className="app-download-text">Download our app.</p>
            <div className="app-download-icons">
                <img className="app-download-img" src="res/appstore.svg" alt="" />
                <img className="app-download-img" src="res/googleplay.svg" alt="" />
            </div>
        </div>
      </section>
      <section className="footer">
        <img className="footer-icon" src="res/ig.svg" alt="" />
        <img className="footer-icon" src="res/fb.svg" alt="" />
        <img className="footer-icon" src="res/mail.svg" style={{height:"20px"}} alt="" />
      </section>
    </div>
  );
};

export default LandingPage;