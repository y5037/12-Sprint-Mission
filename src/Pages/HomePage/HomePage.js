import logo from "../../assets/images/app/navi/logo.svg";
import homeContent1 from "../../assets/images/app/home/Img_home_01.png";
import homeContent2 from "../../assets/images/app/home/Img_home_02.png";
import homeContent3 from "../../assets/images/app/home/Img_home_03.png";
import bannerImg1 from "../../assets/images/app/home/Img_home_top.png";
import bannerImg2 from "../../assets/images/app/home/Img_home_bottom.png";
import styles from "../../styles/Main/Main.module.css";
import { Link } from "react-router-dom";
import Footer from "../../Components/App/Footer";

function HomePage() {
  return (
    <>
      <div className={styles.fixContainer}>
        <nav className={styles.headerWrap}>
          <div className={styles.logoWrap}>
            <Link to="/">
              <img src={logo} alt="판다마켓" />
              <p className={styles.companyName}>판다마켓</p>
            </Link>
          </div>
          <Link to="/login">
            <div className={styles.btnLogin}>로그인</div>
          </Link>
        </nav>
      </div>
      <main>
        <section className={`${styles.section1} ${styles.type1}`}>
          <div className={styles.contentsWrap}>
            <div className={styles.txtBox}>
              <p className={styles.title}>
                일상의 모든 물건을
                <br />
                거래해 보세요
              </p>
              <Link to="/items">
                <div className={styles.btnMain}>구경하러 가기</div>
              </Link>
            </div>
            <div className={styles.imgBox}>
              <img src={bannerImg1} alt="메인 배너 이미지" />
            </div>
          </div>
        </section>
        <section className={`${styles.section2} ${styles.type2}`}>
          <div className={styles.contentsWrap}>
            <div className={styles.imgBox}>
              <img src={homeContent1} alt="인기상품 컨텐츠 이미지" />
            </div>
            <div className={styles.txtBox}>
              <div className={styles.cover}>
                <p className={styles.keyword}>Hot item</p>
                <p className={styles.title}>
                  인기 상품을
                  <br />
                  확인해 보세요
                </p>
                <p className={styles.description}>
                  가장HOT한 중고 거래 물품을
                  <br />
                  판다 마켓에서 확인해 보세요
                </p>
              </div>
            </div>
          </div>
          <div className={`${styles.contentsWrap} ${styles.reverseWrap}`}>
            <div className={`${styles.txtBox} ${styles.reverse}`}>
              <div className={styles.cover}>
                <p className={styles.keyword}>Search</p>
                <p className={styles.title}>
                  구매를 원하는
                  <br />
                  상품을 검색하세요
                </p>
                <p className={styles.description}>
                  구매하고 싶은 물품을 검색해서
                  <br />
                  쉽게 찾아보세요
                </p>
              </div>
            </div>
            <div className={styles.imgBox}>
              <img src={homeContent2} alt="구매 검색 컨텐츠 이미지" />
            </div>
          </div>
          <div className={styles.contentsWrap}>
            <div className={styles.imgBox}>
              <img src={homeContent3} alt="상품 등록 컨텐츠 이미지" />
            </div>
            <div className={styles.txtBox}>
              <div className={styles.cover}>
                <p className={styles.keyword}>Register</p>
                <p className={styles.title}>
                  판매를 원하는
                  <br />
                  상품을 등록하세요
                </p>
                <p className={styles.description}>
                  어떤 물건이든 판매하고 싶은 상품을
                  <br />
                  쉽게 등록하세요
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.section3} ${styles.type1}`}>
          <div className={styles.contentsWrap}>
            <div className={styles.txtBox}>
              <p className={styles.title}>
                믿을 수 있는
                <br />
                판다마켓 중고 거래
              </p>
            </div>
            <div className={styles.imgBox}>
              <img src={bannerImg2} alt="하단 배너 이미지" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
