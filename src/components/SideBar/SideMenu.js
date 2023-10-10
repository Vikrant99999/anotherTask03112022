import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SideMenu.css";
import { BsFillCalendarWeekFill, BsFillChatDotsFill } from "react-icons/bs";
import {
  MdDashboard,
  MdCleaningServices,
  MdFastfood,
  MdReviews,
} from "react-icons/md";
import { BiMenu } from "react-icons/bi";
import { AiTwotoneHome, AiFillSetting } from "react-icons/ai";
import {  FaHotel } from "react-icons/fa";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { IoMdPeople, IoIosArrowForward } from "react-icons/io";
import { GiExpense } from "react-icons/gi";

const SideMenu = () => {
  const Hamburger = () => {
    const apsbButtons = document.querySelectorAll(".apsbnavop");
    let body = document.querySelector("body");
    // checking if any child have open than close it
    apsbButtons.forEach((i) => {
      if (i.classList.contains("open")) {
        i.classList.remove("open");
      }
    });

    if (window.innerWidth <= 1200) {
      body.classList.toggle("sideMenuOpen");
    } else {
      body.classList.toggle("open");
    }
  };

  useEffect(() => {
    const apsbButtons = document.querySelectorAll(".apsbnavop");
    let body = document.querySelector("body");
    apsbButtons.forEach((buttons) =>
      buttons.addEventListener("click", function aa() {
        if (this.classList.contains("open")) {
          // this.classList.remove("open");
        } else {
          apsbButtons.forEach((item) => item.classList.remove("open"));
          this.classList.add("open");
          if(body.classList.contains('open')){
            body.classList.remove('open');
          }
        }
      })
    );
  }, []);

  return (
    <Fragment>
      <div className="adminPageSidebar">
        <div className="apsbheaderhamburger">
          <span className="apsbhIcon" onClick={Hamburger}>
            <BiMenu />
          </span>
          <Link to={"/feed"}>
            <h1 className="apsbTitle">Kunggy</h1>
          </Link>
        </div>

        {/* admin page sidebar options */}
        <div className="apsbNavOptions">
          <div className="apsbnavop">
            <Link to="/feed">
              <div className="apsbnavopButton">
                <span className="apsbNOIcon">
                  <MdDashboard />
                </span>
                <span className="apsbNOtext">Dashboard</span>
              </div>
            </Link>
          </div>
          <div className="apsbnavop">
            <Link to="/hotel">
              <div className="apsbnavopButton">
                <span className="apsbNOIcon">
                  <FaHotel />
                </span>
                <span className="apsbNOtext">Hotel</span>
              </div>
            </Link>
          </div>

          <div className="apsbnavop">
            <div className="apsbnavopButton">
              <span className="apsbNOIcon bookingsIcon">
                <BsFillCalendarWeekFill />
              </span>
              <span className="apsbNOtext">Booking</span>
              <span className="apsbNOIconErrow">
                <IoIosArrowForward />
              </span>
            </div>
            <div className="apsbNMoreOptions">
              <Link to="/allbookings">All bookings</Link>
              <Link to="/booking/new/add">Add booking</Link>
              <Link to="/booking/edit">Edit booking</Link>
            </div>
          </div>

          <div className="apsbnavop">
            <div className="apsbnavopButton">
              <span className="apsbNOIcon">
                <AiTwotoneHome />
              </span>
              <span className="apsbNOtext">Room</span>
              <span className="apsbNOIconErrow">
                <IoIosArrowForward />
              </span>
            </div>
            <div className="apsbNMoreOptions">
              <Link to="/allrooms">All Room</Link>
              <Link to="/room/type">Room Types</Link>
            </div>
          </div>

          <div className="apsbnavop">
            <div className="apsbnavopButton">
              <span className="apsbNOIcon">
                <HiOutlineDocumentReport />
              </span>
              <span className="apsbNOtext">Report</span>
              <span className="apsbNOIconErrow">
                <IoIosArrowForward />
              </span>
            </div>
            <div className="apsbNMoreOptions">
              <Link to="/report/stock">Stock</Link>
              <Link to="/report/booking">Booking</Link>
            </div>
          </div>

          <div className="apsbnavop">
            <Link to="/">
              <div className="apsbnavopButton">
                <span className="apsbNOIcon">
                  <IoMdPeople />
                </span>
                <span className="apsbNOtext">Customers</span>
              </div>
            </Link>
          </div>

          <div className="apsbnavop">
            <Link to="/">
              <div className="apsbnavopButton">
                <span className="apsbNOIcon">
                  <IoMdPeople />
                </span>
                <span className="apsbNOtext">Staff</span>
              </div>
            </Link>
          </div>

          <div className="apsbnavop">
            <Link to="/expense">
              <div className="apsbnavopButton">
                <span className="apsbNOIcon">
                  <GiExpense />
                </span>
                <span className="apsbNOtext">Expense</span>
              </div>
            </Link>
          </div>

          <div className="apsbnavop">
            <div className="apsbnavopButton">
              <span className="apsbNOIcon">
                <HiOutlineDocumentReport />
              </span>
              <span className="apsbNOtext">Payment</span>
              <span className="apsbNOIconErrow">
                <IoIosArrowForward />
              </span>
            </div>
            <div className="apsbNMoreOptions">
              <Link to="/">Payment Settlment</Link>
            </div>
          </div>

          <div className="apsbnavop">
            <Link to="/">
              <div className="apsbnavopButton">
                <span className="apsbNOIcon">
                  <BsFillChatDotsFill />
                </span>
                <span className="apsbNOtext">Support</span>
              </div>
            </Link>
          </div>

          <div className="apsbnavop">
            <Link to="/">
              <div className="apsbnavopButton">
                <span className="apsbNOIcon">
                  <MdCleaningServices />
                </span>
                <span className="apsbNOtext">House Kepping</span>
              </div>
            </Link>
          </div>

          <div className="apsbnavop">
            <Link to="/">
              <div className="apsbnavopButton">
                <span className="apsbNOIcon">
                  <MdFastfood />
                </span>
                <span className="apsbNOtext">Food Ordering</span>
              </div>
            </Link>
          </div>

          <div className="apsbnavop">
            <Link to="/">
              <div className="apsbnavopButton">
                <span className="apsbNOIcon">
                  <MdReviews />
                </span>
                <span className="apsbNOtext">Reviews</span>
              </div>
            </Link>
          </div>

          <div className="apsbnavop">
            <Link to="/">
              <div className="apsbnavopButton">
                <span className="apsbNOIcon">
                  <AiFillSetting />
                </span>
                <span className="apsbNOtext">Settings</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SideMenu;
