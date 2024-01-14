import { GiPlanetCore } from "react-icons/gi";
import {BsSearch} from 'react-icons/bs'
import {AiOutlineUser, AiOutlineShoppingCart} from 'react-icons/ai'
import CartCountBadge from "./CartCountBadge";
import { motion } from 'framer-motion';

const FadeInAnimationVariant = {
    initial: {
      opacity: 0,
      x: 100
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  }


const MobNav =  ({setShowCart}: any) => {
  return (
    <motion.div className="sticky font-shoulder mt-4 top-0 bg-white z-10"
    variants={FadeInAnimationVariant}
    initial='initial'
    whileInView='animate'
    viewport= {{
        once: true
    }}>
        <div className="container lg:hidden">
            <div className="flex justify-between items-center px-4 py-8">
                <div className="flex items-center gap-6">
                    <BsSearch size={20}/>
                </div>
                <div className="flex text-slate-700 text-xl font-bold items-center">
                    <GiPlanetCore size={20}/>
                    <h1 className="lg:text-2xl text-lg ml-2 font-medium">BaIlEyWoRld</h1>
                </div>
                <div className="flex text-slate-700 gap-4">
                    <div className="icon_wrapper w-[40px] h-[40px]">
                        <AiOutlineUser size={20}/>
                    </div>
                    <div className="icon_wrapper w-[40px] h-[40px] hover:text-white duration-500 hover:bg-blue-300 cursor-pointer relative" onClick={() => setShowCart(true)}>
                        <AiOutlineShoppingCart size={20}/>
                        <CartCountBadge size="w-[18px] h-[18px]"/>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default MobNav

