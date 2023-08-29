import {
  Card,
  DataTable,
  HorizontalStack,
  Text,
  VerticalStack,
} from "@shopify/polaris";

import React from "react";
import SimpleIndexTableExample from "./IndexTableComponent";

const MarketingComponent = () => {
  const rows = [
    ["Emerald Silk Gown", "$875.00", 124689, 140, "$122,500.00"],
    ["Mauve Cashmere Scarf", "$230.00", 124533, 83, "$19,090.00"],
    [
      "Navy Merino Wool Blazer with khaki chinos and yellow belt",
      "$445.00",
      124518,
      32,
      "$14,240.00",
    ],
  ];

  return (
    <VerticalStack gap={"3"}>
      <Card>
        <HorizontalStack gap={"2"}>
          <VerticalStack gap={"4"}>
            <Text
              children="Data Table"
              as="h1"
              variant="bodyLg"
              fontWeight="bold"
            />
            <DataTable
              columnContentTypes={[
                "text",
                "numeric",
                "numeric",
                "numeric",
                "numeric",
              ]}
              headings={[
                "Product",
                "Price",
                "SKU Number",
                "Net quantity",
                "Net sales",
              ]}
              rows={rows}
              totals={["", "", "", 255, "$155,830.00"]}
            />
            <Text
              children="Index Table"
              as="h1"
              variant="bodyLg"
              fontWeight="bold"
            />
            <SimpleIndexTableExample />
          </VerticalStack>
        </HorizontalStack>
      </Card>
    </VerticalStack>
  );
};

export default MarketingComponent;
