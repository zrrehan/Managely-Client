import { Suspense, useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
import { Navigate } from "react-router";
import ProgressComponent from "../Components/Progress/ProgressComponent";
import Loading from "../Loading";

function Progress() {
    const {role} = useContext(AuthContext);
    if(role !== "HR") {
        return <Navigate to= "/unauthorized"></Navigate>
    }

    const dataPromise = fetch("https://managely-server.vercel.app/get-all-tasks").then((res) => res.json());
    
    return(
        <div>
            <Suspense fallback = {<Loading></Loading>}>
                <ProgressComponent dataPromise={dataPromise}></ProgressComponent>
            </Suspense>
        </div>
    )
}

export default Progress;