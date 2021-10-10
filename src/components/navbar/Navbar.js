import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

//Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { history } from "../../redux/helpers/history.js";
import { logout } from "../../redux/actions/auth.actions.js";
import { clearMessage } from "../../redux/actions/message.actions.js";
import EventBus from "../../common/EventBus.js";

const Navbar = () => {
  const [showManagerBoard, setShowManagerBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

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
    } else {
      setShowManagerBoard(false);
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
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {currentUser ? (
        <Link to={"/dashboard"} className="navbar-brand text-dark mx-auto">
          UMI
        </Link>
      ) : (
        <Link to={"/login"} className="navbar-brand text-dark mx-3 px-3">
          UMI
        </Link>
      )}

      <button
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

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <div className="navbar-nav mr-auto ">
          {showManagerBoard && (
            <>
              <li className="nav-item">
                <Link to={"/dashboard"} className="nav-link text-dark">
                  My Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/addUser"} className="nav-link text-dark">
                  Add User
                </Link>
              </li>
            </>
          )}

          {showAdminBoard && (
            <li className="nav-item">
              <Link to={"/admin"} className="nav-link text-dark">
                Admin Board
              </Link>
            </li>
          )}
        </div>
        {currentUser ? (
          <div className="navbar-nav ml-auto">
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
    </nav>
  );
};

export default Navbar;
