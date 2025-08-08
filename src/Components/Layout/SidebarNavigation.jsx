import { IoHomeOutline } from "react-icons/io5";
import { NavLink } from "react-router";
import Logo from "./Logo";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { GiProgression } from "react-icons/gi";
import { BsTelephone } from "react-icons/bs";

function SidebarNavigation() {
    const {role} = useContext(AuthContext);
    return(
        <div>
            <Logo></Logo>
            <div className="divider">Menu</div>
            <div className="text-2xl flex flex-col gap-2 px-3 mt-10">
                <NavLink className="sidebar flex items-center gap-2" to="/"><IoHomeOutline />Home</NavLink>
                <NavLink className="sidebar flex items-center gap-2" to="/dashboard"><MdOutlineDashboardCustomize />Dasboard</NavLink>
                {
                    role === "Admin" && <NavLink className="sidebar flex items-center gap-2" to="/payroll"><RiMoneyDollarCircleFill />Payroll</NavLink>
                }
                {
                    role == "Employee" && <NavLink className="sidebar flex items-center gap-2" to="/payment-history"><RiMoneyDollarCircleFill />Payment history</NavLink>
                }
                {
                    role === "HR" && <NavLink className="sidebar flex items-center gap-2" to="/progress"><GiProgression />Progress</NavLink>
                }
                <NavLink className="sidebar flex items-center gap-2" to="/contact-us"><BsTelephone />Contact us</NavLink>
            </div>
        </div>
    )
}

export default SidebarNavigation;