import {AiOutlineShopping} from 'react-icons/ai'
import { toast } from 'react-toastify';
import { useCartContext } from '../context/CartContext';

interface propsType {
    name: string;
    author: string;
    price: number;
    img: string;
    id: number
    
}

const ProductCard: React.FC<propsType> = ({name, author, price, img}) => {
 const {addToCart} = useCartContext()
 const addProductToCart = () => {
  toast.success('Added to cart')
  addToCart({img, name, price})
 }
  return (
      <div className="border-2 cursor-pointer border-slate-700 hover:scale-105 duration-500 relative">
        <img className='border-b-2 border-slate-700' src={img} alt={name} />
        <div className="space-y-2 relative p-4">
          <h3 className="text-2xl text-slate-700 font-bold font-shoulder">{name}</h3>
          <h3 className="text-gray-400 font-bold font-gruppo">{author}</h3>
          <h3 className="text-slate-700 font-bold text-2xl font-shoulder">{price}$</h3>
          <button className="absolute hover:text-white bg-white duration-500 hover:bg-blue-400 border-slate-400 hover:border-white border-2 w-[40px] h-[40px] text-slate-700 -top-7 right-2 text-[28px] rounded-full grid place-items-center cursor-pointer" onClick={addProductToCart}>
              <AiOutlineShopping className='w-[20px] h-[20px]'/>
          </button>
        </div>
      </div>
   
  )
}

export default ProductCard
