import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <p className={styles.logoText}>
          Moda Makers <span>.</span>
        </p>
      </div>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/">
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/login">
              Login
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/signin">
              Signin
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
