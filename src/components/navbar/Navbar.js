import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbarNav}>
      <Link className={styles.navLink} to="/">
        <img src="./assets/nav/logo.png" alt="logo" />
      </Link>
      <div className={styles.navBars}></div>

      <div className={styles.navMenu}>
        <Link className={styles.navLink} to="/">
          Register
        </Link>
      </div>

      <div className={styles.navBtn}>
        <Link className={styles.navBtnLink} to="/login">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
