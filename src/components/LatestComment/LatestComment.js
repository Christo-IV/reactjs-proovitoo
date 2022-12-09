import styles from "./LatestComment.module.scss";

export const LatestComment = ({ comment }) => {
  const { text, date, author } = comment;
  const commentDate = new Date(date).toDateString().split(" ");

  return (
    <div className={styles["comment"]}>
      <p>{text}</p>
      <p
        className={styles["posted-on"]}
      >{`${commentDate[1]} ${commentDate[2]} by ${author}`}</p>
    </div>
  );
};
