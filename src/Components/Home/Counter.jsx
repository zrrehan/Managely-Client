import CountUp from "react-countup";
import { TbBrandSuperhuman } from "react-icons/tb";
import { FaUsersCog, FaUserCheck, FaChartLine } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { motion } from "motion/react";

function Counter() {
    return (
        <div className="py-10 px-4">
            <h1 className="text-4xl font-bold text-center mb-10">
                Empowering Teams with Impactful Stats
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">

                {/* Counter 1 */}
                <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-[200px] h-[200px] bg-gradient-to-tl from-[rgba(198,27,35,255)] to-gray-700 rounded-4xl text-white flex flex-col items-center justify-center text-center">
                    <h2 className="text-xl mb-2">Total Employees</h2>
                    <GrUserWorker size = {44} />
                    <div className="text-5xl mt-2">
                        <CountUp end={100} duration={2} />+
                    </div>
                </motion.div>

                {/* Counter 2 */}
                <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-[200px] h-[200px] bg-gradient-to-tl from-[rgba(198,27,35,255)] to-gray-700 rounded-4xl text-white flex flex-col items-center justify-center text-center">
                    <h2 className="text-xl mb-2">Active Users</h2>
                    <FaUsersCog size={44} />
                    <div className="text-5xl mt-2">
                        <CountUp end={76} duration={2} />+
                    </div>
                </motion.div>

                {/* Counter 3 */}
                <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-[200px] h-[200px] bg-gradient-to-tl from-[rgba(198,27,35,255)] to-gray-700 rounded-4xl text-white flex flex-col items-center justify-center text-center">
                    <h2 className="text-xl mb-2">Verified Accounts</h2>
                    <FaUserCheck size={44} />
                    <div className="text-5xl mt-2">
                        <CountUp end={58} duration={2} />+
                    </div>
                </motion.div>

                {/* Counter 4 */}
                <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-[200px] h-[200px] bg-gradient-to-tl from-[rgba(198,27,35,255)] to-gray-700 rounded-4xl text-white flex flex-col items-center justify-center text-center">
                    <h2 className="text-xl mb-2">Tasks Completed</h2>
                    <FaChartLine size={44} />
                    <div className="text-5xl mt-2">
                        <CountUp end={240} duration={2} />+
                    </div>
                </motion.div>

            </div>
        </div>
    );
}

export default Counter;
