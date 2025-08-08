import { Suspense, use } from "react"
import EmInfoCard from "./EmInfoCard";
import EmployeeChart from "./EmployeeChart";

function EmployeeInfo({dataPromise, id}) {
    const employeeData = use(dataPromise);
    const filteredData = employeeData.find((info) => info._id === id)
    const dataPromiseChart = fetch("https://managely-server.vercel.app/get-payment-details").then(res => res.json());
    return(
        <div className="flex flex-col items-center">
            <EmInfoCard filteredData={filteredData}></EmInfoCard>
            <div className="divider">Chart</div>
            <Suspense>
                <EmployeeChart dataPromiseChart={dataPromiseChart} email={filteredData.email}></EmployeeChart>
            </Suspense>
        </div>
    )
}

export default EmployeeInfo;