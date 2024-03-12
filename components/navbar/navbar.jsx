import React from "react";
import { Link } from "../link";
import cx from "classnames";
import HomeIcon from "../../images/home.svg";
import BlogIcon from "../../images/quill.svg";
import styles from "./navbar.module.scss";

console.log(styles);

function NavBar({ logoWordmark }) {
  return (
    <div className={styles.navbar}>
      <div className={styles.logoWordmark}>{logoWordmark}</div>
      <nav className={styles.navContainer}>
        <ul className={styles.navList}>
          <li>
            <Link className={styles.navLink} href="/">
              <HomeIcon className={cx(styles.navIcon, styles.house)} />
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} href="/blog">
              <BlogIcon className={cx(styles.navIcon, styles.blog)} />
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export { NavBar };
