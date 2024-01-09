import img1 from '../assets/planet.jpg'
import anhilation from '../assets/anhilation.jpg'
import contact from '../assets/contact.jpg'
import ready from '../assets/ready.jpg'
import scout from '../assets/scout.jpg'
import ProductCard from './ProductCard'

const data = [
  {id: 0, img: anhilation, name: 'Anhilation', author: 'Jef Van Der Meer', price: 13},
  {id: 1, img: ready, name: 'Ready Player One', author: 'Ernest Cline', price: 14},
  {id: 2, img: contact, name: 'Contact', author: 'Carl Sagan', price: 21},
  {id: 3, img: scout, name: 'The Body Scout', author: 'Lincoln Michel', price: 24}
]

const HardScifiCategory = () => {
  return (
    <div className="container mb-16 pt-4">
      <div className="lg:flex items-center">
        <div>
          <h3 className="font-shoulder font-bold text-slate-700 text-4xl">HardScifi Genre</h3>
          <p className="text-gray-400 lg:max-w-[600px] font-bold font-gruppo mt-2"> Stories revolving around scientific and technical consistency were written as early as the 1870s with the publication of Jules Verne's Twenty Thousand Leagues Under the Seas in 1870, among other stories</p>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
        <img className="w-full h-full object-cover" src={img1} alt="" />
        {data.map((el) => (
            <ProductCard key={el.id} name={el.name} author={el.author} img={el.img} price={el.price}/>
          ))}
      </div>
    </div>
  )
}

export default HardScifiCategory

