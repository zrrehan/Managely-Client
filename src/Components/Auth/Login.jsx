import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import Google from "./Google";

function Login() {
    const { loginUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    function loginSubmit(event) {
        event.preventDefault();
        const [email, password] = [event.target.email.value, event.target.password.value];
        loginUser(email, password)
            .then(() => {
                console.log(location?.state);
                if (location?.state) {
                    console.log("siu");
                    navigate(location.state)
                } else {
                    navigate("/");
                }            
            })
            .catch((err) => {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: err.message,
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }
    
    return(
        <div className="">
            <form onSubmit={loginSubmit} className=" mx-auto fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend text-3xl">Login Now</legend>

                <label className="label">Email</label>
                <input type="email" className="input" name = "email" placeholder="Email" />

                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" name = "password" />

                <button className=" btn btn-neutral mt-4 primary-button border-0">Login</button>
            </form>
            <Google></Google>
        </div>
    )
}

export default Login;