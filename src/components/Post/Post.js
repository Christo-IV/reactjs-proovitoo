import styles from "./Post.module.scss";
import { format } from "date-fns";

export const Post = ({ post }) => {
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

  return (
    <article className={styles["post"]}>
      <img src={image} alt={title} className={styles["cover"]} />
      <div className={`${styles["content"]} flex`}>
        <h2 className={styles["title"]}>{title}</h2>
        <p className={styles["published"]}>
          Published by {author} on {format(new Date(createdAt), "LLL dd, yyyy")}
        </p>
        <p className={styles["text"]}>{content}</p>
        <ul className={`${styles["tags"]} flex`}>
          {tags.map((tag, index) => (
            <li className={styles.tag} key={tag + index}>
              {tag}
            </li>
          ))}
        </ul>
        <span className={styles["divider"]}></span>
        <div className={`${styles["user-metrics"]} flex`}>
          <p>{likes} like</p>
          <span className={styles["dividing-dot"]}></span>
          <p>{comments} comments</p>
          <span className={styles["dividing-dot"]}></span>
          <p>{views} views</p>
        </div>
      </div>
    </article>
  );
};
