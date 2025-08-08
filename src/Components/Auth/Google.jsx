import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

function Google() {
    const { googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    // https://managely-server.vercel.app/
    function buttonClick() {
        googleLogin().then((user) => {
            axios.get("https://managely-server.vercel.app/all-users")    
                .then(res => {
                    const userData = res.data;
                    const filteredData = userData.filter((info) => info.email === user.user.email);
                    if(filteredData.length === 0) {
                        // new user 
                        const userData = {
                            name: user.user.displayName,
                            email: user.user.email,
                            role: "Employee", 
                            photo: user.user.photoURL, 
                            bankAccNo: null, 
                            salary: 1000, 
                            verified: "false", 
                            fired: "false" 
                        }
                        axios.post("https://managely-server.vercel.app/register-user", userData)
                            .then((res) => console.log(res.data));
                        
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Your are registered to the website",
                            showConfirmButton: false,
                            timer: 1500
                        });

                        navigate("/")
                    } else {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Your are loggedIn to the website",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate("/")
                    }
                })
        })
    }
    return(
        <div className="text-center">
            <div className="divider">Or</div>
            <button onClick = {buttonClick} className="btn text-2xl px-6 py-3 rounded-3xl bg-white text-black border-[#e5e5e5]">
                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                Login with Google
            </button>
        </div>
    )
}

export default Google;