import React, { useState, useEffect } from "react";
import styles from "./SignUpForm.module.css";
import Button from "../UI/button/Button.js";

//Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/actions/auth.actions";
import { addUser } from "../../redux/actions/users.actions";
import { clearMessage } from "../../redux/actions/message.actions";

const SignUpForm = () => {

  const dispatch = useDispatch();

  //Selectors from Redux
  const { message } = useSelector((state) => state.message);
  const { user } = useSelector((state) => state.auth);

  //States Initialized
  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [userForm, setUserForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password_confirmation: "",
  });



  //Handler func's
  const changeHandler = async (e) => {
    await setUserForm({
      ...userForm,
      [e.target.name]: e.target.value,
    });
  };

  //Func for Signing Up Manager
  const submitManagerRegisterHandler = async (e) => {
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
      })
      .catch(() => {
        setSuccessful(false);
        setLoading(false);
      });
  };

  //Func for Adding User by Manager
  const regularUserAddSubmit = (e) => {
    e.preventDefault();
    setSuccessful(false);
    setLoading(true);
    const regUser = { ...userForm, userType: "user" };
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

  useEffect(() => {
    setUserForm({});
    dispatch(clearMessage());

    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.formWrapper}>
      <div className={styles.formTitle}>
        {user ? "Add User Form" : "Registration Form"}
      </div>
      <form className={styles.form}>
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
                value={userForm.firstName}
                className={styles.formInput}
                required
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
                required
              />
            </div>
            <div className={styles.formInputField}>
              <label>Email Address</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Your email Address.."
                onChange={changeHandler}
                value={userForm.email}
                className={styles.formInput}
                required
              />
            </div>
            <div className={styles.formInputField}>
              <label>Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Your password.."
                onChange={changeHandler}
                value={userForm.password}
                className={styles.formInput}
                required
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
                required
              />
            </div>
            {user ? (
              <Button loading={loading} submit={regularUserAddSubmit}>
                Add Regular User
              </Button>
            ) : (
              <Button loading={loading} submit={submitManagerRegisterHandler}>
                Register
              </Button>
            )}
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

export default SignUpForm;
