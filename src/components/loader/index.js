import React, { Component } from "react";
import { LoaderContainer, LoaderItem } from "./elements";

class Loader extends Component {
  render() {
    return (
      <LoaderContainer>
        <LoaderItem delay="0s" />
        <LoaderItem delay=".1s" />
        <LoaderItem delay=".2s" />
      </LoaderContainer>
    );
  }
}
export default Loader;
