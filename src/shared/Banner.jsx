import { motion } from "framer-motion"
import { fadeIn } from "../variant"

const Banner = ({ banner, heading, subHeading, btnStarted, btnDiscount }) => {
    return (
        <div className='gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9'>
            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>

                {/* banner image */}
                <motion.div
                    variants={fadeIn("down", 0.2)} initial='hidden' whileInView={"show"} viewport={{ once: false, amount: 0.7 }}
                >
                    <img src={banner} alt='' className='lg:h-[386px]' />
                </motion.div>

                {/* banner content */}
                <motion.div
                    variants={fadeIn("up", 0.2)} initial='hidden' whileInView={"show"} viewport={{ once: false, amount: 0.7 }}
                    className='md:w-3/5'>
                    <h2 className='md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed'>{heading}</h2>
                    <p className='text-[#EBEBEB] text-2xl mb-8'>{subHeading}</p>
                    <div className='space-x-5 space-y-4'>
                        {
                            btnStarted && (
                                <button className='btnPrimary'>{btnStarted}</button>
                            )
                        }
                        {
                            btnDiscount && (
                                <button className='btnPrimary'>{btnDiscount}</button>
                            )
                        }
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Banner
