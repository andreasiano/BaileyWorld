import React from 'react';
import { RxCross1 } from 'react-icons/rx';
import { useCartContext } from '../context/CartContext';

interface propsType {
  img: string;
  name: string;
  price: number;
  id: number
}

const CartProduct: React.FC<propsType> = ({ img, name, price }) => {
  const {removeFromCart} = useCartContext()
  const removeProductFromCart = () => {
    removeFromCart({ img, name, price });
  };
  return (
    <div className="flex justify-between mb-4 items-center">
      <div className="flex items-center gap-4">
        <img className="w-[100px]" src={img} alt={name} />
        <div className='font-shoulder text-slate-700'>
          <h3 className="font-bold text-lg">{name}</h3>
          <p className='font-bold text.md'>{price}$</p>
        </div>
      </div>
      <RxCross1 onClick={removeProductFromCart} className='cursor-pointer' />
    </div>
  );
};

export default CartProduct;