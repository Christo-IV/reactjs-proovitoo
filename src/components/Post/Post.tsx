import React from "react";
import styles from "./Post.module.scss";
import { format } from "date-fns";

interface PostProps {
  post: SinglePost;
}

export interface SinglePost {
  id: number;
  imgUrl: string;
  imgAlt: string;
  title: string;
  author: string;
  date: string;
  text: string;
  tags: string[];
  userMetrics: {
    likes: number;
    comments: number;
    views: number;
  };
}

export const Post = ({ post }: PostProps) => {
  const { imgUrl, imgAlt, title, author, date, text, tags, userMetrics } = post;

  return (
    <article className={styles["post"]}>
      <img src={imgUrl} alt={imgAlt} className={styles["cover"]} />
      <div className={`${styles["content"]} flex`}>
        <h2 className={styles["title"]}>{title}</h2>
        <p className={styles["published"]}>
          Published by {author} on {format(new Date(date), "LLL dd, yyyy")}
        </p>
        <p className={styles["text"]}>{text}</p>
        <ul className={`${styles["tags"]} flex`}>
          {tags.map((tag, index) => (
            <li className={styles.tag} key={tag + index}>
              {tag}
            </li>
          ))}
        </ul>
        <span className={styles["divider"]}></span>
        <div className={`${styles["user-metrics"]} flex`}>
          <p>{userMetrics.likes} like</p>
          <span className={styles["dividing-dot"]}></span>
          <p>{userMetrics.comments} comments</p>
          <span className={styles["dividing-dot"]}></span>
          <p>{userMetrics.views} views</p>
        </div>
      </div>
    </article>
  );
};
