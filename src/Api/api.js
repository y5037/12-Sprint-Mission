const BASE_URL = "https://panda-market-api.vercel.app";

// 베스트/전체 상품 리스트
async function getProductData(params = {}) {
  const query = new URLSearchParams(params).toString();
  const response = await fetch(`${BASE_URL}/products?${query}`);

  if (!response.ok) {
    throw new Error("상품을 불러오는 데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}

// 디테일 상품 정보
export async function getProductId(productId, setProductData) {
  const response = await fetch(`${BASE_URL}/products/${productId}`);

  try {
    const body = await response.json();
    setProductData(body);
  } catch (error) {
    console.log(error);
  }

  if (!response.ok) {
    throw new Error("정보를 불러오는 데 실패했습니다.");
  }
}

// 디테일 댓글
export async function getComments(productId, setCommentsData) {
  const response = await fetch(
    `${BASE_URL}/products/${productId}/comments?limit=10`
  );
  try {
    const body = await response.json();
    setCommentsData(body);
  } catch (error) {
    console.log(error);
  }

  if (!response.ok) {
    throw new Error("정보를 불러오는 데 실패했습니다.");
  }
}

// 디테일 댓글 등록
export async function createComment(productId, comment) {
  // 로그인 구현을 안해서인지 접근 권한 없음 - 401 에러 발생으로 댓글달기 구현 보류
  // const surveyData = {
  //   writer: {
  //     image: "",
  //     nickname: "유네림",
  //   },
  //   content: comment,
  //   // updatedAt: new Date(),
  // };
  // const response = await fetch(`${BASE_URL}/products/${productId}/comments`, {
  //   method: "POST",
  //   // 자바스크립트 객체를 JSON 문자열로 변환하여 post 보내기
  //   body: JSON.stringify(surveyData),
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
  // const data = await response.json();
}

export default getProductData;
