import Lottie from "lottie-react";
import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";
import loginAnimation from "../assets/login.json"

function Auth() {
    return(
        <div className ="flex justify-center items-center gap-4 min-h-[100vh] ">
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-box max-w-[700px] w-[90%]  mt-10">
                <input type="radio" name="my_tabs_6" className="tab" aria-label="Login" />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    <Login></Login>
                </div>

                <input type="radio" name="my_tabs_6" className="tab" aria-label="Registration" defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    <Register></Register>
                </div>
            </div>
            <div className="hidden lg:flex">
                <Lottie animationData={loginAnimation} loop={true} className="w-[500px]"/>
            </div>
        </div>
    )
}

export default Auth;