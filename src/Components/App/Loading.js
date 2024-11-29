import React from "react";
import spinner from "../../Assets/images/app/common/spinner.gif";

export const Loading = () => {
  return (
    <div>
      <img src={spinner} alt="Loading" />
    </div>
  );
};

export default Loading;
