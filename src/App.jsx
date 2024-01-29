import { useState } from 'react'

import Navbar from './components/navbar/navbar.jsx'
import Banner from './components/banner/banner.jsx'
import Overview from './components/overview/overview.jsx'
import Theme from './components/theme/theme.jsx'
import Attire from './components/attire/attire.jsx'
import Venue from './components/venue/venue.jsx'
import Qrscan from './components/qrscan/qrscan.jsx'
import Footer from './components/footer/footer.jsx'
import Backgroundimg from './assets/bg1.png'
import Postbanner  from './components/typography/postbanner.jsx'

function App() {

  return (
    <>
      <Navbar />
      <div className='w-full animate-fade-in overflow-x-hidden'>
        <Banner />
        <div style={{ backgroundImage: `url(${Backgroundimg})`, backgroundRepeat: 'repeat' }}>
          <Postbanner/>
          <div id="About" className="card text-white">
            <Overview />
            <Theme />
            <Attire />
            <Venue />
            <Qrscan />
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
