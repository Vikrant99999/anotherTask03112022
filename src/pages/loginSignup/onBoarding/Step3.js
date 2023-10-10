import React, { useState, useEffect } from "react";
import "./Step.css";
import { AiOutlinePlus } from "react-icons/ai";

// material ui dialog box
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { saveAmenties } from "../../../reduxstore/actions/onBoardingAction";

const data = [
  "intenet/wifi",
  "on premise parking",
  "24-hour front desk service",
  "swimming pool",
  "bar",
  "restaurant",
  "coffee/ tea in lobby",
  "vending machine",
  "room service",
  "spa",
  "sauna",
  "Hot tub/ jacuzzi",
  "gym",
  "breakfast",
  "shuttle service",
  "currency exchange",
  "dry cleaning",
  "laundry",
  "meeting/ banquet facilities",
  "ATM on site",
  "24 Hours power backup",
  "luggage storage",
  "safety deposite boxes",
  "elevator",
  "concierge",
  "airport transfer",
  "rental car",
  "valet parking",
  "tours",
];

// =========================taking null data for testing perpus=================//

const Step3 = ({ setStep }) => {
  const dispatch = useDispatch();
  const { progress, loading, amenties } = useSelector(
    (state) => state.onBoardingAmenties
  );
  const [ourAmenties, setOuramenties] = useState([]);
  const [open, setOpen] = useState(false);
  const [addamenty, setAddamenty] = useState("");

  // setting my amenties
  const setValues = (e) => {
    let ament = JSON.parse(localStorage.getItem("amenties"));
    if (ament === null) {
      ament = [];
    }
    const key = e.target.value;
    if (ament.includes(key)) {
      const index = ament.indexOf(key);
      ament.splice(index, 1);
      localStorage.setItem("amenties", JSON.stringify(ament));
      return;
    } else {
      ament.push(key);
      localStorage.setItem("amenties", JSON.stringify(ament));
    }
  };

  const addnewAmenty = () => {
    // check is already exist or not
    let ament = JSON.parse(localStorage.getItem("amenties"));
    if (ament === null) {
      ament = [];
    }

    if (
      addamenty === "" ||
      ament.includes(addamenty) ||
      ourAmenties.includes(addamenty)
    )
      return;
    else {
      ament.push(addamenty);
      setOuramenties([...ourAmenties, addamenty]);
      setAddamenty("");      
      localStorage.setItem("amenties", JSON.stringify(ament));
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const amenties = JSON.parse(localStorage.getItem("amenties"));
    if (amenties === null) {
      setOuramenties([...data]);
    } else {
      let newData = new Set([...data, ...amenties]);
      setOuramenties([...newData]);
    }
  }, []);

  const submitForm = () => {
    const amenties = JSON.parse(localStorage.getItem("amenties"));
    if (amenties === null) return;
    dispatch(saveAmenties(amenties));
  };

  return (
    <div className="kn-global-onboarding-step">
      <div className="kn-global-onboarding-step-left">
        <p className="kn-global-onboarding-step-count">Step 3</p>
        <h2 className="kn-global-onboarding-step-head">
          Choose your property amenties
        </h2>
        <div className="kn-global-onboarding-step-selector">
          <form>
            {ourAmenties.map((i) => (
              <div className="form-control-step3" key={i}>
                <input
                  type="checkbox"
                  name={i}
                  onChange={setValues}
                  value={i}
                  id={i}
                />
                <label htmlFor={i} className="kn-global-amenties-text">
                  {i}
                </label>
              </div>
            ))}

            {/* add amenties dialog box */}
            <div className="kn-step3-amenties-add">
              <Button
                variant="outlined"
                onClick={handleClickOpen}
                className="kn-global-amenties-add-button"
              >
                <AiOutlinePlus />
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}
                className="kn-global-add-amenties-dialog-box"
              >
                <DialogTitle>Add your amenties</DialogTitle>
                <DialogContent>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Your amenties"
                    variant="standard"
                    type={"text"}
                    name={"amenties"}
                    onChange={(e) => setAddamenty(e.target.value)}
                    value={addamenty}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button
                    onClick={() => {
                      addnewAmenty();
                      handleClose();
                    }}
                  >
                    Add
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </form>
        </div>
        <div className="kn-global-onboarding-step-change-btn">
          <button className="btn-primary onbBtn" onClick={() => setStep(1)}>
            Back
          </button>
          <button
            className="btn-primary onbBtn"
            onClick={() => {
              amenties === null ? setStep(3) : submitForm();
            }}
          >
            {amenties === null ? "Next" : "submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step3;
