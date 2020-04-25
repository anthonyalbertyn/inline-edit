import React from "react";
import CheckIcon from "@material-ui/icons/Check";
import CancelIcon from "@material-ui/icons/Cancel";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./FeedbackContainer.css";

const FeedbackContainer = ({ children, type, message }) => {
  return (
    <div className="feedback-container">
      <div className="feedback-container-content">
        {children}
        {message && <div className="feedback-container-message">{message}</div>}
      </div>
      <div className="feedback-container-icons">
        {type === "success" && <CheckIcon />}
        {type === "failure" && <CancelIcon />}
        {type === "spinner" && (
          <CircularProgress color="default" size={20} thickness={3} />
        )}
      </div>
    </div>
  );
};

export default FeedbackContainer;
