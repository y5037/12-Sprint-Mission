import styles from "../../Styles/App/Loading.module.css";
import React from "react";

export const Loading = () => {
  return (
    <div className={styles.loaderContainer}>
      <span className={styles.loader}></span>
    </div>
  );
};

export default Loading;
