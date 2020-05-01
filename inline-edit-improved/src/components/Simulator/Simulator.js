import React, { useContext } from "react";
import { Switch } from "antd";
import AppDataContext from "../../AppDataContext";

const Simulator = ({ children }) => {
  const { isOnline, setIsOnline } = useContext(AppDataContext);
  const handleChange = () => {
    setIsOnline(!isOnline);
  };
  return (
    <>
      <div className="simulator">
        <div className="heading">Simulate</div>
        <Switch
          checkedChildren="Online"
          unCheckedChildren="Offline"
          defaultChecked={{ isOnline }}
          onChange={handleChange}
        />
      </div>
      {children}
    </>
  );
};

export default Simulator;
