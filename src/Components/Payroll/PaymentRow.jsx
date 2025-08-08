import axios from "axios";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthContext";

function PaymentRow({ paymentInfo, index }) {
    console.log(paymentInfo);
    const { name, salary, paymentMonth, email, adminApprove } = paymentInfo;
    const [date, setDate] = useState(null)
    const {user} = useContext(AuthContext);
    const [approve, setApprove] = useState(adminApprove);

    function payment() {
        if(!date) {
            Swal.fire({
                title: "Fill all the date input field",
                icon: "error"
            });
            return;
        }
      
        axios.put('https://managely-server.vercel.app/payment-confirm', null, {
            params: {
                email: user.email,            
                employeeEmail: email , 
                paymentMonth: paymentMonth
            },
            headers: {
                Authorization: `Bearer ${user.accessToken}`  // JWT token
            }
        })
            .then((res) => {
                setApprove(true);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your paid the Employee",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch((err) => console.error(err));

    }

    return(
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{salary} BDT</td>
            <td>{paymentMonth}</td>
            <td><input type="date" className="input" onChange={(event) => setDate(event.target.value)}/></td>
            <td>
                {
                    approve ? <div className="badge badge-success">Paid</div> : <button className="btn btn-success rounded-full" onClick={() => payment()}>Pay</button>
                }
            </td>
            
        </tr>
    )
}

export default PaymentRow;