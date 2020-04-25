import React, { useEffect, useState } from "react";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import Button from "@material-ui/core/Button";
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
    if (viewMode === "saveSuccess") {
      setTimeout(() => setViewMode("view"), 1500);
    }
    if (viewMode === "saveError") {
      setTimeout(() => setViewMode("view"), 2500);
    }
  }, [viewMode]);

  return (
    <div className="text-edit">
      <div className="text-edit-text-wrapper">
        {viewMode === "view" && (!text || text === "") && (
          <Button
            variant="outlined"
            size="small"
            color="default"
            startIcon={<TextFieldsIcon />}
            onClick={handleTextClick}
          >
            Add Text
          </Button>
        )}
        {viewMode === "view" && (
          <p onClick={handleTextClick} title="Click on text to edit">
            {text}
          </p>
        )}
        {viewMode === "edit" && (
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
        )}
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
