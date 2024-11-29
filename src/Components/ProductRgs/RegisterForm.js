import styles from "../../Styles/ProductRgs/common.module.css";
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
    tag: "",
  };

  const [values, setValues] = useState(INITIAL_VALUES);
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
    const list = Object.values(values).map((val) => {
      // 객체의 value 값 불린형으로 전환
      const isCheck = Boolean(val);
      // value가 true일 때 trueList에 true를 추가하고 값이 4개 이상이 되면 등록버튼 활성화
      if (isCheck) {
        trueList.push(true);
        // 이미지 필수 추가 조건이면 length를 4 이상으로 변경
        if (trueList.length > 3) {
          setIsDisableChk(false);
        }
      } else {
        setIsDisableChk(true);
      }
    });
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
