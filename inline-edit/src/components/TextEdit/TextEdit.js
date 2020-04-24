import React from "react";
import "./TextEdit.css";

const TextEdit = ({ text, save }) => {
  return (
    <div className="text-edit">
      <p>{text}</p>
    </div>
  );
};

export default TextEdit;
