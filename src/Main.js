import "./Styles/App/Reset.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./Components/App/ScrollToTop";
import App from "./Components/App/App";
import HomePage from "./Pages/HomePage/HomePage";
import ItemsListPage from "./Pages/ProductListPage/ItemsListPage";

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
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="items" element={<ItemsListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
