import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Testtimonial = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <section className="bg-[#E1EEFF]  lg:py-25 py-10  md:px-8 lg:px-20">
            <div className="grid grid-cols-1  lg:grid-cols-2 gap-12 items-center">
                {/* Left Side */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    data-aos="fade-up"
                    className="space-y-6 px-4"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="text-3xl lg:text-5xl font-bold text-gray-800"
                    >
                        <span className='flex gap-3'>
                            What   <span className='flex text-[#0360D9] font-bold '>
                                Our Member's
                            </span>
                        </span> 
                        <span className='flex font-bold '>
                            Saying About Us
                        </span>
                    </motion.h2>

                    <p className="text-gray-600 lg:text-left text-center justify-center lg:justify-start  mb-5 text-base" data-aos="fade-up" data-aos-duration="2000">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Sem velit viverra amet faucibus.
                    </p>

                    {/* Profile Images with Overlap and Review Label */}
                    <div className="relative mt-4 h-10 ">
                        <img src="/p1.png" alt="Profile 1" className="w-10 h-10 rounded-full object-cover  shadow-md absolute" style={{ left: '15px' }} data-aos="fade-up" data-aos-duration="1000" />
                        <img src="/p2.png" alt="Profile 2" className="w-10 h-10 rounded-full object-cover  shadow-md absolute" style={{ left: '35px' }} data-aos="fade-up" data-aos-duration="1500" />
                        <img src="/p3.png" alt="Profile 3" className="w-10 h-10 rounded-full object-cover  shadow-md absolute" style={{ left: '55px' }} data-aos="fade-up" data-aos-duration="200" />
                        <img src="/p4.png" alt="Profile 4" className="w-10 h-10 rounded-full object-cover  shadow-md absolute" style={{ left: '75px' }} data-aos="fade-up" data-aos-duration="2500" />
                        <img src="/p5.png" alt="Profile 5" className="w-10 h-10 rounded-full object-cover  shadow-md absolute" style={{ left: '95px' }} data-aos="fade-up" data-aos-duration="3000" />
                        <img src="/p6.png" alt="Profile 6" className="w-10 h-10 rounded-full object-cover  shadow-md absolute" style={{ left: '110px' }} data-aos="fade-up" data-aos-duration="3500" />

                        {/* Review Label */}
                        <span className="absolute left-[190px] top-2 text-gray-500 text-sm font-medium" data-aos="fade-up" data-aos-duration="2000">
                            100+ Reviews
                        </span>
                    </div>

                </motion.div>

                {/* Right Side - Testimonial Card */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    data-aos="fade-up"
                    className="bg-[#F9FAFB] mx-3 rounded-xl lg:p-10 p-2 shadow-lg space-y-4"
                >
                    <div className='flex flex-wrap justify-between items-center'>
                        <div className="flex  items-center gap-4" data-aos="fade-up" data-aos-duration="1000">
                            <img
                                src="/p6.png" // Replace with actual image
                                alt="Jane Cooper"
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800">Jane Cooper</h4>
                                <p className="text-sm text-gray-500">12/4/21</p>
                            </div>
                        </div>

                        {/* Stars */}
                        <div className="flex gap-1 mt-5 text-yellow-400 text-lg" data-aos="fade-up" data-aos-duration="2000">
                            <img src="/star.png" alt="Jane Cooper" className="img-fluid w-5 h-5" />
                            <img src="/star.png" alt="Jane Cooper" className="img-fluid w-5 h-5" />
                            <img src="/star.png" alt="Jane Cooper" className="img-fluid w-5 h-5" />
                            <img src="/star.png" alt="Jane Cooper" className="img-fluid w-5 h-5" />
                            <img src="/star.png" alt="Jane Cooper" className="img-fluid w-5 h-5" />
                        </div>
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-600 text-base lg:p-5 p-3 leading-relaxed" data-aos="fade-up" data-aos-duration="3000">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Testtimonial;