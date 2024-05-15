import { Oval } from "react-loader-spinner"

export default function Loader() {
    return (
        <div className="m-auto h-screen flex items-center justify-center">
            <Oval
                visible={true}
                height="80"
                width="80"
                color="#4d5b9e"
                secondaryColor="#7285e3"
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
}