import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/app/reset.css";
import ScrollToTop from "./Components/App/ScrollToTop";
import Loading from "./Components/App/Loading";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage/RegistrationPage";
import ProductDetailPage from "./Pages/ProductDetailPage/ProductDetailPage";

const App = lazy(() => import("./Components/App/App"));
const HomePage = lazy(() => import("./Pages/HomePage/HomePage"));
const ItemsListPage = lazy(() =>
  import("./Pages/ProductListPage/ItemsListPage")
);
const ProductRgsPage = lazy(() =>
  import("./Pages/ProductRgsPage/ProductRgsPage")
);

function Main() {
  return (
    <BrowserRouter
      // Router Future Flag Warning 메세지가 콘솔에 출력되어 추가
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<RegistrationPage />} />
            <Route path="items">
              <Route index element={<ItemsListPage />} />
              <Route path="additem" element={<ProductRgsPage />} />
              <Route path=":id" element={<ProductDetailPage />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default Main;
