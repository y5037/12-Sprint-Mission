import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import EmailValidation from "../App/EmailValidation";
import styles from "../../Styles/loginRegistration/loginRegistration.module.css";
import LogoImg from "../../Assets/images/loginRegistration/login_logo.png";
import GoogleImg from "../../Assets/images/loginRegistration/google.svg";
import KaKaoImg from "../../Assets/images/loginRegistration/kakao.svg";
import InVisibleImg from "../../Assets/images/loginRegistration/btn_invisible.svg";
import VisibleImg from "../../Assets/images/loginRegistration/btn_visible.svg";

function RegistrationForm() {
  const [getId, setGetId] = useState("");
  const [isEmail, setIsEmail] = useState("");
  const [isName, setIsName] = useState("");
  const [isPassword, setIsPassword] = useState("");
  const [isRePassword, setIsRePassword] = useState("");
  const [emailWarnMsg, setEmailWarnMsg] = useState("");
  const [nameWarnMsg, setNameWarnMsg] = useState("");
  const [passwordWarnMsg, setPasswordWarnMsg] = useState("");
  const [rePasswordWarnMsg, setRePasswordWarnMsg] = useState("");
  const [emailRequiredChk, setEmailRequiredChk] = useState(true);
  const [nameRequiredChk, setNameRequiredChk] = useState(true);
  const [passwordRequiredChk, setPasswordRequiredChk] = useState(true);
  const [rePasswordRequiredChk, setRePasswordRequiredChk] = useState(true);
  const [emailErrorChk, setEmailErrorChk] = useState(false);
  const [nameErrorChk, setNameErrorChk] = useState(false);
  const [passwordErrorChk, setPasswordErrorChk] = useState(false);
  const [rePasswordErrorChk, setRePasswordErrorChk] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rePasswordVisible, setRePasswordVisible] = useState(false);
  const [isSubmit, setIsSubmit] = useState("");
  const isPasswordInput = useRef();
  const isRePasswordInput = useRef();

  const getEmailInfo = (e) => {
    setGetId(e.target.id);
    setIsEmail(e.target.value);
  };

  const getPasswordInfo = (e) => {
    setGetId(e.target.id);
    setIsPassword(e.target.value);
  };

  const getNameEmailInfo = (e) => {
    setGetId(e.target.id);
    setIsName(e.target.value);
  };

  const getRePasswordInfo = (e) => {
    setGetId(e.target.id);
    setIsRePassword(e.target.value);
  };

  const emailErrorContext = (txt, flag) => {
    setEmailWarnMsg(txt);
    setEmailRequiredChk(flag);
  };

  const passwordErrorContext = (txt, flag) => {
    setPasswordWarnMsg(txt);
    setPasswordRequiredChk(flag);
  };

  const nameErrorContext = (txt, flag) => {
    setNameWarnMsg(txt);
    setNameRequiredChk(flag);
  };

  const rePasswordErrorContext = (txt, flag) => {
    setRePasswordWarnMsg(txt);
    setRePasswordRequiredChk(flag);
  };

  const handlePasswordVisible = (e) => {
    if (passwordVisible) {
      setPasswordVisible(false);
    } else {
      setPasswordVisible(true);
    }
  };

  const handleRePasswordVisible = (e) => {
    if (rePasswordVisible) {
      setRePasswordVisible(false);
    } else {
      setRePasswordVisible(true);
    }
  };

  useEffect(() => {
    switch (getId) {
      case "useremail":
        if (isEmail === "") {
          emailErrorContext("이메일을 입력해주세요", true);
          setEmailErrorChk(true);
        } else if (isEmail !== "" && !EmailValidation(isEmail)) {
          emailErrorContext("잘못된 이메일 형식입니다", true);
          setEmailErrorChk(true);
        } else if (EmailValidation(isEmail)) {
          emailErrorContext("", false);
          setEmailErrorChk(false);
        }
        break;
      case "username":
        if (isName === "") {
          nameErrorContext("닉네임을 입력해주세요", true);
          setNameErrorChk(true);
        } else if (isName !== "") {
          nameErrorContext("", false);
          setNameErrorChk(false);
        }
        break;
      case "userpw":
        if (isPassword === "") {
          passwordErrorContext("비밀번호를 입력해주세요", true);
          setPasswordErrorChk(true);
        } else if (isPassword.length < 8) {
          passwordErrorContext("비밀번호를 8자 이상 입력해주세요", true);
          setPasswordErrorChk(true);
        } else if (isPassword.length >= 8) {
          passwordErrorContext("", false);
          setPasswordErrorChk(false);
        }
        break;
      case "pwcheck":
        if (isRePassword === "" || isRePassword !== isPassword) {
          rePasswordErrorContext("비밀번호가 일치하지 않습니다", true);
          setRePasswordErrorChk(true);
        } else if (isRePassword === isPassword) {
          rePasswordErrorContext("", false);
          setRePasswordErrorChk(false);
        }

        if (passwordRequiredChk) {
          rePasswordErrorContext("비밀번호를 먼저 입력해주세요", true);
          setRePasswordErrorChk(true);
          isRePasswordInput.current.value = "";
          isPasswordInput.current.focus();
        }
        break;
      default:
    }
  }, [isEmail, isPassword, isName, isRePassword]);

  // 비밀번호 변경시 비밀번호 확인 인풋 초기화
  useEffect(() => {
    isRePasswordInput.current.value = "";
    setRePasswordRequiredChk(true);
  }, [isPassword]);

  useEffect(() => {
    if (
      emailRequiredChk !== true &&
      passwordRequiredChk !== true &&
      nameRequiredChk !== true &&
      rePasswordRequiredChk !== true
    ) {
      setIsSubmit(true);
    } else {
      setIsSubmit(false);
    }
  }, [
    emailRequiredChk,
    nameRequiredChk,
    passwordRequiredChk,
    rePasswordRequiredChk,
  ]);
  return (
    <>
      <div className={styles.containWrap}>
        <div className={styles.signInLayout}>
          <div className={styles.logo}>
            <Link to="/">
              <img src={LogoImg} alt="판다마켓" className={styles.logoImg} />
              <p className={styles.companyName}>판다마켓</p>
            </Link>
          </div>
          <div className={styles.formWrap}>
            <form>
              <div className={styles.inputBox}>
                <label htmlFor="useremail">이메일</label>
                <div className={styles.cover}>
                  <input
                    id="useremail"
                    className={`${emailErrorChk ? styles.inputError : ""} ${
                      styles.input
                    }`}
                    type="email"
                    placeholder="이메일을 입력해주세요"
                    onChange={getEmailInfo}
                    required={emailRequiredChk ? true : false}
                  />
                  <p className={styles.txtWarning}>{emailWarnMsg}</p>
                </div>
              </div>
              <div className={styles.inputBox}>
                <label htmlFor="username">닉네임</label>
                <div className={styles.cover}>
                  <input
                    id="username"
                    className={`${nameErrorChk ? styles.inputError : ""} ${
                      styles.input
                    }`}
                    type="text"
                    placeholder="닉네임을 입력해주세요"
                    onChange={getNameEmailInfo}
                    required={nameRequiredChk ? true : false}
                  />
                  <p className={styles.txtWarning}>{nameWarnMsg}</p>
                </div>
              </div>
              <div className={`${styles.inputBox} ${styles.pointer}`}>
                <label htmlFor="userpw">비밀번호</label>
                <div className={styles.cover}>
                  <input
                    id="userpw"
                    className={`${passwordErrorChk ? styles.inputError : ""} ${
                      styles.input
                    }`}
                    type={passwordVisible ? "text" : "password"}
                    placeholder="비밀번호를 입력해주세요"
                    onChange={getPasswordInfo}
                    required={passwordRequiredChk ? true : false}
                    ref={isPasswordInput}
                  />
                  <p className={styles.txtWarning}>{passwordWarnMsg}</p>
                  <button
                    type="button"
                    className={styles.btnVisible}
                    onClick={handlePasswordVisible}
                  >
                    <img
                      src={passwordVisible ? VisibleImg : InVisibleImg}
                      alt="비밀번호 보기"
                    />
                  </button>
                </div>
              </div>
              <div className={`${styles.inputBox} ${styles.pointer}`}>
                <label htmlFor="pwcheck">비밀번호 확인</label>
                <div className={styles.cover}>
                  <input
                    id="pwcheck"
                    className={`${
                      rePasswordErrorChk ? styles.inputError : ""
                    } ${styles.input}`}
                    type={rePasswordVisible ? "text" : "password"}
                    placeholder="비밀번호를 입력해주세요"
                    onChange={getRePasswordInfo}
                    required={rePasswordRequiredChk ? true : false}
                    ref={isRePasswordInput}
                  />
                  <p className={styles.txtWarning}>{rePasswordWarnMsg}</p>
                  <button
                    type="button"
                    className={styles.btnVisible}
                    onClick={handleRePasswordVisible}
                  >
                    <img
                      src={rePasswordVisible ? VisibleImg : InVisibleImg}
                      alt="비밀번호 보기"
                    />
                  </button>
                </div>
              </div>
              <div className={styles.btnBox}>
                <button
                  type="button"
                  className={styles.btnSubmit}
                  disabled={isSubmit ? false : true}
                >
                  회원가입
                </button>
              </div>
            </form>
          </div>
          <div className={styles.signSocial}>
            <div className={styles.layoutBox}>
              <p className={styles.txt}>간편 로그인하기</p>
              <div className={styles.cover}>
                <div className={styles.btnGoogle}>
                  <div onClick={() => window.open("https://www.google.com")}>
                    <img src={GoogleImg} alt="Google" />
                  </div>
                </div>
                <div className={styles.btnKakao}>
                  <div
                    onClick={() =>
                      window.open("https://www.kakaocorp.com/page/")
                    }
                  >
                    <img src={KaKaoImg} alt="Kakao" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.returnLink}>
            이미 회원이신가요? <Link to="/login">로그인</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegistrationForm;
