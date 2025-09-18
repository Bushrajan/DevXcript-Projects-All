import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyChooseUs = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    const points = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    ];

    return (
        <section className="container mx-auto bg-white lg:py-25 lg:mt-5 lg:mb-10 p-5 px-4 md:px-8 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Left Side - Image */}
                <div data-aos="fade-up" className="w-full h-full">
                    <img
                        src="/Surgical Scene.png" // Replace with actual image path
                        alt="Surgical Scene"
                        className="rounded-4xl shadow-lg w-full h-auto object-cover"
                    />
                </div>

                {/* Right Side - Text */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    data-aos="fade-up"
                    className="space-y-6"
                >
                    <h2 className="text-3xl lg:text-5xl lg:text-left text-center ms-5 font-bold text-gray-800">
                        Why You Choose Us?
                    </h2>

                    <ul className="space-y-4">
                        {points.map((point, index) => (
                            <li key={index} className="text-gray-600 text-base flex gap-5 items-center lg:items-start lg:gap-2">
                                <span className="text-[#0360D9] font-bold ms-5">
                                    <img src="/tick.png" alt="tick" className='img-fluid' data-aos="fade-up" data-aos-duration="1500" />
                                </span>
                                <div data-aos="fade-up" data-aos-duration="300">
                                    {point}
                                </div>
                            </li>
                        ))}
                    </ul>

                    <a
                        href="#"
                        className="inline-block mt-4 ms-5 text-[#0360D9] font-semibold hover:underline transition duration-300"
                    >
                        Learn More →
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseUs;