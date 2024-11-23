import { useState } from "react";
import styles from "../../Styles/ProductList/common.module.css";
import ItemListNav from "../App/Navi";
import HandlePagiNation from "../App/Pagination";
import { BestItemsList } from "./BestItem";
import GeneralItemsList from "./GeneralItem";

function ItemsListPage() {
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  return (
    <>
      <ItemListNav />
      <div className={styles.pageContainer}>
        <BestItemsList />
        <GeneralItemsList
          page={page}
          setPage={setPage}
          pageCount={pageCount}
          setPageCount={setPageCount}
        />
        <HandlePagiNation
          page={page}
          setPage={setPage}
          pageCount={pageCount}
          setPageCount={setPageCount}
        />
      </div>
    </>
  );
}

export default ItemsListPage;
