import React from "react";
import styles from "../../styles/App/Loading.module.css";

export const Loading = () => {
  return (
    <div className={styles.loaderContainer}>
      <span className={styles.loader}></span>
    </div>
  );
};

export default Loading;
