import React from "react";

const Button = ({ text, onClick }) => (
  <button
    aria-label={text}
    type="button"
    className="bg-cyan-900 text-white px-4 py-2 text-sm rounded-full"
    onClick={onClick}
  >
    {text}
  </button>
);

export default Button;
