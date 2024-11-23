import styles from "../../Styles/App/Pagination.css";
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
      prevPageText={""}
      nextPageText={""}
      onChange={handlePageChange}
    />
  );
}

export default HandlePagiNation;
