import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

// React Icons
import { FaVirus, FaAppleAlt, FaBrain } from 'react-icons/fa';
import { BsLungs } from 'react-icons/bs';

const ConsultingSpecialists = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    const cards = [
        {
            title: 'Covid-19 Test',
            icon: <FaVirus className="w-6 h-6" />,
        },
        {
            title: 'Heart Lungs',
            icon: <BsLungs className="w-6 h-6" />,
        },
        {
            title: 'Supplement',
            icon: <FaAppleAlt className="w-6 h-6" />,
        },
        {
            title: 'Mental Health',
            icon: <FaBrain className="w-6 h-6" />,
        },
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="container mx-auto bg-white lg:py-12 py-10 px-4 md:px-8 lg:px-16"
        >
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="lg:text-5xl text-3xl lg:mt-30 font-semibold text-gray-800 mb-10 text-center lg:text-left">
                Our Consulting Specialists
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {cards.map((card) => (
                    <motion.div
                        key={card.title}
                        data-aos="fade-up"
                        className="rounded-lg p-6 text-center bg-white text-black border border-gray-200 transition duration-300 group hover:bg-[#0360D9] hover:text-white hover:shadow-xl"
                    >
                        <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-[#0360D9] group-hover:text-[#1379B1] transition-colors duration-300">
                            {card.icon}
                        </div>
                        <h3 className="text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-white">
                            {card.title}
                        </h3>
                        <p className="text-sm text-gray-500 transition-colors duration-300 group-hover:text-white/80">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.section >
    );
};

export default ConsultingSpecialists;