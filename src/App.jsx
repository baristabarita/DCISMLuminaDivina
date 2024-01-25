import { useState } from 'react'

import Navbar from './components/navbar/navbar.jsx'
import Banner from './components/banner/banner.jsx'
import Overview from './components/overview/overview.jsx'

import Footer from './components/footer/footer.jsx'
import Backgroundimg from './assets/bg1.png'

function App() {

  return (
    <>
      <Navbar />
      <div className='w-full animate-fade-in'>
        <Banner />
        <div style={{ backgroundImage: `url(${Backgroundimg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
          <div className='py-6'>
            <p className="text-[1em] md:text-[1.2em] lg:text-[1.3em] text-center italic font-bitter text-[#fddc5c] mx-[25vh] glow ">
              Delve into an enchanting night of radiance and wonder as we await the biggest & most-anticipated DCISM event this semester - with the theme, Lumina Divina! (𝘢.𝘬.𝘢 '𝘥𝘪𝘷𝘪𝘯𝘦 𝘳𝘢𝘥𝘪𝘢𝘯𝘤𝘦')
            </p>
          </div>
          <div id="About" className="card text-white">
            <Overview />

          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
