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
            <span style={{ fontWeight: 800, fontSize: 24 }}>acmeCo</span>
          </div>
          <div className={`${styles.navlinks} ${isOpen ? styles.active : ""}`}>
            <li>Home</li>
            <li>Books</li>
            <li>Guest</li>
            <li>Events</li>
            <li>Services</li>
            <Avatar
              alt="Remy Sharp"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            />
          </div>
          <div className={styles.hamburger} onClick={toggleMenu}></div>
        </div>
      </header>
    </>
  );
};
