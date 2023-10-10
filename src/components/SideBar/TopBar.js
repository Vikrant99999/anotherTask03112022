import React, { Fragment, useEffect, useState } from "react";
import "./TopBar.css";
import { AiOutlineUser } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsChevronDown } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { IconButton } from "@mui/material";
import { AiFillSetting } from "react-icons/ai";

const TopBar = () => {
  const [show, setShow] = useState(false);
  const [len, setLen] = useState(100);

  const Hamburger = () => {
    document.querySelector("body").classList.toggle("sideMenuOpen");
  };

  // adding sticky navbar class
  useEffect(() => {
    // const navigate = useNavigate();
    const navbar = document.querySelector(".admp-global-topbar");
    window.addEventListener("scroll", () => {
      navbar.classList.toggle("sticky", window.scrollY > 0);
    });
  }, []);

  const handleLogout = () => {
    // dispatch(userLogout());
    // navigate("/login");
  };

  const showHide = () => {
    setShow(!show);
  };

  const myHotel = "This is Hotel Name";
  useEffect(() => {
    if (window.innerWidth <= 768) setLen(15);

    if (window.innerWidth <= 540) setLen(10);

    if (window.innerWidth <= 411) setLen(7);

    if (window.innerWidth <= 360) setLen(3);
  }, []);
  return (
    <Fragment>
      <div className="admp-global-topbar">
        <div className="admp-global-head">
          <span className="aptbhIcon" onClick={Hamburger}>
            <IconButton>
              <BiMenu />
            </IconButton>
          </span>
          <h1 className="kn-global-topbar-title-logo">Kunggy</h1>
        </div>
        <h2>
          {myHotel.length >= len ? myHotel.slice(0, len - 3) + "..." : myHotel}
        </h2>

        <div className="admp-global-administrator">
          <div className="admp-global-admini-user" onClick={showHide}>
            <AiOutlineUser />
            <div className="admp-global-admini-user-op">
              <div>Administrator</div>
              <div>
                <span>Abu bin xyz</span>
                <span>
                  <BsChevronDown />
                </span>
              </div>
            </div>
          </div>
          <div
            className={
              show
                ? "kn-global-admin-topbar-action open"
                : "kn-global-admin-topbar-action"
            }
          >
            <div className="kn-global-admin-topbar-actions">
              <div className="kn-gata-user">
                <div className="kn-gata-user-profile-img"></div>
                <div className="kn-gata-user-info">
                  <div className="kn-gata-user-name">firstName lastName</div>
                  <div className="kn-gata-user-email">
                    <small>abc@gmail.com</small>
                  </div>
                </div>
              </div>
              <Link to={`/user/me`}>
                <span className="kn-global-admin-topbar-action-option">
                  <FaUserAlt /> My Profile
                </span>
              </Link>
              <Link to={`/account/setting`}>
                <span className="kn-global-admin-topbar-action-option">
                  <AiFillSetting /> Account setting
                </span>
              </Link>
            </div>
            <div className="kn-global-admin-topbar-action-logout">
              <button onClick={handleLogout}>Log Out</button>
            </div>
          </div>
          <Link to="/">
            <IconButton>
              <IoMdNotificationsOutline />
            </IconButton>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default TopBar;
