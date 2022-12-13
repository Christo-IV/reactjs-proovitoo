import styles from "./MediaItem.module.scss";
import { format, add } from "date-fns";
import React from "react";

interface MediaItemProps {
  mediaItem: Item;
}

export interface Item {
  name: string;
  type: string;
  imgUrl: string;
  keywords: string[];
  date: string;
  going: boolean;
}

export const MediaItem = ({ mediaItem }: MediaItemProps) => {
  const { name, type, imgUrl, keywords, date, going } = mediaItem;

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
      <div className={`${styles["img"]} flex ${styles[type]}`}>
        <p className={`${styles["date"]} flex`}>
          {format(mediaItemDate, "dd LLL")}
        </p>
        {imgUrl && <img src={imgUrl} alt={name} />}
      </div>
      <div className={`${styles["content"]} flex`}>
        <h3 className={styles["name"]}>{name}</h3>
        <ul className={`${styles["keywords"]} flex`}>
          {[...keywords, ...getSpecialKeywords()].map((keyword, index) => (
            <>
              {index > 0 && <span className={styles["dividing-dot"]}></span>}
              <li
                className={`${styles["keyword"]} ${
                  styles[keyword.toLowerCase()] ?? ""
                } flex`}
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
