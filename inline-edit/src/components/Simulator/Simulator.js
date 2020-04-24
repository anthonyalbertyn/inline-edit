import React, { useState } from "react";
import TextEdit from "../TextEdit";
import "./Simulator.css";

const Simulator = () => {
  const [isSimulatingFailure, setIsSimulatingFailure] = useState(false);
  const [savedText, setSavedText] = useState("Hello World");

  const handleSimulateToggle = () => {
    setIsSimulatingFailure(!isSimulatingFailure);
  };

  const simulatorHeadingText = isSimulatingFailure
    ? "Simulating Save Failure"
    : "Simulating Save Success";

  const headingClass = isSimulatingFailure
    ? "simulator-heading failure"
    : "simulator-heading";

  const simulateSave = (text) => {
    const promise = new Promise(function (resolve, reject) {
      const performSave = () => {
        setSavedText(text);
        resolve();
      };
      if (!isSimulatingFailure) {
        setTimeout(performSave, 3000);
      } else {
        setTimeout(reject, 3000);
      }
    });
    return promise;
  };

  return (
    <div className="simulator">
      <div className="simulator-control">
        <div className={headingClass}>{simulatorHeadingText}</div>
        <button onClick={handleSimulateToggle}>Toggle Simulation</button>
      </div>
      <TextEdit text={savedText} save={simulateSave} />
    </div>
  );
};

export default Simulator;
