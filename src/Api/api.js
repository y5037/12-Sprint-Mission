const BASE_URL = "https://panda-market-api.vercel.app";

async function getProductData(params = {}) {
  const query = new URLSearchParams(params).toString();
  const response = await fetch(`${BASE_URL}/products?${query}`);

  if (!response.ok) {
    throw new Error("상품을 불러오는 데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}

export default getProductData;
