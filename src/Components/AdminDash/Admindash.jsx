import { Suspense, useContext, useState } from "react";
import EmployeeTable from "./EmployeeTable";
import EmployeeCardCollection from "./EmployeeCardCollection";
import Loading from "../../Loading";
import { AuthContext } from "../../Context/AuthContext";
import DashboardProfile from "../DashboardProfile";

function Admindash() {
    const dataPromise = fetch("https://managely-server.vercel.app/get-employee").then(res => res.json());
    const [view, setView] = useState("grid");
    const {user, role} = useContext(AuthContext);
    const [load, setLoad] = useState(false);
    const [dashData, setDashData] = useState([]);

    function toggleViewChange() {
        if(view === "table") {
            setView("grid");
        } else {
            setView("table");
        }
    }
    return(
        <div className="min-h-[100vh]">
            <DashboardProfile userInfo={{ ...user, role }} workInfo={dashData}></DashboardProfile>
            <select defaultValue="Grid" className="select my-4 rounded-4xl" onChange={toggleViewChange}>
                <option>Grid</option>
                <option>Table</option>
            </select>
            <Suspense fallback = {<Loading></Loading>}>
                {
                    view === "table" ? <EmployeeTable setDashData={setDashData} dataPromise={dataPromise}></EmployeeTable> : <EmployeeCardCollection setDashData={setDashData} dataPromise={dataPromise}></EmployeeCardCollection>
                }
            </Suspense>
        </div>
    )
}


export default Admindash;
