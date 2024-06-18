import { useState } from "react";
import styles from "./Header.module.css";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <div className={styles.navbar_container}>
          <div className={styles.logo}>
            <span style={{ marginLeft: "44px" }}>acmeCo</span>
          </div>
          <div className={`${styles.navlinks} ${isOpen ? styles.active : ""}`}>
            <li>Home</li>
            <li>Books</li>
            <li>Guest</li>
            <li>Events</li>
            <li>Services</li>
            <span>Logo</span>
          </div>
          <div className={styles.hamburger} onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </header>
    </>
  );
};
