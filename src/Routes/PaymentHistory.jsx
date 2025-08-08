import { Suspense, useContext } from "react";
import PaymentHistoryShow from "../Components/PaymentHistory/PaymentHistoryShow";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router";

function PaymentHistory() {
    const {role} = useContext(AuthContext);
    if(role !== "Employee") {
        return <Navigate to= "/unauthorized"></Navigate>
    }
    return(
        <div>
            <Suspense>
                <PaymentHistoryShow />
            </Suspense>
        </div>
    )
}
export default PaymentHistory;