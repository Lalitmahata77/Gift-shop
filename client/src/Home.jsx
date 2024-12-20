import React from 'react'
import Hero from './Hero'
// import SmallProduct from './pages/product/SmallProduct'
import Header from './pages/product/TopProduct'
import NewProducts from './pages/product/NewProducts'
import SpecialOffer from './componets/SpecialOffer'
import Todays from './componets/Todays'
import Set from './componets/Set'

const Home = () => {
  return (
    <div>
    <Hero/>
    <NewProducts/>
    <Todays/>
    <Header/>
    {/* <SmallProduct/> */}
    <Set/>
    <SpecialOffer/>
    </div>
  )
}

export default Home