import { useState } from 'react'
import Blobs from './components/Blobs'
import Intro from './components/Intro'
import Questions from './components/Questions'
import './App.css'
// import data from "./data"



function App() {
  const [isStarted, setIsStarted] = useState(false)

  return (
    <div className='relative overflow-hidden'>
      <Blobs />
      <main
        className='text-[#4d5b9e] flex items-center p-6 my-8 mx-auto max-w-[765px] min-h-screen'>
        {
          isStarted
            ? <Questions />
            : <Intro handleClick={() => setIsStarted(true)} />
        }
      </main>
    </div>
  )
}

export default App