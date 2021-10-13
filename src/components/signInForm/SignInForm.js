import React, { useState, useEffect } from "react";
import Button from "../UI/button/Button.js";
import styles from "./SignInForm.module.css";

//Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../redux/actions/auth.actions.js";
import { clearMessage } from "../../redux/actions/message.actions.js";


const SignInForm = (props) => {
  let dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const [userForm, setUserForm] = useState({
    email: "",
    password: "",
  });

  const changeHandler = async (e) => {
    await setUserForm({
      ...userForm,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(login(userForm.email, userForm.password))
      .then(() => {
        props.history.push("/dashboard");
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };


  useEffect(() => {
      setUserForm({});
      dispatch(clearMessage())

    // eslint-disable-next-line
  }, []);

  if (isLoggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className={styles.formWrapper}>
      <div className={styles.formTitle}>Login Form</div>
      <form onSubmit={submitHandler} className={styles.form}>
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
            required
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
            required
          />
        </div>
        <Button loading={loading} submit={submitHandler}>
          Login
        </Button>

        {message && (
          <div className="form-group">
            <div className="alert alert-danger" role="alert">
              {message}
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default SignInForm;
