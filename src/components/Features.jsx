import userFriendly from "../assets/user_friendly.png"
import realTime from "../assets/real_time.png"
import scalability from "../assets/scalability.png"
import { motion } from "framer-motion"
import { fadeIn } from "../variant"

const Features = () => {
    return (
        <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto" id="feature">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
                <motion.div
                variants={fadeIn("right", 0.2)} initial='hidden' whileInView={"show"} viewport={{ once: false, amount: 0.7 }}
                className="lg:w-1/4">
                    <h3 className="text-3xl text-primary font-bold lg:w-1/2 mb-3">Why we are better than other</h3>
                    <p className="text-base text-tartiary">"Unlike many ERP systems, our application seamlessly integrates with your existing tools and platforms, providing a unified experience without the hassle of switching between multiple systems. This ensures smoother operations and better data accuracy."</p>
                </motion.div>
                {/* featured cards */}
                <motion.div 
                variants={fadeIn("up", 0.2)} initial='hidden' whileInView={"show"} viewport={{ once: false, amount: 0.7 }}
                className="w-full lg:w-3/4">
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
                        <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 flex justify-center items-center hover:translate-y-4 transition-all duration-300 cursor-pointer">
                            <div>
                                <div className="flex flex-col items-center justify-center">
                                    <img src={userFriendly} alt="" className="w-1/1 h-1/1" />
                                    <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">User-Friendly Interface</h5>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 flex justify-center items-center hover:translate-y-4 transition-all duration-300 cursor-pointer md:mt-16">
                            <div>
                                <div className="flex flex-col items-center justify-center">
                                    <img src={realTime} alt="" className="w-1/1 h-1/1" />
                                    <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">Real-Time Analytics</h5>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 flex justify-center items-center hover:translate-y-4 transition-all duration-300 cursor-pointer">
                            <div>
                                <div className="flex flex-col items-center justify-center">
                                    <img src={scalability} alt="" className="w-1/1 h-1/1" />
                                    <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">Scalability and Flexibility</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Features
