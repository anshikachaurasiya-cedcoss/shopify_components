import {
  ActionList,
  Autocomplete,
  Badge,
  Checkbox,
  HorizontalStack,
  Icon,
  IndexTable,
  LegacyStack,
  Popover,
  Select,
  Tag,
  Text,
  TextField,
  Thumbnail,
  useIndexResourceState,
} from "@shopify/polaris";
import { ChevronDownMinor } from "@shopify/polaris-icons";
import React, { useEffect } from "react";
import BulkEditTopbar from "./bulkEdit/BulkEditTopbar";

interface bulkProps {
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
  handleTopbarPopover: () => void;
  selectValuesTopBar: (e: string[]) => void;
}

const BulkEditPage = (props: bulkProps) => {
  const { state } = props;
  useEffect(() => {
    renderEditData();
  }, []);

  const renderEditData = () => {
    props.state.editData.forEach((item: any) => {
      let obj = props.state.mainData.find((ele: any) => ele.id === item);
      props.state.changingData.push(obj);
    });
    let newData: any = props.state.changingData.map((ele: any) => {
      let obj = { ...ele };
      if (ele["Image src"]) {
        obj.img = ele["Image src"];
      }
      if (ele["Variant Price"]) {
        obj.price = ele["Variant Price"];
      }
      if (ele["Cost per item"] && ele["Cost per item"] !== "") {
        obj.cost_price = ele["Cost per item"];
      } else {
        obj.cost_price = 0.0;
      }
      if (ele["Variant Weight Unit"]) {
        obj.weight = ele["Variant Weight Unit"];
      }
      if (ele.Tags) {
        obj.tagsArr = [];
        ele.Tags.split(",").forEach((innerEle: any) => {
          if (!obj.tagsArr.includes(innerEle.trim())) {
            obj.tagsArr.push(innerEle.trim());
          }
        });
      }
      obj.tagValue = "";
      obj.popOver = false;
      return obj;
    });
    props.setState((prev) => {
      return {
        ...prev,
        changingData: newData,
      };
    });
  };

  const handlePopover = (index: number) => {
    props.state.changingData[index].popOver =
      !props.state.changingData[index].popOver;
    props.setState((prev) => {
      return { ...prev, changingData: prev.changingData };
    });
  };
  const renderStatus = (status: any, id: any, index: number) => {
    return (
      <Popover
        active={props.state.changingData[index].popOver}
        onClose={() => handlePopover(index)}
        activator={
          <div className="status__wrapper" onClick={() => handlePopover(index)}>
            {renderStatusBadge(status)}
            <Icon source={ChevronDownMinor} />
          </div>
        }
      >
        <ActionList
          items={[
            {
              content: "Active",
              onAction: () => {
                props.state.changingData[index].Status = "Active";
                props.setState({ ...props.state });
                handlePopover(index);
              },
              active: true,
            },
            {
              content: "Archived",
              onAction: () => {
                props.state.changingData[index].Status = "Archived";
                props.setState({ ...props.state });
                handlePopover(index);
              },
            },
            {
              content: "Draft",
              onAction: () => {
                props.state.changingData[index].Status = "Draft";
                props.setState({ ...props.state });
                handlePopover(index);
              },
            },
          ]}
        />
      </Popover>
    );
  };

  const renderStatusBadge = (status: string) => {
    if (status === "active") {
      return <Badge children={status} status="success" />;
    } else if (status === "draft") {
      return <Badge children={status} status="info" />;
    } else {
      return <Badge children={status} />;
    }
  };

  const resourceName = {
    singular: "order",
    plural: "orders",
  };

  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState([]);

  const updateTags = (index: any, i: number) => {
    let arr = props.state.changingData;
    arr[index].tagsArr.splice(i, 1);
    props.setState((prev) => {
      return { ...prev, changingData: arr };
    });
  };

  const verticalContentMarkup = (index: number) => (
    <LegacyStack spacing="extraTight" alignment="center">
      {props.state.changingData[index].tagsArr.map((option: any, i: number) => {
        return (
          <Tag key={`option${option}`} onRemove={() => updateTags(index, i)}>
            {option}
          </Tag>
        );
      })}
    </LegacyStack>
  );

  const tagChangeHandler = (e: any, index: number) => {
    props.state.changingData[index].tagValue = e;
    props.setState((prev) => {
      return { ...prev, changingData: prev.changingData };
    });
  };

  const textField = (index: number) => {
    return (
      <Autocomplete.TextField
        onChange={(e) => tagChangeHandler(e, index)}
        label=""
        value={props.state.changingData[index].tagValue}
        placeholder="Type to find or add Tags"
        verticalContent={verticalContentMarkup(index)}
        autoComplete="off"
      />
    );
  };
  console.log(props);
  const rowMarkup = props.state.changingData.map(
    (
      { Title, img, Status, tagsArr, price, cost_price, id, weight }: any,
      index: any
    ) => (
      <IndexTable.Row
        id={id}
        key={id}
        selected={selectedResources.includes(id)}
        position={index}
      >
        <IndexTable.Cell>
          <HorizontalStack blockAlign="center" wrap={false} gap={"4"}>
            <Thumbnail size="extraSmall" alt="" source={img} />
            <Text as="dd" variant="bodySm" children={Title} />
          </HorizontalStack>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Autocomplete
            allowMultiple
            onSelect={(e) => {
              props.state.changingData[index].tagsArr = e;
              props.setState({ ...props.state });
            }}
            options={props.state.tagsArr.filter((ele: any) =>
              ele.label.match(props.state.changingData[index].tagValue)
            )}
            selected={tagsArr}
            textField={textField(index)}
          />
        </IndexTable.Cell>
        <IndexTable.Cell>
          <HorizontalStack gap={"4"}>
            {renderStatus(Status, id, index)}
          </HorizontalStack>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Checkbox label="" checked />
        </IndexTable.Cell>
        <IndexTable.Cell>
          <TextField
            autoComplete=""
            label=""
            value={price}
            type="number"
            onChange={(e) => priceHandler(e, id)}
          />
        </IndexTable.Cell>
        <IndexTable.Cell>
          <TextField
            autoComplete=""
            label=""
            value={cost_price}
            type="number"
            onChange={(e) => changeHandler(e, id)}
          />
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Select
            onChange={(e) => changeWeightHandler(e, id)}
            label=""
            value={weight}
            options={[
              { label: "kg", value: "kg" },
              { label: "oz", value: "oz" },
            ]}
          />
        </IndexTable.Cell>
      </IndexTable.Row>
    )
  );

  const priceHandler = (e: string, id: any) => {
    let new_arr = props.state.changingData.map((ele: any) => {
      let obj = { ...ele };
      if (ele.id === id) {
        obj.price = e;
      }
      return obj;
    });
    props.setState((prev: any) => {
      return { ...prev, changingData: new_arr };
    });
  };

  const changeWeightHandler = (e: string, id: any) => {
    let new_arr = props.state.changingData.map((ele: any) => {
      let obj = { ...ele };
      if (ele.id === id) {
        obj.weight = e;
      }
      return obj;
    });
    props.setState((prev: any) => {
      return { ...prev, changingData: new_arr };
    });
  };

  const changeHandler = (e: string, id: any) => {
    let new_arr = props.state.changingData.map((ele: any) => {
      let obj = { ...ele };
      if (ele.id === id) {
        obj._id = id;
        obj.cost_price = e;
      }
      return obj;
    });
    props.setState((prev) => {
      return { ...prev, changingData: new_arr };
    });
  };

  return (
    <div className="bulkEdit__wrapper">
      <BulkEditTopbar
        handleTopbarPopover={props.handleTopbarPopover}
        selectValuesTopBar={props.selectValuesTopBar}
        state={props.state}
        setState={props.setState}
      />
      <IndexTable
        resourceName={resourceName}
        itemCount={props.state.changingData.length}
        headings={[
          { title: "Product Title", hidden: false },
          ...state.headings,
        ]}
        selectable={false}
      >
        {rowMarkup}
      </IndexTable>
    </div>
  );
};

export default BulkEditPage;
