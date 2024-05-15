export default function Button({ text, handleClick }) {
    return (
        <button
            className="text-xl bg-[#4d5b9e] hover:bg-[#7285e3] text-white py-4 px-16 rounded-2xl"
            onClick={handleClick}
        >
            {text}
        </button>
    )
}