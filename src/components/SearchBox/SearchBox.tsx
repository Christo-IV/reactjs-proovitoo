import { useRef } from "react";
import "./SearchBox.css";
import { SinglePost } from "../Post/Post";
import React, { Dispatch, SetStateAction } from "react";

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
