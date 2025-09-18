import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
      className="body-font bg-[#0360D9] mt-6 text-white"
    >
      <div className="container lg:px-5 py-10 mx-auto">

        {/* Grid Layout for Equal Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:text-left text-center mx-auto items-start">

          {/* Column 1: Logo + Description + Social Icons */}
          <div className='col lg:ms-20 ' data-aos="fade-up">
            <div className="flex lg:items-start lg:justify-start items-center justify-center p-1">
              <img src="f-logo.png" alt="Location" className="img-fluid" />
            </div>

            <p className="text-sm leading-relaxed mb-1 lg:px-1 px-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus feugiat lectus sed ullamcorper.
            </p>
            <p className="text-sm leading-relaxed lg:mt-4 mb-4 lg:px-1 px-5">
              Volutpat integer vel. In rhoncus elementum nunc, malesuada mi sed. Nibh est sit lobortis id semper.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center sm:justify-start space-x-4 mt-4">
              {[
                'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z',
                'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z',
                'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01',
              ].map((d, i) => (
                <a key={i} href="#" className="text-gray-100 hover:text-white">
                  <div className="p-2 rounded-full hover:bg-[#A5CCFF]">
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
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div className='col lg:ms-20 ' data-aos="fade-up" data-aos-delay="100">
            <h2 className="title-font font-bold text-2xl tracking-widest mb-4">Useful Links</h2>
            <ul className="space-y-2">
              {['About Us', 'Privacy Policy', 'Our Mission', 'Our Team'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-[#A5CCFF]">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Address */}
          <div className='col lg:ms-10 ' data-aos="fade-up" data-aos-delay="300">
            <h2 className="title-font font-bold lg:text-start text-center text-2xl tracking-widest mb-4">Address</h2>
            <div className="flex lg:items-start lg:justify-start items-center justify-center p-1">
              <img src="/f-loc.png" alt="Location" className="img-fluid" />

            </div>
          </div>
        </div>
        <div className='lg:pt-15 pt-5 px-5 lg:px-20'>
          <hr />
        </div>
      </div>
      <p className='text-center pb-10 py-2'>&copy; 2022 All Right Reserved</p>
    </motion.footer>
  );
};

export default Footer;