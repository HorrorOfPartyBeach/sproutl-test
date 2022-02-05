import React from "react";

const Card = ({ post, isOpen }) => {
  const { body } = post;
  return isOpen && <div className="px-4">{body}</div>;
};

export default Card;
