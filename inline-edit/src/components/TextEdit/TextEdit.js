import React, { useEffect, useState } from "react";
import FeedbackContainer from "../FeedbackContainer";
import "./TextEdit.css";

const TextEdit = ({ text, save }) => {
  const [editText, setEditText] = useState("");
  const [viewMode, setViewMode] = useState("view");

  const handleTextClick = () => {
    setViewMode("edit");
  };

  const handleTextChange = (event) => {
    setEditText(event.target.value);
  };

  const handleTextSave = () => {
    if (editText === text) {
      setViewMode("view");
      return;
    }
    setViewMode("saveInProgress");
    save(editText)
      .then(() => {
        setViewMode("saveSuccess");
      })
      .catch(() => {
        setViewMode("saveError");
        setEditText(text);
      });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleTextSave();
    }
  };

  useEffect(() => {
    setEditText(text);
  }, [text]);

  useEffect(() => {
    if (viewMode === "saveSuccess" || viewMode === "saveError") {
      setTimeout(() => setViewMode("view"), 3000);
    }
  }, [viewMode]);

  const TextInput = () => (
    <input
      type="text"
      id="text"
      className="text-edit-input"
      value={editText}
      onChange={handleTextChange}
      onBlur={handleTextSave}
      onKeyPress={handleKeyPress}
      placeholder="Add text here"
      autoFocus
    />
  );

  return (
    <div className="text-edit">
      <div className="text-edit-text-wrapper">
        {viewMode === "view" && (!text || text === "") && (
          <button onClick={handleTextClick}>Add text</button>
        )}
        {viewMode === "view" && <p onClick={handleTextClick}>{text}</p>}
        {viewMode === "edit" && <TextInput />}
        {viewMode === "saveInProgress" && (
          <FeedbackContainer type="spinner">
            <p>{editText}</p>
          </FeedbackContainer>
        )}
        {viewMode === "saveSuccess" && (
          <FeedbackContainer type="success">
            <p>{text}</p>
          </FeedbackContainer>
        )}
        {viewMode === "saveError" && (
          <FeedbackContainer
            type="failure"
            message="Oops! Something has gone terribly wrong!"
          >
            <p>{text}</p>
          </FeedbackContainer>
        )}
      </div>
    </div>
  );
};

export default TextEdit;
