import MobNav from "./components/MobNav"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Categories from "./components/Categories"
import CyberpunkCategory from "./components/CyberpunkCategory"
import SpaceCategory from "./components/SpaceCategory"
import AndroidCategory from "./components/AndroidCategory"
import HardScifiCategory from "./components/HardScifiCategory"


const App = () => {
  return (
    <main>
      <Navbar/>
      <MobNav/>
      <Hero/>
      <Categories/>
      <CyberpunkCategory/>
      <SpaceCategory/>
      <AndroidCategory/>
      <HardScifiCategory/>
    </main>
  )
}

export default App


