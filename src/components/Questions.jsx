import Button from './Button'
import QuestionItem from './QuestionItem'
import { useEffect, useState } from 'react'


export default function Questions() {

    const [yourAnswers, setYourAnswers] = useState({})
    const [showResults, setShowResults] = useState(false)
    const [questions, setQuestions] = useState([])
    const [allCorrectAnswers, setAllCorrectAnswers] = useState(0)


    useEffect(() => {
        const endpoint = `https://opentdb.com/api.php?amount=5&category=18&difficulty=easy`
        fetch(endpoint)
            .then(res => {
                if (res.ok)
                    return res.json()
            })
            .then((data) => {
                console.log(JSON.stringify(data))
                setQuestions(data.results)
            })
    }, [])

    function handleSubmit(e) {
        e.preventDefault()
        checkAnswers()
    }

    function handleChange(e) {
        setYourAnswers(prevAnswers => {
            return {
                ...prevAnswers,
                [e.target.name]: e.target.value,
            }
        })
    }


    function checkAnswers() {
        if (Object.keys(yourAnswers).length === questions.length) {

            let correctAnsweredQuestion = 0

            questions.forEach((question, index) => {
                const correctAnsOfQuestion = question.correct_answer
                const myAns = yourAnswers[`q${index + 1}`]
                if (myAns == correctAnsOfQuestion) {
                    correctAnsweredQuestion = correctAnsweredQuestion + 1
                }
            })
            setAllCorrectAnswers(correctAnsweredQuestion)
            setShowResults(true)
        }
    }

    function playAgain() {
        setAllCorrectAnswers({})
        setShowResults(false)
        setAllCorrectAnswers(0)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {
                    questions &&
                    questions.map((q, index) =>
                        <QuestionItem
                            q={q}
                            key={index}
                            qNum={`q${index + 1}`}
                            handleChange={handleChange}
                            isShow={showResults}
                        />
                    )
                }
                <div className='text-center flex items-center justify-center gap-4 mt-8'>
                    {
                        showResults ?
                            <>
                                <h2 className='font-semibold'>You scored {allCorrectAnswers}/{questions.length} correct answers</h2>
                                <Button text="Play again" handleClick={playAgain} />
                            </>
                            :
                            <Button text="Check answers" />
                    }
                </div>
            </form>
        </div>
    )
}