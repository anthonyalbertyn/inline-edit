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
        {type === "success" && (
          <div className="feedback-success">
            <CheckIcon />
          </div>
        )}
        {type === "failure" && (
          <div className="feedback-failure">
            <CancelIcon />
          </div>
        )}
        {type === "spinner" && (
          <div className="feedback-spinner">
            <CircularProgress color="inherit" size={20} thickness={3} />
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedbackContainer;
