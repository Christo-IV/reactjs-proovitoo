import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Post from "./components/Post";

const App = () => {
  const [posts, setPosts] = useState(Array);

  const getPosts = async () => {
    const response = await fetch("data/posts.json", {
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    });

    const result = await response.json();

    setPosts(result);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container flex">
        <div className="posts flex">
          {posts.map((post, index) => (
            <Post props={post} key={index} />
          ))}
        </div>
        <aside className="collections">asd</aside>
      </div>
    </div>
  );
};

export default App;
