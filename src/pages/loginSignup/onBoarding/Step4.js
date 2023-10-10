import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPhotoOnboarding } from "../../../reduxstore/actions/onBoardingAction";
import "./Step.css";

const Step4 = ({ setStep }) => {
  const [photo, setPhoto] = useState("");
  const { progress, loading, addPhoto } = useSelector(
    (state) => state.onBoardingAddPhoto
  );
  const dispatch = useDispatch();
  const submitForm = () => {
    dispatch(addPhotoOnboarding({photo}));
  };
  return (
    <div className="kn-global-onboarding-step">
      <div className="kn-global-onboarding-step-left">
        <p className="kn-global-onboarding-step-count">Step 4</p>
        <h2 className="kn-global-onboarding-step-head-step4">
          Add Photo to enrich user Experience!
        </h2>
        <p className="kn-global-onboarding-step-para">
          Take photos using a dicent camera and public at least 1 photo to get
          your more appealing. (max photo 20)
        </p>
        <form className="kn-global-onboarding-step-form step4">
          <div className="kn-on-form-control">
            <label
              htmlFor="file-upload"
              className="kn-step4-file-select btn-primary"
            >
              Click or Drag here
            </label>
            <input
              id="file-upload"
              type="file"
              name="ourHotelPhoto"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
            />
          </div>
        </form>
        <div className="kn-global-onboarding-step-change-btn">
          <button className="btn-primary onbBtn" onClick={() => setStep(2)}>
            Back
          </button>
          <button
            className="btn-primary onbBtn"
            onClick={() => {
              addPhoto === null ? setStep(4) : submitForm();
            }}
          >
            {addPhoto === null ? "Next" : "submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step4;
