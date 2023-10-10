import React, { useState, useEffect } from "react";
import "./Step.css";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { configureRoomAction } from "../../../reduxstore/actions/onBoardingAction";

const Step5 = ({ setStep }) => {
  const [photo, setPhoto] = useState("");
  const { progress, loading, configRoom } = useSelector(
    (state) => state.onBoardingConfigRoom
  );
  const dispatch = useDispatch();

  const [roomCount, setRoomcount] = useState(0);
  const [roomType, setRoomType] = useState("");
  const [roomArray, setRoomArray] = useState({});

  const onRoomIdChange = (e) => {
    setRoomArray({ ...roomArray, [e.target.name]: e.target.value });
  };
  // increasing and decreasing children count
  const deCreaseRoom = () => {
    if (roomCount === 0) {
      return;
    }
    delete roomArray[`room${roomCount - 1}id`];
    setRoomcount(roomCount - 1);
  };

  const inCreaseRoom = () => {
    setRoomcount(roomCount + 1);
    roomArray[`room${roomCount}id`] = "";
  };

  const submitForm = () => {
    if (roomType === "" || Object.keys(roomArray).length <= 0) return;
    const formData = {
      roomType,
      roomArray,
    };
    dispatch(configureRoomAction(formData));
  };
  return (
    <div className="kn-global-onboarding-step">
      <div className="kn-global-onboarding-step-left">
        <p className="kn-global-onboarding-step-count">Step 5</p>
        <h2 className="kn-global-onboarding-step-head-step4">
          Configure your rooms!
        </h2>
        <form className="kn-global-onboarding-step-form">
          <div className="kn-on-form-control step5">
            <label htmlFor="roomType">What is your room type name?</label>
            <input
              type="text"
              id="roomType"
              className="form-control"
              name="rootType"
              onChange={(e) => setRoomType(e.target.value)}
              value={roomType}
            />
          </div>
          <div className="kn-on-form-control step5">
            <label>How many rooms under this room type?</label>
            <div className="kn-on-form-control-room-count">
              <div className="kn-on-form-control-room-count-btn">
                <AiOutlineMinus onClick={deCreaseRoom} />
                <span>{roomCount}</span>
                <AiOutlinePlus onClick={inCreaseRoom} />
              </div>
            </div>
            <div className="kn-form-room-id-container">
              {Object.values(roomArray).length > 0 ? <span>Room No</span> : ""}
              {Object.values(roomArray).map((item, index) => (
                <div className="kn-form-input-room-id" key={index}>
                  <input
                    type={"number"}
                    name={`room${index}id`}
                    onChange={onRoomIdChange}
                    value={item}
                  />
                </div>
              ))}
            </div>
          </div>
        </form>
        <div className="kn-global-onboarding-step-change-btn">
          <button className="btn-primary onbBtn" onClick={() => setStep(3)}>
            Back
          </button>
          <button
            className="btn-primary onbBtn"
            onClick={() => {
              configRoom === null ? setStep(5) : submitForm();
            }}
          >
            {configRoom === null ? "Next" : "submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step5;
