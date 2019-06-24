import React from "react";
import Loader from "./Loader";
import "./PageLoading.css";

const PageLoading = () => {
  return (
    <div className="page-loading">
      <Loader />
    </div>
  );
};

export default PageLoading;
