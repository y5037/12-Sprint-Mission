async function getProductData({ orderBy, pageSize, search, page }) {
  const query = `page=${page}&orderBy=${orderBy}&pageSize=${pageSize}&keyword=${search}`;
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?${query}`
  );

  if (!response.ok) {
    throw new Error("상품을 불러오는 데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}

export default getProductData;
