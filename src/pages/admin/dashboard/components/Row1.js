import React, { Fragment } from "react";
import "./Row1.css";

const Row1 = () => {
  return (
    <Fragment>
      <div className="kn-block-row1">
        <div className="kn-block-comp">
          <div className="kn-bl-com-col">
            <h3>Occupancy</h3>
          </div>
          <div className="kn-bl-com-col">
            <span className="books">000</span>
          </div>
        </div>
        <div className="kn-block-comp">
          <div className="kn-bl-com-col">
            <h3>Room Available</h3>
          </div>
          <div className="kn-bl-com-col">
            <span className="books">000</span>
          </div>
        </div>

        <div className="kn-block-comp">
          <div className="kn-bl-com-col">
            <h3>Total booking</h3>
          </div>
          <div className="kn-bl-com-col">
            <span className="books">000</span>
          </div>
        </div>

        <div className="kn-block-comp">
          <div className="kn-bl-com-col">
            <h3>Total Checkin</h3>
          </div>
          <div className="kn-bl-com-col">
            <span className="books">000</span>
          </div>
        </div>

        <div className="kn-block-comp">
          <div className="kn-bl-com-col">
            <h3>Total Checkout</h3>
          </div>
          <div className="kn-bl-com-col">
            <span className="books">000</span>
          </div>
        </div>
        <div className="kn-block-comp">
          <div className="kn-bl-com-col">
            <h3>Total Checkout Pending</h3>
          </div>
          <div className="kn-bl-com-col">
            <span className="books">000</span>
          </div>
        </div>
        <div className="kn-block-comp">
          <div className="kn-bl-com-col">
            <h3>No Show</h3>
          </div>
          <div className="kn-bl-com-col">
            <span className="books">000</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Row1;
