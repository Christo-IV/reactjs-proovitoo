import { useRef } from "react";
import "./SearchBox.css";

const SearchBox = ({ posts, setFilteredPosts }) => {
  const searchInput = useRef(null);

  const handleKeydown = (event) => {
    if (event.key === "Enter") {
      searchPosts();
    }
  };

  const searchPosts = () => {
    const searchResults = posts.filter((post) => {
      const postTitle = post.title.toUpperCase();
      const searchMessage = searchInput.current.value;

      if (postTitle.includes(searchMessage.toUpperCase())) return post;
    });

    setFilteredPosts(searchResults);
  };

  return (
    <div className="search-box flex">
      <input
        ref={searchInput}
        type="text"
        className="text-input"
        aria-label="Enter search text"
        onKeyDown={handleKeydown}
      />
      <button className="search-btn" onClick={searchPosts} aria-label="Search">
        <span className="search-icon"></span>
      </button>
    </div>
  );
};

export default SearchBox;
