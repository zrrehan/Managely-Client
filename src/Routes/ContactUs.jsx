import { Suspense, useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
import NonAdmin from "../Components/ContactUs/NonAdmin";
import AdminContact from "../Components/ContactUs/AdminContact";
import Loading from "../Loading";

function ContactUs() {
    const {role} = useContext(AuthContext);
    const dataPromise = fetch("https://managely-server.vercel.app/get-report").then(res => res.json());
    if(role === "Admin") {
        return <div>
            <Suspense fallback = {<Loading></Loading>}>
                <AdminContact dataPromise={dataPromise}/>
            </Suspense>
        </div>
    }
    return(
        <div>
            <NonAdmin />
        </div>
    )
}

export default ContactUs;