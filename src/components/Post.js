import "./Post.css";

const Post = ({ post }) => {
  const { imgUrl, imgAlt, title, author, date, text, tags, userMetrics } = post;

  return (
    <article className="post">
      <img src={imgUrl} alt={imgAlt} className="post-cover" />
      <div className="content flex">
        <h2 className="post-title">{title}</h2>
        <p className="published">
          Published by {author} on {date}
        </p>
        <p className="post-text">{text}</p>
        <ul className="tags flex">
          {tags.map((tag, index) => (
            <li className="tag" key={tag + index}>
              {tag}
            </li>
          ))}
        </ul>
        <span className="divider"></span>
        <div className="user-metrics flex">
          <p className="likes">{userMetrics.likes} like</p>
          <span className="dividing-dot"></span>
          <p className="comments">{userMetrics.comments} comments</p>
          <span className="dividing-dot"></span>
          <p className="views">{userMetrics.views} views</p>
        </div>
      </div>
    </article>
  );
};

export default Post;
