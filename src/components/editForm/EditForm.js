import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./EditForm.module.css";
import Button from "../UI/button/Button.js";

//Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/actions/users.actions";
import { clearMessage } from "../../redux/actions/message.actions";

const EditForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  //Selectors from Redux
  const { user } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.users);
  const { message } = useSelector((state) => state.message);

  //States Initialized
  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [userForm, setUserForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password_confirmation: "",
    userType: "users",
  });

  //Side Effects
  useEffect(() => {
    if (users.data) {
      const userData = users.data.find((user) => {
        return user.id.toString() === id.toString();
      });

      setUserForm({
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
      });
    }
    // eslint-disable-next-line
  }, [users]);


  //Handler func's
  const changeHandler = async (e) => {
    await setUserForm({
      ...userForm,
      [e.target.name]: e.target.value,
    });
  };

  const refreshMessage = () => {
    dispatch(clearMessage());
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setSuccessful(false);
    setLoading(true);
    const editRegUser = { ...userForm, userType: "user" };
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

  return (
    <div className={styles.formWrapper}>
      <div className={styles.formTitle}>Update User</div>
      <form onSubmit={submitHandler} className={styles.form}>
        {!successful && (
          <div>
            <div className={styles.formInputField}>
              <label>First Name</label>
              <input
                type="text"
                id="fname"
                name="firstName"
                placeholder="Your name.."
                onChange={changeHandler}
                value={userForm.firstName || ""}
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
                value={userForm.lastName || ""}
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
                value={userForm.email || ""}
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
                value={userForm.password || ""}
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
                value={userForm.password_confirmation || ""}
                className={styles.formInput}
              />
            </div>

            <Button loading={loading} submit={submitHandler}>
              Update User
            </Button>
          </div>
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
          </div>
        )}
      </form>
    </div>
  );
};

export default EditForm;
