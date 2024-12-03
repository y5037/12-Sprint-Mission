import "../../Styles/App/Pagination.css";
import Pagination from "react-js-pagination";
import { useMediaQuery } from "react-responsive";

function PaginationContainer({ page, setPage, pageCount }) {
  const isTablet = useMediaQuery({
    query: "(max-width: 1200px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <Pagination
      activePage={page}
      totalItemsCount={pageCount}
      itemsCountPerPage={isMobile ? 4 : isTablet ? 6 : 10}
      pageRangeDisplayed={5}
      prevPageText={""}
      nextPageText={""}
      onChange={handlePageChange}
    />
  );
}

export default PaginationContainer;
