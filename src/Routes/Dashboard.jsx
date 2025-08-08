import { useContext } from "react";
import EmployeeDash from "../Components/EmployeeDash/EmployeeDash";
import { AuthContext } from "../Context/AuthContext";
import HRDash from "../Components/HRDash/HRDash";
import Admindash from "../Components/AdminDash/Admindash";

function Dashboard() {
    const {role} = useContext(AuthContext);
    
    if(role === "Employee") {
        return (
            <EmployeeDash></EmployeeDash>
        )
    } else if (role === "HR") {
        return (
            <HRDash></HRDash>
        )
    } else if(role === "Admin") {
        return(
            <Admindash></Admindash>
        )
    }
}

export default Dashboard;