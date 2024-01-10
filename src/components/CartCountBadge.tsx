import { useCartContext } from "../context/CartContext"

interface propsType {
    size: string
}

const CartCountBadge: React.FC<propsType> = ({size}) => {
  const {product} = useCartContext()
  return (
    <div className={`absolute bg-slate-700 text-white text-[8px] lg:text-[14px] ${size} -right-3 -top-1 rounded-full grid place-items-center`}>
      {product.length}
    </div>
  )
}

export default CartCountBadge
