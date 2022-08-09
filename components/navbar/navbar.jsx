import React from "react";
import { Link } from "../link";
import styles from "./navbar.module.scss";

function NavBar({ logoWordmark }) {
  return (
    <div className={styles.navbar}>
      <div className={styles.logoWordmark}>{logoWordmark}</div>
      <nav className={styles.navContainer}>
        <ul className={styles.navList}>
          <li>
            <Link className={styles.navLink} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} href="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export { NavBar };
