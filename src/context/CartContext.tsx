import React, { createContext, ReactNode, useContext, useState } from 'react';

interface ICartContext {
  product: any[];
  addToCart: (cart: any) => void;
  removeFromCart: (cart: any) => void;
  
}

const CartContext = createContext<ICartContext>({
  product: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

interface ICartContextProvider {
  children: ReactNode;
}

export const CartContextProvider: React.FC<ICartContextProvider> = ({ children }) => {
  const [product, setProduct] = useState<any>([]);

  const addToCart = (cart: any) => {

    const isProductInCart = product.some((item) => areProductsEqual(item, cart));

    if (!isProductInCart) {
      setProduct((prevProducts: any) => [...prevProducts, cart]);
    } else {
      console.warn('Product is already in the cart');
    }
  };


  const removeFromCart = (productToRemove: any) => {
    setProduct((prevProducts: any) =>
      prevProducts.filter((product: any) => !areProductsEqual(product, productToRemove))
    );
  };
  
  const areProductsEqual = (product1: any, product2: any) => {
    return (
      product1.img === product2.img &&
      product1.name === product2.name &&
      product1.price === product2.price
    );
  };

  return (
    <CartContext.Provider value={{ product, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};