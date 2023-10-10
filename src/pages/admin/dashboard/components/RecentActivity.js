import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./RecentActivity.css";

const RecentActivity = () => {
  let arr = [
    "Keith Jensen requested for room.",
    "Harry Simpson placed a Order.",
    "Stephanie Marshall cancelled booking.",
    "Nicholas Carr confirmed booking.",
    "Timothy Moreno placed a Order.",
  ];
  return (
    <Fragment>
      <div className="kn-recent-activities">
        <div className="kn-recent-activities-header">
          <h3>Recent Activities</h3>
          <div>
            <Link to="/admin/users" className="btn-primary viewmore">
              View all
            </Link>
          </div>
        </div>
        {arr.map((item) => (
          <div className="kn-recent-activity" key={item}>
            <div className="kn-recent-activity-info">
              <div className="kn-recent-activity-info-profile">KM</div>
              <div className="kn-recent-activity-info-name">
                <span>{item}</span>
                <span>2 hour ago</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default RecentActivity;
