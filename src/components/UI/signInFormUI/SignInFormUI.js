import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../../redux/actions/auth.js";
import styles from "./SignInFormUI.module.css";

const SignInFormUI = (props) => {
  let dispatch = useDispatch();

  const [userForm, setUserForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

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
        props.history.push("/profile");
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };

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
        <div className="form-group">
          <button className="btn btn-primary btn-block" disabled={loading}>
            {loading && (
              <span className="spinner-border spinner-border-sm"></span>
            )}
            <span>Login</span>
          </button>
        </div>

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

/* function mapState(state) {
  const { loggingIn } = state.authentication;
  return { loggingIn };
}
 */
/* const actionCreators = {
  login: userActions.login,
  logout: userActions.logout,
}; */
/* 
const connectedLoginPage = connect(mapState, actionCreators)(SignInFormUI);
export { connectedLoginPage as SignInFormUI };
 */

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
        </div> 
        <div className={styles.formInputField}>
          <input type="submit" value="Register" className={styles.formBtn} />
        </div>
        */

export default SignInFormUI;
