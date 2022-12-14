import React from "react";
import styles from "./LatestComment.module.scss";
import { format } from "date-fns";

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

  return (
    <div className={styles["comment"]}>
      <p>{text}</p>
      <p className={styles["posted-on"]}>{`${format(
        new Date(date),
        "LLL dd"
      )} by ${author}`}</p>
    </div>
  );
};
