import React, { cloneElement, useContext, useEffect, useState } from "react";
import AppDataContext from "../../AppDataContext";
import { Form } from "antd";

const FieldItem = ({ children, fieldId, placeholderText = "" }) => {
  const { getField, setField } = useContext(AppDataContext);
  const [validateStatus, setValidateStatus] = useState();
  const [helpText, setHelpText] = useState("");
  const fieldData = {
    value: getField(fieldId),
    placeholder: placeholderText,
  };
  return (
    <Form.Item validateStatus={validateStatus} help={helpText}>
      {cloneElement(children, fieldData)}
    </Form.Item>
  );
};

export default FieldItem;
