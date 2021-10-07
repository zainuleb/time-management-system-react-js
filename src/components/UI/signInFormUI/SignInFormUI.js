import React, { useState } from "react";
import styles from "./SignInFormUI.module.css";
import { useDispatch } from "react-redux";
import { userActions } from "../../../redux/actions/index.js";

const SignInFormUI = () => {
  let dispatch = useDispatch();

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

  const submitHandler = async (e) => {
    e.preventDefault();
    /* userActions.login(userForm.email, userForm.password); */
    await dispatch(userActions.login(userForm.email, userForm.password));
  };

  console.log(userForm);

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

        {/* <div className={styles.formInputField}>
          <label>Role</label>
          <div className={styles.customSelect}>
            <select>
              <option value="">Select</option>
              <option value="user">User</option>
              <option value="manager">Manager</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
        </div> */}

        {/*         <div className={styles.formInputField}>
          <label className={`${styles.formCheck} ${styles.terms}`}>
            <input type="checkbox" />
            <span className={styles.formCheckmark}></span>
          </label>
          <p>Agreed to terms and conditions</p>
        </div> */}
        <div className={styles.formInputField}>
          <input type="submit" value="Register" className={styles.formBtn} />
        </div>
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

export default SignInFormUI;
