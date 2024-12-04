import arrowDown from "../../Assets/images/productList/select_down.svg";
import productSearch from "../../Assets/images/productList/pd_search.png";
import styles from "../../Styles/ProductList/ProductList.module.css";
import getProductData from "../../Api/api";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

function ProductSearchForm({
  setProductContainer,
  page,
  setPage,
  setPageCount,
  setIsDataCount,
}) {
  const isTablet = useMediaQuery({
    query: "(max-width: 1200px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const [toggle, setToggle] = useState(true);
  const [filter, setFilter] = useState("최신순");
  const [orderBy, setOrderBy] = useState("recent");
  const [search, setSearch] = useState("");
  const [isWidth, setIsWidth] = useState(isMobile ? 4 : isTablet ? 6 : 10);
  const [isResponsive, setIsResponsive] = useState(window.innerWidth);
  setIsDataCount(isWidth);

  const handleFilterToggle = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  const handleNewsetClick = (e) => {
    const filterText = e.target.textContent;
    setFilter(filterText);
    setToggle(true);
    setOrderBy("recent");
    setPage(1);
  };

  const handleBestClick = (e) => {
    const filterText = e.target.textContent;
    setFilter(filterText);
    setToggle(true);
    setOrderBy("favorite");
    setPage(1);
  };

  const handleLoad = async (options) => {
    try {
      const { list, totalCount } = await getProductData(options);
      setProductContainer(list);
      setPageCount(totalCount);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsResponsive(window.innerWidth);
      isMobile ? setIsWidth(4) : isTablet ? setIsWidth(6) : setIsWidth(10);
      // 페이지 창 크기 조절 시 pagination 1로 초기화(추후 불필요하단 판단 시 아래 코드만 삭제)
      setPage(1);
      setIsDataCount(isWidth);
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

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    setPage(1);
  };
  return (
    <>
      <div className={styles.filterCover}>
        <p className={styles.listTitle}>전체 상품</p>
        <div className={styles.searchContainer}>
          <form>
            <div className={styles.formCover}>
              <div className={styles.inputBox}>
                <img src={productSearch} alt="상품검색" />
                <input
                  name="search"
                  placeholder="검색할 상품을 입력해주세요"
                  onChange={handleSearch}
                />
              </div>
              <Link to="/additem">
                <button type="button">상품 등록하기</button>
              </Link>
            </div>
          </form>
          <div className={styles.selectBox}>
            <div className={styles.btnSelectBox} onClick={handleFilterToggle}>
              <p className={styles.text}>{filter}</p>
              <img
                src={arrowDown}
                alt="옵션보기"
                className={`${!toggle && styles.on}`}
              />
            </div>
            <ul className={`${styles.btnChoose} ${!toggle && styles.active}`}>
              <li onClick={handleNewsetClick}>최신순</li>
              <li onClick={handleBestClick}>좋아요순</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductSearchForm;
