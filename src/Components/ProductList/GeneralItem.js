import { useState } from "react";
import styles from "../../styles/ProductList/ProductList.module.css";
import defaultImg from "../../assets/images/app/common/no_img.jpg";
import notFoundImg from "../../assets/images/productList/not_found.png";
import btnWishImg from "../../assets/images/productList/btn_wish.png";
import GeneralSearchForm from "./GeneralSearchForm";

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
          <img src={btnWishImg} alt="찜하기" />
          <p className={styles.numWish}>{item.favoriteCount}</p>
        </div>
      </div>
    </>
  );
}

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
