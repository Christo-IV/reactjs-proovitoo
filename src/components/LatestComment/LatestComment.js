import "./LatestComment.scss";

export const LatestComment = ({ comment }) => {
  const { text, date, author } = comment;
  const commentDate = new Date(date).toDateString().split(" ");

  return (
    <div className="latest-comment">
      <p className="comment">{text}</p>
      <p className="postedOn">{`${commentDate[1]} ${commentDate[2]} by ${author}`}</p>
    </div>
  );
};
