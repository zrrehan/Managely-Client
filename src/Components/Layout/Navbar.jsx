import { HiMenuAlt2 } from "react-icons/hi";
import SidebarNavigation from "./SidebarNavigation";
import logo from "../../assets/logo.png"
import { Link, Navigate, useNavigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { IoMdLogOut } from "react-icons/io";

function Navbar() {
    const { user, fired, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    if(fired === "true") {
        return <Navigate to= "/fired-user"></Navigate>
    }

    function logoutFunc() {
        logout();
        navigate("/");
    }
    return(
        <div className="navbar bg-base-100 shadow-sm border-0">
            <div className="navbar-start">
                <div className="drawer">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <div className="flex items-center gap-2 lg:hidden">
                            <label htmlFor="my-drawer" className="drawer-button">
                                <HiMenuAlt2 size={20} color="rgba(198,27,35,255)" />
                            </label>
                            <div className="w-7">
                                <img src={logo} alt="" />
                            </div>
                        </div>

                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                            <SidebarNavigation></SidebarNavigation>
                        </ul>
                    </div>
                </div>
                
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    
                </ul>
            </div>
            <div className="navbar-end">
                {
                    !user? <Link to="/authentication">
                                <button className="btn primary-button">Login</button>
                            </Link>: 
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        referrerPolicy="no-referrer"
                                        alt="Display Picture"
                                        src={user.photoURL} />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li><a onClick={logoutFunc} className="h-10 text-lg text-center flex justify-center">
                                    Logout <IoMdLogOut />
                                    </a></li>
                            </ul>
                        </div>
                }
            </div>
        </div>
    )
}

export default Navbar;