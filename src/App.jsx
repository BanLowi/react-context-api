import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import SiteLayout from "./layout/SiteLayout";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import Product from "./pages/Product";
import About from "./pages/About";

import BudgetContext from "./context/BudgetContext";
import ProductsContext from "./context/ProductsContext";

const productsURL = "https://fakestoreapi.com/products";

function App() {

  const [products, setProducts] = useState([]);
  const [budgetMode, setBudgetMode] = useState(false);


  function getProducts() {

    axios.get(productsURL)
      .then(response => setProducts(response.data))
      .catch(error => console.log(error))
  }

  useEffect(getProducts, [])

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      <BudgetContext.Provider value={{ setBudgetMode, budgetMode }}>
        <BrowserRouter>
          <Routes>
            {/* Il route del layout è senza l'attributo to */}
            <Route element={<SiteLayout />}>
              {/* Alla pagina home va assegnato l'attributo index */}
              <Route index element={<Homepage />} />
              <Route path="/products" element={<Products products={products} />} />
              <Route path="/products/:id" element={<Product />} />
              <Route path="/about" element={<About />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </BudgetContext.Provider>
    </ProductsContext.Provider>
  )
}

export default App
