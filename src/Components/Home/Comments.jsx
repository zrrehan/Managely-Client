function Comments() {
    return (
        <ul className="list bg-base-100 rounded-box shadow-md p-6 space-y-6 my-20">

            <li className="text-5xl font-semibold text-gray-500 tracking-wide">
                What employees are saying
            </li>

            <li className="list-row space-y-2">
                <div className="flex items-center gap-4">
                    <img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp" alt="User" />
                    <div>
                        <div className="flex items-center gap-3">
                            <div className="font-medium">Lucy Hawkin</div>
                            <div className="text-xs uppercase font-semibold text-gray-500">HR Executive</div>
                            <div className="flex gap-1 mt-1 text-yellow-500">
                                ★★★★★
                            </div>
                        </div>
                        <p className="text-sm text-gray-700">
                            “This system has significantly reduced our HR workload. Tracking employee progress and managing payroll has never been easier.”
                        </p>
                    </div>
                </div>
                
            </li>

            <li className="list-row space-y-2">
                <div className="flex items-center gap-4">
                    <img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/4@94.webp" alt="User" />
                    <div>
                        <div className="flex items-center gap-3">
                            <div className="font-medium">Selena Skyle</div>
                            <div className="text-xs uppercase font-semibold text-gray-500">HR Executive</div>
                            <div className="flex gap-1 mt-1 text-yellow-500">
                                ★★★★★
                            </div>
                            
                        </div>
                        <p className="text-sm text-gray-700">
                            “I can easily monitor team performance and approve work updates. It’s efficient, fast, and user-friendly.”
                        </p>
                    </div>
                </div>
                
            </li>

            <li className="list-row space-y-2">
                <div className="flex items-center gap-4">
                    <img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/3@94.webp" alt="User" />
                    <div>
                        <div className="flex items-center gap-3">
                            <div className="font-medium">Tania Parker</div>
                            <div className="text-xs uppercase font-semibold text-gray-500">Software Engineer</div>
                            <div className="flex gap-1 mt-1 text-yellow-500">
                                ★★★★★
                            </div>
                        </div>
                        <p className="text-sm text-gray-700">
                            “The platform is intuitive and makes logging daily progress easy. I also love how the dashboard keeps everything organized.”
                        </p>
                    </div>
                </div>
                
            </li>

        </ul>
    );
}

export default Comments;
