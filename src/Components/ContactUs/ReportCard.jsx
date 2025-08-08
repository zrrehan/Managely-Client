import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";

function ReportCard({ singleInfo, setShow, show }) {
    const { _id, email, report } = singleInfo
    const {user} = useContext(AuthContext);
    function resolvedReport() {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, resolve it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.put(`https://managely-server.vercel.app/resolved-report?email=${user.email}`, singleInfo, {
                    headers: {
                        Authorization: `Bearer ${user.accessToken}`  // replace jwtToken with your actual token
                    }
                })
                    .then(res => {
                        Swal.fire({
                            title: "Resolved!",
                            text: "The report has been reolved.",
                            icon: "success"
                        });
                        const newShow = show.filter(info => info._id !== _id);
                        setShow(newShow)
                    })
                    .catch(err => console.error(err));
                
            }
        });


        


    }
    return(
        <div className="my-7 bg-gradient-to-r from-gray-800 to-[rgba(198,27,35,255)] text-white px-5 py-3 rounded-4xl text-2xl">
            <h1>Email: {email}</h1>
            <div className="divider"></div>
            <p>{report}</p>
            <button className="btn mt-4 rounded-4xl px-20" onClick={resolvedReport}>Resolved</button>
        </div>
    )
}

export default ReportCard;