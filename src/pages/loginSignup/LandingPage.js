import React, { Fragment, useEffect } from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";

// temporary imports
import img1 from "./images/airbnb.jpg";
import img2 from "./images/booking.png";
import img4 from "./images/google.png";
import img3 from "./images/expedia.png";
import img5 from "./images/shift4-logo.png";
import img6 from "./images/tripadvisor.png";
import img7 from "./images/tw.png";
import img8 from "./images/1280px-Stripe_Logo_revised_2016.svg.png";

const LandingPage = () => {
  useEffect(() => {
    const header = document.querySelector(".kn-landing-page-header");
    window.addEventListener("scroll", () => {
      header.classList.toggle("sticky", window.scrollY > 0);
    });
  }, []);
  return (
    <Fragment>
      <div className="kn-landing-page">
        <div className="kn-landing-page-wrapper">
          <header className="kn-landing-page-header">
            <Link to={"/"}>
              <h1 className="kn-landing-page-logo">Kunggy</h1>
            </Link>
            <div className="kn-landing-page-navbar">
              <Link to="/login">
                <div className="kn-landing-page-nav-option">Login</div>
              </Link>
              <Link to="/login">
                <div className="kn-landing-page-nav-option">Signup</div>
              </Link>
            </div>
          </header>
          <main className="kn-landing-page-content">
            <h1>Dream hotel is ready for upcoming booking.</h1>
            <p>
              We work with different parties when offering insurance services.
              Follow the link below to understand how your data is used.
            </p>
            <div className="kn-landing-page-buttons">
              <Link to={"/login"}>
                <div className="btn-primary kn-landing-page-btn">
                  Get Started for free
                </div>
              </Link>
              <Link to={"#"}>
                <div className="btn-primary kn-landing-page-btn">Demo</div>
              </Link>
            </div>
          </main>

          {/* waves */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="kn-landing-page-wave"
          >
            <path
              fill="#fff"
              fillOpacity={1}
              d="M0,256L40,234.7C80,213,160,171,240,138.7C320,107,400,85,480,96C560,107,640,149,720,176C800,203,880,213,960,218.7C1040,224,1120,224,1200,202.7C1280,181,1360,139,1400,117.3L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
        </div>

        {/* some other components */}
        <div className="kn-landing-page-partners">
          <h2>Our partners</h2>
          <div className="kn-landing-page-partners-container">
            <div className="kn-landing-page-partners-img">
              <img src={img1} />
            </div>
            <div className="kn-landing-page-partners-img">
              <img src={img2} />
            </div>
            <div className="kn-landing-page-partners-img">
              <img src={img3} />
            </div>
            <div className="kn-landing-page-partners-img">
              <img src={img4} />
            </div>
            <div className="kn-landing-page-partners-img">
              <img src={img5} />
            </div>
            <div className="kn-landing-page-partners-img">
              <img src={img6} />
            </div>
            <div className="kn-landing-page-partners-img">
              <img src={img7} />
            </div>
            <div className="kn-landing-page-partners-img">
              <img src={img8} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LandingPage;
