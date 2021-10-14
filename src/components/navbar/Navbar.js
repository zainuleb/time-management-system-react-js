import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

//Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { history } from "../../redux/helpers/history.js";
import { logout } from "../../redux/actions/auth.actions.js";
import { clearMessage } from "../../redux/actions/message.actions.js";
import EventBus from "../../common/EventBus.js";

const Navbar = () => {

  //Role States of Respective Users
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [showManagerBoard, setShowManagerBoard] = useState(false);
  const [showUserBoard, setShowUserBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);


  const dispatch = useDispatch();

  const clearMessageHandler = () => {
    dispatch(clearMessage());
  };

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage());
    });
  }, [dispatch]);

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      let role = currentUser.user.roles[0].name;

      if (role === "manager") {
        setShowManagerBoard(true);
      }
      if (role === "admin") {
        setShowAdminBoard(true);
      }
      if (role === "user") {
        setShowUserBoard(true);
      }
    } else {
      setShowManagerBoard(false);
      setShowAdminBoard(false);
      setShowUserBoard(false);
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);

  //Toggle States
  const [toogle, setToggle] = useState("");
  const [menu, setMenu] = useState("");
  const toggleMenu = () => {
    setToggle(toogle === "" ? "on" : "");
    setMenu(menu === "" ? "show" : "");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      {/* Render User Nav based on Role */}
      
      {currentUser ? (
        <Link
          to={"/dashboard"}
          className="navbar-brand text-dark mx-3 px-3"
          onClick={clearMessageHandler}
        >
          UMSYS
        </Link>
      ) : (
        <Link
          to={"/login"}
          className="navbar-brand text-dark mx-3 px-3"
          onClick={clearMessageHandler}
        >
          UMSYS
        </Link>
      )}
      <button
        onClick={toggleMenu}
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapsed ${menu}`} id="navbarNavDropdown">
        <div className="navbar-nav mx-auto">
          {showManagerBoard && (
            <>
              <li className="nav-item">
                <Link
                  to={"/dashboard"}
                  className="nav-link text-dark"
                  onClick={clearMessageHandler}
                >
                  My Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/addUser"}
                  className="nav-link text-dark"
                  onClick={clearMessageHandler}
                >
                  Add User
                </Link>
              </li>
            </>
          )}

          {showAdminBoard && (
            <>
              <li className="nav-item">
                <Link
                  to={"/dashboard"}
                  className="nav-link text-dark"
                  onClick={clearMessageHandler}
                >
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/addUser"}
                  className="nav-link text-dark"
                  onClick={clearMessageHandler}
                >
                  Add Users
                </Link>
              </li>
            </>
          )}

          {showUserBoard && (
            <>
              <li className="nav-item">
                <Link
                  to={"/dashboard"}
                  className="nav-link text-dark"
                  onClick={clearMessageHandler}
                >
                  My Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/addLog"}
                  className="nav-link text-dark"
                  onClick={clearMessageHandler}
                >
                  Add Log
                </Link>
              </li>
            </>
          )}
          {currentUser ? (
            <div className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link
                  to="/login"
                  className="nav-link text-danger"
                  onClick={logOut}
                >
                  LogOut
                </Link>
              </li>
            </div>
          ) : (
            <div className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link text-dark">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link text-dark">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
