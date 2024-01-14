import { motion } from 'framer-motion';
import img1 from '../assets/cyberpunk.jpg';
import img2 from '../assets/opera.jpg';
import img3 from '../assets/robot.jpg';
import img4 from '../assets/planet.jpg';
import CategoryCard from './CategoryCard';

const data = [
  {
    id: 0,
    name: 'Cyberpunk',
    img: img1,
  },
  {
    id: 1,
    name: 'SpaceOpera',
    img: img2,
  },
  {
    id: 2,
    name: 'Androids Robots',
    img: img3,
  },
  {
    id: 3,
    name: 'HardScifi',
    img: img4,
  },
];

const FadeInAnimationVariant = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 * index
    }
  })
}

const Categories = () => {
  return (
    <div className='container font-gruppo mb-4 pt-16'>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((el, index) => (
            <motion.div
              key={el.id}
              variants={FadeInAnimationVariant}
              initial='initial'
              whileInView='animate'
              viewport= {{
                once: true
              }}
              custom={index}
            >
              <CategoryCard img={el.img} name={el.name} />
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default Categories;