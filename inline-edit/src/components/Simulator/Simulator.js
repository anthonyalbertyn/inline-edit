import React, { useState } from "react";
import TextEdit from "../TextEdit";
import "./Simulator.css";

const Simulator = ({ children }) => {
  const [isSimulatingFailure, setIsSimulatingFailure] = useState(false);

  const handleSimulateToggle = () => {
    setIsSimulatingFailure(!isSimulatingFailure);
  };

  const simulatorHeadingText = isSimulatingFailure
    ? "Simulating Save Failure"
    : "Simulating Save Success";

  const headingClass = isSimulatingFailure
    ? "simulator-heading failure"
    : "simulator-heading";

  const simulateSave = () => {
    const promise = new Promise(function (resolve, reject) {
      if (!isSimulatingFailure) {
        setTimeout(resolve, 3000);
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
      <TextEdit text="Hello World" save={simulateSave} />
    </div>
  );
};

export default Simulator;
