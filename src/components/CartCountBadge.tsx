interface propsType {
    size: string
}

const CartCountBadge: React.FC<propsType> = ({size}) => {
  return (
    <div className={`absolute bg-slate-700 text-white text-[14px] ${size} -right-3 -top-1 rounded-full grid place-items-center`}>
      0
    </div>
  )
}

export default CartCountBadge
