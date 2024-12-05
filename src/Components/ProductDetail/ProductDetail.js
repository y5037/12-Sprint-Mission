import styles from "../../styles/ProductDetail/ProductDetail.module.css";
import profileDefaultImg from "../../assets/images/productDetail/default_profile.svg";
import favoriteImg from "../../assets/images/productDetail/favorite.svg";
import btnMoreImg from "../../assets/images/productDetail/btn_more.svg";

function ProductDetail({ data }) {
  const formattedPrice = Number(data.price).toLocaleString();
  const formattedDate = String(data.createdAt).slice(0, 10);
  return (
    <div className={styles.pagiContainer}>
      <div className={styles.section1}>
        <div className={styles.productImg}>
          <img src={data.images} alt={data.name} />
        </div>
        <div className={styles.descriptionContainer}>
          <div>
            <div className={styles.titleCover}>
              <p className={styles.title}>{data.name}</p>
              <p className={styles.price}>{formattedPrice}원</p>
              <img src={btnMoreImg} alt="더보기" />
            </div>
            <div className={styles.descriptionCover}>
              <p className={styles.subTitle}>상품 소개</p>
              <p className={styles.description}>{data.description}</p>
            </div>
            <div className={styles.tagsCover}>
              <p className={styles.subTitle}>상품 태그</p>
              <ul>
                {data.tags &&
                  data.tags.map((tag, i) => {
                    return (
                      <li key={i} className={styles.tagName}>
                        #{tag}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
          <div className={styles.cover}>
            <div className={styles.owner}>
              <div className={styles.profileImg}>
                <img src={profileDefaultImg} alt="기본 프로필 이미지" />
              </div>
              <div className={styles.postInfo}>
                <p className={styles.nickName}>{data.ownerNickname}</p>
                <p className={styles.date}>{formattedDate}</p>
              </div>
            </div>
            <div className={styles.favoritCount}>
              <img src={favoriteImg} alt="좋아요" />
              <p className={styles.count}>{data.favoriteCount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
