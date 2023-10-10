import React, { useState } from "react";
import FormFillingTips from "./components/FormFillingTips";
import { streetAddressOb } from "../../../reduxstore/actions/onBoardingAction";
import "./Step.css";
import { useSelector, useDispatch } from "react-redux";

const tipsData = {
  address: "Enter your full address",
};
const Step2 = ({ setStep }) => {
  const dispatch = useDispatch();
  const { loading, progress, streetAddress:address } = useSelector(
    (state) => state.onBoardingStree
  );
  const [tips, setTips] = useState(tipsData.address);
  const [inputs, setInputs] = useState({
    streetAddress: "",
  });

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const { streetAddress } = inputs;
  const formSubmit = () => {
    const formData = { streetAddress };
    dispatch(streetAddressOb(formData));
  };
  return (
    <div className="kn-global-onboarding-step">
      <div className="kn-global-onboarding-step-left">
        <p className="kn-global-onboarding-step-count">Step 2</p>
        <form className="kn-global-onboarding-step-form">
          <div
            className="kn-on-form-control"
            onClick={() => setTips(tipsData.address)}
          >
            <label>Street Address</label>
            <input
              type="text"
              id="propertyNameInput"
              name="streetAddress"
              onChange={onChange}
              value={inputs.streetAddress}
            />
          </div>
        </form>
        <div className="kn-global-onboarding-step-change-btn">
          <button className="btn-primary onbBtn" onClick={() => setStep(0)}>
            Back
          </button>
          {}
          <button
            className="btn-primary onbBtn"
            onClick={() => {
              address === null ? setStep(2) : formSubmit();
            }}
          >
            {address === null ? "Next" : "Submit"}
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

export default Step2;
