import { createContext, useState } from "react";

export const CartContext = createContext(null);

const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const clearCart = () => setCart([]);

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
  };

  const removeProduct = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  let totalProducts = 0;
  cart.forEach((prod) => (totalProducts += prod.quantity));

  let totalPrice = 0;
  cart.forEach((prod) => (totalPrice += prod.price * prod.quantity));

  return (
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
  );
};

export default ShoppingCartProvider;
