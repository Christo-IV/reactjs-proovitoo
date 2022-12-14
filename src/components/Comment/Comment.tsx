import styles from "./Comment.module.scss";
import { format } from "date-fns";
import React from "react";

interface CommentProps {
  comment: SingleComment;
}

export interface SingleComment {
  text: string;
  date: string;
  author: string;
  postTitle: string;
}

export const Comment = ({ comment }: CommentProps) => {
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
