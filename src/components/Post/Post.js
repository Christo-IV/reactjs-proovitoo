import styles from "./Post.module.scss";

export const Post = ({ post }) => {
  const { imgUrl, imgAlt, title, author, date, text, tags, userMetrics } = post;

  return (
    <article className={styles["post"]}>
      <img src={imgUrl} alt={imgAlt} className={styles["cover"]} />
      <div className={`${styles["content"]} flex`}>
        <h2 className={styles["title"]}>{title}</h2>
        <p className={styles["published"]}>
          Published by {author} on {date}
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
