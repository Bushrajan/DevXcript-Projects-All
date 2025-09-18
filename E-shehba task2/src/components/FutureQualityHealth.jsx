import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FutureQualityHealth = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    const points = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus feugiat lectus risus sed ullamcorper. Auctor semper fermentum volutpat integer vel. In rhoncus elementum nunc, malesuada mi sed. Nibh est sit lobortis id semper.',
    ];

    return (
        <section className="container mx-auto bg-white px-2 lg:mt-15 mt-10 lg:py-3  lg:mt-1 md:px-8 lg:px-20">
            <div className="grid grid-cols-1 lg:py-20 lg:grid-cols-2 gap-10 items-center">

                {/* Right Side - Text */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    data-aos="fade-up"
                    className="space-y-6 lg:text-left text-center"
                >

                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        
                        className="text-3xl lg:text-5xl lg:text-left text-center  font-bold text-gray-800"
                    >
                        <span className="text-gray-700">
                            The Future of
                        </span>
                        <br className="hidden lg:inline-block" />
                        <span className='flex justify-center lg:justify-start text-[#0360D9] font-bold '>
                            Quality Health
                        </span>
                    </motion.h2>


                    <ul className="space-y-4">
                        {points.map((point, index) => (
                            <li key={index} className="text-gray-600 text-base  lg:text-left text-center lg:items-start gap-2" >
                               <div data-aos="fade-up" data-aos-duration="100"> {point} <br /><br /></div>
                               <div data-aos="fade-up" data-aos-duration="1500"> {point} <br /><br /></div>
                               <div data-aos="fade-up" data-aos-duration="2000"> {point}</div>
                              
                            </li>
                        ))}
                    </ul>

                    <a
                        href="#"
                        className="inline-block  text-[#0360D9] font-semibold hover:underline transition duration-2500"
                    >
                        Learn More →
                    </a>
                </motion.div>


                {/* Left Side - Image */}
                <div data-aos="fade-up" className="w-full h-full">
                    <img
                        src="/Surgical Scene2.png" // Replace with actual image path
                        alt="Surgical Scene"
                        className="rounded-4xl shadow-lg w-full h-auto object-cover"
                    />
                </div>
            </div>


            <div className='container lg:p-20 md:p-10 p-2 lg:mb-25 rounded-4xl lg:py-10 bg-[#0360D9] mt-20 text-white text-center'  data-aos="fade-up">
                <h3 className='lg:text-4xl text-2xl font-bold mb-10' data-aos="fade-up" data-aos-duration="2000" > Subscribe To Our Newsletter</h3>
                <div className='bg-white  rounded-4xl flex justify-end' data-aos="fade-up" data-aos-duration="3000">
                    <div></div>
                    <div className='p-1'>
                        <img src="/arrow.png" alt="" />
                    </div>

                </div>

            </div>

        </section>
    );
};

export default FutureQualityHealth;