import { useState } from 'react'
import Blobs from './components/Blobs'
import Intro from './components/Intro'
import Questions from './components/Questions'
import './App.css'
// import data from "./data"



function App() {
  const [isStarted, setIsStarted] = useState(false)

  return (
    <>
      <Blobs />
      <main
        className='overflow-auto text-[#4d5b9e] flex items-center justify-center m-auto w-[60vw] min-h-screen'>
        {
          isStarted
            ? <Questions />
            : <Intro handleClick={() => setIsStarted(true)} />
        }
      </main>
    </>
  )
}

export default App