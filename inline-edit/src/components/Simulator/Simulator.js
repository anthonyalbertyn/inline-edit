import React, { useState } from "react";
import Button from "@material-ui/core/Button";
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
        setTimeout(performSave, 1500);
      } else {
        setTimeout(reject, 1500);
      }
    });
    return promise;
  };

  return (
    <div className="simulator">
      <div className="simulator-control">
        <div className={headingClass}>{simulatorHeadingText}</div>
        <Button
          variant="outlined"
          color="default"
          onClick={handleSimulateToggle}
          size="small"
        >
          Toggle Simulation
        </Button>
      </div>
      <TextEdit text={savedText} save={simulateSave} />
    </div>
  );
};

export default Simulator;
