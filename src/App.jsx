import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import ShoppingCartProvider from "./context/ShoppingCartProvider";

const App = () => {
  return (
    <BrowserRouter>
      <ShoppingCartProvider>
        <NavBar />

        <Routes>
          <Route exact path="/fitness-ecommerce/" element={<Welcome />} />
          <Route
            exact
            path="/fitness-ecommerce/catalogue"
            element={<ItemListContainer greeting={"Catalogo de productos"} />}
          />
          <Route
            exact
            path="/fitness-ecommerce/category/:category"
            element={<ItemListContainer greeting={"Catalogo de productos"} />}
          />
          <Route exact path="/fitness-ecommerce/cart" element={<Cart />} />
          <Route
            exact
            path="/fitness-ecommerce/catalogue/:id"
            element={<ItemDetailContainer />}
          />
        </Routes>
      </ShoppingCartProvider>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
