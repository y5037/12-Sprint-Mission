import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../../Components/ProductDetail/ProductDetail";
import ItemListNav from "../../Components/App/ItemsListNav";
import InquiryRegister from "../../Components/ProductDetail/InquiryRegister";
import { getComments, getProductId } from "../../Api/api";

function ProductDetailPage() {
  const [productData, setProductData] = useState("");
  const [commentsData, setCommentsData] = useState("");

  const params = useParams();
  const BASE_URL = "https://panda-market-api.vercel.app";
  const productId = params.id;

  useEffect(() => {
    getProductId(productId, setProductData);
  }, []);

  useEffect(() => {
    getComments(productId, setCommentsData);
  }, []);

  return (
    <>
      <ItemListNav />
      <ProductDetail productData={productData} />
      <InquiryRegister commentsData={commentsData} />
    </>
  );
}

export default ProductDetailPage;
