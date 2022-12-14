import { useRef } from "react";
import { SinglePost } from "../Post/Post";
import React, { Dispatch, SetStateAction } from "react";
import styles from "./SearchBox.module.scss";

interface SearchBoxProps {
  posts: SinglePost[];
  setFilteredPosts: Dispatch<SetStateAction<SinglePost[] | undefined>>;
}

export const SearchBox = ({ posts, setFilteredPosts }: SearchBoxProps) => {
  const searchInput = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    searchPosts();
  };

  const searchPosts = () => {
    const searchResults = posts.filter((post) => {
      const postTitle = post.title.toUpperCase();
      const searchMessage = searchInput.current!.value;

      return postTitle.includes(searchMessage.toUpperCase()) ? post : undefined;
    });

    setFilteredPosts(searchResults);
  };

  return (
    <form className={`${styles["search-box"]} flex`} onSubmit={handleSubmit}>
      <input
        ref={searchInput}
        type="text"
        className={styles["text-input"]}
        aria-label="Enter search text"
      />
      <button
        className={styles["search-btn"]}
        aria-label="Search"
        type="submit"
      ></button>
    </form>
  );
};
