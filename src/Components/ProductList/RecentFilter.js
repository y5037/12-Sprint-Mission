import { useEffect, useState, useLayoutEffect } from "react";
import productData from "../../api";

function RecentFilter({ productList, setProductList }) {
  const [orderBy, setOrderby] = useState("favorite");
  const [offset, setOffset] = useState(0);
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
  console.log(isWidth);

  const handleLoad = async (options) => {
    try {
      const { list } = await productData(options);
      setProductList(list);
      if (options.offset === 0) {
        setProductList(list);
      } else {
        // 추후 데이터 삭제 처리 후 리렌더링 시 삭제된 요소가 다시 살아나는 버그를 방지
        setProductList((currentItems) => [...currentItems, ...list]);
      }
      // 기존 offset과 list 데이터 수를 더한 값을 저장하여 더보기 시 데이터를 어디서부터 불러 올 것인지에 대한 코드
      setOffset(options.offset + list.length);
    } catch (error) {
      console.log();
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
      offset: 0,
      pageSize: isWidth,
      search,
      page,
    });
  }, [orderBy, search, page, isWidth]);
}

export default RecentFilter;
