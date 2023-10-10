import React, { useState, useEffect } from "react";
import "./Step.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const tipsData = {
  roomType: "Enter what is the type of your rooms.",
  roomCount: "Enter how many rooms you want to your seleceted room type.",
};

const Step6 = ({ setStep }) => {
  const [tips, setTips] = useState(tipsData.roomType);
  const [inputs, setInputs] = useState({ roomType: "" });

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return (
    <div className="kn-global-onboarding-step">
      <div className="kn-global-onboarding-step-left">
        <p className="kn-global-onboarding-step-count">Step 5</p>
        <h2 className="kn-global-onboarding-step-head-step4">
          Configure your rooms!
        </h2>
        <form className="kn-global-onboarding-step-form">
          <div
            className="kn-on-form-control step5"
            onClick={() => setTips(tipsData.roomType)}
          >
            <label>What is your room type name?</label>
            <input
              type="text"
              className="form-control"
              name="rootType"
              onChange={onChange}
              value={inputs.roomType}
            />
          </div>
          <div
            className="kn-on-form-control step5"
            onClick={() => setTips(tipsData.roomCount)}
          ></div>
        </form>
        <div className="kn-global-onboarding-step-change-btn">
          <button className="btn-primary onbBtn" onClick={() => setStep(3)}>
            Back
          </button>
          <button className="btn-primary onbBtn" onClick={() => setStep(5)}>
            Next
          </button>
        </div>
      </div>

      {/* right part of the step1  */}
      {/* <div className="kn-global-onboarding-step-right">
        <FormFillingTips tips={tips} />
      </div> */}
    </div>
  );
};

export default Step6;
