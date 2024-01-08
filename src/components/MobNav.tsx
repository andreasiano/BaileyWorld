

import { GiPlanetCore } from "react-icons/gi";
import {BsSearch} from 'react-icons/bs'
import {AiOutlineUser, AiOutlineShoppingCart} from 'react-icons/ai'
import CartCountBadge from "./CartCountBadge";

const MobNav = () => {
  return (
    <div className="sticky font-shoulder mt-4 top-0 bg-white z-10">
        <div className="container lg:hidden">
            <div className="flex justify-between items-center p-8">
                <div className="flex items-center gap-6">
                    <BsSearch size={24}/>
                </div>
                <div className="flex text-slate-700 text-xl font-bold items-center">
                    <GiPlanetCore/>
                    <h1 className="text-2xl ml-2 font-medium">BaIlEyWoRld</h1>
                </div>
                <div className="flex text-slate-700 gap-4">
                    <div className="icon_wrapper">
                        <AiOutlineUser/>
                    </div>
                    <div className="icon_wrapper hover:text-white duration-500 hover:bg-blue-300 cursor-pointer relative">
                        <AiOutlineShoppingCart/>
                        <CartCountBadge size="w-[20px] h-[20px]"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MobNav

