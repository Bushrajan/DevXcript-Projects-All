import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const OurClients = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const logos = [
    '/Logo-1.png',
    '/Logo-2.png',
    '/Logo-3.png',
    '/Logo-4.png',
    '/Logo-5.png',
    '/Logo-6.png',
    '/Logo-7.png',
  ];

  return (
    <div className="lg:mt-5 lg:pt-5">
      {/* Heading Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-4 mt-5"
      >
        <h1 className="title-font sm:text-4xl font-medium text-gray-600 leading-20">
          <span className="text-gray-600 text-4xl">Our Clients</span>
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
          We have been working with some Fortune 500+ clients
        </p>
      </motion.div>

      {/* Logo Grid */}
      <div className="flex flex-wrap gap-5 lg:mt-6 justify-center">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="lg:px-5 p-1 m-1 lg:mx-5 img-fluid"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          />
        ))}
      </div>
    </div>
  );
};

export default OurClients;