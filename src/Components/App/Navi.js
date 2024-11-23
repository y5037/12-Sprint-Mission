import styles from "../../Styles/App/Navi.module.css";
import navLogo from "../../Assets/images/navi/logo.svg";
import profileDefaultImg from "../../Assets/images/navi/profile_default.png";
import { Link } from "react-router-dom";

// 중고마켓 페이지 네비게이션 - /items
function ItemListNav() {
  return (
    <div className={styles.fixContainer}>
      <nav className={styles.navCover}>
        <div className={styles.pageControl}>
          <Link to="/">
            <div className={styles.btnLogo}>
              <img src={navLogo} alt="판다마켓" />
              <p className={styles.companyName}>판다마켓</p>
            </div>
          </Link>

          <div className={styles.btnWrap}>
            <button>자유게시판</button>
            <button className={styles.active}>중고마켓</button>
          </div>
        </div>
        <div className={styles.userControl}>
          <div className={styles.circle}>
            <img src={profileDefaultImg} alt="기본프로필이미지" />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default ItemListNav;
