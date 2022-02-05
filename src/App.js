import "./App.css";
import React, { Fragment, useEffect, useState } from "react";
import Card from "./Components/Card/Card";
import Button from "./Components/Button/Button";

function App() {
  const [posts, setPosts] = useState([]);
  const [cardIsOpen, setCardIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(-1);

  const toggleCardState = (e, cardIndex) => {
    setSelectedCard(selectedCard === cardIndex ? -1 : cardIndex);
    setCardIsOpen(!cardIsOpen);
  };

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        //console.log(json, "JSON");
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
            <Fragment key={post.id}>
              <div className="shadow-md p-8 border m-4 rounded-md">
                <div className="flex justify-between text-2xl">
                  {post.title}
                  <Button
                    id={post.id}
                    text={cardIsOpen ? "Close" : "Read More"}
                    onClick={(e) => toggleCardState(e, post.id)}
                  />
                </div>
                {selectedCard === post.id && (
                  <Card post={post} isOpen={cardIsOpen} />
                )}
              </div>
            </Fragment>
          );
        })}
      </section>
    </div>
  );
}

export default App;
