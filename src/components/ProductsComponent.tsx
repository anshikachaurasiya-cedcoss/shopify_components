import {
  Badge,
  Box,
  HorizontalStack,
  IndexTable,
  LegacyCard,
  Text,
  Thumbnail,
  VerticalStack,
  useIndexResourceState,
} from "@shopify/polaris";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { data } from "./jewelery";

interface productProps {
  state: any;
  designData: () => void;
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

const ProductsComponent = (props: productProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    props.designData();
  }, []);

  const resourceName = {
    singular: "order",
    plural: "orders",
  };

  const { allResourcesSelected, selectedResources, handleSelectionChange } =
    useIndexResourceState(props.state);

  useEffect(() => {
    editData();
  }, [selectedResources]);

  const editData = () => {
    let newData: any[] = [];
    data.forEach((ele) => {
      ele.Tags.split(",").forEach((innerEle) => {
        !newData.includes(innerEle.trim()) &&
          innerEle.trim() !== "" &&
          newData.push(innerEle.trim());
      });
    });
    newData = newData.map((ele) => {
      return { value: ele, label: ele };
    });

    props.setState((prev: any) => {
      return { ...prev, editData: selectedResources, tagsArr: newData };
    });
  };

  const renderStatus = (Status: string) => {
    if (Status === "active") {
      return <Badge children={Status} status="success" />;
    } else if (Status === "archived") {
      return <Badge children={Status} status="info" />;
    } else {
      return <Badge children={Status} status="warning" />;
    }
  };

  const rowMarkup = props.state.mainData.map(
    (
      { Title, Status, Type, Vendor, id, img, inventory, sales, markets }: any,
      index: number
    ) => (
      <IndexTable.Row
        id={id}
        key={id}
        selected={selectedResources.includes(id)}
        position={index}
      >
        <IndexTable.Cell>
          <Thumbnail alt="" source={img} size="small" />
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Text variant="bodyMd" fontWeight="bold" as="span">
            {Title}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>{renderStatus(Status)}</IndexTable.Cell>
        <IndexTable.Cell>{inventory}</IndexTable.Cell>
        <IndexTable.Cell>{sales}</IndexTable.Cell>
        <IndexTable.Cell>{markets}</IndexTable.Cell>
        <IndexTable.Cell>{Type}</IndexTable.Cell>
        <IndexTable.Cell>{Vendor}</IndexTable.Cell>
      </IndexTable.Row>
    )
  );
  return (
    <LegacyCard>
      <VerticalStack gap={"10"}>
        <IndexTable
          resourceName={resourceName}
          itemCount={props.state.mainData.length}
          selectedItemsCount={
            allResourcesSelected ? "All" : selectedResources.length
          }
          onSelectionChange={handleSelectionChange}
          headings={[
            { title: "" },
            { title: "Product" },
            { title: "Status" },
            { title: "Inventory" },
            { title: "Sales channels", alignment: "center" },
            { title: "Markets" },
            { title: "Type" },
            { title: "Vendor" },
          ]}
        >
          {rowMarkup}
        </IndexTable>
        {selectedResources.length > 0 ? (
          <div className="fixed__bulk">
            <Box
              background="bg"
              borderColor="border-caution"
              borderStyle="solid"
              shadow="2xl"
              borderRadius="2"
              padding={"3"}
            >
              <HorizontalStack gap={"2"}>
                <div className="bulk_div" onClick={() => navigate("bulk_edit")}>
                  <Badge children="Bulk Upload" size="large-experimental" />
                </div>
                <Badge children="Set as active" size="large-experimental" />
              </HorizontalStack>
            </Box>
          </div>
        ) : (
          <></>
        )}
      </VerticalStack>
    </LegacyCard>
  );
};

export default ProductsComponent;
