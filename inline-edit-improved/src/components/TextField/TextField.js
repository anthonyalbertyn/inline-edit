import React from "react";
import { Input } from "antd";

const TextField = ({ fieldData }) => {
  return (
    <Input
      placeholder={fieldData.placeholder}
      id="firstName"
      value={fieldData.value}
    />
  );
};

export default TextField;
