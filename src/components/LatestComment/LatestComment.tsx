import React from "react";
import "./LatestComment.css";

interface Props {
  comment: ILatestComment;
}

export interface ILatestComment {
  text: string;
  date: string;
  author: string;
  postTitle: string;
}

export const LatestComment = ({ comment }: Props) => {
  const { text, date, author } = comment;
  const commentDate = new Date(date).toDateString().split(" ");

  return (
    <div className="latest-comment">
      <p className="comment">{text}</p>
      <p className="postedOn">{`${commentDate[1]} ${commentDate[2]} by ${author}`}</p>
    </div>
  );
};
