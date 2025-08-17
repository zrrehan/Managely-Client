import { Suspense } from "react";
import HRTable from "./HRTable";
import Loading from "../../Loading";

function HRDash() {
    const dataPromise = fetch("https://managely-server.vercel.app/employee-info").then((res) => res.json());

    return(
        <div>
            <Suspense fallback = {<Loading></Loading>}>
                <HRTable dataPromise = {dataPromise}></HRTable>
            </Suspense>
        </div>
    )
}

export default HRDash;