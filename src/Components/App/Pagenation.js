import styles from "../../Styles/App/Pagenation.module.css";
import prevButton from "../../Assets/images/pagination/arrow_left.png";
import nextButton from "../../Assets/images/pagination/arrow_right.png";

function PageNation() {
  return (
    <ul className={styles.pageNationWrap}>
      <li>
        <img src={prevButton} alt="맨앞으로" />
      </li>

      {/* 페이지 수에 따라 */}
      <li className={styles.active}>1</li>

      <li>
        <img src={nextButton} alt="맨뒤로" />
      </li>
    </ul>
  );
}

export default PageNation;
