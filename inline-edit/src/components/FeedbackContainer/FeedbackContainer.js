import React from "react";
import "./FeedbackContainer.css";

const FeedbackContainer = ({ children, type, message }) => {
  return (
    <div className="feedback-container">
      {children}
      {message && <div className="feedback-container-message">{message}</div>}
      {type === "success" && <p>Success</p>}
      {type === "failure" && <p>Failure</p>}
      {type === "spinner" && <p>Spinner</p>}
    </div>
  );
};

export default FeedbackContainer;
