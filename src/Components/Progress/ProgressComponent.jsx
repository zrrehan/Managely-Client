import { use, useState } from "react";
import ProgressCard from "./ProgressCard";

function ProgressComponent({ dataPromise }) {
    const [employeeEmail, setEmployeeEmail] = useState("None");
    const [month, setMonth] = useState("Pick A Month")
    const data = use(dataPromise);
    const [show, setShow] = useState(data);
    const emails = [];
    for (let task of data) {
        if(!emails.includes(task.email)) {
            emails.push(task.email);
        }
    }
    console.log(emails)

    function handleEmailChange(event) {
        const newEmail = event.target.value;
        setEmployeeEmail(newEmail);
        
        if(newEmail !== "None") {
            const newData = data.filter((info) => info.email === newEmail);
            setShow(newData);
        } else {
            setShow(data);
        }

    }

    function changeMonth(event) {
        const newMonth = event.target.value;
        if (employeeEmail === "None" ) {
            setMonth(newMonth);
            const newData = data.filter((info) => info.month === newMonth);
            setShow(newData);
        } 
    }
    return(
        <div>
            <div className="md:flex justify-between px-12">
                <div >
                    <label>Select Employee</label> <br></br>
                    <select defaultValue="None" className="select w-70 rounded-3xl" onChange={handleEmailChange}>
                        <option>None</option>
                        {
                            emails.map(singleEmail => <option>{singleEmail}</option>)
                        }
                    </select>
                </div>

                <div>
                    <label>Select Month</label>
                    <br />
                    <select defaultValue="Pick a Month" className="select w-70 rounded-3xl" disabled={employeeEmail !== "None"} onChange={changeMonth}>
                        <option disabled={true}>Pick a Month</option>
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
                </div>
            </div>

            <div className="min-h-[90vh]">
                {
                    show.map((info) => <ProgressCard data = {info}></ProgressCard>)
                }

                {
                    show.length === 0 && <div className=" text-center pt-20 text-5xl font-black italic">
                        <h1>Select Another month or employee to show data...</h1>
                    </div>
                }
            </div>
        </div>
    )
}

export default ProgressComponent;