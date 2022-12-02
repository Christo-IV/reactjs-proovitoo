import "./LatestComment.css";

const LatestComment = ({ commentObj }) => {
  const { comment, date, author } = commentObj;
  const commentDate = new Date(date).toDateString().split(" ");

  return (
    <div className="latest-comment">
      <p className="comment">{comment}</p>
      <p className="postedOn">{`${commentDate[1]} ${commentDate[2]} by ${author}`}</p>
    </div>
  );
};

export default LatestComment;
