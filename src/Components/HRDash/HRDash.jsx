import { Suspense } from "react";
import HRTable from "./HRTable";

function HRDash() {
    const dataPromise = fetch("https://managely-server.vercel.app/employee-info").then((res) => res.json());

    return(
        <div>
            <Suspense fallback = {<p>loading...</p>}>
                <HRTable dataPromise = {dataPromise}></HRTable>
            </Suspense>
        </div>
    )
}

export default HRDash;