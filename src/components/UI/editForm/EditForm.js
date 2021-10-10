import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../../redux/actions/users.actions";
import { clearMessage } from "../../../redux/actions/message.actions";

import styles from "./EditForm.module.css";

const EditForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.users);

  const { message } = useSelector((state) => state.message);

  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);

  const [userForm, setUserForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  useEffect(() => {
    if (users.length > 0) {
      setUserForm(
        users.find((user) => {
          return user.id.toString() === id.toString();
        })
      );
    }
    // eslint-disable-next-line
  }, [users]);

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
    const editRegUser = { ...userForm, userType: "users" };
    dispatch(updateUser(id, editRegUser, user.token))
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

  return (
    <div className={styles.formWrapper}>
      <div className={styles.formTitle}>Update User</div>
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

            <div className="form-group">
              <button className="btn btn-primary btn-block" disabled={loading}>
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Update User</span>
              </button>
            </div>
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
                to="/showUsers"
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

export default EditForm;
