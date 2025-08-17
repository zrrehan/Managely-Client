import { use, useContext } from "react";
import TableRow from "./TableRow";
import DashboardProfile from "../DashboardProfile";
import { AuthContext } from "../../Context/AuthContext";

function HRTable({dataPromise}) {
    const data = use(dataPromise);
    const {user, role} = useContext(AuthContext);
    
    return(
        <div>
            <DashboardProfile userInfo={{ ...user, role }} workInfo={data}></DashboardProfile>
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