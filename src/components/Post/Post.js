import styles from "./Post.module.scss";
import { format } from "date-fns";

export const Post = ({ post }) => {
  const { imgUrl, imgAlt, title, author, date, text, tags, userMetrics } = post;

  return (
    <article className={styles["post"]}>
      <img src={imgUrl} alt={imgAlt} className={styles["post__cover"]} />
      <div className={`${styles["content"]} flex`}>
        <h2 className={styles["content__title"]}>{title}</h2>
        <p className={styles["content__published"]}>
          Published by {author} on {format(new Date(date), "LLL dd, yyyy")}
        </p>
        <p className={styles["content__text"]}>{text}</p>
        <ul className={`${styles["content__tags"]} flex`}>
          {tags.map((tag, index) => (
            <li className={styles.tag} key={tag + index}>
              {tag}
            </li>
          ))}
        </ul>
        <span className={styles["content__divider"]}></span>
        <div className={`${styles["metrics"]} flex`}>
          <p>{userMetrics.likes} like</p>
          <span className={styles["metrics__dividing-dot"]}></span>
          <p>{userMetrics.comments} comments</p>
          <span className={styles["metrics__dividing-dot"]}></span>
          <p>{userMetrics.views} views</p>
        </div>
      </div>
    </article>
  );
};
