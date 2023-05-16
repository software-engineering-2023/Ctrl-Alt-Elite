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
                    <button className="about-button">Highest class security</button><br></br><br></br>
                    <button className="about-button">24/7 Instant customer service</button><br></br><br></br>
                    <button className="about-button">Be notified and reminded of events</button><br></br><br></br>
                    <button className="about-button">Pay bills and loans from home</button><br></br>
                </div>
                <div className="about-description">
                  <div className="about-desc">
                    <p id="tagline" class="fulljustify">
                    Nile Delta Bank is renowned for its impressive and
                    prompt customer service. Our dedicated team is
                    always available to address your concerns and
                    answer your questions, providing personalized
                    attention and support. Whether you prefer to
                    connect with us online, over the phone, or in
                    person, we are committed to delivering
                    </p>
                    <p style={{marginTop:"-50px"}}>
                    exceptional service at every step.
                    </p>
                  </div>
                  <div className="about-desc1" style={{display:"none"}}>
                    <p id="tagline" class="fulljustify">
                    Nile Delta Bank is renowned for its impressive and
                    prompt customer service. Our dedicated team is
                    always available to address your concerns and
                    answer your questions, providing personalized
                    attention and support. Whether you prefer to
                    connect with us online, over the phone, or in
                    person, we are committed to delivering
                    </p>
                    <p style={{marginTop:"-50px"}}>
                    exceptional service at every step.
                    </p>
                  </div>
                  <div className="about-desc2" style={{display:"none"}}>
                    <p id="tagline" class="fulljustify">
                    Nile Delta Bank is renowned for its impressive and
                    prompt customer service. Our dedicated team is
                    always available to address your concerns and
                    answer your questions, providing personalized
                    attention and support. Whether you prefer to
                    connect with us online, over the phone, or in
                    person, we are committed to delivering
                    </p>
                    <p style={{marginTop:"-50px"}}>
                    exceptional service at every step.
                    </p>
                  </div>
                  <div className="about-desc3" style={{display:"none"}}>
                    <p id="tagline" class="fulljustify">
                    Nile Delta Bank is renowned for its impressive and
                    prompt customer service. Our dedicated team is
                    always available to address your concerns and
                    answer your questions, providing personalized
                    attention and support. Whether you prefer to
                    connect with us online, over the phone, or in
                    person, we are committed to delivering
                    </p>
                    <p style={{marginTop:"-50px"}}>
                    exceptional service at every step.
                    </p>
                  </div>
                  <div className="about-desc4" style={{display:"none"}}>
                    <p id="tagline" class="fulljustify">
                    Nile Delta Bank is renowned for its impressive and
                    prompt customer service. Our dedicated team is
                    always available to address your concerns and
                    answer your questions, providing personalized
                    attention and support. Whether you prefer to
                    connect with us online, over the phone, or in
                    person, we are committed to delivering
                    </p>
                    <p style={{marginTop:"-50px"}}>
                    exceptional service at every step.
                    </p>
                  </div>
                </div>
            </div>
      </div>
      <div className="testimonials">

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