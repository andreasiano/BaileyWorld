import React from 'react';
import { RxCross1 } from 'react-icons/rx';
import { useCartContext } from '../context/CartContext';
import { FaMinus, FaPlus } from 'react-icons/fa'

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
          <h3 className="font-bold mb-3 text-lg">{name}</h3>
          <p className='font-bold mb-5 text-2xl'>{price}$</p>
      <div className="flex items-center gap-3">
        <button className="rounded-full duration-500 hover:text-white hover:bg-slate-400 border-slate-400 border-2 px-1 py-1">
          <FaMinus size={10}/>
        </button>
        <span>{/* Display quantity here */}</span>
        <button className="rounded-full hover:text-white duration-500 border-slate-400 hover:bg-slate-400 border-2 px-1 py-1">
          <FaPlus size={10}/>
        </button>
      </div>
        </div>
      </div>
      <RxCross1 onClick={removeProductFromCart} className='cursor-pointer' />
    </div>
  );
};

export default CartProduct;