import { Box, Grid, LegacyCard } from "@shopify/polaris";
import React from "react";

const GridComponent = () => {
  return (
    <Box background="bg-app" padding={"4"}>
      
      <Grid>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          {[1, 2, 3, 4, 5, 6].map((ele) => {
            return (
              <LegacyCard title={"Card Components"} key={ele} sectioned>
                <p>View a summary of your online store’s sales.</p>
              </LegacyCard>
            );
          })}
        </Grid.Cell>
      </Grid>
      {/* </Page> */}
    </Box>
  );
};

export default GridComponent;
