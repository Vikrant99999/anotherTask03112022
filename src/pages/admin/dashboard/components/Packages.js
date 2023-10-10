import React, { Fragment, useState } from "react";
import "./Packages.css";
import { BsChevronDown } from "react-icons/bs";

const Packages = () => {
  const [lastDays, setLastDays] = useState(30);
  const [showflop, setShowflop] = useState(false);
  const shofloptions = () => {
    setShowflop(!showflop);
  };
  return (
    <Fragment>
      <div className="kn-top-selected-p">
        <div className="kn-top-selected-head">
          <div className="kn-top-sp-head-fr">
            <h3>Top Booked Room</h3>
            <p>In last 30 days top selected package</p>
          </div>
          <div className="kn-top-selected-p-actions">
            <div className="kn-top-selected-p-op" onClick={shofloptions}>
              {lastDays} days
              <BsChevronDown />
              <div
                className={
                  showflop
                    ? "kn-top-selected-p-childs open"
                    : "kn-top-selected-p-childs"
                }
                onClick={(e) => setLastDays(e.target.value)}
              >
                <input
                  type="radio"
                  id="7daysppackage"
                  name="lastdays"
                  value={7}
                />
                <label htmlFor="7daysppackage">7 days</label>
                <input
                  type="radio"
                  id="15daysppackage"
                  name="lastdays"
                  value={15}
                />
                <label htmlFor="15daysppackage">15 days</label>
                <input
                  type="radio"
                  id="30dayspackage"
                  name="lastdays"
                  value={30}
                />
                <label htmlFor="30dayspackage">30 days</label>
              </div>
            </div>
          </div>
        </div>
        <div className="kn-top-selected-packs">
          <div className="kn-top-selected-pack">
            <div className="kn-top-s-p__info">
              <span>package name</span>
              <span>50%</span>
            </div>
            <div className="kn-top-sp-bar">
              <span></span>
            </div>
          </div>
          <div className="kn-top-selected-pack">
            <div className="kn-top-s-p__info">
              <span>package name</span>
              <span>43%</span>
            </div>
            <div className="kn-top-sp-bar">
              <span></span>
            </div>
          </div>
          <div className="kn-top-selected-pack">
            <div className="kn-top-s-p__info">
              <span>package name</span>
              <span>33%</span>
            </div>
            <div className="kn-top-sp-bar">
              <span></span>
            </div>
          </div>
          <div className="kn-top-selected-pack">
            <div className="kn-top-s-p__info">
              <span>package name</span>
              <span>30%</span>
            </div>
            <div className="kn-top-sp-bar">
              <span></span>
            </div>
          </div>
          <div className="kn-top-selected-pack">
            <div className="kn-top-s-p__info">
              <span>package name</span>
              <span>20%</span>
            </div>
            <div className="kn-top-sp-bar">
              <span></span>
            </div>
          </div>
          <div className="kn-top-selected-pack">
            <div className="kn-top-s-p__info">
              <span>package name</span>
              <span>15%</span>
            </div>
            <div className="kn-top-sp-bar">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Packages;
