import { FaFireAlt } from "react-icons/fa";
import { MdAccessTime, MdOutlineAdminPanelSettings, MdOutlineMail } from "react-icons/md";

function DashboardProfile({ userInfo, workInfo }) {
    console.log(workInfo)
    return(
        <div className="">
            <div className="flex items-center gap-6 border p-2 rounded-2xl border-gray-300 mt-3">
                <div>
                    <img className="rounded-full" src={userInfo.photoURL} />
                </div>
                <div className="divider divider-horizontal"></div>
                <div>
                    <h1>{userInfo.displayName}</h1>
                    <p className="flex items-center gap-2">
                        <MdOutlineMail size={24} />
                        {userInfo.email}
                    </p>
                    <p className="flex items-center gap-2">
                        <MdOutlineAdminPanelSettings size={24} />
                        {userInfo.role}
                    </p>
                </div>
            </div>
            {
                userInfo.role === "Employee" && <div className="stats shadow w-[100vw] lg:w-[100%]">
                    <div className="stat">
                        <div className="stat-figure text-red-700">
                            <FaFireAlt size={44} />
                        </div>
                        <div className="stat-title">Total Wrok Done</div>
                        <div className="stat-value text-red-700">{workInfo.length}</div>
                        <div className="stat-desc">You have successfully done {workInfo.length} works</div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-red-700">
                            <MdAccessTime size = {44} />
                        </div>
                        <div className="stat-title">Latest Work Done in</div>
                        <div className="stat-value text-red-700">{workInfo.sort((a, b) => b.year - a.year)[0].year}</div>
                        <div className="stat-desc">in {workInfo.sort((a, b) => b.year - a.year)[0].year} you have done you last work</div>
                    </div>
                </div>
            }
        </div>
    )
}

export default DashboardProfile;