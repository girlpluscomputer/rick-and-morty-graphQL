import React from "react";
import PageLoadingContainer from "./elements";
import Loader from "../loader";

const PageLoading = () => {
  return (
    <PageLoadingContainer>
      <Loader />
    </PageLoadingContainer>
  );
};

export default PageLoading;
