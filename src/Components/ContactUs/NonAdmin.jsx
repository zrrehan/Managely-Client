import axios from "axios";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

function NonAdmin() {
    const navigate = useNavigate();
    function handlerSubmit(event) {
        event.preventDefault();
        const [email, report] = [event.target.email.value, event.target.report.value];
        console.log(email, report);

        Swal.fire({
            title: "You sure? Wanna Report?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                const data = {email, report}
                axios.post("https://managely-server.vercel.app/do-report", data)
                    .then((res) => {
                        navigate("/");
                        Swal.fire({
                            title: "Reported!",
                            icon: "success"
                        });

                    })
            }
        });

    }
    
    return(
        <div className="min-h-[80vh]">
            <form onSubmit = {handlerSubmit}>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Your Email</legend>
                    <input required type="email" className="input w-full rounded-4xl px-5" placeholder="Your Email" name = "email"/>
                    <div className="label">Optional</div>
                </fieldset>
                
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Your Report</legend>
                    <textarea required className="textarea w-full rounded-4xl h-70 px-5" name = "report" placeholder="Write the Report here"></textarea>
                </fieldset>
                <button className="btn bg-red-700 text-white rounded-full mt-3 w-70">Submit</button>
            </form>
        </div>
    )
}

export default NonAdmin;