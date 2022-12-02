import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import Header from "./components/Header";
import Snippet from "./components/Snippet";
import LatestComment from "./components/LatestComment";
import SearchBox from "./components/SearchBox";

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
    const commentsByPost = {};

    latestComments.forEach((comment) => {
      const postTitle = comment.postTitle;
      if (!Object.keys(commentsByPost).includes(postTitle)) {
        commentsByPost[postTitle] = [];
      }
      commentsByPost[postTitle].push(comment);
    });
    setPostsWithComments(commentsByPost);

    console.log("Posts & comments:", postsWithComments);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container flex">
        <div className="posts flex">
          <SearchBox posts={posts} setFilteredPosts={setFilteredPosts} />
          {(filteredPosts ?? posts).map((post, index) => (
            <Post {...post} key={index} />
          ))}
        </div>
        <aside className="collections flex">
          <div className="collection flex">
            <Header title="EVENTS" />
            {events.map((event, index) => (
              <Snippet {...event} key={event.name + index} />
            ))}
          </div>
          <div className="collection flex">
            <Header title="BIRTHDAYS" />
            {birthdays.map((birthday, index) => (
              <Snippet {...birthday} key={birthday.name + index} />
            ))}
          </div>
          <div className="collection flex">
            <Header title="NEWCOMERS" />
            {newcomers.map((newcomer, index) => (
              <Snippet {...newcomer} key={newcomer.name + index} />
            ))}
          </div>
          <div className="collection flex">
            <Header title="LATEST COMMENTS" />
            {/* {Object.keys(postsWithComments).map((postTitle) => (
              <div key={postTitle}>
                <p className="post-title">{postTitle}</p>
                {postsWithComments[postTitle].map((comment, index) => (
                  <LatestComment {...comment} key={index} />
                ))}
              </div>
            ))} */}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default App;
