import styles from "./Comment.module.scss";
import { format } from "date-fns";

export const Comment = ({ comment }) => {
  const { text, date, author } = comment;

  return (
    <div className={styles["comment"]}>
      <p>{text}</p>
      <p className={styles["comment__posted-on"]}>{`${format(
        new Date(date),
        "LLL dd"
      )} by ${author}`}</p>
    </div>
  );
};