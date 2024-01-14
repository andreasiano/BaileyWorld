
import img1 from '../assets/opera.jpg'
import dune from '../assets/dune.jpg'
import time from '../assets/time.jpg'
import foundation from '../assets/foundation.jpg'
import hyperion from '../assets/hyperion.jpg'
import ProductCard from './ProductCard'
import { motion } from 'framer-motion';

const data = [
  {id: 0, img: dune, name: 'Dune', author: 'Frank Herbert', price: 18},
  {id: 1, img: foundation, name: 'Foundation', author: 'Isaac Asimov', price: 17},
  {id: 2, img: hyperion, name: 'Hyperion', author: 'Dan Simmons', price: 27},
  {id: 3, img: time, name: 'Children of Time ', author: 'Adrian Tchaikowsky', price: 24}
]

const FadeInAnimationVariant = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8
    }
  }
}

const SpaceCategory = () => {
  return (
    <motion.div className="container mb-16 pt-8"
    variants={FadeInAnimationVariant}
    initial='initial'
    whileInView='animate'
    viewport= {{
        once: true
    }}>
      <div className="lg:flex items-center">
        <div>
          <h3 className="font-shoulder font-bold text-slate-700 text-4xl">SpaceOpera Genre</h3>
          <p className="text-gray-400 lg:max-w-[600px] font-bold font-gruppo mt-2">Space opera is a subgenre of science fiction that emphasizes space warfare, with use of melodramatic, risk-taking space adventures, relationships, and chivalric romance.</p>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
        <img className="w-full h-full object-cover" src={img1} alt="" />
        {data.map((el) => (
            <ProductCard id={el.id} name={el.name} author={el.author} img={el.img} price={el.price}/>
          ))}
      </div>
    </motion.div>
  )
}

export default SpaceCategory
