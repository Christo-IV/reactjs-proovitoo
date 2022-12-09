import "./App.css";
import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Post, IPost } from "./components/Post/Post";
import { Header } from "./components/Header/Header";
import { MediaItem, IMediaItem } from "./components/MediaItem/MediaItem";
import {
  LatestComment,
  ILatestComment,
} from "./components/LatestComment/LatestComment";
import { SearchBox } from "./components/SearchBox/SearchBox";
import React, { Dispatch } from "react";

interface IPostsWithComments {
  [key: string]: ILatestComment[];
}

export const App = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<IPost[] | undefined>(
    undefined
  );
  const [events, setEvents] = useState<IMediaItem[]>([]);
  const [birthdays, setBirthdays] = useState<IMediaItem[]>([]);
  const [newcomers, setNewcomers] = useState<IMediaItem[]>([]);
  const [latestComments, setLatestComments] = useState<ILatestComment[]>([]);
  const [postsWithComments, setPostsWithComments] = useState<
    IPostsWithComments
  >({});

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
    getData("posts", setPosts);
    getData("events", setEvents);
    getData("birthdays", setBirthdays);
    getData("newcomers", setNewcomers);
    getData("comments", setLatestComments);
  }, []);

  useEffect(() => {
    // Gets all post titles
    const allPostsWithComments = latestComments.map(
      (comment: ILatestComment) => comment.postTitle
    );

    // Creates keys for all post titles
    const commentsByPost: IPostsWithComments = {};
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
          {(filteredPosts ?? posts).map((post: IPost, index: number) => (
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
                  (comment: ILatestComment, index: number) => (
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
