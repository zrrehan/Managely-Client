import { Link } from "react-router";

function Fired() {
    return(
        <div className="flex items-center justify-center min-h-[100vh]">
            <div className="text-7xl rounded-full px-24 py-9 bg-gradient-to-r from-gray-800 to-[rgba(198,27,35,255)] text-white w-fit">
                <p>You are fired from the Job!</p> 
                <div className="text-center">
                    <Link to = "/authentication">
                        <button className="btn rounded-4xl text-2xl px-24 py-6">Go to Login</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Fired;