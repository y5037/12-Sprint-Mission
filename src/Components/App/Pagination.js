import { calculatePagination } from "../../utils/calculatorPagination";
import styles from "../../styles/App/Pagination.module.css";
import arrowPrevImg from "../../assets/images/app/pagination/arrow_left.svg";
import arrowNextImg from "../../assets/images/app/pagination/arrow_right.svg";

function PaginationContainer({ page, setPage, pageCount, isDataCount }) {
  const itemCountPerPage = Math.ceil(pageCount / isDataCount); // 페이지 당 보여줄 데이터 개수
  const ITEMS_PER_PAGINATION = 5; // 한 페이지당 pagination 5개 출력

  const { totalPages, currentSet, startPage, endPage } = calculatePagination({
    page,
    pageCount,
    isDataCount,
    ITEMS_PER_PAGINATION,
  });

  const noPrev = page === 1;
  const noNext = page + itemCountPerPage - 1 >= totalPages;

  return (
    <ul className={styles.pagination}>
      {currentSet > 1 && (
        <li
          className={`${styles.move} ${noPrev && styles.invisible}`}
          onClick={() => setPage(1)}
        >
          <img src={arrowPrevImg} alt="<" />
        </li>
      )}
      {Array.from({ length: endPage - startPage + 1 }, (_, i) => (
        <li
          key={i}
          className={`${styles.page} ${
            page === startPage + i && styles.active
          }`}
          onClick={() => setPage(startPage + i)}
        >
          {startPage + i}
        </li>
      ))}
      {currentSet < Math.ceil(totalPages / ITEMS_PER_PAGINATION) && (
        <li
          className={`${styles.move} ${noNext && styles.invisible}`}
          onClick={() => setPage(endPage + 1)}
        >
          <img src={arrowNextImg} alt=">" />
        </li>
      )}
    </ul>
  );
}

export default PaginationContainer;
