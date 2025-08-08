import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

function EmployeeCard({info, index}) {
    const { name, role, email, fired, salary } = info
    const { user } = useContext(AuthContext);
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
        <div className="border rounded-2xl shadow-md py-14 px-4 bg-gradient-to-r from-gray-800 to-[rgba(198,27,35,255)] text-white w-[350px] flex flex-col gap-2">
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Role:</strong> {hr ? "HR" : "Employee"}</p>

            <div className="flex items-center gap-2">
                <p><strong>Salary:</strong> {tk}</p>
                <button className="btn btn-sm" onClick={() => setTk(parseInt(tk) + 5000)}>+</button>
                <button className="btn btn-sm" onClick={saveSalary} disabled={currentSalary === tk}>Save</button>
                <button className="btn btn-sm" onClick={() => setTk(salary)} disabled={currentSalary === tk}>X</button>
            </div>

            <button className="btn btn- rounded-4xl my-3" disabled={hr} onClick={promoteToHR}>Make HR</button>
            <button className="btn btn-sm  rounded-4xl" disabled={alreadyFire === "true"} onClick={firedFunc}>Fire</button>
        </div>

    )
}

export default EmployeeCard;