import { use, useContext, useEffect, useState } from "react";
import PaymentSingleCard from "./PaymentSingleCard";
import { AuthContext } from "../../Context/AuthContext";

function PaymentHistoryCards({ dataPromise }) {
    const {user} = useContext(AuthContext);
    let fetcheddata = use(dataPromise);
    let [data, setData] = useState(fetcheddata.filter((info) => info.email === user.email && info.adminApprove));
    const [paginationData, setPaginationData] = useState(data);
    const [paginationValue, setPaginationValue] = useState(1);
    const [sort, setSort] = useState("Default");
    

    useEffect(() => {
        console.log(sort, "sort")
        if (sort === "Default") {
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
            setData(data)
        } else if(sort === "Low") {
            data.sort((a, b) => {
                return a.salary - b.salary
            })
            setData(data)
        } else {
            data.sort((a, b) => {
                return b.salary - a.salary
            })
            setData(data)
        }
        setPaginationData(data.slice(0, 5));
    }, [sort])

    function paginationClick(pagVal) {
        setPaginationValue(pagVal);
        const tempData = data.slice((pagVal-1) * 5, pagVal*5)
        console.log(pagVal)
        console.log(tempData);
        setPaginationData(tempData);
    }
    function handlingSorting(sortingMethod) {
        setSort(sortingMethod)
        paginationClick(1)
    }
    return(
        <div className="min-h-[80vh] flex flex-col justify-between pb-8 mt-4">
            <div className="flex">
                <input
                    onClick = {() => handlingSorting("Default")}
                    type="radio" name="radio-12" defaultChecked
                    className="radio bg-red-100 border-red-300 checked:bg-red-200 checked:text-red-600 checked:border-red-600" /> <span className="mr-4 ml-2">Default</span>
                <input
                    onClick = {() => handlingSorting("Low")}
                    type="radio" name="radio-12" 
                    className="radio bg-red-100 border-red-300 checked:bg-red-200 checked:text-red-600 checked:border-red-600" /> <span className="mr-4 ml-2">Low to High</span>
                <input
                    onClick = {() => handlingSorting("High")}
                    type="radio" name="radio-12" 
                    className="radio bg-red-100 border-red-300 checked:bg-red-200 checked:text-red-600 checked:border-red-600" /> <span className="mr-4 ml-2">High to Low</span>
            </div>
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