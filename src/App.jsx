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
            Brace yourself for an otherworldly festivity where mystical marvels and celestial entities unite on a sacred evening unparalleled.
            <br/>
            <br/>
            Are you set to kindle the remarkable?
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
