import {
  Box,
  Button,
  ButtonGroup,
  Card,
  Divider,
  Icon,
  Text,
  TextField,
  Thumbnail,
} from "@shopify/polaris";
import { IndentMajor } from "@shopify/polaris-icons";
import React from "react";

const Main = () => {
  return (
    <Box as="section" background="bg-interactive-selected">
      <Thumbnail alt="" size="medium" source={"logo_shopify.png"} />
      <Text
        children="Build your own ecommerce website in 3 easy steps"
        as="h2"
        variant="heading2xl"
        fontWeight="bold"
      />
      <Text
        children="Shopify is trusted by millions of businesses worldwide"
        as="h2"
        variant="heading2xl"
        fontWeight="regular"
      />
      <ButtonGroup>
        <TextField
          label
          autoComplete="off"
          value=""
          placeholder="Enter your email address"
          align="left"
        />
        <Button>3-day free trial</Button>
      </ButtonGroup>
      <Text
        as="dd"
        variant="headingXs"
        fontWeight="regular"
        children="By entering your email, you agree to receive marketing emails from Shopify."
      />
      <Thumbnail
        source={
          "https://cdn.shopify.com/mlp/k0t2ghqhamr0k46g7jz5dbfbflcl.jpg?width=777&height=605"
        }
        size="large"
        alt=""
      />
      <Box>
        <Card>
          <Thumbnail alt="" source={"1.png"} />
          <Text
            as="h4"
            variant="heading4xl"
            fontWeight="medium"
            children={"① Choose & customise a theme"}
          />
          <Text
            children={
              "Customize the design of your shop from over thousands of themes. No design experience or programming skills required."
            }
            as="dd"
            variant="heading4xl"
          />
        </Card>
        <Card>
          <Thumbnail alt="" source={"2.png"} />
          <Text
            as="h4"
            variant="heading4xl"
            fontWeight="medium"
            children={"② Add products"}
          />
          <Text
            children={
              "Customize the design of your shop from over thousands of themes. No design experience or programming skills required."
            }
            as="dd"
            variant="heading4xl"
          />
        </Card>
        <Card>
          <Thumbnail alt="" source={"3.png"} />
          <Text
            as="h4"
            variant="heading4xl"
            fontWeight="medium"
            children={"③ Start selling"}
          />
          <Text
            children={
              "Customize the design of your shop from over thousands of themes. No design experience or programming skills required."
            }
            as="dd"
            variant="heading4xl"
          />
        </Card>
      </Box>
      <Divider />
      <ButtonGroup>
        <Thumbnail
          alt=""
          source={
            "https://cdn.shopify.com/shopifycloud/brochure/assets/logo-soup/bajaao-small-6ca0459c2a2fc6a57654d85cd1f053828d7fee97ecf7ff6dd8a1c460d0a5d344.png"
          }
        />
        <Thumbnail
          alt=""
          source={
            "https://cdn.shopify.com/shopifycloud/brochure/assets/logo-soup/johnjacobs-small-79aa379de8a1c0d6df1c33af8c63a677871164315ccbc495423aeaead650d53a.png"
          }
        />
        <Thumbnail
          source={
            "https://cdn.shopify.com/shopifycloud/brochure/assets/logo-soup/kylie-small-4e25b192755f809e9795d9f3722f3fa6b46da1fdc2a48b3ec8b6311f50f83ac7.png"
          }
          alt=""
        />
        <Thumbnail
          source={
            "https://cdn.shopify.com/shopifycloud/brochure/assets/logo-soup/nush-small-04d75ec8d5b3e20b6e227006c23759c8b65efd482808aff0fc17140c5efb36cc.png"
          }
          alt=""
        />
        <Thumbnail
          alt=""
          source={
            "https://cdn.shopify.com/shopifycloud/brochure/assets/logo-soup/yogabar-small-a41c8bbe605289256552b537eb1bbf993845442c3af43ff4f8f1ed932a7b3609.png"
          }
        />
        <Thumbnail
          alt=""
          source={
            "https://cdn.shopify.com/shopifycloud/brochure/assets/logo-soup/starstruck-small-6d49ff528f3ef3217015f906a1ece473e2559688669d00e2b88e7be4f65ce3bf.png"
          }
        />
        <Thumbnail
          alt=""
          source={
            "https://cdn.shopify.com/shopifycloud/brochure/assets/logo-soup/mcaffeine-small-0c55170838a60e6a490dac7732d44f988f754de89d790de26b0d8e50a01029b4.png"
          }
        />
      </ButtonGroup>
      <Divider />
    </Box>
  );
};

export default Main;
