import "./Styles/App/Reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Main/Home";
import ItemsListPage from "./Components/ProductList/ItemsList";

function App() {
  return (
    <>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<ItemsListPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
