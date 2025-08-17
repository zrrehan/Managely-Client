import Lottie from "lottie-react";
import loadingAnimation from "./assets/loading.json";

function Loading() {
    return(
        <div className="flex justify-center min-h-[90vh]">
            <Lottie animationData={loadingAnimation} loop={true} className="w-[400px]"/>     
        </div>
    )
}

export default Loading;