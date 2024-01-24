import { useState } from 'react'
import { Button } from "@/components/ui/button"
import Navbar from './components/navbar/navbar.jsx'
import Banner from './components/banner/banner.jsx'
import Backgroundimg from './assets/bg1.png'

function App() {
  const [count, setCount] = useState(0)

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
        <div id="about" className="card">
          <h1 className="text-3xl font-bold underline">
            Hello world!
          </h1>
          <Button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
      </div>
    </>
  )
}

export default App
