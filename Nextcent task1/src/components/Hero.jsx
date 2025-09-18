import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-[#F5F7FA] text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        {/* Left Text Section */}
        <div
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          data-aos="fade-up"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="title-font text-4xl lg:text-6xl mb-4 font-bold text-gray-600 lg:leading-20"
          >
            <span className="text-gray-700">Lessons and insights</span>
            <br className="hidden lg:inline-block" />
            <span className="ps-2 text-[#4CAF4F]">from 8 years</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-4 leading-relaxed"
          >
            Where to grow your business as a photographer: site or social media?
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex justify-center"
          >
            <button className="inline-flex text-white items-center bg-[#4CAF4F] border-0 py-3 px-3 focus:outline-none hover:bg-[#4CAF4F] rounded text-base lg:mt-4 md:mt-0">
              Register
            </button>
          </motion.div>
        </div>

        {/* Right Image Section */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6" data-aos="fade-up">
          <img
            className="object-cover mx-auto object-center rounded"
            alt="hero"
            src="/Illustration.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;