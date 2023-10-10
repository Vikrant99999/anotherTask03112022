import React, { useState } from "react";
import "./Step.css";
import FormFillingTips from "./components/FormFillingTips";
import { useDispatch, useSelector } from "react-redux";
import { firstStepData } from "../../../reduxstore/actions/onBoardingAction";

const tipsData = {
  propertyName: "This is the public name of your property.",
  contactNumber: "This is the contact number.",
  propertyType: "Select the property type.",
  description: "add a property description.",
};

const Step1 = ({ setStep }) => {
  const dispatch = useDispatch();
  const { progress, loading, firstStep } = useSelector(
    (state) => state.onBoardingFisrtStep
  );
  const [tips, setTips] = useState(tipsData.propertyName);
  const [inputs, setInputs] = useState({
    propertyName: "",
    propertyContact: "",
    propertyType: "",
    propertyDescription: "",
  });

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const { propertyName, propertyContact, propertyType, propertyDescription } =
    inputs;
  const formSubmit = () => {
    const formData = {
      propertyName,
      propertyContact,
      propertyType,
      propertyDescription,
    };
    dispatch(firstStepData(formData));
  };
  return (
    <div className="kn-global-onboarding-step">
      <div className="kn-global-onboarding-step-left">
        <p className="kn-global-onboarding-step-count">Step 1</p>
        <form className="kn-global-onboarding-step-form">
          <div
            className="kn-on-form-control"
            onClick={() => setTips(tipsData.propertyName)}
          >
            <label>What is your property name?</label>
            <input
              type="text"
              className="form-control"
              id="propertyNameInput"
              name="propertyName"
              onChange={onChange}
              value={inputs.propertyName}
            />
          </div>
          <div
            className="kn-on-form-control"
            onClick={() => setTips(tipsData.contactNumber)}
          >
            <label htmlFor="propertyContact">Property Contact Number?</label>
            <input
              type="text"
              className="form-control"
              id="propertyContact"
              name="propertyContact"
              onChange={onChange}
              value={inputs.propertyContact}
            />
          </div>
          <div
            className="kn-on-form-control"
            onClick={() => setTips(tipsData.propertyType)}
          >
            <label htmlFor="propertyTypeInput">
              What is your property type?
            </label>
            <select
              id="propertyTypeInput"
              name="propertyType"
              onChange={onChange}
              value={inputs.propertyType}
            >
              <option value="">Select your property type</option>
              <option value="HOTEL">Hotel</option>
              <option value="VACATION_RENTAL">Vacation Rental</option>
              <option value="HOSTEL">Hostel</option>
            </select>
          </div>
          <div
            className="kn-on-form-control"
            onClick={() => setTips(tipsData.description)}
          >
            <label htmlFor="propertyDescriptionInput">
              Property Description?
            </label>
            <textarea
              name="propertyDescription"
              id="propertyDescriptionInput"
              rows="5"
              onChange={onChange}
              value={inputs.propertyDescription}
            ></textarea>
          </div>
        </form>
        <div className="kn-global-onboarding-step-change-btn">
          <button className="btn-primary onbBtn" onClick={() => setStep(-1)}>
            Back
          </button>
          {}
          <button
            className="btn-primary onbBtn"
            onClick={() => {
              firstStep === null ? setStep(1) : formSubmit();
            }}
          >
            {firstStep === null ? "Next" : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step1;
