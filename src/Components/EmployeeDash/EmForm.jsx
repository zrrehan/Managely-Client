import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

function EmForm({ setTasks, tasks, setLoad }) {
    const {user} = useContext(AuthContext);
    function formHandler(event) {
        event.preventDefault();
        const [task, hours, day, month, year] = [
            event.target.task.value, 
            event.target.hour.value,
            event.target.day.value,
            event.target.month.value,
            event.target.year.value
        ];
        if (task === "Pick a Task" || !hours || day === "Day" || month === "Month" || year === "Year") {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Fill all the field first",
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }
        
        const data = { task, hours, day, month, year, email: user.email};
        axios.post(`https://managely-server.vercel.app/post-task?email=${user.email}`, data, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        }).then(res => {
            const newData = {
                dummy: true,task: task, hours: hours, day: day, month: month, year: year, email: user.email
            }
            const newTable = [...tasks, newData];
            setTasks(newTable);
            setLoad(true);
            Swal.fire("Your Task has submitted!");
        })
    
    }
    
    return(
        <form onSubmit={formHandler} className="fieldset shadow-2xl h-fit bg-base-200 border-base-300 rounded-box w-full border p-4">
            <legend className="fieldset-legend text-2xl text-red-700">Task Details</legend>

            <div className="flex lg:gap-10 flex-col lg:flex-row lg:justify-between">
                <div>
                    <label className="label">Task</label> <br />
                    <select defaultValue="Pick a Task" className="select w-[300px]" name="task">
                        <option disabled={true}>Pick a Task</option>
                        <option>Sales</option>
                        <option>Support</option>
                        <option>Content</option>
                        <option>Paper-work</option>
                    </select>
                </div>

                <div>
                    <label className="label">Hours</label> <br />
                    <input type="text" className="input w-[300px]" placeholder="eg: 3" name="hour" />
                </div>

                <div>
                    <label className="label">Date</label>
                    <div className="flex gap-2">
                        <select defaultValue="Day" className="select w-20" name="day">
                            <option disabled={true}>Day</option>
                            {
                                [...Array(30).keys()].map((date) => <option>{date + 1}</option>)
                            }
                        </select>
                        <select defaultValue="Month" className="select w-30" name="month">
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
                        <select defaultValue="Year" className="select w-20" name="year">
                            <option disabled={true}>Year</option>
                            {
                                [...Array(11).keys()].map((date) => <option>{date + 2020}</option>)
                            }
                        </select>
                    </div>
                </div>
            </div>
            <button className="btn primary-button lg:w-[500px] mt-3">Submit</button>
        </form>
    )
}

export default EmForm;