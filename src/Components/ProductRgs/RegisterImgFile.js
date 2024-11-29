import styles from "../../Styles/ProductRgs/common.module.css";
import uploadImg from "../../Assets/images/productRgs/upload.svg";
import ImgPreview from "./ImgPreview";
import { useEffect, useRef, useState } from "react";

// 상품 이미지 등록
function RegisterImgFile({ imgFile, setImgFile }) {
  const [preview, setPreview] = useState("");
  const [isImgChk, setIsImgChk] = useState(false);
  const inputRef = useRef();

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    // 이미지 필수 추가 조건을 대비한 코드
    // setValues((prevValue) => ({
    //   ...prevValue,
    //   ["imgFile"]: nextValue,
    // }));
    setImgFile(nextValue);
    // 같은 파일을 재업로드 할 경우 event가 trigger되지 않는 버그 방지
    e.target.value = "";
  };

  const handlePreventionClick = (e) => {
    if (imgFile) {
      e.preventDefault();
      setIsImgChk(true);
    } else {
      setIsImgChk(false);
    }
  };

  const handleDeleteClick = () => {
    setIsImgChk(false);
    setImgFile("");
    setPreview("");
  };

  useEffect(() => {
    if (!imgFile) return;
    const nextPreview = URL.createObjectURL(imgFile);
    setPreview(nextPreview);
  }, [imgFile]);

  return (
    <div className={`${styles.inputContainer} ${styles.fileBox}`}>
      <p className={styles.inputTitle}>상품 이미지</p>
      <div className={styles.previewContainer}>
        <div className={styles.coverTile}>
          <label htmlFor="imgUpload">
            <div className={styles.cover}>
              <img src={uploadImg} alt="이미지 업로드" />
              <p className={styles.imgUpload}>이미지 등록</p>
            </div>
          </label>
          <input
            id="imgUpload"
            name="imgFile"
            type="file"
            className={styles.btnImgUpload}
            accept=".jpg, .png"
            onChange={handleChange}
            ref={inputRef}
            onClick={handlePreventionClick}
          />
        </div>
        {preview && (
          <div className={`${styles.coverTile} ${styles.thumbnail}`}>
            <ImgPreview
              preview={preview}
              handleDeleteClick={handleDeleteClick}
            />
          </div>
        )}
      </div>
      {isImgChk ? (
        <p className={styles.warnMessage}>
          *이미지 등록은 최대 1개까지 가능합니다.
        </p>
      ) : (
        ""
      )}
    </div>
  );
}

export default RegisterImgFile;
