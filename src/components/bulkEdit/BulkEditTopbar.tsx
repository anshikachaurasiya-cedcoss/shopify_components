import {
  ButtonGroup,
  FullscreenBar,
  Button,
  Text,
  Box,
  Popover,
  HorizontalStack,
  OptionList,
} from "@shopify/polaris";
import { Columns3Major } from "@shopify/polaris-icons";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { sectionsArr } from "../CommonData";

interface topbarProps {
  handleTopbarPopover: () => void;
  selectValuesTopBar: (e: string[]) => void;
  state: any;
  setState: React.Dispatch<
    React.SetStateAction<{
      mainData: never[];
      editData: never[];
      changingData: never[];
      tagsArr: never[];
      popOver: boolean;
      selected: string[];
      headings: {
        title: string;
        hidden: boolean;
      }[];
    }>
  >;
}

const BulkEditTopbar = (props: topbarProps) => {
  const { handleTopbarPopover, selectValuesTopBar, state, setState } = props;

  const [isFullscreen, setFullscreen] = useState(true);

  const navigate = useNavigate();

  const handleActionClick = useCallback(() => {
    setFullscreen(false);
    navigate("products");
  }, []);

  const fullscreenBarMarkup = (
    <FullscreenBar onAction={handleActionClick}>
      <div
        style={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        <Box padding={"4"}>
          <Text
            children="Editing products"
            as="h1"
            variant="bodyMd"
            fontWeight="bold"
          />
        </Box>
        <ButtonGroup>
          <HorizontalStack gap={"2"} blockAlign="center">
            <Popover
              activator={
                <Button
                  plain
                  monochrome
                  onClick={() => {
                    handleTopbarPopover();
                  }}
                  icon={Columns3Major}
                >
                  Columns
                </Button>
              }
              active={state.popOver}
              onClose={() => handleTopbarPopover()}
            >
              <OptionList
                onChange={(e) => {
                  selectValuesTopBar(e);
                }}
                sections={sectionsArr}
                selected={state.selected}
                allowMultiple
              />
            </Popover>
            <Button children={"Save"} size="slim" />
          </HorizontalStack>
        </ButtonGroup>
      </div>
    </FullscreenBar>
  );

  return <div style={{ width: "100%" }}>{fullscreenBarMarkup}</div>;
};

export default BulkEditTopbar;
