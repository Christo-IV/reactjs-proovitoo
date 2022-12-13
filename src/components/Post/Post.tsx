import React from "react";
import "./Post.css";

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
    <article className="post">
      <img src={imgUrl} alt={imgAlt} className="post-cover" />
      <div className="content flex">
        <h2 className="post-title">{title}</h2>
        <p className="published">
          Published by {author} on {date}
        </p>
        <p className="post-text">{text}</p>
        <ul className="tags flex">
          {tags.map((tag, index) => (
            <li className="tag" key={tag + index}>
              {tag}
            </li>
          ))}
        </ul>
        <span className="divider"></span>
        <div className="user-metrics flex">
          <p className="likes">{userMetrics.likes} like</p>
          <span className="dividing-dot"></span>
          <p className="comments">{userMetrics.comments} comments</p>
          <span className="dividing-dot"></span>
          <p className="views">{userMetrics.views} views</p>
        </div>
      </div>
    </article>
  );
};
