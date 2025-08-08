import { use } from "react";
import TableRow from "./TableRow";

function EmployeeTable({dataPromise}) {
    const data = use(dataPromise);
    const filteredData = data.filter((info) => info.verified || info.role === "HR");
    return(
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Salary</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        filteredData.map((info, index) => <TableRow info = {info} index = {index}></TableRow>)
                    }
                </tbody>
            </table>
        </div>
    )
    
}

export default EmployeeTable;