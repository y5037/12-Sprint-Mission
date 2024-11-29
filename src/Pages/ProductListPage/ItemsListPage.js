import { useState } from "react";
import styles from "../../Styles/ProductList/common.module.css";
import ItemListNav from "../../Components/App/Navi";
import HandlePagiNation from "../../Components/App/Pagination";
import { BestItemsList } from "../../Components/ProductList/BestItem";
import GeneralItemsList from "../../Components/ProductList/GeneralItem";

function ItemsListPage() {
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  return (
    <>
      <ItemListNav />
      <div className={styles.pagiContainer}>
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
