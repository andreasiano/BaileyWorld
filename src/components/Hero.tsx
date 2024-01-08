import hero_1 from '../assets/banner-2.jpg'
import { BsArrowRight } from 'react-icons/bs'

const Hero = () => {
  return (
    <div className="container">
      <div className="grid xl:grid-rows-2 gap-8">
        <div className="xl:col-span-2 xl:row-start-1 xl:row-end-[-1] relative">
            <div className='w-full h-full object-cover rounded-lg absolute bg-black/30'></div>
            <img className='w-full h-[600px] object-cover rounded-lg' src={hero_1} alt="hero image" />
            <div className='absolute w-[200px] sm:w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%]'>
                <p className='text-xl font-gruppo sm:text-lg md:text-2xl font-bold text-white'>20% discount for your first Book</p>
                <h2 className='text-[40px] pb-5 sm:text-[40px] md:text-[60px] text-white font-shoulder'>Find Your New SciFi Book</h2>
                <p className='text-xl font-gruppo pt-4 font-bold text-white'>Millions of books on low prices</p>
                <div className='bg-blue-300 font-shoulder mt-5 text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 md:text-[20px] sm:px-6 sm:py-3 font-bold cursor-pointer'>Shop Now<BsArrowRight/></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
