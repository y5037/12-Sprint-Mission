import "./Styles/App/Reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/HomePage";
import ItemsListPage from "./Pages/ProductListPage/ItemsListPage";
import ScrollToTop from "./Components/App/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<ItemsListPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
