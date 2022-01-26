import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Home
        </li>
        <li>My CV</li>
        <li>Projects</li>
        <li>Contact me</li>
      </ul>
    </nav>
  );
}

export default Navbar;
