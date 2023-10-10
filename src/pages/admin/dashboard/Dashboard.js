import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { HiOutlineDocumentReport } from "react-icons/hi";
import Row1 from "./components/Row1";
import Packages from "./components/Packages";
import NewCustomers from "./components/NewCustomers";
import RecentActivity from "./components/RecentActivity";
import MetaData from "../../../utils/MetaData";
import { IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SalesRevenue from "./Charts/SalesRevenue";
import RoomBookingChart from "./Charts/RoomBookingChart";
import InComeExpences from "./Charts/InComeExpences";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Dashboard = () => {
  const [showflop, setShowflop] = useState(false);
  const [value, onChange] = useState(new Date());
  const shofloptions = () => {
    setShowflop(!showflop);
  };

  useEffect(() => {
    const clickBtn = document.querySelector(".kn-header-action-more");
    const showBtn = document.querySelector(".kn-header-actions");
    clickBtn.addEventListener("click", () => {
      showBtn.classList.toggle("open");
    });
  }, []);

  return (
    <Fragment>
      <MetaData title={"kunggy dashboard"} />
      <div className="global-side-div-container">
        <div className="kn-bloack-div">
          <div className="kn-block-head">
            <div className="kn-child-first">
              <h2>Dashboard Overiew</h2>
              <p>welcome to ........ Dashboard</p>
            </div>
            <div className="kn-child-second">
              <div className="kn-header-action-more" id="icons-button">
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              </div>

              <div className="kn-header-actions">
                <div className="kn-filter-op" onClick={shofloptions}>
                  <BsFillCalendar2WeekFill />
                  {String(value).slice(0, 15)}
                  <IoIosArrowForward />
                </div>
                <div
                  className={
                    showflop
                      ? "kn-filter-op-childs open"
                      : "kn-filter-op-childs"
                  }
                >
                  <Calendar onChange={onChange} value={value} />
                </div>
                <Link to="/">
                  <HiOutlineDocumentReport />
                  Report
                </Link>
              </div>
            </div>
          </div>
          {/* some inmports*/}
          <Row1 />
          <Packages />
          <div className="charts-sales-rooms">
            <SalesRevenue />
            <RoomBookingChart />
          </div>
          <InComeExpences />
          {/* new customers and recent activity components */}
          <div className="CustomerActivity">
            <NewCustomers />
            <RecentActivity />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
