import "./App.scss";
import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Post, SinglePost } from "./components/Post/Post";
import { Header } from "./components/Header/Header";
import { MediaItem, Item } from "./components/MediaItem/MediaItem";
import {
  LatestComment,
  Comment,
} from "./components/LatestComment/LatestComment";
import { SearchBox } from "./components/SearchBox/SearchBox";
import React, { Dispatch } from "react";
import { api } from "./api/api";

interface PostsWithComments {
  [key: string]: Comment[];
}

export const App = () => {
  const [posts, setPosts] = useState<SinglePost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<SinglePost[] | undefined>(
    undefined
  );
  const [events, setEvents] = useState<Item[]>([]);
  const [birthdays, setBirthdays] = useState<Item[]>([]);
  const [newcomers, setNewcomers] = useState<Item[]>([]);
  const [latestComments, setLatestComments] = useState<Comment[]>([]);
  const [postsWithComments, setPostsWithComments] = useState<PostsWithComments>(
    {}
  );

  const getData = async <String, T>(
    filename: String,
    stateSetter: Dispatch<T>
  ) => {
    const response = await fetch(`data/${filename}.json`, {
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    });

    const result = await response.json();

    stateSetter(result);
  };

  useEffect(() => {
    getData("events", setEvents);
    getData("birthdays", setBirthdays);
    getData("newcomers", setNewcomers);
    getData("comments", setLatestComments);

    api.get("/Posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  useEffect(() => {
    // Gets all post titles
    const allPostsWithComments = latestComments.map(
      (comment: Comment) => comment.postTitle
    );

    // Creates keys for all post titles
    const commentsByPost: PostsWithComments = {};
    allPostsWithComments.forEach((title: string) => {
      commentsByPost[title] = [];
    });

    // Links comments to corresponding post titles
    latestComments.forEach((comment) => {
      commentsByPost[comment.postTitle] = commentsByPost[
        comment.postTitle
      ].concat([comment]);
    });

    setPostsWithComments(commentsByPost);
  }, [latestComments]);

  return (
    <div className="App">
      <Navbar />
      <div className="container flex">
        <div className="posts flex">
          <SearchBox posts={posts} setFilteredPosts={setFilteredPosts} />
          {(filteredPosts ?? posts).map((post: SinglePost, index: number) => (
            <Post post={post} key={index} />
          ))}
        </div>
        <aside className="collections flex">
          <div className="collection flex">
            <Header title="EVENTS" />
            {events.map((event, index: number) => (
              <MediaItem mediaItem={event} key={event.name + index} />
            ))}
          </div>
          <div className="collection flex">
            <Header title="BIRTHDAYS" />
            {birthdays.map((birthday, index: number) => (
              <MediaItem mediaItem={birthday} key={birthday.name + index} />
            ))}
          </div>
          <div className="collection flex">
            <Header title="NEWCOMERS" />
            {newcomers.map((newcomer, index: number) => (
              <MediaItem mediaItem={newcomer} key={newcomer.name + index} />
            ))}
          </div>
          <div className="collection flex">
            <Header title="LATEST COMMENTS" />
            {Object.keys(postsWithComments).map((title) => (
              <div key={title}>
                <p className="comment-title">{title}</p>
                {postsWithComments[title].map(
                  (comment: Comment, index: number) => (
                    <LatestComment comment={comment} key={index} />
                  )
                )}
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
};
