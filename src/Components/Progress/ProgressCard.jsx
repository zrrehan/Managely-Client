import { FaRegClock } from "react-icons/fa";
import { MdOutlineAddTask } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";

function ProgressCard({ data }) {
    console.log(data);
    const {email, hours, month, task, day, year} = data;
    return(
        <div className="flex flex-col md:flex-row justify-between items-center border border-red-700 px-20 py-5 rounded-4xl my-7 shadow-2xl text-lg">
            <p className="flex items-center gap-2"><TfiEmail />{email}</p>
            <p className="flex items-center gap-2"><FaRegClock />{hours} hour</p>
            <p className="flex items-center gap-2"><SlCalender />{day}-{month}-{year}</p>
            <p className="flex items-center gap-2"><MdOutlineAddTask />{task}</p>
        </div>
    )
}

export default ProgressCard;