import { useState, useEffect } from "react";
import getProductData from "../../Api/api";
import { useMediaQuery } from "react-responsive";

function RecentFilter({ setProductList }) {
  const isTablet = useMediaQuery({
    query: "(max-width: 1200px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const [orderBy, setOrderby] = useState("favorite");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isWidth, setIsWidth] = useState(isMobile ? 1 : isTablet ? 2 : 4);
  const [isResponsive, setIsResponsive] = useState(window.innerWidth);

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
      isMobile ? setIsWidth(1) : isTablet ? setIsWidth(2) : setIsWidth(4);
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
      pageSize: isWidth,
      search,
      page,
    });
  }, [orderBy, search, page, isWidth]);
}

export default RecentFilter;
