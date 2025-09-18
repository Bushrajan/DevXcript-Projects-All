import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';


const DesignSite = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center">
            {/* Image with AOS fade-up */}
            <img
              alt="ecommerce"
              className="img-fluid object-cover object-center rounded"
              src="/mobile-login/pana.png"
              data-aos="fade-up"
            />

            {/* Text Section with Framer Motion */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2 w-full lg:pl-10 mx-auto lg:py-6 mt-6 lg:mt-0"
            >
              <div className="mb-4 mt-5">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="title-font sm:text-4xl font-medium text-gray-600 mb-4"
                >
                  <span className="text-gray-600 text-4xl">
                    How to design your site footer like we did
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-base leading-relaxed mb-8 mx-auto text-gray-500"
                >
                  Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
                </motion.p>

                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="inline-flex text-white items-center bg-[#4CAF4F] border-0 py-3 px-3 focus:outline-none hover:bg-[#4CAF4F] rounded text-base md:mt-0"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesignSite;