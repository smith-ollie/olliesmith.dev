import React from "react";
import styles from "./page.module.scss";

function Page({ children, navBar }) {
  return (
    <div className={styles.container}>
      {navBar}
      <main>{children}</main>
    </div>
  );
}

export { Page };
