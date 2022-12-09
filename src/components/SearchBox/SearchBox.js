import { useRef } from "react";
import styles from "./SearchBox.module.scss";

export const SearchBox = ({ posts, setFilteredPosts }) => {
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
    <form className={`${styles["search"]} flex`} onSubmit={handleSubmit}>
      <input
        ref={searchInput}
        type="text"
        className={styles["search__text-input"]}
        aria-label="Enter search text"
      />
      <button
        className={styles["search__button"]}
        aria-label="Search"
        type="submit"
      ></button>
    </form>
  );
};
