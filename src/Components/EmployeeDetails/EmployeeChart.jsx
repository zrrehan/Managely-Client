import { use } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

function EmployeeChart({ dataPromiseChart, email }) {
    const chartData = use(dataPromiseChart);
    const filteredData = chartData.filter((info) => info.email === email && info.adminApprove);
    const renderBarChart = (
        <BarChart width={600} height={300} data={filteredData}>
            <XAxis dataKey="paymentMonth" stroke="#8884d8" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="salary" fill="#b31d25" barSize={30} />
        </BarChart>
    );
    return(
        <div>
            {renderBarChart}
        </div>
    )
}

export default EmployeeChart