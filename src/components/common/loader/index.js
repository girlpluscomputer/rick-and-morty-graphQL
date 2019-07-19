import React from "react";
import { LoaderContainer, LoaderItem } from "./elements";

const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderItem delay="0s" />
      <LoaderItem delay=".1s" />
      <LoaderItem delay=".2s" />
    </LoaderContainer>
  );
};

export default Loader;
