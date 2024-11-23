import styles from "../../Styles/App/Pagenation.css";
import prevButton from "../../Assets/images/pagination/arrow_left.png";
import nextButton from "../../Assets/images/pagination/arrow_right.png";
import Pagination from "react-js-pagination";

function HandlePagiNation({ page, setPage, pageCount }) {
  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <Pagination
      activePage={page}
      totalItemsCount={pageCount}
      pageRangeDisplayed={5}
      prevPageText={"<"}
      nextPageText={">"}
      onChange={handlePageChange}
    />
  );
}

export default HandlePagiNation;
