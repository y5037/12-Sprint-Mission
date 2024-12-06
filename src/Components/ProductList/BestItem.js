import { useState } from "react";
import styles from "../../styles/productList/productList.module.css";
import defaultImg from "../../assets/images/app/common/no_img.jpg";
import btnWishImg from "../../assets/images/productList/btn_wish.png";

function BestItem({ item }) {
  const [loaded, setLoaded] = useState(false);
  const handleImgError = (e) => {
    e.target.src = defaultImg;
  };
  const formattedPrice = item.price.toLocaleString();

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
        <p className={styles.itemPrice}>{formattedPrice}</p>
        <div className={styles.viewWish}>
          <img src={btnWishImg} alt="찜하기" />
          <p className={styles.numWish}>{item.favoriteCount}</p>
        </div>
      </div>
    </>
  );
}

export default BestItem;
