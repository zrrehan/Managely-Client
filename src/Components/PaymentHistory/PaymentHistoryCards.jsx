import { use, useContext, useState } from "react";
import PaymentSingleCard from "./PaymentSingleCard";
import { AuthContext } from "../../Context/AuthContext";

function PaymentHistoryCards({ dataPromise }) {
    const {user} = useContext(AuthContext);
    let data = use(dataPromise);
    data = data.filter((info) => info.email === user.email && info.adminApprove);
    const [paginationData, setPaginationData] = useState(data);
    const [paginationValue, setPaginationValue] = useState(1);

    const monthMap = {
        January: 0,
        February: 1,
        March: 2,
        April: 3,
        May: 4,
        June: 5,
        July: 6,
        August: 7,
        September: 8,
        October: 9,
        November: 10,
        December: 11
    };

    data.sort((a, b) => {
        const [yearA, monthA] = a.paymentMonth.split(" ");
        const [yearB, monthB] = b.paymentMonth.split(" ");

        const dateA = new Date(parseInt(yearA), monthMap[monthA]);
        const dateB = new Date(parseInt(yearB), monthMap[monthB]);

        return dateB - dateA; // descending
    });
    useState(() => {
        setPaginationData(data.slice(0, 5));
    }, [])

    function paginationClick(pagVal) {
        setPaginationValue(pagVal);
        const tempData = data.slice((pagVal-1) * 5, pagVal*5)
        console.log(pagVal)
        console.log(tempData);
        setPaginationData(tempData);
    }

    return(
        <div className="min-h-[80vh] flex flex-col justify-between pb-8">
            <div>
                {
                    paginationData.map((info) => <PaymentSingleCard data={info}></PaymentSingleCard>)
                }
            </div>
            {
                data.length > 5 && <div className="space-x-2 flex justify-center">
                    {
                        [...Array(parseInt(data.length % 5)+1)].map((_, idx) => <button className={`btn  ${idx + 1 === paginationValue ? "bg-gradient-to-r from-gray-800 to-[rgba(198,27,35,255)] text-white" : "bg-gray-300"}`} onClick={() => paginationClick(idx + 1)}>{idx + 1}</button>)
                    }
                </div>
            }
        </div>
    )
}

export default PaymentHistoryCards;