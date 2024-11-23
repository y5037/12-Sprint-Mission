import { useState } from "react";
import styles from "../../Styles/ProductList/common.module.css";
import ItemListNav from "../App/Navi";
import PageNation from "../App/Pagenation";
import { BestItemsList } from "./BestItem";
import GeneralItemsList from "./GeneralItem";

function ItemsListPage() {
  return (
    <>
      <ItemListNav />
      <div className={styles.pageContainer}>
        <BestItemsList />
        <GeneralItemsList />
        <PageNation />
      </div>
    </>
  );
}

export default ItemsListPage;
