import { RxCross1 } from 'react-icons/rx';
import CartProduct from './CartProduct';
import { useCartContext } from '../context/CartContext';

const Cart = ({ setShowCart }: any) => {
  const { product } = useCartContext();

  return (
    <div onClick={() => setShowCart(false)} className='bg-black/50 w-full h-screen overflow-y-auto fixed left-0 top-0 z-20'>
      <div onClick={(e) => e.stopPropagation()} className='max-w-[400px] overflow-y-auto w-full h-full bg-white absolute right-0 top-0 p-6'>
        <div className='icon_wrapper hover:text-white duration-500 hover:bg-blue-300 cursor-pointer w-[50px] h-[50px] absolute top-3 right-2'>
          <RxCross1 onClick={() => setShowCart(false)}/>
        </div>
        <h3 className='pt-6 font-shoulder font-bold text-2xl text-gray-600 uppercase'>Cart</h3>
        <div className='mt-6'>
          {product.map((el: any) => (
            <CartProduct id={el.id} key={el.name} img={el.img} name={el.name} price={el.price} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
