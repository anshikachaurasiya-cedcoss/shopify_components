import { ContextualSaveBar } from "@shopify/polaris";
import React from "react";

const ContextualComponent = () => {
  return (
    <ContextualSaveBar
      message="Unsaved changes"
      saveAction={{
        onAction: () => console.log("add form submit logic"),
        loading: false,
        disabled: false,
      }}
      discardAction={{
        onAction: () => console.log("add clear form logic"),
      }}
    />
  );
};

export default ContextualComponent;
