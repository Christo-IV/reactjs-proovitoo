import { useRef } from "react";
import "./SearchBox.css";

const SearchBox = ({ posts, setFilteredPosts }) => {
  const searchInput = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    searchPosts();
  };

  const searchPosts = () => {
    const searchResults = posts.filter((post) => {
      const postTitle = post.title.toUpperCase();
      const searchMessage = searchInput.current.value;

      return postTitle.includes(searchMessage.toUpperCase()) ? post : undefined;
    });

    setFilteredPosts(searchResults);
  };

  return (
    <form className="search-box flex" onSubmit={handleSubmit}>
      <input
        ref={searchInput}
        type="text"
        className="text-input"
        aria-label="Enter search text"
      />
      <button className="search-btn" aria-label="Search" type="submit"></button>
    </form>
  );
};

export default SearchBox;
