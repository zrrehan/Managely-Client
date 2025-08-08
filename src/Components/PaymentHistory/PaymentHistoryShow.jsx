import { Suspense } from "react";
import PaymentHistoryCards from "./PaymentHistoryCards";

function PaymentHistoryShow() {
    const dataPromise = fetch("https://managely-server.vercel.app/get-payment-details").then(res => res.json());

    return(
        <div>
            <Suspense fallback={<p>loading...</p>}>
                <PaymentHistoryCards dataPromise={dataPromise}></PaymentHistoryCards>
            </Suspense>
        </div>
    )
}

export default PaymentHistoryShow;