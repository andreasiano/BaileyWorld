import Navbar from "../components/Navbar"
import MobNav from "../components/MobNav"
import Categories from "../components/Categories"
import Hero from "../components/Hero"
import CyberpunkCategory from "../components/CyberpunkCategory"
import SpaceCategory from "../components/SpaceCategory"
import AndroidCategory from "../components/AndroidCategory"
import HardScifiCategory from "../components/HardScifiCategory"
import NewSletter from "../components/NewSletter"
import { useState } from "react"
import Cart from "../components/Cart"

const Home = () => {
  const [showCart, setShowCart] = useState(false)
  return (
    <div>
        <>
    <Navbar setShowCart={setShowCart}/>
    <MobNav setShowCart={setShowCart}/>
    <Hero />
    <Categories />
    <CyberpunkCategory />
    <SpaceCategory />
    <AndroidCategory />
    {showCart && <Cart showCart={showCart} setShowCart={setShowCart}/>}
    <HardScifiCategory />
    <NewSletter />
  </>

    </div>
  )
}

export default Home
