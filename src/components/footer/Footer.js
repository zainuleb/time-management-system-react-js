import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <small className={styles.copyright}>
        Copyrights © 2021 All Rights Reserved By
        <Link to="https://github.com/zainuleb"> zainuleb</Link>.
      </small>
    </footer>
  );
};

export default Footer;
