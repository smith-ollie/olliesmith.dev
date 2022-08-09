import NextLink from "next/link";
import cx from "classnames";
import styles from "./link.module.scss";

function Link({ children, className, ...props }) {
  return (
    <NextLink {...props}>
      <a className={cx(styles.link, className)} data-text={children}>
        {children}
      </a>
    </NextLink>
  );
}

export { Link };
