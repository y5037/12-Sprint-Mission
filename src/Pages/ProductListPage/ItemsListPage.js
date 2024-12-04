import { useState } from "react";
import styles from "../../styles/ProductList/ProductList.module.css";
import { BestItemsList } from "../../Components/ProductList/BestItem";
import ItemListNav from "../../Components/App/ItemListNav";
import HandlePagiNation from "../../Components/App/Pagination";
import GeneralItemsList from "../../Components/ProductList/GeneralItem";

function ItemsListPage() {
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [isDataCount, setIsDataCount] = useState();
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
          setIsDataCount={setIsDataCount}
        />
        <HandlePagiNation
          page={page}
          setPage={setPage}
          pageCount={pageCount}
          setPageCount={setPageCount}
          isDataCount={isDataCount}
        />
      </div>
    </>
  );
}

export default ItemsListPage;
