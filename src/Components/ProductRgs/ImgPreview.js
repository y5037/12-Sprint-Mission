import styles from "../../Styles/ProductRgs/common.module.css";
import deleteBtnImg from "../../Assets/images/productRgs/cancel.svg";

function ImgPreview({ preview, handleDeleteClick }) {
  return (
    <>
      <img src={preview} alt="" />
      <div className={styles.circle} onClick={handleDeleteClick}>
        <img src={deleteBtnImg} alt="삭제" />
      </div>
    </>
  );
}

export default ImgPreview;
