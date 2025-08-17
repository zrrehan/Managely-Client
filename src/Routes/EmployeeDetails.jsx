import { Suspense, useContext } from "react";
import { Navigate, useParams } from "react-router";
import EmployeeInfo from "../Components/EmployeeDetails/EmployeeInfo";
import { AuthContext } from "../Context/AuthContext";
import Loading from "../Loading";

function EmployeeDetails() {
    const {id} = useParams();
    const {role} = useContext(AuthContext);
    
    if(role !== "HR") {
        return <Navigate to= "/unauthorized"></Navigate>
    }
    const dataPromise = fetch("https://managely-server.vercel.app/employee-info").then((res) => res.json());

    return(
        <div>
            <Suspense fallback = {<Loading></Loading>}>
                <EmployeeInfo dataPromise={dataPromise} id={id}/>
            </Suspense>
        </div>
    )
}
export default EmployeeDetails;