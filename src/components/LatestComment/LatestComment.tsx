import React from "react";
import styles from "./LatestComment.module.scss";

interface LatestCommentProps {
  comment: Comment;
}

export interface Comment {
  text: string;
  date: string;
  author: string;
  postTitle: string;
}

export const LatestComment = ({ comment }: LatestCommentProps) => {
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
