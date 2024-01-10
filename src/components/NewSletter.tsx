import {LuMailOpen} from 'react-icons/lu'

const NewSletter = () => {
  return (
    <div className="bg-sky-500 mt-16">
      <div className="container py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white">
        <div className="flex flex-shrink-0 items-center gap-4">
          <LuMailOpen className='text-[60px]'/>
          <div>
            <h3 className='text-xl font-gruppo sm:text-2xl font-semibold'>Sign Up to our Newsletters</h3>
            <p>...and receive $20 coupon for first shopping</p>
          </div>
        </div>
        <div className="w-full max-w-[500px] relative">
          <input className='py-4 px-6 w-full outline-blue-200 rounded-full' type="text" />
          <button className='bg-slate-700 hover:bg-slate-600 duration-500 absolute top-[50%] right-2 translate-y-[-50%] py-2 px-4 rounded-full'>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default NewSletter
