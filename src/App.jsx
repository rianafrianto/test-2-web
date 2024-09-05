import './App.css'
import About from './components/About'
import Features from './components/Features'
import FooterAndContact from './components/FooterAndContact'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'
import Pricing from './components/Pricing'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Features />
      <About />
      <Pricing />
      <Newsletter />
      <FooterAndContact />
    </>
  )
}

export default App
