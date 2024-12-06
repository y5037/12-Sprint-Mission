import styled from "styled-components";
import styles from "../../styles/productDetail/productDetail.module.css";
import productDefaultImg from "../../assets/images/app/common/no_img.jpg";
import profileDefaultImg from "../../assets/images/productDetail/default_profile.svg";
import favoriteImg from "../../assets/images/productDetail/favorite.svg";
import OptionMenuImg from "../../assets/images/productDetail/option_menu.svg";
import { useState } from "react";

const SelectBox = styled.div`
  position: absolute;
  right: 0;
  top: 30px;
  border: 1px solid var(--gray-300);
  border-radius: 10px;
  background: var(--white);
`;

const SelectButton = styled.div`
  padding: 15px 40px;
  color: var(--gray-500);
  font-size: 1.6em;
  cursor: pointer;

  &:first-child {
    border-bottom: 1px solid var(--gray-300);
  }
`;

function ProductDetail({ data }) {
  const formattedPrice = Number(data.price).toLocaleString();
  const formattedDate = String(data.createdAt).slice(0, 10);

  const [postOption, setPostOption] = useState(false);

  const handleImgError = (e) => {
    e.target.src = productDefaultImg;
  };
  const handlePostOptionClick = () => {
    postOption ? setPostOption(false) : setPostOption(true);
  };
  return (
    <div className={styles.pagiContainer}>
      <div className={styles.section1}>
        <div className={styles.productImg}>
          <img src={data.images} onError={handleImgError} alt={data.name} />
        </div>
        <div className={styles.descriptionContainer}>
          <div>
            <div className={styles.titleCover}>
              <p className={styles.title}>{data.name}</p>
              <p className={styles.price}>{formattedPrice}원</p>
              <div className={styles.btnMore} onClick={handlePostOptionClick}>
                <img src={OptionMenuImg} alt="더보기" />
                {postOption ? (
                  <SelectBox>
                    <SelectButton>수정하기</SelectButton>
                    <SelectButton>삭제하기</SelectButton>
                  </SelectBox>
                ) : (
                  ""
                )}
              </div>
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
