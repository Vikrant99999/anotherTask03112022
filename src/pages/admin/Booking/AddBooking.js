import React, { Fragment } from "react";
import "./AddBooking.css";

const AddBooking = () => {
  return (
    <Fragment>
      <div className="global-side-div-container">
        <div className="addbooking-new-pg">
          <div className="addbooking-pg-header">
            <h2>Add Booking</h2>
          </div>
          <div className="addbooking-form-container">
            <form className="addbooking-form">
              <div className="addbooking-form-input">
                <div className="form-group">
                  <label className="form-label" htmlFor="first-name">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="first-name"
                    placeholder="First Name"
                    required={true}
                  />
                </div>
              </div>
              <div className="addbooking-form-input">
                <div className="form-group">
                  <label className="form-label" htmlFor="last-name">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="last-name"
                    placeholder="Last Name"
                    required={true}
                  />
                </div>
              </div>
              <div className="addbooking-form-input">
                <div className="form-group">
                  <label className="form-label" htmlFor="gender-name">
                    Gender
                  </label>
                  <select
                    name="gender"
                    id="gender-name"
                    className="form-control"
                  >
                    <option>select gender</option>
                    <option value="male">Male</option>
                    <option value="felmale">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="addbooking-form-input">
                <div className="form-group">
                  <label className="form-label" htmlFor="phone-num">
                    Phone
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="phone-num"
                    placeholder="phone no"
                    required={true}
                  />
                </div>
              </div>
              <div className="addbooking-form-input">
                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="Email address"
                    required={true}
                  />
                </div>
              </div>
              <div className="addbooking-form-input">
                <div className="form-group">
                  <label className="form-label" htmlFor="address">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Address"
                    required={true}
                  />
                </div>
              </div>
              <div className="addbooking-form-input">
                <div className="form-group">
                  <label className="form-label" htmlFor="photo">
                    Upload photo
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="photo"
                    required={true}
                  />
                </div>
              </div>
              <div className="addbooking-form-input">
                <div className="form-group">
                  <label className="form-label" htmlFor="package">
                    Select packages
                  </label>
                  <select name="package" id="package" className="form-control">
                    <option>Select Package</option>
                    <option value="Honeymoon Package">Honeymoon Package</option>
                    <option value="Vacation Package">Vacation Package</option>
                    <option value="Spring Package">Spring Package</option>
                  </select>
                </div>
              </div>
              <div className="addbooking-form-input">
                <div className="form-group">
                  <label className="form-label" htmlFor="package">
                    Select Room Type
                  </label>
                  <select name="package" id="package" className="form-control">
                    <option>Select Room Type</option>
                    <option value="Delux">Delux</option>
                    <option value="Duper Delux">Super Delux</option>
                    <option value="Single">Single</option>
                    <option value="Double">Double</option>
                  </select>
                </div>
              </div>
              <div className="addbooking-form-input">
                <div className="form-group">
                  <label className="form-label" htmlFor="arrival-date">
                    Arrived Date
                  </label>
                  <input
                    type={"date"}
                    name="arrival-date"
                    id="arrival-date"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="addbooking-form-input">
                <div className="form-group">
                  <label className="form-label" htmlFor="depart-date">
                    Depart Date
                  </label>
                  <input
                    type={"date"}
                    name="depart-date"
                    id="depart-date"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="addbooking-form-input">
                <div className="form-group">
                  <label className="form-label" htmlFor="total-guest">
                    Total Guest
                  </label>
                  <input
                    type={"number"}
                    name="total-guest"
                    id="total-guest"
                    className="form-control"
                    placeholder=""
                  />
                </div>
              </div>

              <div className="addbooking-form-input note-input">
                <div className="form-group">
                  <label className="form-label" htmlFor="note">
                    Note
                  </label>
                  <textarea
                    name="note"
                    id="note"
                    placeholder="Enter a note here..."
                    className="form-control"
                  >
                  </textarea>
                </div>
              </div>

              <div className="addbooking-form-input">
                <div className="form-group">
                  <button type="submit" className="btn-primary submit">
                    Add Booking
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AddBooking;
