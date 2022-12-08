import styles from "./MediaItem.module.scss";
import { format, add } from "date-fns";

export const MediaItem = ({ name, type, imgUrl, keywords, date, going }) => {
  const mediaItemDate = new Date(date);

  const tomorrowFns = add(new Date(), { days: 1 });

  return (
    <div className={`${styles["mediaItem"]} flex`}>
      <div className={`${styles["img"]} flex ${type}`}>
        <p className={`${styles["date"]} flex`}>
          {format(mediaItemDate, "dd LLL")}
        </p>
        {imgUrl && <img src={imgUrl} alt={name} />}
      </div>
      <div className={`${styles["content"]} flex`}>
        <h3 className={styles["name"]}>{name}</h3>
        <ul className={`${styles["keywords"]} flex`}>
          {keywords.map((keyword, index) => (
            <>
              {index % 2 === 1 && (
                <span className={styles["dividing-dot"]}></span>
              )}
              <li className={`${styles["keyword"]} flex`} key={name + index}>
                {keyword === "mediaDate"
                  ? format(mediaItemDate, "LLL dd")
                  : keyword}
              </li>
            </>
          ))}
          {going && (
            <>
              <span className={styles["dividing-dot"]}></span>
              <li className={`${styles["keyword"]} ${styles["success"]}`}>
                Going
              </li>
            </>
          )}
          {tomorrowFns.toDateString() === mediaItemDate.toDateString() && (
            <>
              <span className={styles["dividing-dot"]}></span>
              <li className={`${styles["keyword"]} ${styles["danger"]}`}>
                Tomorrow
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};
