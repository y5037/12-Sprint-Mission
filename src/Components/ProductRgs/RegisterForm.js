import styles from "../../Styles/ProductRgs/ProductRgs.module.css";
import { useState, useEffect } from "react";
import RegisterInput from "./RegisterInput";
import RegisterImgFile from "./RegisterImgFile";

function RegisterForm() {
  const INITIAL_VALUES = {
    // 이미지 필수 추가 조건을 대비한 코드
    // imgFile: null,
    title: "",
    description: "",
    price: 0,
    tag: [],
  };

  // file input 제외한 모든 input
  const [values, setValues] = useState(INITIAL_VALUES);
  // file input
  const [imgFile, setImgFile] = useState("");
  const [isDisableChk, setIsDisableChk] = useState(true);
  const trueList = [];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("price", values.price);
  };

  useEffect(() => {
    if (
      values.title !== "" &&
      values.description !== "" &&
      values.price > 0 &&
      values.tag.length > 0
    ) {
      setIsDisableChk(false);
    } else {
      setIsDisableChk(true);
    }
  }, [values]);

  return (
    <div className={styles.pagiContainer}>
      <form onSubmit={handleSubmit}>
        <div className={styles.submitContainer}>
          <p className={styles.submitTitle}>상품 등록하기</p>
          <button
            type="button"
            className={styles.btnSubmit}
            disabled={isDisableChk ? true : false}
          >
            등록
          </button>
        </div>
        <RegisterImgFile
          setValues={setValues}
          imgFile={imgFile}
          setImgFile={setImgFile}
        />
        <RegisterInput setValues={setValues} />
      </form>
    </div>
  );
}

export default RegisterForm;
