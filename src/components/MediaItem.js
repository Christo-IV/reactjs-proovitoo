import "./MediaItem.css";
import { format } from "date-fns";

const MediaItem = ({ name, type, imgUrl, keywords, date, going }) => {
  const mediaItemDate = new Date(date);
  const dayAndMonth = format(mediaItemDate, "dd LLL").split(" ");

  const tomorrow = new Date();
  tomorrow.setDate(new Date().getDate() + 1);

  return (
    <div className="mediaItem flex">
      <div className={`mediaItem-img flex ${type}`}>
        <p className="mediaItem-date">{dayAndMonth.join(" ")}</p>
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
                  ? [...dayAndMonth].reverse().join(" ")
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
          {tomorrow.toDateString() === mediaItemDate.toDateString() && (
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

export default MediaItem;
