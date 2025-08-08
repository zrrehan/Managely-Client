import heroImage1 from "../../assets/heroImage1.webp";
import heroImage2 from "../../assets/heroImage2.webp";
import { motion } from "motion/react";
import { Link } from "react-router";

function Banner() {
    return(
        <div className="flex">
            <div className="hero-content flex-col-reverse lg:flex-row gap-30">
                <div className="max-w-[90%]">
                    <motion.img
                        animate={{ x: [50, 110, 50], }}
                        transition={{ repeat: Infinity, duration: 5 }}
                        src={heroImage1}
                        className="max-w-[90%] lg:max-w-xl rounded-lg shadow-2xl hidden md:block"
                    />
                    <motion.img
                        animate={{ y: [-70, -100, -70], }}
                        transition={{ repeat: Infinity, duration: 5 }}
                        src={heroImage2}
                        className="max-w-[90%] lg:max-w-xl rounded-lg shadow-2xl"
                    />
                </div>
                <div className="">
                    <h1 className="text-6xl text-[rgba(198,27,35,255)] font-bold">Manage Teams</h1>
                    <p className="py-6 text-2xl">
                        Empower your organization with a smarter way to manage employees, monitor workflow, and simplify HR operations.
                        
                    </p>
                    <div className="flex justify-end">
                        <Link to = "/dashboard">
                            <motion.button animate={{ x: [-300, 0] }} transition={{ duration: 1 }} className="btn primary-button">Get Started</motion.button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Banner;