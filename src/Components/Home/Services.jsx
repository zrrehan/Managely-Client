import { motion } from "motion/react";
function Services() {
    return (
        <div>
            <h1 className="text-6xl font-bold mb-6 text-[rgba(198,27,35,255)]">Services We Provide</h1>
            <div className="grid lg:grid-cols-2 gap-6">
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 py-10 border shadow-2xl bg-gradient-to-tl from-[rgba(198,27,35,255)] to-gray-700 rounded-4xl text-white ">
                        <h2 className="text-3xl font-semibold mb-2">Employee Workflow Tracking</h2>
                        <p>
                            Monitor your team’s daily progress, task updates, and overall productivity in real-time.
                            Simplify project supervision and ensure smooth workflow execution.
                        </p>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 py-10 border shadow-2xl bg-gradient-to-tl from-[rgba(198,27,35,255)] to-gray-700 rounded-4xl text-white ">
                    <h2 className="text-3xl font-semibold mb-2">Payroll & Contract Management</h2>
                    <p>
                        Manage salaries, contracts, and payment cycles with ease.
                        Ensure accurate payouts, contract transparency, and secure HR operations.
                    </p>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 py-10 border shadow-2xl bg-gradient-to-tl from-[rgba(198,27,35,255)] to-gray-700 rounded-4xl text-white ">
                    <h2 className="text-3xl font-semibold mb-2">Performance Analytics</h2>
                    <p>
                        Gain insights into employee efficiency, attendance, and task completion rates.
                        Visualize data through charts and reports for better HR decisions.
                    </p>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 py-10 border shadow-2xl bg-gradient-to-tl from-[rgba(198,27,35,255)] to-gray-700 rounded-4xl text-white ">
                    <h2 className="text-3xl font-semibold mb-2">Team Communication Tools</h2>
                    <p>
                        Foster better collaboration with integrated messaging and update features.
                        Keep everyone on the same page and improve team coordination.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}

export default Services;
