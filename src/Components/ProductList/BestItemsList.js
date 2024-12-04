import { useState } from "react";
import styles from "../../styles/ProductList/ProductList.module.css";
import BestListFilter from "./BestListFilter";
import BestItem from "./BestItem";

function BestItemsList() {
  const [productList, setProductList] = useState([]);
  return (
    <>
      <BestListFilter
        productList={productList}
        setProductList={setProductList}
      />
      <div className={`${styles.productContents} ${styles.bestProduct}`}>
        <p className={styles.listTitle}>베스트 상품</p>
        <ul className={styles.productCover}>
          {productList.map((item) => {
            return (
              <li key={item.id} className={styles.item}>
                <BestItem item={item} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export { BestItemsList };
