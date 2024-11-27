import "./Styles/App/Reset.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./Components/App/ScrollToTop";
import App from "./Components/App/App";
import HomePage from "./Pages/Home/HomePage";
import ItemsListPage from "./Pages/ProductListPage/ItemsListPage";

function Main() {
  return (
    <BrowserRouter>
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
