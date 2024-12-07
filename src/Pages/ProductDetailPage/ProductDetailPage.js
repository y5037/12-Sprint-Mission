import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../../Components/ProductDetail/ProductDetail";
import ItemListNav from "../../Components/App/ItemsListNav";
import InquiryRegister from "../../Components/ProductDetail/InquiryRegister";
import { createComment, getComments, getProductId } from "../../Api/api";

function ProductDetailPage() {
  const [productData, setProductData] = useState("");
  const [commentsData, setCommentsData] = useState("");
  const [comment, setComment] = useState("");

  const params = useParams();
  const productId = params.id;

  // API
  useEffect(() => {
    getProductId(productId, setProductData);
  }, []);

  useEffect(() => {
    getComments(productId, setCommentsData);
  }, []);

  useEffect(() => {
    createComment(productId, comment);
  });

  return (
    <>
      <ItemListNav />
      <ProductDetail productData={productData} />
      <InquiryRegister commentsData={commentsData} setComment={setComment} />
    </>
  );
}

export default ProductDetailPage;
