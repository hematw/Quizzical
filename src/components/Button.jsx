export default function Button({text}) {
    return (
        <button
            className="text-xl bg-[#4d5b9e] hover:bg-[#6a7aca] text-white py-4 px-16 mt-8 rounded-2xl">
            {text}
        </button>
    )
}