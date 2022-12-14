import styles from "./LatestComment.module.scss";
import { format } from "date-fns";

export const LatestComment = ({ comment }) => {
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
