import { useContext } from "react";
import { MdAttachMoney } from "react-icons/md";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router";

function Payment({ emEmail, salary, emName }) {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    console.log(emEmail);

    function handlePayment(event) {
        event.preventDefault();
        const [year, month] = [event.target.year.value, event.target.month.value];
        const paymentDate = year + " " + month;
        console.log(emEmail);
        axios.post('https://managely-server.vercel.app/payment', null, {
            params: {
                emEmail: emEmail,
                email: user.email,
                paymentDate: paymentDate, 
                salary: salary, 
                name: emName
            },
            headers: {
                Authorization: `Bearer ${user.accessToken}`  // replace jwtToken with your actual token
            }
        })
            .then((res) => {
                navigate("/")
                const data = res.data;
                if (data.message === "already paid") {
                    Swal.fire({
                        title: "Already Paid!!",
                        text: "This person is already paid for this month",
                        icon: "error"
                    });
                    return; 
                }
                Swal.fire({
                    title: "Payment Done!",
                    text: "Payment Done for this month!",
                    icon: "success"
                });
            })
            .catch((err) => console.error(err));

    }
    return(
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={() => document.getElementById(emEmail).showModal()}><MdAttachMoney /></button>
            <dialog id={emEmail} className="modal">
                <div className="modal-box">
                    <h1 className="text-3xl mb-3 font-bold">Select the month and year</h1>
                    <form onSubmit={handlePayment}>
                        
                        <select defaultValue="Pick a month" className="select" name = "month">
                            <option disabled={true}>Pick a month</option>
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

                        <select defaultValue="Pick a year" className="select my-5" name = "year">
                            <option disabled={true}>Pick a year</option>
                            <option>2020</option>
                            <option>2021</option>
                            <option>2022</option>
                            <option>2023</option>
                            <option>2024</option>
                            <option>2025</option>
                            <option>2026</option>
                            <option>2027</option>
                            <option>2028</option>
                            <option>2029</option>
                            <option>2030</option>
                        </select>

                        <br />
                        <button className="btn">Pay Now</button>
                    </form>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
        

        
    )
}

export default Payment;