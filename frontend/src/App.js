import {BrowserRouter, Routes, Route} from "react-router-dom";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList/>}/>
          <Route path="add" element={<AddProduct/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
