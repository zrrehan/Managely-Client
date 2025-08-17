import { use, useEffect } from "react";
import EmployeeCard from "./EmployeeCard";

function EmployeeCardCollection({ dataPromise, index, setDashData }) {
    const data = use(dataPromise);
    const filteredData = data.filter((info) => info.verified || info.role === "HR");
    useEffect(() => {
        setDashData(data);
    }, [])
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10">
            {
                filteredData.map((info, index) => <EmployeeCard info={info} index={index}></EmployeeCard>)
            }
        </div>
    )
}

export default EmployeeCardCollection;