import "./MediaItem.css";

const MediaItem = ({ name, type, imgUrl, keywords, date, going }) => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const mediaItemDate = new Date(date);

  const dayOfMonth = mediaItemDate.toDateString().split(" ");

  return (
    <div className="mediaItem flex">
      <div className={`mediaItem-img flex ${type}`}>
        <p className="mediaItem-date">{dayOfMonth[2] + " " + dayOfMonth[1]}</p>
        {imgUrl && <img src={imgUrl} alt={name} />}
      </div>
      <div className="mediaItem-content flex">
        <h3 className="mediaItem-name">{name}</h3>
        <ul className="mediaItem-keywords flex">
          {keywords.map((keyword, index) => (
            <>
              {index % 2 === 1 && <span className="dividing-dot"></span>}
              <li className="mediaItem-keyword flex" key={name + index}>
                {keyword}
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
