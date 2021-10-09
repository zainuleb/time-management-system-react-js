import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const Navbar = () => {
  /*   const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]); */

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
