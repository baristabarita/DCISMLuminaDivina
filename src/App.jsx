import { useState } from 'react'

import Navbar from './components/navbar/navbar.jsx'
import Banner from './components/banner/banner.jsx'
import Overview from './components/overview/overview.jsx'
import Theme from './components/theme/theme.jsx'
import Attire from './components/attire/attire.jsx'
import Venue from './components/venue/venue.jsx'
import Footer from './components/footer/footer.jsx'
import Backgroundimg from './assets/bg1.png'



function App() {

  return (
    <>
      <Navbar />
      <div className='w-full animate-fade-in'>
        <Banner />
        <div style={{ backgroundImage: `url(${Backgroundimg})`, backgroundRepeat: 'repeat' }}>
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
            <Theme />
            <Attire />
            <Venue />
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
