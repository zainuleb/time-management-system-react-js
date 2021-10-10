import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { register } from "../../../redux/actions/auth";

import styles from "./SignUpFormUI.module.css";
import { clearMessage } from "../../../redux/actions/message";
import { addUser } from "../../../redux/actions/users.actions";

const SignUpFormUI = (role) => {
  const [loading, setLoading] = useState(false);
  const [userForm, setUserForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [successful, setSuccessful] = useState(false);
  const { message } = useSelector((state) => state.message);
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {}, [user]);
  const dispatch = useDispatch();

  const changeHandler = async (e) => {
    await setUserForm({
      ...userForm,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setSuccessful(false);
    setLoading(true);
    dispatch(
      register(
        userForm.firstName,
        userForm.lastName,
        userForm.email,
        userForm.password,
        userForm.password_confirmation
      )
    )
      .then(() => {
        setSuccessful(true);
        setLoading(false);
        refreshMessage();
      })
      .catch(() => {
        setSuccessful(false);
        setLoading(false);
      });
  };

  const refreshMessage = () => {
    dispatch(clearMessage());
  };

  const regularUserSubmit = (e) => {
    e.preventDefault();
    setSuccessful(false);
    setLoading(true);
    const regUser = { ...userForm, userType: "users" };
    dispatch(addUser(regUser, user.token))
      .then(() => {
        setSuccessful(true);
        setLoading(false);
      })
      .catch(() => {
        setSuccessful(false);
        setLoading(false);
      });
  };

  return (
    <div className={styles.formWrapper}>
      <div className={styles.formTitle}>Registration Form</div>
      <form onSubmit={submitHandler} className={styles.form}>
        {!successful && (
          <>
            <div className={styles.formInputField}>
              <label>First Name</label>
              <input
                type="text"
                id="fname"
                name="firstName"
                placeholder="Your name.."
                onChange={changeHandler}
                value={userForm.firstName}
                className={styles.formInput}
              />
            </div>
            <div className={styles.formInputField}>
              <label>Last Name</label>
              <input
                type="text"
                id="lname"
                name="lastName"
                placeholder="Your last name.."
                onChange={changeHandler}
                value={userForm.lastName}
                className={styles.formInput}
              />
            </div>
            <div className={styles.formInputField}>
              <label>Email Address</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Your email Address"
                onChange={changeHandler}
                value={userForm.email}
                className={styles.formInput}
              />
            </div>
            <div className={styles.formInputField}>
              <label>Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Your password"
                onChange={changeHandler}
                value={userForm.password}
                className={styles.formInput}
              />
            </div>
            <div className={styles.formInputField}>
              <label>Confirm Password</label>
              <input
                type="password"
                id="password_confirmation"
                name="password_confirmation"
                placeholder="Confirm Password"
                onChange={changeHandler}
                value={userForm.password_confirmation}
                className={styles.formInput}
              />
            </div>
            {role ? (
              <div className="form-group">
                <button
                  className="btn btn-primary btn-block"
                  disabled={loading}
                  onClick={regularUserSubmit}
                >
                  {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Add Regular User</span>
                </button>
              </div>
            ) : (
              <div className={styles.formInputField}>
                <input
                  type="submit"
                  value="Register"
                  className={styles.formBtn}
                />
              </div>
            )}
          </>
        )}

        {message && (
          <div className="form-group">
            <div
              className={
                successful ? "alert alert-success" : "alert alert-danger"
              }
              role="alert"
            >
              {message}
            </div>
            <div className={styles.formInputField}>
              <Link
                to="/login"
                onClick={refreshMessage}
                className={styles.formBtn}
              >
                Go to Login
              </Link>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default SignUpFormUI;

/* <div className={styles.formInputField}>
          <label>Role</label>
          <div className={styles.customSelect}>
            <select>
              <option value="">Select</option>
              <option value="user">User</option>
              <option value="manager">Manager</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
        </div> */

/*         <div className={styles.formInputField}>
          <label className={`${styles.formCheck} ${styles.terms}`}>
            <input type="checkbox" />
            <span className={styles.formCheckmark}></span>
          </label>
          <p>Agreed to terms and conditions</p>
        </div> */
