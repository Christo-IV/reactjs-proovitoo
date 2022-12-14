import styles from "./Content.module.scss";
import { format } from "date-fns";
import classnames from "classnames";

export const Content = ({ header, author, date, text, tags, keywords }) => {
  return (
    <div
      className={classnames(styles["content"], "flex", {
        [styles["content--big"]]: text || tags,
      })}
    >
      <h2
        className={classnames(styles[`content__header`], {
          [styles[`content__header--big`]]: text || tags,
        })}
      >
        {header}
      </h2>
      {author && date && (
        <p className={styles["content__published"]}>
          Published by {author} on {format(new Date(date), "LLL dd, yyyy")}
        </p>
      )}
      {text && <p className={styles["content__text"]}>{text}</p>}
      <ul className={`${styles["content__tags"]} flex`}>
        {tags &&
          tags.map((tag, index) => (
            <li className={styles.tag} key={`${header}-${tag}-${index}`}>
              {tag}
            </li>
          ))}
      </ul>
      {(author || text || tags) && (
        <span className={styles["content__divider"]}></span>
      )}
      <ul className={`${styles["content__keywords"]} flex`}>
        {keywords &&
          [...keywords].map((keyword, index) => (
            <>
              {index > 0 && (
                <span
                  className={styles["content__dividing-dot"]}
                  key={`dot-${index}`}
                ></span>
              )}
              <li
                className={styles["content__keyword--" + keyword.toLowerCase()]}
                key={`${header}-${keyword}`}
              >
                {date && keyword === "mediaDate"
                  ? format(new Date(date), "LLL dd")
                  : keyword}
              </li>
            </>
          ))}
      </ul>
    </div>
  );
};
