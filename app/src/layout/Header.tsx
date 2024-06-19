import { useState } from "react";
import styles from "./Header.module.css";
import { Avatar } from "@mui/material";

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
            <span style={{ marginLeft: "44px", fontWeight: 800, fontSize: 24 }}>
              acmeCo
            </span>
          </div>
          <div className={`${styles.navlinks} ${isOpen ? styles.active : ""}`}>
            <li>Home</li>
            <li>Books</li>
            <li>Guest</li>
            <li>Events</li>
            <li>Services</li>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
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
