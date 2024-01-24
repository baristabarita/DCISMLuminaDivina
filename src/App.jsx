import { useState } from 'react'
import { Button } from "@/components/ui/button"
import Navbar from './components/navbar/navbar.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div id="home" className='w-full mt-[6em]'>
      </div>
      <h1>Vite + React</h1>
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
    </>
  )
}

export default App
