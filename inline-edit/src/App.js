import React from "react";
import "./App.css";
import Simulator from "./components/Simulator";
import TextEdit from "./components/TextEdit";

function App() {
  return (
    <div className="inline-edit-app">
      <Simulator>
        <TextEdit text="It Works!" />
      </Simulator>
    </div>
  );
}

export default App;
