import {
  TopBar,
  ActionList,
  Icon,
  Frame,
  Text,
  Navigation,
  Page,
  VerticalStack,
} from "@shopify/polaris";
import {
  AnalyticsBarHorizontalMinor,
  CustomersMajor,
  DiscountsMajor,
  EmailMajor,
  ExchangeMajor,
  HomeMinor,
  LogOutMinor,
  MarketingMajor,
  OrdersMinor,
  ProductsMinor,
  QuestionMarkMajor,
  SlideshowMajor,
  StoreMajor,
} from "@shopify/polaris-icons";
import { useState, useCallback } from "react";
import BodyComponent from "./BodyComponent";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import MainComponent from "./MainComponent";
import FormComponent from "./FormComponent";
import CardComponent from "./CardComponent";
import GridComponent from "./GridComponent";
import MediaComponent from "./MediaComponent";
import ContextualComponent from "./ContextualComponent";
import MarketingComponent from "./MarketingComponent";
import ProductsComponent from "./ProductsComponent";
import { data } from "./jewelery";
import BulkEditPage from "./BulkEditPage";
import BulkEditTopbar from "./bulkEdit/BulkEditTopbar";
import { tableHeadings } from "./CommonData";

const FrameComponent = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isSecondaryMenuOpen, setIsSecondaryMenuOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [state, setState] = useState({
    mainData: [],
    editData: [],
    changingData: [],
    tagsArr: [],
    popOver: false,
    selected: [
      "Tags",
      "Status",
      "Vendor",
      "Base Price",
      "Available Quantity",
      "On hand Quantity",
    ],
    headings: tableHeadings,
  });
  // const [popOver, setPopOver] = useState(false);
  // const [selected, setSelected] = useState<string[]>([]);
  const navigate = useNavigate();

  const toggleIsUserMenuOpen = useCallback(
    () => setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen),
    []
  );

  const toggleIsSecondaryMenuOpen = useCallback(
    () => setIsSecondaryMenuOpen((isSecondaryMenuOpen) => !isSecondaryMenuOpen),
    []
  );

  const handleSearchResultsDismiss = useCallback(() => {
    setIsSearchActive(false);
    setSearchValue("");
  }, []);

  const handleSearchChange = useCallback((value: string) => {
    setSearchValue(value);
    setIsSearchActive(value.length > 0);
  }, []);

  const handleNavigationToggle = useCallback(() => {
    console.log("toggle navigation visibility");
  }, []);

  const logo = {
    width: 40,
    topBarSource: "https://www.syaid.org/brand-logo.ico",
    accessibilityLabel: "Anshika Chaurasiya",
    onclick: () => navigate("/"),
  };

  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={[
        {
          items: [{ content: "My Store", icon: StoreMajor }],
        },
        {
          items: [{ content: "Help center", icon: QuestionMarkMajor }],
        },
        {
          items: [{ content: "ChangeLog", icon: ExchangeMajor }],
        },
        {
          items: [{ content: "ashu782001@gmail.com", icon: EmailMajor }],
        },
        {
          items: [{ content: "Logout", icon: LogOutMinor }],
        },
      ]}
      name="Anshika"
      detail="Anshika Chaurasiya"
      initials="AC"
      open={isUserMenuOpen}
      onToggle={toggleIsUserMenuOpen}
    />
  );

  const searchResultsMarkup = (
    <ActionList
      items={[
        { content: "Shopify help center" },
        { content: "Community forums" },
      ]}
    />
  );

  const searchFieldMarkup = (
    <TopBar.SearchField
      onChange={handleSearchChange}
      value={searchValue}
      placeholder="Search"
      showFocusBorder
    />
  );

  const secondaryMenuMarkup = (
    <TopBar.Menu
      activatorContent={
        <span>
          <Icon source={QuestionMarkMajor} />
          <Text as="span" visuallyHidden>
            Secondary menu
          </Text>
        </span>
      }
      open={isSecondaryMenuOpen}
      onOpen={toggleIsSecondaryMenuOpen}
      onClose={toggleIsSecondaryMenuOpen}
      actions={[
        {
          items: [{ content: "Community forums" }],
        },
      ]}
    />
  );

  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      secondaryMenu={secondaryMenuMarkup}
      searchResultsVisible={isSearchActive}
      searchField={searchFieldMarkup}
      searchResults={searchResultsMarkup}
      onSearchResultsDismiss={handleSearchResultsDismiss}
      onNavigationToggle={handleNavigationToggle}
    />
  );
  const navigation = (
    <Navigation location="/">
      <Navigation.Section
        items={[
          {
            label: "Home",
            icon: HomeMinor,
            selected: true,
            onClick: () => navigate("/"),
          },
          {
            label: "Orders",
            icon: OrdersMinor,
            badge: "15",
            onClick: () => navigate("orders"),
          },
          {
            label: "Products",
            icon: ProductsMinor,
            onClick: () => navigate("products"),
          },
          {
            label: "Customers",
            icon: CustomersMajor,
            onClick: () => navigate("customers"),
          },
          {
            label: "Content",
            icon: SlideshowMajor,
            onClick: () => navigate("content"),
          },
          {
            label: "Analytics",
            icon: AnalyticsBarHorizontalMinor,
            onClick: () => navigate("analytics"),
          },
          {
            label: "Marketing",
            icon: MarketingMajor,
            onClick: () => navigate("marketing"),
          },
          {
            label: "Discounts",
            icon: DiscountsMajor,
            onClick: () => navigate("discounts"),
          },
        ]}
        fill
      />
    </Navigation>
  );

  const handleTopbarPopover = () => {
    setState((prev) => {
      return { ...prev, popOver: !prev.popOver };
    });
  };

  const selectValuesTopBar = (e: string[]) => {
    let newData = tableHeadings.map((ele) => {
      ele.hidden = !e.includes(ele.title);
      return { ...ele };
    });
    // let newData = e.map((ele) => {
    //   return { title: ele, hidden: false };
    // });
    setState((prev: any) => {
      return { ...prev, selected: e, headings: newData };
    });
  };

  const designData = () => {
    let newData: any = [];
    data.forEach((ele, i) => {
      if (ele.Title !== "") {
        newData.push(ele);
      }
    });
    newData = newData.map((ele: any, i: number) => {
      let obj = { ...ele };
      obj.id = i + 1;
      obj.img = ele["Image Src"];
      if (ele["Variant Inventory Policy"] === "deny") {
        obj.inventory = "Inventory not Tracked";
      }
      obj.sales = 2;
      obj.markets = 2;
      obj.tagStyle = "tagStyle_none";
      return obj;
    });
    state.mainData = newData;
    setState({ ...state });
  };
  return (
    <div style={{ height: "250px" }}>
      {window.location.pathname.split("/")[
        window.location.pathname.split("/").length - 1
      ] === "bulk_edit" ? (
        <VerticalStack>
          <Routes>
            <Route
              path="products/bulk_edit"
              element={
                <BulkEditPage
                  state={state}
                  setState={setState}
                  handleTopbarPopover={handleTopbarPopover}
                  selectValuesTopBar={selectValuesTopBar}
                />
              }
            />
          </Routes>
        </VerticalStack>
      ) : (
        <Frame topBar={topBarMarkup} logo={logo} navigation={navigation}>
          <Page>
            <VerticalStack gap={"3"}>
              <Routes>
                <Route element={<Outlet />} path="*" />
                <Route element={<FormComponent />} path="/" />
                <Route element={<BodyComponent />} path="/" />
                <Route element={<MarketingComponent />} path="marketing" />
                <Route element={<MainComponent />} path="discounts" />
                <Route element={<CardComponent />} path="orders" />
                <Route element={<GridComponent />} path="customers" />
                <Route element={<MediaComponent />} path="content" />
                <Route element={<ContextualComponent />} path="analytics" />
                <Route
                  element={
                    <ProductsComponent
                      state={state}
                      setState={setState}
                      designData={designData}
                    />
                  }
                  path="products/*"
                />
              </Routes>
            </VerticalStack>
          </Page>
        </Frame>
      )}
    </div>
  );
};

export default FrameComponent;
