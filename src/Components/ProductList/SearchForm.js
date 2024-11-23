import arrowDown from "../../Assets/images/productList/select_down.svg";
import productSearch from "../../Assets/images/productList/pd_search.png";
import styles from "../../Styles/ProductList/common.module.css";
import productData from "../../api";
import { Link } from "react-router-dom";
import { useState, useLayoutEffect, useEffect } from "react";

function ProductSearchForm({ productList, setProductList }) {
  const [toggle, setToggle] = useState(true);
  const [filter, setFilter] = useState("최신순");
  const [orderBy, setOrderBy] = useState("recent");
  const [offset, setOffset] = useState(0);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isWidth, setIsWidth] = useState(0);
  const [isResponsive, setIsResponsive] = useState(window.innerWidth);

  const handleResponsive = () => {
    if (isResponsive < 768) {
      setIsWidth(4);
    } else if (isResponsive < 1200) {
      setIsWidth(6);
    } else {
      setIsWidth(10);
    }
  };
  useEffect(() => {
    handleResponsive();
  }, []);

  const handleFilterToggle = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  const handleNewsetClick = (e) => {
    const filterText = e.target.textContent;
    setFilter(filterText);
    setToggle(true);
    setOrderBy("recent");
  };

  const handleBestClick = (e) => {
    const filterText = e.target.textContent;
    setFilter(filterText);
    setToggle(true);
    setOrderBy("favorite");
  };

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
      console.log(error);
    } finally {
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

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
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
