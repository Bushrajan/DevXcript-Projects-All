import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos'; import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="body-font bg-[#263238] mt-6 text-white"
    >
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          {/* Column 1 */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4" data-aos="fade-up">
            <h2 className="title-font font-medium tracking-widest text-sm mb-3">
              <img src="/Footer/Logo.png" alt="img" className="img-fluid mb-8" />
            </h2>
            <nav className="list-none mb-10">
              <li><a className="hover:text-green-500">Copyright © 2020 Landify UI Kit.</a></li>
              <li><a className="hover:text-green-500">All rights reserved</a></li>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                {/* Social Icons */}
                {[
                  'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z',
                  'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z',
                  'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01',
                  'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z',
                ].map((d, i) => (
                  <a key={i} className={`mt-10 text-gray-100 ${i !== 0 ? 'ml-3' : ''}`} href="#">
                    <div className="p-2 rounded-full bg-[#3B464C] hover:text-green-500">
                      <svg
                        fill={i === 2 ? 'none' : 'currentColor'}
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={i === 3 ? '0' : '2'}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        {i === 2 ? (
                          <>
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                            <path d={d} />
                          </>
                        ) : i === 3 ? (
                          <>
                            <path stroke="none" d={d} />
                            <circle cx="4" cy="4" r="2" stroke="none" />
                          </>
                        ) : (
                          <path d={d} />
                        )}
                      </svg>
                    </div>
                  </a>
                ))}
              </span>
            </nav>
          </div>

          {/* Column 2 */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4" data-aos="fade-up" data-aos-delay="100">
            <h2 className="title-font font-bold text-2xl tracking-widest mb-3">Company</h2>
            <nav className="list-none mb-10">
              {['About us', 'Blog', 'Contact us', 'Pricing', 'Testimonials'].map((item, i) => (
                <li key={i}><a className="text-white hover:text-green-500">{item}</a></li>
              ))}
            </nav>
          </div>

          {/* Column 3 */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4" data-aos="fade-up" data-aos-delay="200">
            <h2 className="title-font font-bold text-2xl tracking-widest mb-3">Support</h2>
            <nav className="list-none mb-10">
              {['Help center', 'Terms of service', 'Legal', 'Privacy policy', 'Status'].map((item, i) => (
                <li key={i}><a className="text-white hover:text-green-500">{item}</a></li>
              ))}
            </nav>
          </div>

          {/* Column 4 */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4" data-aos="fade-up" data-aos-delay="300">
            <h2 className="title-font font-bold tracking-widest text-2xl mb-3">Stay up to date</h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative flex w-40 sm:w-auto bg-[#515B60] px-3 py-2 rounded xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  className="w-full bg-opacity-50 rounded focus:bg-transparent bg-[#515B60] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Your email address"
                />
                <img src="/send.png" alt="img" className="img-fluid mt-2" width="30px" style={{ height: '30px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;