import styles from "./MediaItem.module.scss";
import { format, add } from "date-fns";

export const MediaItem = ({ name, type, imgUrl, keywords, date, going }) => {
  const mediaItemDate = new Date(date);
  const tomorrowFns = add(new Date(), { days: 1 });

  const specialKeywords = {
    Going: going,
    Tomorrow: tomorrowFns.toDateString() === mediaItemDate.toDateString(),
  };

  const getSpecialKeywords = () => {
    return Object.keys(specialKeywords).filter((keyword) => {
      return specialKeywords[keyword];
    });
  };

  return (
    <div className={`${styles["mediaItem"]} flex`}>
      <div className={`${styles["img"]} flex ${styles["img--" + type]}`}>
        <p className={`${styles["img__date"]} flex`}>
          {format(mediaItemDate, "dd LLL")}
        </p>
        {imgUrl && <img src={imgUrl} alt={name} />}
      </div>
      <div className={`${styles["content"]} flex`}>
        <h3 className={styles["content__name"]}>{name}</h3>
        <ul className={`${styles["keywords"]} flex`}>
          {[...keywords, ...getSpecialKeywords()].map((keyword, index) => (
            <>
              {index > 0 && (
                <span className={styles["keywords__dividing-dot"]}></span>
              )}
              <li
                className={
                  styles["keywords__keyword--" + keyword.toLowerCase()]
                }
                key={name + index}
              >
                {keyword === "mediaDate"
                  ? format(mediaItemDate, "LLL dd")
                  : keyword}
              </li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};
