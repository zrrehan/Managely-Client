import { useContext, useRef } from "react";
import { FiEdit3 } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
import EmRow from "./EmRow";

function EmTable({ tasks, setTasks, load, setLoad }) {
    const {user} = useContext(AuthContext);
    console.log(tasks);
    let tableNumber = 0;

    return(
        <div className="overflow-x-auto w-full">
            <table className="table">
                {/* head */}
                <thead className="bg-gradient-to-r from-gray-800 to-[rgba(198,27,35,255)] text-white">
                    <tr>
                        <th>#</th>
                        <th>Task</th>
                        <th>Hours</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        tasks.slice().reverse().map((info, index) => {
                            return <EmRow load={load} setLoad={setLoad} info={info} index={index} setTasks={setTasks} tasks={tasks}></EmRow>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default EmTable;