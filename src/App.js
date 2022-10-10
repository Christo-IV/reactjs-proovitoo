import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import Header from "./components/Header";
import Snippet from "./components/Snippet";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [events, setEvents] = useState([]);
  const [birthdays, setBirthdays] = useState([]);
  const [newcomers, setNewcomers] = useState([]);

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
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container flex">
        <div className="posts flex">
          {posts.map((post, index) => (
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
        </aside>
      </div>
    </div>
  );
};

export default App;
