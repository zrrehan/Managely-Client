import { use } from "react";
import TableRow from "./TableRow";

function HRTable({dataPromise}) {
    const data = use(dataPromise);
    
    return(
        <div>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Verified</th>
                            <th>Back Acc</th>
                            <th>Salary</th>
                            <th>Pay</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((info) => <TableRow info = {info}></TableRow>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default HRTable;