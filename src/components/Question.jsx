import he from "he"

export default function Question({ q, qNum }) {

    const answersArray = [q.correct_answer, ...q.incorrect_answers].sort(() => Math.random() - 0.5)

    console.log(answersArray)
    q.question = he.decode(q.question)


    return (
        <div className="py-4 border-b-2">
            <h1 className="text-lg font-semibold">{q.question}</h1>
            <div className="flex gap-4 mt-4">
                {
                    answersArray.map(ans => (
                        <label
                            className="px-4 py-1 text-sm border-2 border-[#4d5b9e] rounded-2xl cursor-pointer"
                            key={ans}
                        >
                            <input
                                type="radio"
                                name={qNum}
                                value={ans}
                            />
                            {ans}
                        </label>)
                    )
                }
            </div>
        </div>
    )
}