import Blobs from './components/Blobs'
import Intro from './components/Intro'
import Question from './components/Question'
import data from "./data"
import './App.css'
import Button from './components/Button'


const questions = data.results

function handleSubmit(e) {
  e.preventDefault()
}

function App() {

  return (
    <main className='overflow-auto pt-8 text-[#4d5b9e] flex items-center justify-center'>
      <Blobs />
      <div>
        <form onSubmit={handleSubmit}>
          {
            questions ?
              questions.map((q, index) =>
                <Question
                  q={q}
                  qNum={`q${index + 1}`}
                  key={index}
                />
              ) : <Intro />
          }
          <div className='text-center'>
            <Button text="Check answers" />
          </div>
        </form>
      </div>
    </main>
  )
}

export default App
