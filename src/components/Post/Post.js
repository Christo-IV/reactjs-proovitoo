import styles from "./Post.module.scss";
import { Content } from "../Content/Content";

export const Post = ({ post }) => {
  const { imgUrl, imgAlt, title, author, date, text, tags, userMetrics } = post;

  const formattedMetrics = Object.keys(userMetrics).map(
    (metric) => `${userMetrics[metric]} ${metric}`
  );

  return (
    <article className={styles["post"]}>
      <img src={imgUrl} alt={imgAlt} className={styles["post__cover"]} />
      <Content
        header={title}
        author={author}
        date={date}
        text={text}
        tags={tags}
        keywords={formattedMetrics}
      />
    </article>
  );
};
