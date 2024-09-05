import readingImg from "../assets/reading.png"
import universeImg from "../assets/universe.png"
import { motion } from "framer-motion"
import { fadeIn } from "../variant"

const About = () => {
    return (
        <div className="md:px-14 p-4 max-w-s mx-auto space-y-10" id="about">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <motion.div
                    variants={fadeIn("right", 0.2)} initial='hidden' whileInView={"show"} viewport={{ once: false, amount: 0.7 }}
                    className="md:w-1/2">
                    <img src={readingImg} alt="" />
                </motion.div>
                {/* about content */}
                <motion.div
                    variants={fadeIn("left", 0.3)} initial='hidden' whileInView={"show"} viewport={{ once: false, amount: 0.7 }}
                    className="md:w-2/5">
                    <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">We have been improving our product <span className="text-secondary">for many years.</span></h2>
                    <p className="text-tartiary text-lg mb-7">We actively seek feedback from our users to refine and improve the user experience. Our development team implements changes based on real-world usage and suggestions, ensuring our product evolves to meet the practical needs of our customers.</p>
                    <button className="btnPrimary">Get Started</button>
                </motion.div>
            </div>

            {/* 2nd part */}
            <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
                <motion.div
                    variants={fadeIn("up", 0.2)} initial='hidden' whileInView={"show"} viewport={{ once: false, amount: 0.7 }}
                    className="md:w-2/5">
                    <img src={universeImg} alt="" />
                </motion.div>
                {/* about content */}
                <motion.div
                    variants={fadeIn("right", 0.2)} initial='hidden' whileInView={"show"} viewport={{ once: false, amount: 0.7 }}
                    className="md:w-2/5">
                    <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">You can Practice at any <span className="text-secondary">time convinent for you.</span></h2>
                    <p className="text-tartiary text-lg mb-7">Our customer support team is dedicated to providing timely assistance and comprehensive training. We regularly update our support materials and training resources to help you make the most of our product and address any challenges you may encounter.</p>
                    <button className="btnPrimary">Get Started</button>
                </motion.div>
            </div>
        </div>
    )
}

export default About
