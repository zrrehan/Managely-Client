function PaymentSingleCard({data}) {
    const {email, paymentMonth, adminApprove, salary, } = data
    return(
        <div className="flex justify-between border my-3 mb-7 px-8 py-3 shadow-2xl rounded-4xl text-2xl border-red-600">
                <p>{paymentMonth} </p>
                <p>{salary} BDT</p>
                <p>Transaction ID: <span className="text-red-600">Not set yet</span></p>
        </div>
    )
}

export default PaymentSingleCard;