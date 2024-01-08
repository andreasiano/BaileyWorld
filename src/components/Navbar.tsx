import { GiPlanetCore } from "react-icons/gi";
import {BsSearch} from 'react-icons/bs'
import {AiOutlineUser, AiOutlineShoppingCart} from 'react-icons/ai'
import CartCountBadge from "./CartCountBadge";

const Navbar = () => {
  return (
    <div className="sticky font-shoulder top-0 bg-white z-10">
        <div className="container hidden lg:block">
            <div className="flex justify-between items-center p-8">
                <div className="flex text-slate-700 text-xl font-bold items-center">
                    <GiPlanetCore/>
                    <h1 className="text-2xl ml-2 font-medium">BaIlEyWoRld</h1>
                </div>
                <div className="relative w-full max-w-[500px]">
                    <input className="border-2 border-slate-200 outline-none px-6 py-3 rounded-[30px] w-full" type="text" placeholder="Search Books...."/>
                    <BsSearch className='absolute top-0 right-0 mt-4 mr-5 text-gray-500' size={20}/>
                </div>
                <div className="flex text-slate-700 gap-4">
                    <div className="icon_wrapper w-[50px] h-[50px]">
                        <AiOutlineUser/>
                    </div>
                    <div className="icon_wrapper w-[50px] h-[50px] hover:text-white duration-500 hover:bg-blue-300 cursor-pointer relative">
                        <AiOutlineShoppingCart/>
                        <CartCountBadge size="w-[25px] h-[25px]"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
