import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

function TableRow({ info, index }) {
    const {name, role, email, fired, salary} = info
    const {user} = useContext(AuthContext);
    const [hr, setHr] = useState(role === "HR");
    const [alreadyFire, setAlreadyFire] = useState(fired);
    const [tk, setTk] = useState(salary);
    const [currentSalary, setCurrentSalary] = useState(salary);
    
    function promoteToHR() {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to make him HR",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.put('https://managely-server.vercel.app/make-hr', null, {
                    params: {
                        employeeEmail: email,
                        email: user.email,
                    },
                    headers: {
                        Authorization: `Bearer ${user.accessToken}`
                    }
                })
                    .then(res => {
                        setHr(!hr);
                        Swal.fire({
                            title: "Promoted!",
                            text: `${name} is HR now!`,
                            icon: "success"
                        });
                    })
                    .catch(err => console.error(err));

                
            }
        });
        
    }


    function firedFunc() {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to Fire??",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.put('https://managely-server.vercel.app/fire-employee', null, {
                    params: {
                        employeeEmail: email,
                        email: user.email,
                    },
                    headers: {
                        Authorization: `Bearer ${user.accessToken}`
                    }
                })
                    .then(res => {
                        setAlreadyFire("true");
                        Swal.fire({
                            title: "Fired!",
                            text: `${name} is fired now!`,
                            icon: "success"
                        });
                    })
                    .catch(err => console.error(err));


            }
        });

    }

    function saveSalary() {
        axios.put('https://managely-server.vercel.app/add-salary', null, {
            params: {
                employeeEmail: email,
                email: user.email,
                salary: tk
            },
            headers: {
                Authorization: `Bearer ${user.accessToken}`
            }
        })
            .then((res) => {
                setCurrentSalary(tk);
            })
    }
    return(
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>
                {
                    hr ? <p>HR</p>:<p>Employee</p>
                }
            </td>
            <td className="flex items-center gap-2">
                <p>{tk}</p>
                <button className="btn" onClick={() => setTk(parseInt(tk)+5000)}>+</button>
                <button className="btn" onClick={saveSalary} disabled = {currentSalary === tk} >Save</button>
                <button className="btn" onClick={() => setTk(salary)} disabled={currentSalary === tk} >X</button>
            </td>
            <td><button className="btn" disabled={hr} onClick = {() => promoteToHR()}>Make HR</button></td>
            <td><button className="btn btn-error text-white" disabled={alreadyFire === "true"} onClick={firedFunc}>Fire</button></td>
        </tr>
    )
}

export default TableRow;