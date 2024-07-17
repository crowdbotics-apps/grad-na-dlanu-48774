import React from "react";
import Navigator from "./navigator";
import { slice } from "./store";

const TwoFactorAuthentication = ({
  route
}) => {
  const {
    SDA = "SS"
  } = route.params || {};
  return <Navigator />;
};

export default {
  title: "2FA",
  navigator: TwoFactorAuthentication,
  slice
};