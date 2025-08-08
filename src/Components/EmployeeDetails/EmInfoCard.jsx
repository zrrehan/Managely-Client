import { GrUserWorker } from "react-icons/gr";
import { MdVerified } from "react-icons/md";
import { TbCoinTakaFilled } from "react-icons/tb";
import { TfiEmail } from "react-icons/tfi";

function EmInfoCard({ filteredData }) {
    console.log(filteredData);
    const {email, fired, name, photo, role, salary, varified} = filteredData;

    return(
        <div className="card w-96 bg-base-100 card-lg border rounded-3xl shadow-2xl border-red-700">
            <div className="card-body">
                <div>
                    <img className = "h-24 w-24 rounded-full border object-cover" src={photo} alt="" />
                </div>
                <h2 className="card-title">
                    {name}
                    <MdVerified />
                </h2>
                <p className="flex items-center gap-3">
                    <TfiEmail /> {email}
                </p>
                <p className="flex items-center gap-3">
                    <GrUserWorker />{role}
                </p>
                <p className="flex items-center gap-3">
                    <TbCoinTakaFilled /> {salary} BDT
                </p>
            </div>
        </div>
    )
}
export default EmInfoCard;