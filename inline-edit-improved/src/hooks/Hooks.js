import React, { useState, useEffect } from "react";

export const useInlineTextField = (
  fieldId,
  saveCallback,
  initialValue,
  label
) => {
  const modes = {
    EDIT: "edit",
    VIEW: "view",
    SAVE_IN_PROGRESS: "saveInProgress",
    SAVE_SUCCESS: "saveSuccess",
    SAVE_ERROR: "saveError",
  };
};
