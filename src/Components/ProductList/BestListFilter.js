import { useState, useEffect } from "react";
import getProductData from "../../Api/api";
import CalculatorMediaQuery from "../../utils/calculatormediaQuery";

function BestListFilter({ setProductList }) {
  const { isTablet, isMobile } = CalculatorMediaQuery();
  const [isResponsive, setIsResponsive] = useState(window.innerWidth);
  const [isItemCount, setIsItemCount] = useState(
    isMobile ? 1 : isTablet ? 2 : 4
  );

  const [orderBy, setOrderby] = useState("favorite");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const handleLoad = async (options) => {
    try {
      const { list } = await getProductData(options);
      setProductList(list);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsResponsive(window.innerWidth);
      isMobile
        ? setIsItemCount(1)
        : isTablet
        ? setIsItemCount(2)
        : setIsItemCount(4);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      // cleanup
      window.removeEventListener("resize", handleResize);
    };
  }, [isResponsive]);

  useEffect(() => {
    handleLoad({
      orderBy,
      pageSize: isItemCount,
      search,
      page,
    });
  }, [orderBy, search, page, isItemCount]);
}

export default BestListFilter;
