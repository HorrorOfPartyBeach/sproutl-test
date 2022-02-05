import React from "react";
import CommentCard from "../CommentCard/CommentCard";

const Card = ({ post, isOpen }) => {
  const { id, body } = post;
  return (
    isOpen && (
      <div className="px-2 py-4">
        {body}
        <CommentCard currentPostId={id} />
      </div>
    )
  );
};

export default Card;
