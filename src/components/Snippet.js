import "./Snippet.css";

const Snippet = ({ name, type, imgUrl, keywords, date, going }) => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const snippetDate = new Date(date);

  const dayOfMonth = snippetDate.toDateString().split(" ");

  return (
    <div className="snippet flex">
      <div className={`snippet-img flex ${type}`}>
        <p className="snippet-date">{dayOfMonth[2] + " " + dayOfMonth[1]}</p>
        {typeof imgUrl !== "undefined" && <img src={imgUrl} alt={name} />}
      </div>
      <div className="snippet-content flex">
        <h3 className="snippet-name">{name}</h3>
        <ul className="snippet-keywords flex">
          {keywords.map((keyword, index) => (
            <li className="snippet-keyword flex" key={name + index}>
              {index % 2 === 1 && <span className="dividing-dot"></span>}
              {keyword}
            </li>
          ))}
          {going ? (
            <>
              <span className="dividing-dot"></span>
              <li className="snippet-keyword success">Going</li>
            </>
          ) : (
            tomorrow.toDateString() === snippetDate.toDateString() && (
              <>
                <span className="dividing-dot"></span>
                <li className="snippet-keyword danger">Tomorrow</li>
              </>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Snippet;
