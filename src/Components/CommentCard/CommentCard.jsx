import React, { useState, useEffect } from "react";
import { Fragment } from "react/cjs/react.production.min";

const CommentCard = ({ currentPostId }) => {
  const [comments, setComments] = useState([]);
  console.log(comments, "CURRENT");

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${currentPostId}`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        //console.log(json, "JSON");
        setComments(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, [currentPostId]);

  return (
    <div className="px-4">
      {comments.map((comment) => {
        return (
          <Fragment>
            <p>Name: {comment.name}</p>
            <p>Email: {comment.email}</p>
            <p>Message: {comment.body}</p>
          </Fragment>
        );
      })}
    </div>
  );
};

export default CommentCard;
