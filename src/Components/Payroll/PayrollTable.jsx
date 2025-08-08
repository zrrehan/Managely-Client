import { use } from "react"
import PaymentRow from "./PaymentRow";

function PayrollTable({dataPromise}) {
    let data = use(dataPromise);
    console.log(data);
    data = data.filter(singleData => singleData.adminApprove === false)
    if(data.length === 0) {
        return <div className="text-5xl text-center min-h-[80vh] py-48">
            All Payment Completed by Admin
        </div>
    }
    return(
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Month Year</th>
                        <th>Payment Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        data.map((infoData, index) => <PaymentRow paymentInfo={infoData} index = {index}></PaymentRow>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default PayrollTable