import { use, useState } from "react";
import ReportCard from "./ReportCard";
import Lottie from "lottie-react";
import watermelonAnimation from "../../assets/watermelon.json"

function AdminContact({ dataPromise }) {
    const data = use(dataPromise);
    const filteredData = data.filter((singleData) => singleData.resolved === false);
    const [show, setShow] = useState(filteredData)
    return(
        <div>
            {
                show.map((singleInfo) => <ReportCard singleInfo={singleInfo} show = {show} setShow={setShow}></ReportCard>)
            }
            {
                show.length === 0 && <div className="min-h-[90vh] flex flex-col items-center justify-center">
                    <h1 className="text-7xl text-center ">There are no Reports here</h1>
                    <Lottie animationData={watermelonAnimation} loop={true}  className="w-[90vw] lg:w-[300px]"/>
                </div>
            }
        </div>
    )
}

export default AdminContact;