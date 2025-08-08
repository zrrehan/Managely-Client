import SidebarNavigation from "./SidebarNavigation";

function Sidebar() {
    return(
        <div className="w-[300px] h-[100vh]  shadow-2xl fixed hidden lg:block">
            <SidebarNavigation></SidebarNavigation>
        </div>
    )
}

export default Sidebar;