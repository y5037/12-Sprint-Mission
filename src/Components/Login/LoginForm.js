import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import EmailValidation from "../../utils/emailValidation";
import styles from "../../styles/loginRegistration/loginRegistration.module.css";
import LogoImg from "../../assets/images/loginRegistration/login_logo.png";
import GoogleImg from "../../assets/images/loginRegistration/google.svg";
import KaKaoImg from "../../assets/images/loginRegistration/kakao.svg";
import InVisibleImg from "../../assets/images/loginRegistration/btn_invisible.svg";
import VisibleImg from "../../assets/images/loginRegistration/btn_visible.svg";

function LoginForm() {
  const [getId, setGetId] = useState("");
  const [isEmail, setIsEmail] = useState("");
  const [isPassword, setIsPassword] = useState("");
  const [emailWarnMsg, setEmailWarnMsg] = useState("");
  const [passwordWarnMsg, setPasswordWarnMsg] = useState("");
  const [emailRequiredChk, setEmailRequiredChk] = useState(true);
  const [passwordRequiredChk, setPasswordRequiredChk] = useState(true);
  const [emailErrorChk, setEmailErrorChk] = useState(false);
  const [passwordErrorChk, setPasswordErrorChk] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isSubmit, setIsSubmit] = useState("");

  const getEmailInfo = (e) => {
    setGetId(e.target.id);
    setIsEmail(e.target.value);
  };

  const getPasswordInfo = (e) => {
    setGetId(e.target.id);
    setIsPassword(e.target.value);
  };

  const emailErrorContext = (txt, flag) => {
    setEmailWarnMsg(txt);
    setEmailRequiredChk(flag);
  };

  const passwordErrorContext = (txt, flag) => {
    setPasswordWarnMsg(txt);
    setPasswordRequiredChk(flag);
  };

  const handlePasswordVisible = (e) => {
    if (passwordVisible) {
      setPasswordVisible(false);
    } else {
      setPasswordVisible(true);
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
      default:
    }
  }, [isEmail, isPassword]);

  useEffect(() => {
    if (emailRequiredChk !== true && passwordRequiredChk !== true) {
      setIsSubmit(true);
    } else {
      setIsSubmit(false);
    }
  }, [emailRequiredChk, passwordRequiredChk]);

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
              <div className={styles.btnBox}>
                <button
                  type="button"
                  className={styles.btnSubmit}
                  disabled={isSubmit ? false : true}
                >
                  로그인
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
            판다마켓이 처음이신가요? <Link to="/signup">회원가입</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
