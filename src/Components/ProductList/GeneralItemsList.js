import { useState } from "react";
import styles from "../../styles/ProductList/ProductList.module.css";
import notFoundImg from "../../assets/images/productList/not_found.png";
import GeneralSearchForm from "./GeneralSearchForm";
import GeneralItem from "./GeneralItem";

function GeneralItemsList({
  page,
  setPage,
  pageCount,
  setPageCount,
  setIsDataCount,
}) {
  const [productContainer, setProductContainer] = useState([]);
  return (
    <div className={`${styles.productContents} ${styles.generalProduct}`}>
      <GeneralSearchForm
        productContainer={productContainer}
        setProductContainer={setProductContainer}
        page={page}
        setPage={setPage}
        pageCount={pageCount}
        setPageCount={setPageCount}
        setIsDataCount={setIsDataCount}
      />
      <ul className={styles.productCover}>
        {productContainer.length !== 0 ? (
          productContainer.map((item) => {
            return (
              <li key={item.id} className={styles.item}>
                <GeneralItem item={item} />
              </li>
            );
          })
        ) : (
          <div className={styles.emptyList}>
            <img src={notFoundImg} alt="Not Found" />
            <p>검색하신 상품을 찾을 수 없습니다</p>
          </div>
        )}
      </ul>
    </div>
  );
}

export default GeneralItemsList;
