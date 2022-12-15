import React from "react";
import styles from "./Post.module.scss";
import { Content } from "../Content/Content";

interface PostProps {
  post: SinglePost;
}

export interface SinglePost {
  id: number;
  image: string;
  title: string;
  author: string;
  createdAt: string;
  content: string;
  tags: string[];
  likes: number;
  comments: number;
  views: number;
}

export const Post = ({ post }: PostProps) => {
  const {
    image,
    title,
    author,
    createdAt,
    content,
    tags,
    likes,
    views,
    comments,
  } = post;

  const keywords = [`${likes} likes`, `${views} views`, `${comments} comments`];

  return (
    <article className={styles["post"]}>
      <img src={image} alt={title} className={styles["post__cover"]} />
      <Content
        header={title}
        author={author}
        date={createdAt}
        text={content}
        tags={tags}
        keywords={keywords}
      />
    </article>
  );
};
