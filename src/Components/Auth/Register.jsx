import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router";
import Google from "./Google";

function Register() {
    const [passwordError, setPasswordError] = useState("");
    const { registerAccount, updateNameImg } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(passwordError !== "") {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "error",
                title: passwordError
            });
            return;
        }
    }, [passwordError])
    async function formHandler(event) {
        event.preventDefault();
        
        const img = event.target.profilePicture.files[0];
        const [name, email, password, role] = [
            event.target.name.value, event.target.email.value, event.target.password.value, event.target.role.value
        ];
        

        const regx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/

        if (!/(?=.*[a-z])/.test(password)) {
            setPasswordError("Need atleast one lowecase character");
            return;
        } else if (!/(?=.*[A-Z])/.test(password)) {
            setPasswordError("Need atleast one uppercase character");
            return;
        } else if (!/.{6,}/.test(password)) {
            setPasswordError("Need atleast minimum 6 length character");
            return;
        } else if (!/(?=.*[^a-zA-Z0-9])/.test(password)) {
            setPasswordError("Need atleast one special character");
            return;
        } else {
            setPasswordError("");
        }

        console.log("triggered")
        if (!img || !name || !email || !password || role === "Pick a Role") {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "error",
                title: "Fill all the input field"
            });
            return;
        }
        console.log(name, email, password, role);

        const formData = new FormData();
        formData.append("image", img);

        const imgbbUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_upload_key}`;
        const res = await axios.post(imgbbUrl, formData);
        const imageUrl = res.data.data.display_url;
        

        registerAccount(email, password)    
            .then((res) => {
                updateNameImg(name, imageUrl)
                    .then(res => {
                        const Toast = Swal.mixin({
                            toast: true,
                            position: "top-end",
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                                toast.onmouseenter = Swal.stopTimer;
                                toast.onmouseleave = Swal.resumeTimer;
                            }
                        });
                        Toast.fire({
                            icon: "success",
                            title: "Signed in successfully"
                        });

                        // SET DATA TO THE DATABASE
                        const userData = { name, email, role, photo: imageUrl, bankAccNo: null, salary: 1000, verified: "false", fired: "false"  }
                        axios.post("https://managely-server.vercel.app/register-user", userData)
                            .then((res) => console.log(res.data));
                        // navigate to homepage
                        navigate("/")
                    })
            })
        
    }

    return(
        <div>
            <form onSubmit = {formHandler} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto">
                <legend className="fieldset-legend text-3xl">Register Now</legend>

                <label className="label">Profile Picture</label>
                <input type="file" name = "profilePicture" className="file-input" />

                <label className="label">Name <span className="text-red-800 text-xl">*</span></label>
                <input type="text" name = "name"  className="input" placeholder="Name" />

                <label className="label">Email<span className="text-red-800 text-xl">*</span></label>
                <input type="email" name = "email" className="input" placeholder="Email" />

                <label className="label">Password<span className="text-red-800 text-xl">*</span></label>
                <input type="password" name = "password" className={`input ${passwordError !== "" && `border-red-400`}`} placeholder="Password" />

                <label className="label">Pick your Role<span className="text-red-800 text-xl">*</span></label>
                <select name = "role" defaultValue="Pick a Role" className="select">
                    <option disabled={true}>Pick a Role</option>
                    <option>Employee</option>
                    <option>HR</option>
                </select>

                <button className="btn btn-neutral mt-4 primary-button border-0">Register</button>
            </form>
            <Google />
        </div>
    )
}

export default Register;