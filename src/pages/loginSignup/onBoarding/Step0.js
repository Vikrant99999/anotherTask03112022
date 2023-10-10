import React from "react";
import "./Step0.css";
import { Carousel } from "react-carousel-minimal";

// temporary imports
import img1 from "../images/slide1.jpg";
import img2 from "../images/slide2.jpg";
import img4 from "../images/slide3.jpg";
import img3 from "../images/slide4.jpeg";
import img5 from "../images/slide5.jpg";
import img6 from "../images/slide6.jpg";

const data = [
  {
    image: img1,
  },
  {
    image: img2,
  },
  {
    image: img3,
  },
  {
    image: img4,
  },
  {
    image: img5,
  },
  {
    image: img6,
  },
];
const user = {
  name: "abbbbc xyzzzz",
};

const Step0 = ({ setStep }) => {
  const completeStep = () => {
    setStep(0);
  };
  return (
    <div className="kn-global-onboarding-step0">
      <div className="kn-global-onboarding-step0-left">
        <h1>Hi {user.name}!</h1>
        <p>Lets get your property onboarded!</p>
        <button
          className="btn-primary kn-onboarding-btn"
          onClick={completeStep}
        >
          Get Started
        </button>
      </div>
      <div className="kn-global-onboarding-step0-right">
        <Carousel
          data={data}
          time={3000}
          width="100%"
          height="400px"
          radius="10px"
          slideNumber={true}
          automatic={true}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
          thumbnails={true}
          thumbnailWidth="100px"
        />
      </div>
    </div>
  );
};

export default Step0;
