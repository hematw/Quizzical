import he from "he"
import { useEffect, useState } from "react"

export default function Question({ q, qNum, handleChange, isShow, className }) {
    const [answersArray, setAnswersArray] = useState(
        [
            q.correct_answer,
            ...q.incorrect_answers
        ]
    )

    q.question = he.decode(q.question)

    useEffect(() => {
        setAnswersArray(prevArray =>
            prevArray.sort(() => Math.random() - 0.5)
        )
    }, [])


    return (
        <div className="py-4 border-b-2">
            <h1 className="text-lg font-semibold">{q.question}</h1>
            <div className="flex gap-4 mt-4">
                {
                    answersArray.map(ans => {
                        className = (ans === q.correct_answer) ? "correct" : "incorrect"

                        return (
                            <label
                                className={
                                    `px-4 py-1 text-sm border-2 border-[#4d5b9e] rounded-2xl cursor-pointer ${isShow ? className : ""}`
                                }
                                key={ans}
                                onChange={handleChange}
                            >
                                <input
                                    type="radio"
                                    name={qNum}
                                    value={ans}
                                    className={className}
                                />
                                {ans}
                            </label>
                        )
                    })
                }
            </div>
        </div>
    )
}
