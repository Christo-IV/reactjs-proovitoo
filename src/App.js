import "./App.css";
import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Post } from "./components/Post/Post";
import { Header } from "./components/Header/Header";
import { MediaItem } from "./components/MediaItem/MediaItem";
import { LatestComment } from "./components/LatestComment/LatestComment";
import { SearchBox } from "./components/SearchBox/SearchBox";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState(undefined);
  const [events, setEvents] = useState([]);
  const [birthdays, setBirthdays] = useState([]);
  const [newcomers, setNewcomers] = useState([]);
  const [latestComments, setLatestComments] = useState([]);
  const [postsWithComments, setPostsWithComments] = useState({});

  const getData = async (filename, stateSetter) => {
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
      (comment) => comment.postTitle
    );

    // Creates keys for all post titles
    const commentsByPost = {};
    allPostsWithComments.forEach((title) => {
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
          {(filteredPosts ?? posts).map((post, index) => (
            <Post post={post} key={index} />
          ))}
        </div>
        <aside className="collections flex">
          <div className="collection flex">
            <Header title="EVENTS" />
            {events.map((event, index) => (
              <MediaItem {...event} key={event.name + index} />
            ))}
          </div>
          <div className="collection flex">
            <Header title="BIRTHDAYS" />
            {birthdays.map((birthday, index) => (
              <MediaItem {...birthday} key={birthday.name + index} />
            ))}
          </div>
          <div className="collection flex">
            <Header title="NEWCOMERS" />
            {newcomers.map((newcomer, index) => (
              <MediaItem {...newcomer} key={newcomer.name + index} />
            ))}
          </div>
          <div className="collection flex">
            <Header title="LATEST COMMENTS" />
            {Object.keys(postsWithComments).map((title) => (
              <div key={title}>
                <p className="comment-title">{title}</p>
                {postsWithComments[title].map((comment, index) => (
                  <LatestComment comment={comment} key={index} />
                ))}
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default App;
