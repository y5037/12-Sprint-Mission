import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../../Components/ProductDetail/ProductDetail";
import ItemListNav from "../../Components/App/ItemsListNav";

function ProductDetailPage() {
  const [data, setData] = useState("");

  const params = useParams();
  const BASE_URL = "https://panda-market-api.vercel.app";

  async function getProductId() {
    const productId = params.id;
    const response = await fetch(`${BASE_URL}/products/${productId}`);

    try {
      const body = await response.json();
      setData(body);
    } catch (error) {
      console.log(error);
    }

    if (!response.ok) {
      throw new Error("상품을 불러오는 데 실패했습니다.");
    }
  }
  useEffect(() => {
    getProductId();
  }, []);

  console.log(data);

  return (
    <>
      <ItemListNav />
      <ProductDetail data={data} />
    </>
  );
}

export default ProductDetailPage;
