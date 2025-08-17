import Lottie from "lottie-react";
import errorAnimation from "../assets/error.json"
import { Link } from "react-router";
function Error() {
    return(
        <div className="flex flex-col items-center justify-center min-h-[100vh]">
            <Lottie animationData={errorAnimation} loop={true} className="w-[400px]"/>
            <Link to = "/">
                <button className="btn primary-button lg:w-[500px] mt-3 bg-gradient-to-tl from-gray-800 to-[rgba(198,27,35,255)]">Return to Home</button>
            </Link>   
        </div>
    )
}

export default Error;