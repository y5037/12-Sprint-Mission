import { useEffect, useState, useLayoutEffect } from "react";
import productData from "../../api";

function RecentFilter({ productList, setProductList }) {
  const [orderBy, setOrderby] = useState("favorite");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isWidth, setIsWidth] = useState(0);
  const [isResponsive, setIsResponsive] = useState(window.innerWidth);

  const handleResponsive = () => {
    if (isResponsive < 768) {
      setIsWidth(1);
    } else if (isResponsive < 1200) {
      setIsWidth(2);
    } else {
      setIsWidth(4);
    }
  };
  useEffect(() => {
    handleResponsive();
  }, []);

  const handleLoad = async (options) => {
    try {
      const { list } = await productData(options);
      setProductList(list);
    } catch (error) {
      console.log(error);
    }
  };

  useLayoutEffect(() => {
    const handleResize = () => {
      setIsResponsive(window.innerWidth);
      handleResponsive();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      // cleanup
      window.removeEventListener("resize", handleResize);
    };
  }, [isResponsive]);

  useLayoutEffect(() => {
    handleLoad({
      orderBy,
      pageSize: isWidth,
      search,
      page,
    });
  }, [orderBy, search, page, isWidth]);
}

export default RecentFilter;
