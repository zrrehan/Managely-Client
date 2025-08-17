import { BsPersonWorkspace } from "react-icons/bs";
import { CiKeyboard } from "react-icons/ci";
import { FaFireAlt } from "react-icons/fa";
import { MdAccessTime, MdOutlineAdminPanelSettings, MdOutlineMail } from "react-icons/md";
import { RiUserSettingsFill } from "react-icons/ri";

function DashboardProfile({ userInfo, workInfo }) {
    console.log(workInfo)
    if(workInfo.length === 0) {
        return <></>
    }
    return(
        <div className="flex flex-col items-center">
            <div className="flex items-center gap-6 border p-2 rounded-2xl border-gray-300 mt-3 w-fit lg:px-16">
                <div className="w-[96px] h-[96px]">
                    <img className="rounded-full w-[96px] h-[96px]" src={userInfo.photoURL} />
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
            {
                userInfo.role == 'HR' && <div className="stats shadow w-[100vw] lg:w-[100%]">
                    <div className="stat w-[500px] mx-auto">
                        <div className="stat-figure text-red-700">
                            {/* For TSX uncomment the commented types below */}
                            <div className="radial-progress" style={{ "--value": (workInfo.filter((info) => info.verified === "true").length / workInfo.length) * 100 } /* as React.CSSProperties */}
                                aria-valuenow={(workInfo.filter((info) => info.verified === "true").length / workInfo.length) * 100} role="progressbar">{((workInfo.filter((info) => info.verified === "true").length / workInfo.length) * 100).toFixed(1)}%</div>
                        </div>
                        <div className="stat-title">Total Verified user</div>
                        <div className="stat-value text-red-700">{workInfo.filter((info) => info.verified === "true").length} / {workInfo.length}</div>
                        <div className="stat-desc">Total verified users is {workInfo.length}</div>
                    </div>
                </div>
            }
            {
                userInfo.role == 'Admin' && <div className="stats shadow w-[100vw] lg:w-[100%]">
                    <div className="stat">
                        <div className="stat-figure text-red-700">
                            <BsPersonWorkspace size={44} />
                        </div>
                        <div className="stat-title">Total Active Worker</div>
                        <div className="stat-value text-red-700">{workInfo.filter((info) => info.fired === "false").length}</div>
                        <div className="stat-desc">Total active worker in the company {workInfo.length}</div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-red-700">
                            <CiKeyboard size={44} />
                        </div>
                        <div className="stat-title">Total Active Employee Members</div>
                        <div className="stat-value text-red-700">{workInfo.filter((info) => info.fired === "false" && info.role === "Employee").length}</div>
                        <div className="stat-desc">Total Employee count is: {workInfo.filter((info) => info.fired === "false" && info.role === "Employee").length}</div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-red-700">
                            <RiUserSettingsFill size={44} />
                        </div>
                        <div className="stat-title">Total Active HR Members</div>
                        <div className="stat-value text-red-700">{workInfo.filter((info) => info.fired === "false" && info.role === "HR").length}</div>
                        <div className="stat-desc">Total Hr count is: {workInfo.filter((info) => info.fired === "false" && info.role === "HR").length}</div>
                    </div>
                </div>
            }
        </div>
    )
}

export default DashboardProfile;