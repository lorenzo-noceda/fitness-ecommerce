import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route
          exact
          path="/catalogue"
          element={<ItemListContainer greeting={"Catalogo de productos"} />}
        />
        <Route
          exact
          path="/category/:category"
          element={<ItemListContainer greeting={"Catalogo de productos"} />}
        />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/catalogue/:id" element={<ItemDetailContainer />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
