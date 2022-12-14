import styles from "./MediaItem.module.scss";
import { format, add } from "date-fns";
import { Content } from "../Content/Content";
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

  const specialKeywords: {
    [key: string]: boolean;
  } = {
    Going: going,
    Tomorrow: tomorrowFns.toDateString() === mediaItemDate.toDateString(),
  };

  const getSpecialKeywords = () => {
    return Object.keys(specialKeywords).filter((keyword) => {
      return specialKeywords[keyword];
    });
  };

  return (
    <div className={`${styles["media-item"]} flex`}>
      <div className={`${styles["img"]} flex ${styles[`img--${type}`]}`}>
        <p className={`${styles["img__date"]} flex`}>
          {format(mediaItemDate, "dd LLL")}
        </p>
        {imgUrl && <img src={imgUrl} alt={name} />}
      </div>
      <Content
        keywords={[...keywords, ...getSpecialKeywords()]}
        header={name}
        date={date}
      />
    </div>
  );
};
