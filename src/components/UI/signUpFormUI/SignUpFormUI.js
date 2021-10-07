import React, { useState } from "react";
import styles from "./SignUpFormUI.module.css";

const SignUpFormUI = () => {
  const [userForm, setUserForm] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const changeHandler = async (e) => {
    await setUserForm({
      ...userForm,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async () => {
    await setUserForm({
      ...userForm,
    });
  };

  console.log(userForm);

  return (
    <div className={styles.formWrapper}>
      <div className={styles.formTitle}>Registration Form</div>
      <form onSubmit={submitHandler} className={styles.form}>
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

export default SignUpFormUI;
