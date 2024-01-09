import img1 from '../assets/cyberpunk_2.jpg'
import neuro from '../assets/neuro.jpg'
import crash from '../assets/crash.jpg'
import carbon from '../assets/carbon.jpg'
import android from '../assets/android.jpg'
import ProductCard from './ProductCard'

const data = [
  {id: 0, img: crash, name: 'Snow Crash', author: 'Neal Stephenson', price: 18},
  {id: 1,img: neuro, name: 'Neuromancer', author: 'William Gibson', price: 17},
  {id: 2, img: carbon, name: 'Altered Carbon', author: 'Richard K. Morgan', price: 21},
  {id: 3, img: android, name: 'Do Androids Dream of Electric Sheep?', author: 'Philip K. Dick', price: 24}
]

const CyberpunkCategory = () => {
  return (
    <div className="container mb-16 pt-16">
      <div className="lg:flex items-center">
        <div>
          <h3 className="font-shoulder font-bold text-slate-700 text-4xl">CyberPunk Genre</h3>
          <p className="text-gray-400 lg:max-w-[600px] font-bold font-gruppo mt-2">Cyberpunk is a subgenre of science fiction in a dystopian futuristic setting that tends to focus on a "combination of lowlife and high tech"</p>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
        <img className="w-full h-full object-cover" src={img1} alt="" />
        {data.map((el) => (
            <ProductCard key={el.id} id={el.id} name={el.name} author={el.author} img={el.img} price={el.price}/>
          ))}
      </div>
    </div>
  )
}

export default CyberpunkCategory

