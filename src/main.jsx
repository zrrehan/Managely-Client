import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './Layout.jsx'
import Home from './Routes/Home.jsx'
import Auth from './Routes/Auth.jsx'
import AuthProvider from './Context/AuthProvider.jsx'
import Dashboard from './Routes/Dashboard.jsx'
import Payroll from './Routes/Payroll.jsx'
import EmployeeDetails from './Routes/EmployeeDetails.jsx'
import PaymentHistory from './Routes/PaymentHistory.jsx'
import Progress from './Routes/Progress.jsx'
import ContuctUs from './Routes/ContactUs.jsx'
import ContactUs from './Routes/ContactUs.jsx'
import Fired from './Routes/Fired.jsx'
import PrivateRoute from './PrivateRoute.jsx'
import Unauthorized from './Routes/Unauthorized.jsx'

const dataPromisePayroll = fetch("/get-payment-details/get-payment-details").then(res => res.json());

const router = createBrowserRouter([
    {
        path: "/", 
        element: <Layout></Layout>, 
        children: [
            {index: true, element: <Home></Home>}, 
            {
                path: "/dashboard", 
                element: <PrivateRoute>
                    <Dashboard></Dashboard>
                </PrivateRoute>
            }, 
            {
                path: "/payroll", 
                element: <PrivateRoute>
                    <Payroll></Payroll>
                </PrivateRoute>
            }, 
            {
                path: "/unauthorized", 
                element: <Unauthorized></Unauthorized>
            }, 
            {
                path: "/employeeDetails/:id", 
                element: <PrivateRoute>
                    <EmployeeDetails />
                </PrivateRoute>
            }, 
            {
                path: "/payment-history", 
                element: <PrivateRoute>
                    <PaymentHistory />
                </PrivateRoute>
            }, 
            {
                path: "/progress", 
                element: <PrivateRoute>
                    <Progress></Progress>
                </PrivateRoute>
            }, 
            {
                path: "/contact-us", 
                element: <ContactUs></ContactUs>
            }
        ]
    }, 
    {
        path: "/authentication", 
        element: <Auth></Auth>
    }, 
    {
        path: "/fired-user", 
        element: <Fired />
    }
])

const dataPromise = fetch(`https://managely-server.vercel.app/get-role`).then(res => res.json());

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Suspense >
            <AuthProvider dataPromise={dataPromise}>
                <RouterProvider router={router}></RouterProvider>
            </AuthProvider>
        </Suspense>
    </StrictMode>,
)
