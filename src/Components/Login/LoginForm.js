import styles from "../../Styles/Login/Login.module.css";
import LogoImg from "../../Assets/images/login/login_logo.png";
import GoogleImg from "../../Assets/images/login/google.svg";
import KaKaoImg from "../../Assets/images/login/kakao.svg";
import InVisibleImg from "../../Assets/images/login/btn_invisible.svg";
import { Link } from "react-router-dom";

function LoginForm() {
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
                    type="email"
                    placeholder="이메일을 입력해주세요"
                    className={styles.input}
                    required
                  />
                  <p className={styles.txtWarning}></p>
                </div>
              </div>
              <div className={`${styles.inputBox} ${styles.pointer}`}>
                <label htmlFor="userpw">비밀번호</label>
                <div className={styles.cover}>
                  <input
                    id="userpw"
                    type="password"
                    placeholder="비밀번호를 입력해주세요"
                    className={styles.input}
                    required
                  />
                  <p className={styles.txtWarning}></p>
                  <button type="button" className={styles.btnVisible}>
                    <img src={InVisibleImg} alt="비밀번호 보기" />
                  </button>
                </div>
              </div>
              <div className={styles.btnBox}>
                <button type="button" className={styles.btnSubmit} disabled>
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
