import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const LocBussiness = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-[#F5F7FA] py-20">
      <section className="text-gray-600 body-font">
        <div className="container max-xl px-5 py-2 mx-auto flex flex-wrap justify-center items-center">
          {/* Heading Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0"
          >
            <h1 className="title-font text-4xl mb-4 font-medium text-gray-600">
              <span className="text-gray-700">Helping a local</span>
              <br className="hidden lg:inline-block" />
              <span className="ps-2 text-[#4CAF4F]">business reinvent itself</span>
            </h1>
            <p className="mb-4 leading-relaxed">
              We reached here with our hard work and dedication
            </p>
          </motion.div>

          {/* Stats Block 1 */}
          <div className="mx-5 items-center" data-aos="fade-up">
            <div className="flex mb-4">
              <img src="/Icon-3.png" alt="img" className="img-fluid me-3" width="40px" style={{ height: "40px" }} />
              <div>
                <h3 className="title-font font-medium text-2xl text-gray-600">2,245,341</h3>
                <p className="leading-relaxed mb-3 text-sm">Members</p>
              </div>
            </div>
            <div className="flex">
              <img src="/Icon-5.png" alt="img" className="img-fluid me-3" width="40px" style={{ height: "40px" }} />
              <div>
                <h3 className="title-font font-medium text-2xl text-gray-600">828,867</h3>
                <p className="leading-relaxed mb-3 text-sm">Event Bookings</p>
              </div>
            </div>
          </div>

          {/* Stats Block 2 */}
          <div className="mx-5 items-center" data-aos="fade-up" data-aos-delay="150">
            <div className="flex mb-4">
              <img src="/Icon-4.png" alt="img" className="img-fluid me-3" width="40px" style={{ height: "40px" }} />
              <div>
                <h3 className="title-font font-medium text-2xl text-gray-600">46,328</h3>
                <p className="leading-relaxed mb-3 text-sm">Clubs</p>
              </div>
            </div>
            <div className="flex">
              <img src="/Icon-6.png" alt="img" className="img-fluid me-3" width="40px" style={{ height: "40px" }} />
              <div>
                <h3 className="title-font font-medium text-2xl text-gray-600">1,926,436</h3>
                <p className="leading-relaxed mb-3 text-sm">Payments</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocBussiness;