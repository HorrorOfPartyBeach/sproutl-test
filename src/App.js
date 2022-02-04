import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json, "JSON");
        setPosts(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">Sproutl Blog</header>
      <section className="container mx-auto px-4">
        {posts.map((post) => {
          return (
            <div key={post.id} className="text-3xl font-bold underline">
              {post.title}
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;
