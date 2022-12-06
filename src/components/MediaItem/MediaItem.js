import "./MediaItem.css";
import { format, add } from "date-fns";

export const MediaItem = ({ name, type, imgUrl, keywords, date, going }) => {
  const mediaItemDate = new Date(date);

  const tomorrowFns = add(new Date(), { days: 1 });

  return (
    <div className="mediaItem flex">
      <div className={`mediaItem-img flex ${type}`}>
        <p className="mediaItem-date">{format(mediaItemDate, "dd LLL")}</p>
        {imgUrl && <img src={imgUrl} alt={name} />}
      </div>
      <div className="mediaItem-content flex">
        <h3 className="mediaItem-name">{name}</h3>
        <ul className="mediaItem-keywords flex">
          {keywords.map((keyword, index) => (
            <>
              {index % 2 === 1 && <span className="dividing-dot"></span>}
              <li className="mediaItem-keyword flex" key={name + index}>
                {keyword === "mediaDate"
                  ? format(mediaItemDate, "LLL dd")
                  : keyword}
              </li>
            </>
          ))}
          {going && (
            <>
              <span className="dividing-dot"></span>
              <li className="mediaItem-keyword success">Going</li>
            </>
          )}
          {tomorrowFns.toDateString() === mediaItemDate.toDateString() && (
            <>
              <span className="dividing-dot"></span>
              <li className="mediaItem-keyword danger">Tomorrow</li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};
