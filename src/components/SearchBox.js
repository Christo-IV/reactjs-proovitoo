import { useRef } from "react";
import "./SearchBox.css";

const SearchBox = ({ posts, setSearchResults }) => {
  const searchInput = useRef(null);

  const searchPosts = () => {
    const searchResults = posts.filter((post) => {
      const postTitle = post.title.toUpperCase();
      const searchMessage = searchInput.current.value;

      if (postTitle.includes(searchMessage.toUpperCase())) return post;
    });

    setSearchResults(searchResults);
  };

  return (
    <div className="search-box flex">
      <input ref={searchInput} type="text" className="text-input" />
      <button className="search-btn" onClick={searchPosts}>
        <span className="search-icon"></span>
      </button>
    </div>
  );
};

export default SearchBox;
