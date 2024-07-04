import React from "react";
import styles from "./footer.module.css";

function Footer() {
  return (
    <div>
      <h5 className={styles.line}> </h5>
      <footer className={styles.footer}>
        &copy; Designed and developed by Zaheya Kdmany and Kareen Salamy, 2024
      </footer>
    </div>
  );
}

export default Footer;
