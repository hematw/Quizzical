import Button from "./Button"

export default function Intro({handleClick}){
    return (
        <div className="flex flex-col justify-center items-center w-full h-full">
            <h1 className="font-semibold text-5xl">Quzzical</h1>
            <p className="text-2xl my-4">Test your knowledge with us</p>
            <Button text={"Start quiz"} handleClick={handleClick} />
        </div>
    )
}