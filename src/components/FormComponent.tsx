import { Box, Button, Text, TextField, VerticalStack } from "@shopify/polaris";
import React from "react";

const FormComponent = () => {
  return (
    <Box background="bg-input" borderRadius="3" padding={"10"}>
      <VerticalStack gap={"3"}>
        <Text
          children="Registration Form"
          as="h2"
          variant="bodyLg"
          fontWeight="bold"
        />
        <TextField
          autoComplete="false"
          placeholder="Enter Your Name"
          type="text"
          label="Name"
          value="ffs"
        />
        <TextField
          autoComplete="false"
          placeholder="Enter Your Email"
          type="email"
          label="Email"
        />
        <TextField
          autoComplete="false"
          placeholder="Enter Your Phone Number"
          type="number"
          label="Phone Number"
        />
        <TextField
          autoComplete="false"
          placeholder="Password"
          type="password"
          label="Password"
        />
        <TextField
          placeholder="Confirm Password"
          autoComplete="false"
          type="password"
          label="Confirm Password"
        />
        <Button primary>Submit</Button>
      </VerticalStack>
    </Box>
  );
};

export default FormComponent;
