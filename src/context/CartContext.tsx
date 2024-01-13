import React, { createContext, ReactNode, useContext, useState } from 'react';

interface IProduct {
  img: string;
  name: string;
  price: number;
}

interface ICartContext {
  product: IProduct[];
  addToCart: (cart: IProduct) => void;
  removeFromCart: (cart: IProduct) => void;
}

const areProductsEqual = (product1: IProduct, product2: IProduct) => {
  return (
    product1.img === product2.img &&
    product1.name === product2.name &&
    product1.price === product2.price
  );
};

const CartContext = createContext<ICartContext>({
  product: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

interface ICartContextProvider {
  children: ReactNode;
}

export const CartContextProvider: React.FC<ICartContextProvider> = ({ children }) => {
  const [product, setProduct] = useState<IProduct[]>([]);

  const addToCart = (cart: IProduct) => {
    const isProductInCart = product.some((item) => areProductsEqual(item, cart));

    if (!isProductInCart) {
      setProduct((prevProducts) => [...prevProducts, cart]);
    } else {
      console.warn('Product is already in the cart');
    }
  };

  const removeFromCart = (productToRemove: IProduct) => {
    setProduct((prevProducts) =>
      prevProducts.filter((product) => !areProductsEqual(product, productToRemove))
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