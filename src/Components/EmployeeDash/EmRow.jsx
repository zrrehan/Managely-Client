import axios from "axios";
import { useContext, useRef } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { AuthContext } from "../../Context/AuthContext";
import { FiEdit3 } from "react-icons/fi";
import Swal from "sweetalert2";
import { IoReload } from "react-icons/io5";

function EmRow({ info, index, setTasks, tasks, load }) {
    const {user} = useContext(AuthContext);
    const updatedTask = useRef(null);
    const updatedHour = useRef(null);
    const updatedDay = useRef(null);
    const updatedMonth = useRef(null);
    const updatedYear = useRef(null);


    console.log(info._id)
    function updateTable(newTask, newHours, day, month, year, oldData, index) {
        const data = { newTask, newHours, day, month, year, oldData, _id: info._id }
        axios.put(`https://managely-server.vercel.app/edit-task?email=${user.email}`, data, {
            headers: {
                Authorization: `Bearer ${user.accessToken}`,
            },
        })
            .then((res) => {
                const newTasks = [...tasks];
                for (let i of newTasks){
                    if(i._id === info._id) {
                        i.hours = newHours;
                        i.task = newTask;
                        i.day = day;
                        i.month = month;
                        i.year = year;
                        break;
                    }
                }
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your work has been updated",
                    showConfirmButton: false,
                    timer: 1500
                });
                setTasks(newTasks);
                
            });
    }

    function deleteTable(){
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                const data = { id: info._id }
                axios.delete(`https://managely-server.vercel.app/delete-task?email=${user.email}`, {
                    headers: {
                        Authorization: `Bearer ${user.accessToken}`,
                    },
                    data: data 
                })
                    .then((res) => {
                        const newTasks = tasks.filter((i) => {
                            return i._id !== info._id
                        })
                        setTasks(newTasks);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your task has been deleted.",
                            icon: "success"
                        });
                    })
                    .catch((err) => console.error(err));
            }
        });
        

    }
    return <tr className={index % 2 !== 0 && "bg-gradient-to-r from-gray-200 to-[#c61b2367] "}>
                <th>{index + 1}</th>
                <td>{info.task}</td>
                <td>{info.hours} hr</td>
                <td >{info.day} - {info.month} - {info.year}</td>
                <td className="flex gap-2">
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {
                load ? <div className="tooltip" data-tip = "Reload before edit">
                    <button className="btn btn-circle" onClick={() => window.location.reload()}>
                        <IoReload />
                    </button>
                </div>
                    : <button className="btn rounded-full" onClick={() => document.getElementById(`my_modal_${info._id}`).showModal()}><FiEdit3 /></button>
            }
            <dialog id={`my_modal_${info._id}`} className="modal">
                <div className="modal-box">
                    <form className="fieldset m-auto shadow-2xl h-fit bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <legend className="fieldset-legend text-2xl text-red-700">Task Details</legend>

                        <label className="label">Task</label>
                        <select ref={updatedTask} defaultValue={info.task} className="select" name="task">
                            <option disabled={true}>Pick a Task</option>
                            <option>Sales</option>
                            <option>Support</option>
                            <option>Content</option>
                            <option>Paper-work</option>
                        </select>

                        <label className="label">Hours</label>
                        <input ref={updatedHour} defaultValue={info.hours} type="text" className="input" placeholder="Hours" name="hour" />

                        <label className="label">Date</label>
                        
                        <div>
                            <select ref={updatedDay} defaultValue={info.day} className="select w-20" name="day">
                                <option disabled={true}>Day</option>
                                {
                                    [...Array(30).keys()].map((date) => <option>{date + 1}</option>)
                                }
                            </select>
                            <select ref={updatedMonth} defaultValue={info.month} className="select w-30" name="month">
                                <option disabled={true}>Month</option>
                                <option>January</option>
                                <option>February</option>
                                <option>March</option>
                                <option>April</option>
                                <option>May</option>
                                <option>June</option>
                                <option>July</option>
                                <option>August</option>
                                <option>September</option>
                                <option>October</option>
                                <option>November</option>
                                <option>December</option>
                            </select>
                            <select ref={updatedYear} defaultValue={info.year} className="select w-20" name="year">
                                <option disabled={true}>Year</option>
                                {
                                    [...Array(11).keys()].map((date) => <option>{date + 2020}</option>)
                                }
                            </select>
                        </div>
                    </form>

                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn" onClick={() => updateTable(updatedTask.current.value, updatedHour.current.value, updatedDay.current.value, updatedMonth.current.value, updatedYear.current.value, { task: info.task, date: info.date, hours: info.hour }, index)}>update</button>
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

            
            <div>
                {
                    load ? (
                        <div className="tooltip" data-tip="Reload before delete">
                            <button className="btn btn-circle" onClick={() => window.location.reload()}>
                                <IoReload />
                            </button>
                        </div>
                    ) : (
                        <button className="btn rounded-full" onClick={() => deleteTable()}>
                            <MdDeleteOutline />
                        </button>
                    )
                }
            </div>

                </td>
            </tr>


}

export default EmRow;