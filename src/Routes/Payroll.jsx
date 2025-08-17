import { Suspense, use, useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
import { Navigate } from "react-router";
import PayrollTable from "../Components/Payroll/PayrollTable";
import Loading from "../Loading";

function Payroll({ dataPromisePayroll }) {
    const {role} = useContext(AuthContext);
    const dataPromise = fetch("https://managely-server.vercel.app/get-payment-details").then(res => res.json());

    if(role !== "Admin") {
        return <Navigate to = "/unauthorized"></Navigate>
    }
    return(
        <div className="min-h-[100vh]">
            <Suspense fallback = {<Loading></Loading>}>
                <PayrollTable dataPromise={dataPromise}></PayrollTable>
            </Suspense>
        </div>
    )
}

export default Payroll;