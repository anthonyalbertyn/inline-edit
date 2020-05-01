import React, { useState } from "react";
import "./App.css";
import AppDataContext from "./AppDataContext";
import Simulator from "./components/Simulator";
import FieldItem from "./components/FieldItem";
import TextField from "./components/TextField";

import "antd/dist/antd.css";

function App() {
  const [data, setData] = useState({ firstName: "Anthony" });
  const [isOnline, setIsOnline] = useState(true);

  const getField = (fieldId) => {
    return data[fieldId] || "";
  };

  const setField = (fieldId, fieldValue) => {
    if (!fieldId || !fieldValue) {
      console.error("Invalid parameters in setField");
      return;
    }
    setData({ ...data, fieldId: fieldValue });
  };

  const contextData = {
    getField,
    setField,
    isOnline,
    setIsOnline,
  };

  return (
    <AppDataContext.Provider value={contextData}>
      <div className="inline-edit-app">
        <Simulator>
          <FieldItem fieldId="firstName">
            <TextField />
          </FieldItem>
          <FieldItem fieldId="lastName">
            <TextField />
          </FieldItem>
        </Simulator>
      </div>
    </AppDataContext.Provider>
  );
}

export default App;
