import React from "react";
import styles from "./Header.module.scss";

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <div className={styles["header"]}>
      <h2>{title}</h2>
      <span className={styles["header__divider"]}></span>
    </div>
  );
};
