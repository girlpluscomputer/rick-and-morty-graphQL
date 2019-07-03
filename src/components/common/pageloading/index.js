import React from "react";
import Loader from "../loader";
import PageLoadingContainer from "./elements";

const PageLoading = () => {
  return (
    <PageLoadingContainer>
      <Loader />
    </PageLoadingContainer>
  );
};

export default PageLoading;
