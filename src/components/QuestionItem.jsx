import he from "he"
import { useEffect, useState } from "react"

export default function QuestionItem({ q, qNum, handleChange, isShow, myAnswers }) {
    const [answersArray, setAnswersArray] = useState([])

    useEffect(() => {
        const shuffledAnswers = [q.correct_answer, ...q.incorrect_answers].sort(() => Math.random() - 0.5)
        setAnswersArray(shuffledAnswers)
    }, [q])


    return (
        <div className="py-4 border-b-2">
            <h1 className="text-lg font-semibold">{he.decode(q.question)}</h1>
            <div className="flex gap-4 mt-4 flex-wrap">
                {
                    answersArray.map((ans, idx) => {
                        const answerClassName = (ans === q.correct_answer) ? "correct" : "incorrect"
                        return (
                            <label
                                className={`px-4 py-1 text-sm border-2 border-[#4d5b9e] rounded-2xl cursor-pointer ${isShow ? answerClassName : ""}`}
                                key={idx}
                            >
                                <input
                                    type="radio"
                                    name={qNum}
                                    value={ans}
                                    onChange={handleChange}
                                    checked={myAnswers[qNum] === ans}
                                    className={answerClassName}
                                    disabled={isShow}
                                />
                                {he.decode(ans)}
                            </label>
                        )
                    })
                }
            </div>
        </div>
    )
}
