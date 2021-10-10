import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { history } from "../../redux/helpers/history.js";
import { logout } from "../../redux/actions/auth.js";
import { clearMessage } from "../../redux/actions/message.js";
import EventBus from "../../common/EventBus.js";

const Navbar = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      let role = currentUser.user.roles[0].name;

      if (role === "manager") {
        setShowModeratorBoard(true);
      }
      if (role === "admin") {
        setShowAdminBoard(true);
      }
    } else {
      setShowModeratorBoard(false);
      setShowAdminBoard(false);
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      {currentUser ? (
        <Link to={"/dashboard"} className="navbar-brand text-white">
          UMI
        </Link>
      ) : (
        <Link to={"/login"} className="navbar-brand text-white">
          UMI
        </Link>
      )}
      <div className="navbar-nav mr-auto">
        {/*         <li className="nav-item">
          <Link to={"/home"} className="nav-link text-white">
            Home
          </Link>
        </li> */}

        {showModeratorBoard && (
          <>
            <li className="nav-item">
              <Link to={"/showUsers"} className="nav-link text-white">
                Show All Users
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/addUser"} className="nav-link text-white">
                Add User
              </Link>
            </li>
          </>
        )}

        {showAdminBoard && (
          <li className="nav-item">
            <Link to={"/admin"} className="nav-link text-white">
              Admin Board
            </Link>
          </li>
        )}

        {currentUser && (
          <li className="nav-item">
            <Link to={"/user"} className="nav-link text-white">
              User
            </Link>
          </li>
        )}
      </div>

      {currentUser ? (
        <div className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to={"/dashboard"} className="nav-link text-white">
              {currentUser.user.firstName}'s Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <a href="/login" className="nav-link text-white" onClick={logOut}>
              LogOut
            </a>
          </li>
        </div>
      ) : (
        <div className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to={"/login"} className="nav-link text-white">
              Login
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/register"} className="nav-link text-white">
              Sign Up
            </Link>
          </li>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
