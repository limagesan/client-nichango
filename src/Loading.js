import React from "react";
import ReactLoading from "react-loading";

const Loading = ({ isShow }) => {
  {
    isShow && <ReactLoading height="667" width="375" />;
  }
};

export default Loading;
