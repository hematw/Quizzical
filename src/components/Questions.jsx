import Button from './Button'
import QuestionItem from './QuestionItem'
import Loader from './Loader'
import { useEffect, useState } from 'react'

export default function Questions() {
    const [myAnswers, setMyAnswers] = useState({})
    const [showResults, setShowResults] = useState(false)
    const [questions, setQuestions] = useState([])
    const [allCorrectAnswers, setAllCorrectAnswers] = useState(0)
    const [playAgain, setPlayAgain] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        const endpoint = `https://opentdb.com/api.php?amount=5&category=18&difficulty=easy`
        fetch(endpoint)
            .then(res => {
                if (res.ok) return res.json()
            })
            .then((data) => {
                setQuestions(data.results)
                setIsLoading(false)
            })
    }, [playAgain])

    function handleSubmit(e) {
        e.preventDefault()
        checkAnswers()
    }

    function handleChange(e) {
        setMyAnswers(prevAnswers => ({
            ...prevAnswers,
            [e.target.name]: e.target.value,
        }))
    }

    function checkAnswers() {
        if (Object.keys(myAnswers).length === questions.length) {
            let correctAnsweredQuestion = 0

            questions.forEach((question, index) => {
                const correctAnsOfQuestion = question.correct_answer
                const myAns = myAnswers[`q${index + 1}`]
                if (myAns === correctAnsOfQuestion) {
                    correctAnsweredQuestion++
                }
            })
            setAllCorrectAnswers(correctAnsweredQuestion)
            setShowResults(true)
        }
    }

    function handlePlayAgain() {
        setMyAnswers({}) // Reset the answers
        setShowResults(false)
        setAllCorrectAnswers(0)
        setPlayAgain(prev => !prev) // Toggle replay to trigger useEffect
    }

    return (
        <>
            {
                isLoading
                    ? <Loader />
                    :
                    <div>
                        <form onSubmit={handleSubmit}>
                            {
                                questions.map((q, index) =>
                                    <QuestionItem
                                        q={q}
                                        key={index}
                                        qNum={`q${index + 1}`}
                                        handleChange={handleChange}
                                        isShow={showResults}
                                        myAnswers={myAnswers} // Pass the current answers
                                    />
                                )
                            }
                            <div className='text-center flex items-center justify-center gap-4 mt-8'>
                                {
                                    showResults ?
                                        <>
                                            <h2 className='font-semibold'>You scored {allCorrectAnswers}/{questions.length} correct answers</h2>
                                            <Button text="Play again" handleClick={handlePlayAgain} />
                                        </>
                                        :
                                        <Button text="Check answers" />
                                }
                            </div>
                        </form>
                    </div>
            }
        </>
    )
}
