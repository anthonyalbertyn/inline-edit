import React, { useEffect, useState } from "react";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import Button from "@material-ui/core/Button";
import FeedbackContainer from "../FeedbackContainer";
import "./TextEdit.css";

const TextEdit = ({ text, save }) => {
  const modes = {
    EDIT: "edit",
    VIEW: "view",
    SAVE_IN_PROGRESS: "saveInProgress",
    SAVE_SUCCESS: "saveSuccess",
    SAVE_ERROR: "saveError",
  };

  const [editText, setEditText] = useState("");
  const [viewMode, setViewMode] = useState(modes.VIEW);

  const handleTextClick = () => {
    setViewMode(modes.EDIT);
  };

  const handleTextChange = (event) => {
    setEditText(event.target.value);
  };

  const handleTextSave = () => {
    if (editText === text) {
      setViewMode(modes.VIEW);
      return;
    }
    setViewMode(modes.SAVE_IN_PROGRESS);
    save(editText)
      .then(() => {
        setViewMode(modes.SAVE_SUCCESS);
      })
      .catch(() => {
        setViewMode(modes.SAVE_ERROR);
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
    if (viewMode === modes.SAVE_SUCCESS) {
      setTimeout(() => setViewMode(modes.VIEW), 1500);
    }
    if (viewMode === modes.SAVE_ERROR) {
      setTimeout(() => setViewMode(modes.VIEW), 2500);
    }
  }, [viewMode, modes]);

  return (
    <div className="text-edit">
      <div className="text-edit-text-wrapper">
        {viewMode === modes.VIEW && !text && (
          <Button
            variant="outlined"
            size="small"
            color="inherit"
            startIcon={<TextFieldsIcon />}
            onClick={handleTextClick}
          >
            Add Text
          </Button>
        )}
        {viewMode === modes.VIEW && text && (
          <p onClick={handleTextClick} title="Click on text to edit">
            {text}
          </p>
        )}
        {viewMode === modes.EDIT && (
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
        {viewMode === modes.SAVE_IN_PROGRESS && (
          <FeedbackContainer type="spinner">
            <p>{editText}</p>
          </FeedbackContainer>
        )}
        {viewMode === modes.SAVE_SUCCESS && (
          <FeedbackContainer type="success">
            <p>{text}</p>
          </FeedbackContainer>
        )}
        {viewMode === modes.SAVE_ERROR && (
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
