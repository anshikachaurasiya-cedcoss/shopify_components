import {
  Button,
  Card,
  HorizontalStack,
  Icon,
  ProgressBar,
  Text,
  VerticalStack,
} from "@shopify/polaris";
import { CancelMajor } from "@shopify/polaris-icons";
import React from "react";

const BodyComponent = () => {
  return (
    <VerticalStack gap="4">
      <Card background="bg-backdrop-experimental">
        <HorizontalStack align="space-between" blockAlign="center">
          <Text
            color="text-inverse"
            children="Extend your trial for ₹20/month for 3 months on select plans."
            as="dd"
            variant="bodySm"
          />
          <HorizontalStack gap={"2"}>
            <Button children={"Select a plan"} />
            <Icon source={CancelMajor} color="base" />
          </HorizontalStack>
        </HorizontalStack>
      </Card>
      <Card>
        <VerticalStack gap={"2"}>
          <Text
            children={"Setup Guide"}
            as="h4"
            variant="headingMd"
            fontWeight="bold"
          />
          <Text
            children="Use this personalized guide to get your store up and running."
            as="dd"
            variant="bodySm"
          />
          <HorizontalStack gap={"2"}>
            <Text
              children="2 of 4 tasks completed"
              as="dd"
              variant="bodySm"
              fontWeight="regular"
            />
            <ProgressBar size="small" progress={35} color="success" />
          </HorizontalStack>
        </VerticalStack>
      </Card>
    </VerticalStack>
  );
};

export default BodyComponent;
