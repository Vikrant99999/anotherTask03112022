import React, { Fragment, useEffect } from "react";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import "./NewCustomers.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const NewCustomers = () => {
  let arr = [1, 3, 2, 4, 5];
  return (
    <Fragment>
      <div className="kn-new-customers">
        <div className="kn-new-customers-header">
          <h3>New Customers</h3>
          <Link to="/admin/users" className="btn-primary viewmore">
            View All
          </Link>
        </div>
        {arr.map((item) => (
          <div className="kn-new-customer" key={item}>
            <div className="kn-new-customer-info">
              <div className="kn-new-customer-info-profile">KM</div>
              <div className="kn-new-customer-info-name">
                <span>jonh doe</span>
                <span>abc@gmail.com</span>
              </div>
            </div>
            <div className="kn-new-customer-action">
              <IconButton>
                <MoreHorizIcon className="kn-user-action-btn" />
              </IconButton>
              <div className="kn-new-customer-action-op">
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default NewCustomers;
