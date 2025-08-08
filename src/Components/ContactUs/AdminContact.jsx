import { use, useState } from "react";
import ReportCard from "./ReportCard";

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
                show.length === 0 && <div className="min-h-[90vh]">
                    <h1 className="text-7xl text-center py-40">There are no Reports here</h1>
                </div>
            }
        </div>
    )
}

export default AdminContact;