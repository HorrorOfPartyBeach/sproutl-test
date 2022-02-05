import React, { useState, useEffect } from "react";

const CommentCard = ({ currentPostId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${currentPostId}`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setComments(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, [currentPostId]);

  return (
    <div className="divide-y divide-solid">
      {comments.map((comment) => {
        return (
          <div key={comment.id} className="py-4 px-2">
            <p>Name: {comment.name}</p>
            <p>Email: {comment.email}</p>
            <p>Message: {comment.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CommentCard;
