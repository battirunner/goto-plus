import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import SupportImage from './components/SupportImage'
import Supplement from './components/Supplement'
import Message from './components/Message'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <SupportImage />
      <Supplement />
      <Message />
      <Footer />
      
      {/* Fixed contact buttons from original design */}
      <a href="tel:07076675252" className="btn btn--flowPC pc">ご相談はこちら</a>
      <a href="tel:07076675252" className="btn btn--flowSP sp">相談無料（通信料はかかります）</a>
    </div>
  )
}

export default App
