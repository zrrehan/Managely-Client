import { useContext, useEffect, useState } from "react";
import EmForm from "./EmForm";
import EmTable from "./EmTable";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";
import Loading from "../../Loading";
import DashboardProfile from "../DashboardProfile";

function EmployeeDash() {
    const [tasks, setTasks]= useState(null);
    const {user, role} = useContext(AuthContext);
    const [load, setLoad] = useState(false)

    useEffect(() => {
        axios.get(`https://managely-server.vercel.app/get-tasks?email=${user.email}`, {
            headers: {
                Authorization: `Bearer ${user.accessToken}`,
            },
        })
            .then(res => setTasks(res.data));            
    }, [])

    if(!tasks) {
        return <Loading></Loading>
    }
    return(
        <div className="min-h-[100vh] flex flex-col items-center gap-10">
            <DashboardProfile userInfo={{ ...user, role }} workInfo = {tasks}></DashboardProfile>
            <EmForm setTasks={setTasks} tasks={tasks} setLoad={setLoad}></EmForm>
            <EmTable setTasks={setTasks} tasks={tasks} load={load} setLoad={setLoad}></EmTable>
        </div>
    )
}

export default EmployeeDash;