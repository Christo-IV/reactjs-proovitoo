import styles from "./Header.module.scss";

export const Header = ({ title }) => {
  return (
    <div className={styles["header"]}>
      <h2>{title}</h2>
      <span className={styles["header__divider"]}></span>
    </div>
  );
};
