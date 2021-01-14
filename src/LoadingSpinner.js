import React from "react";

const LoadingSpinner = ({ loading = "Loading..." }) => {
  return (
    <div class="ui active inverted dimmer">
      <div class="ui text loader">{loading}</div>
    </div>
  );
};

export default LoadingSpinner;
