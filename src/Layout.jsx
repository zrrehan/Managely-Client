import { Outlet } from "react-router";
import Navbar from "./Components/Layout/Navbar";
import Sidebar from "./Components/Layout/Sidebar";
import Footer from "./Components/Layout/Footer";

function Layout() {
    return(
        <div className="grid ">
            <Sidebar></Sidebar>
           <div className=" h-4 lg:ml-[300px]">
                <Navbar></Navbar> 
                <div className="m-auto max-w-[1050px] w-[90%]">
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
           </div>
        </div>
    )
}

export default Layout;