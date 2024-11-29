import { useState } from "react";
import defaultImg from "../../Assets/images/app/common/no_img.jpg";
import btnWish from "../../Assets/images/productList/btn_wish.png";
import styles from "../../Styles/ProductList/common.module.css";
import RecentFilter from "./RecentFilter";

function BestItem({ item }) {
  const [loaded, setLoaded] = useState(false);
  const handleImgError = (e) => {
    e.target.src = defaultImg;
  };
  const priceNum = item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <>
      <div className={`${styles.thumbnail} ${styles.skeleton}`}>
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
        <p className={styles.itemPrice}>{priceNum}</p>
        <div className={styles.viewWish}>
          <img src={btnWish} alt="찜하기" />
          <p className={styles.numWish}>{item.favoriteCount}</p>
        </div>
      </div>
    </>
  );
}

function BestItemsList() {
  const [productList, setProductList] = useState([]);
  return (
    <>
      <RecentFilter productList={productList} setProductList={setProductList} />
      <div className={`${styles.productContents} ${styles.bestProduct}`}>
        <p className={styles.listTitle}>베스트 상품</p>
        <ul className={styles.productCover}>
          {productList &&
            productList.map((item) => {
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
