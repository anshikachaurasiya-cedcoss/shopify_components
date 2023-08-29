export const tableHeadings = [
  { title: "Tags", hidden: false },
  { title: "Status", hidden: false },
  { title: "Product Category", hidden: false },
  { title: "Product Type", hidden: true },
  { title: "Vendor", hidden: true },
  { title: "Template", hidden: true },
  { title: "Online store", hidden: true },
  { title: "Point of Sale", hidden: true },
  { title: "Pimary Market", hidden: false },
  { title: "International", hidden: true },
  { title: "Base Price", hidden: false },
  { title: "Compare at Price", hidden: true },
  { title: "Cost per Item", hidden: false },
  { title: "Charges Taxes", hidden: true },
  { title: "SKU", hidden: true },
  { title: "Barcode (ISBN,UPC,GTIN,etc.)", hidden: true },
];

export const sectionsArr = [
  {
    title: "General",
    options: [
      {
        value: "Product Title",
        label: "Product title",
        disabled: true,
      },
      { value: "Tags", label: "Tags", hidden: true },
      { value: "Status", label: "Status", hidden: false },
      { value: "Product Type", label: "Product Type", hidden: true },
      { value: "Vendor", label: "Vendor", hidden: true },
      { value: "Template", label: "Template", hidden: true },
    ],
  },
  {
    title: "Sales Channel",
    options: [
      { value: "Online Store", label: "Online Store", hidden: true },
      { value: "Point of Sale", label: "Point of Sale", hidden: true },
    ],
  },
  {
    title: "Markets",
    options: [
      {
        value: "Primary Market (India)",
        hidden: false,
        label: "Primary Market (India)",
      },
      { value: "International", label: "International", hidden: true },
    ],
  },
  {
    title: "Pricing",
    options: [
      { value: "Base Price", label: "Base Price", hidden: false },
      { value: "Compare-at Price", label: "Compare-at Price", hidden: true },
      { value: "Cost per item", label: "Cost per item", hidden: false },
      { value: "Charges Taxes", label: "Charges Taxes", hidden: true },
    ],
  },
  {
    title: "Inventory",
    options: [
      { value: "SKU", label: "SKU", hidden: true },
      {
        value: "Barcode (ISBN, UPC, GTIN, etc.)",
        hidden: true,
        label: "Barcode (ISBN, UPC, GTIN, etc.)",
      },
      {
        value: "Inventory Quantity",
        label: "Inventory Quantity",
        hidden: true,
      },
      {
        value: "Continue Selling when out of Stock",
        label: "Continue Selling when out of Stock",
        hidden: true,
      },
      { value: "Track Quantity", label: "Track Quantity", hidden: true },
    ],
  },
  {
    title: "Shipping",
    options: [
      { value: "Weight", label: "Weight", hidden: false },
      {
        value: "Requires Shipping",
        label: "Requires Shipping",
        hidden: true,
      },
      {
        value: "Harmonized system code",
        label: "Harmonized system code",
        hidden: true,
      },
      {
        value: "Country of Origin",
        label: "Country of Origin",
        hidden: true,
      },
    ],
  },
  {
    title: "SEO",
    options: [
      { value: "Page Title (SEO)", label: "Page Title (SEO)", hidden: true },
      {
        value: "Meta Discription (SEO)",
        label: "Meta Discription (SEO)",
        hidden: true,
      },
      { value: "URL handle (SEO)", label: "URL handle (SEO)", hidden: true },
    ],
  },
];
