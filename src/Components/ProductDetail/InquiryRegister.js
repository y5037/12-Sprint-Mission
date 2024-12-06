import { format, register } from "timeago.js";
import { useEffect, useRef, useState } from "react";
import { SelectBox, SelectButton } from "../../styles/productDetail/SelectBox";
import { Link } from "react-router-dom";
import koLocale from "timeago.js/lib/lang/ko";
import styles from "../../styles/productDetail/productDetail.module.css";
import optionMenuImg from "../../assets/images/productDetail/option_menu.svg";
import profileDefaultImg from "../../assets/images/productDetail/default_profile.svg";
import btnBackImg from "../../assets/images/app/button/btn_back.svg";

register("ko", koLocale);

function InquiryRegister({ commentsData }) {
  const { list, nextCursor } = commentsData;
  const [selectIndex, setSelectIndex] = useState();
  const [submit, setSubmit] = useState(false);
  const outRef = useRef(null);

  const handleProfileError = (e) => {
    e.target.src = profileDefaultImg;
  };

  function handleOptionClick(i) {
    setSelectIndex(i);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      // 해당 이벤트가 영역 밖이라면 케밥 버튼 비활성화
      if (outRef.current && !outRef.current.contains(event.target)) {
        setSelectIndex("");
      }
    };

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [handleOptionClick]);

  const handleBtnSubmit = (e) => {
    if (e.target.value) {
      setSubmit(true);
    } else {
      setSubmit(false);
    }
  };

  return (
    <div className={styles.pagiContainer}>
      <div className={styles.section2}>
        <form>
          <label htmlFor="inquiry" className={styles.subTitle}>
            문의하기
          </label>
          <textarea
            name="inquiry"
            id="inquiry"
            onChange={handleBtnSubmit}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          />
          <button
            type="submit"
            className={styles.btnSubmit}
            disabled={submit ? false : true}
          >
            등록
          </button>
        </form>
        <ul className={styles.commentList}>
          {list &&
            list.map((comment, i) => {
              const { writer } = comment;
              return (
                <li key={comment.id}>
                  <div className={styles.contentText}>
                    <p>{comment.content}</p>
                    <div
                      className={styles.btnMore}
                      onClick={() => handleOptionClick(i)}
                      ref={outRef}
                    >
                      <img src={optionMenuImg} alt="더보기" />
                      {i === selectIndex && (
                        <SelectBox>
                          <SelectButton>수정하기</SelectButton>
                          <SelectButton>삭제하기</SelectButton>
                        </SelectBox>
                      )}
                    </div>
                  </div>
                  <div className={styles.author}>
                    <div className={styles.profileImg}>
                      <img
                        src={writer.image ? writer.image : profileDefaultImg}
                        onError={handleProfileError}
                        alt="프로필 이미지"
                      />
                    </div>
                    <div className={styles.authorContent}>
                      <p className={styles.nickName}>{writer.nickname}</p>
                      <p className={styles.date}>
                        {format(comment.updatedAt, "ko")}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
        <Link to="/items">
          <div className={styles.btnCover}>
            <button type="button" className={styles.btnBack}>
              목록으로 돌아가기 <img src={btnBackImg} alt="<-" />
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default InquiryRegister;
