import { Box, Button, Card, Text, VerticalStack } from "@shopify/polaris";
import React from "react";

const CardComponent = () => {
  return (
    <VerticalStack gap={"4"}>
      <Box background="bg-app" borderRadius="2" borderColor="border-critical">
        <Card padding={"5"}>
          <VerticalStack align="center" gap={"4"}>
            <img
              src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg"
              alt=""
            />
            <Text
              children="Card Component"
              as="h1"
              variant="bodyLg"
              fontWeight="bold"
            />
            <Text
              as="h3"
              children="lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              variant="bodySm"
              fontWeight="medium"
            />
            <Button children={"Add"} primary />
          </VerticalStack>
        </Card>
      </Box>
    </VerticalStack>
  );
};

export default CardComponent;
