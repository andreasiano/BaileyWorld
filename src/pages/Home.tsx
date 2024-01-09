import Navbar from "../components/Navbar"
import MobNav from "../components/MobNav"
import Categories from "../components/Categories"
import Hero from "../components/Hero"
import CyberpunkCategory from "../components/CyberpunkCategory"
import SpaceCategory from "../components/SpaceCategory"
import AndroidCategory from "../components/AndroidCategory"
import HardScifiCategory from "../components/HardScifiCategory"
import NewSletter from "../components/NewSletter"

const Home = () => {
  return (
    <div>
        <>
    <Navbar />
    <MobNav />
    <Hero />
    <Categories />
    <CyberpunkCategory />
    <SpaceCategory />
    <AndroidCategory />
    <HardScifiCategory />
    <NewSletter />
  </>

    </div>
  )
}

export default Home
