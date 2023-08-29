import { Box, MediaCard } from "@shopify/polaris";
import React from "react";

const MediaComponent = () => {
  return (
    <Box>
      <MediaCard
        title="Getting Started"
        primaryAction={{
          content: "Learn about getting started",
          onAction: () => {},
        }}
        description="Discover how Shopify can power up your entrepreneurial journey."
        popoverActions={[{ content: "Dismiss", onAction: () => {} }]}
      >
        <img
          alt=""
          width="100%"
          height="100%"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg"
        />
      </MediaCard>
    </Box>
  );
};

export default MediaComponent;
