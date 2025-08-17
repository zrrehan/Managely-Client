import { Suspense, useState } from "react";
import EmployeeTable from "./EmployeeTable";
import EmployeeCardCollection from "./EmployeeCardCollection";
import Loading from "../../Loading";

function Admindash() {
    const dataPromise = fetch("https://managely-server.vercel.app/get-employee").then(res => res.json());
    const [view, setView] = useState("grid");

    function toggleViewChange() {
        if(view === "table") {
            setView("grid");
        } else {
            setView("table");
        }
    }
    return(
        <div className="min-h-[100vh]">
            <select defaultValue="Grid" className="select my-4 rounded-4xl" onChange={toggleViewChange}>
                <option>Grid</option>
                <option>Table</option>
            </select>
            <Suspense fallback = {<Loading></Loading>}>
                {
                    view === "table" ? <EmployeeTable dataPromise={dataPromise}></EmployeeTable> : <EmployeeCardCollection dataPromise={dataPromise}></EmployeeCardCollection>
                }
            </Suspense>
        </div>
    )
}


export default Admindash;
