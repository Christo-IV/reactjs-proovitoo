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
  const [linkedLatestComments, setLinkedLatestComments] = useState([]);

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

  const RenderPosts = ({ posts }) => {
    return posts.map((post, index) => <Post {...post} key={index} />);
  };

  useEffect(() => {
    getData("posts", setPosts);
    getData("events", setEvents);
    getData("birthdays", setBirthdays);
    getData("newcomers", setNewcomers);
    getData("comments", setLatestComments);
  }, []);

  // useEffect(() => {
  //   if (filteredPosts.length === 0) {
  //     setFilteredPosts(posts);
  //   }
  // }, [posts]);

  useEffect(() => {
    const allPostIds = posts.map((post) => post.id);
    const postsWithComments = {}; // For grouping comments by post

    latestComments.forEach((comment) => {
      if (allPostIds.includes(comment.postId)) {
        console.log(comment.postId);
      }
    });
    setLinkedLatestComments(postsWithComments);
  }, [latestComments]);

  return (
    <div className="App">
      <Navbar />
      <div className="container flex">
        <div className="posts flex">
          <SearchBox posts={posts} setFilteredPosts={setFilteredPosts} />
          <RenderPosts posts={filteredPosts ?? posts} />
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
            {Object.keys(linkedLatestComments).map((postTitle) => (
              <div key={postTitle}>
                <p className="post-title">{postTitle}</p>
                {linkedLatestComments[postTitle].map((comment, index) => (
                  <LatestComment {...comment} key={index} />
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
