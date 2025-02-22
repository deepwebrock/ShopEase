import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import ProductSection from './Components/ProductSection'
import Reviews from './Components/Reviews'
import Newsletter from './Components/Newsletter'
import Footer from './Components/Footer'
import TrendingProducts from './Components/TrendingProducts'
import ChatButton from './Components/ChatButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Hero/>
      <ProductSection/>
      <TrendingProducts/>
      <Reviews/>
      <Newsletter/>
      <Footer/>
      <ChatButton/>
    </>
  )
}

export default App
