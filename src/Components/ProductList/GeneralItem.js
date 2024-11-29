import defaultImg from "../../Assets/images/app/common/no_img.jpg";
import btnWish from "../../Assets/images/productList/btn_wish.png";
import styles from "../../Styles/ProductList/ProductList.module.css";
import ProductSearchForm from "./SearchForm";
import { useState } from "react";

function GeneralItem({ item }) {
  const [loaded, setLoaded] = useState(false);
  const handleImgError = (e) => {
    e.target.src = defaultImg;
  };
  const priceNum = item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <>
      <div className={styles.thumbnail}>
        <img
          src={item.images}
          onError={handleImgError}
          alt={item.name}
          style={loaded ? { display: "block" } : { display: "none" }}
          onLoad={() => setLoaded(true)}
        />
      </div>
      <div className={styles.textCover}>
        <p className={styles.itemName}>{item.name}</p>
        <p className={styles.itemPrice}>{priceNum}원</p>
        <div className={styles.viewWish}>
          <img src={btnWish} alt="찜하기" />
          <p className={styles.numWish}>{item.favoriteCount}</p>
        </div>
      </div>
    </>
  );
}

function GeneralItemsList({ page, setPage, pageCount, setPageCount }) {
  const [productContainer, setProductContainer] = useState([]);
  return (
    <div className={`${styles.productContents} ${styles.generalProduct}`}>
      <ProductSearchForm
        productContainer={productContainer}
        setProductContainer={setProductContainer}
        page={page}
        setPage={setPage}
        pageCount={pageCount}
        setPageCount={setPageCount}
      />
      <ul className={styles.productCover}>
        {productContainer &&
          productContainer.map((item) => {
            return (
              <li key={item.id} className={styles.item}>
                <GeneralItem item={item} />
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default GeneralItemsList;
