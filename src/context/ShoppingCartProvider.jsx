import { createContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CartContext = createContext(null);

const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const clearCart = () => setCart([]);

  const addProductMessage = () => {
    toast.success("El producto fue añadido al carrito", {
      position: "bottom-center",
      autoClose: 2000,
      pauseOnHover: false,
      theme: "colored",
    });
  };

  const addProduct = (product, quantity) => {
    let newCart;
    let prod = cart.find((prod) => prod.id === product.id);
    if (prod) {
      prod.quantity += quantity;
      newCart = [...cart];
    } else {
      prod = { ...product, quantity: quantity };
      newCart = [...cart, prod];
    }
    setCart(newCart);
    addProductMessage();
  };

  const removeProduct = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  let totalProducts = 0;
  cart.map((prod) => (totalProducts += prod.quantity));

  let totalPrice = 0;
  cart.map((prod) => (totalPrice += prod.price * prod.quantity));

  console.log(cart);

  return (
    <>
      <CartContext.Provider
        value={{
          cart,
          setCart,
          clearCart,
          addProduct,
          removeProduct,
          totalProducts,
          totalPrice,
        }}
      >
        {children}
      </CartContext.Provider>
      <ToastContainer />
    </>
  );
};

export default ShoppingCartProvider;
