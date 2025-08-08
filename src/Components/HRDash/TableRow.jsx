import axios from "axios";
import { useContext, useState } from "react";
import { ImCross } from "react-icons/im";
import { MdAttachMoney, MdOutlineDone } from "react-icons/md";
import { AuthContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";
import Payment from "./Payment";
import { Link } from "react-router";

function TableRow({info}) {
    const {name, email, bankAccNo, salary, verified, _id} = info;
    const {user} = useContext(AuthContext);
    const [tick, setTick] = useState(verified);
    
    function toggleVerification(update) {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                if (tick !== update) {
                    setTick(update)
                }

                axios.put(`https://managely-server.vercel.app/toggle-verification?emEmail=${email}&email=${user.email}&v=${update}`, null, {
                    headers: {
                        Authorization: `Bearer ${user.accessToken}`,  // replace jwtToken with your actual token variable
                    },
                })
                    .then(() => {
                        Swal.fire({
                            title: "Verification Done!",
                            icon: "success"
                        });
                    })
                    .catch((error) => console.error(error));
                
            }
        });
        

    }
    return(
        <tr>
            <th>1</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>
                {
                    tick === "false" ? <button className = "btn rounded-full" onClick={() => toggleVerification("true")}><ImCross /></button> : <button className = "btn rounded-full" onClick={() => toggleVerification("false")}><MdOutlineDone /></button>
                }
            </td>
            {
                bankAccNo === null ? <td>Not set yet</td> : <td>{bankAccNo} BDT</td>
            }
            {
                salary === null ? <td>Not set yet</td> : <td>{salary} BDT</td>
            }

            <td>
                {
                    tick === "false" ? <div className="badge badge-warning py-5 w-[100px]">Not verified</div> : <Payment emEmail={email} salary={salary} emName={name} ></Payment>
                }
            </td>
            <td>
                <Link to = {`/employeeDetails/${_id}`}>
                    <button className="btn btn-success rounded-full w-[150px]">View Details</button>
                </Link>
            </td>
            
        </tr>
    )
}

export default TableRow;