import styles from "./Header.module.css";
export const Header = () => {
  return (
    <>
      <header>
        <div className={styles.navbar_container}>
          <div className={styles.logo}>
            <span style={{ marginLeft: "44px" }}>acmeCo</span>
          </div>
          <div className={styles.navlinks}>
            <li>Home</li>
            <li>Books</li>
            <li>Guest</li>
            <li>Events</li>
            <li>Services</li>
            <span>Logo</span>
          </div>
        </div>
      </header>
    </>
  );
};
