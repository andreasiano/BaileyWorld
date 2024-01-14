import img1 from '../assets/robot.jpg'
import mother from '../assets/mother.jpg'
import echo from '../assets/echo.jpg'
import kazuro from '../assets/kazuro.jpg'
import irobot from '../assets/irobot.jpg'
import ProductCard from './ProductCard'
import { motion } from 'framer-motion';

const data = [
  {id: 0, img: mother, name: 'The Mother Code', author: 'Carol Stivers', price: 23},
  {id: 1, img: kazuro, name: 'Klara and the Sun', author: 'Kazuo Ishiguro', price: 17},
  {id: 2, img: echo, name: 'The Echo Wife', author: 'Sarah Gailey', price: 14},
  {id: 3, img: irobot, name: 'I, Robot', author: 'Isaac Asimov', price: 24}
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
      duration: 0.9
    }
  }
}

const AndroidCategory = () => {
  return (
    <motion.div className="container mb-16 pt-4"
    variants={FadeInAnimationVariant}
    initial='initial'
    whileInView='animate'
    viewport= {{
        once: true
    }}>
      <div className="lg:flex items-center">
        <div>
          <h3 className="font-shoulder font-bold text-slate-700 text-4xl">AndroidsRobots Genre</h3>
          <p className="text-gray-400 lg:max-w-[600px] font-bold font-gruppo mt-2"> Artifi intelligence and robots are often portrayed in SF as social agents or technologies that extend human capabilities. Several depictions of artificial slave appear in classic stories.</p>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
        <img className="w-full h-full object-cover" src={img1} alt="" />
        {data.map((el) => (
            <ProductCard id={el.id} key={el.id} name={el.name} author={el.author} img={el.img} price={el.price}/>
          ))}
      </div>
    </motion.div>
  )
}

export default AndroidCategory
