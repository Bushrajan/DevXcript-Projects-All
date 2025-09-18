import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <section className="bg-[#E1EEFF] text-gray-600 body-font">
        <div className="container mx-auto flex px-1 lg:pt-15 lg:flex-row flex-col items-center">
          {/* Left Text Section */}
          <div className="lg:flex-grow lg:w-[50%] lg:ps-5 mainhero1 md:px-1 lg:mt-15 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center"
            data-aos="fade-up"
          >
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="title-font lg:text-5xl mb-4 font-bold text-gray-600 lg:leading-15"
            >
              <span className="text-gray-700">Find & Search Your</span>
              <br className="hidden lg:inline-block" />
              <span className='flex justify-center items-center gap-3'>
                <span className="text-[#0360D9]">Favourite<span><img src="/line.png" alt="img" className='img fluid' width={"160px"} />
                </span></span>
                <span>Doctor</span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-4 leading-relaxed"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br className="hidden lg:inline-block" />
              Sem velit viverra amet faucibus.  </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex justify-center mainherodiv mb-5 lg:mb-0 lg:pb-10"
            >

              <div className="inline-flex flex-wrap  relative  justify-between gap-10 rounded-4xl items-center bg-white border border-white py-3 px-3 focus:outline-none hover:border-[#0360D9] text-base lg:mt-4 md:mt-0"  >

                <div className='flex justify-between items items-center text-black'>
                  <img src="/user.png" alt="img" className='img-fluid me-2' width={"25px"} />
                  <span className='me-2'>Doctor’s Name</span>
                  <img src="/angle.png" alt="img" className='img-fluid me-2 lg:me-15 md:me-3' width={"15px"} style={{ height: "15px" }} />
                </div>

                <div className='flex justify-between items items-center text-black'>
                  <img src="/loc.png" alt="img" className='img-fluid me-2' width={"25px"} />
                  <span className='me-2'>Location</span>
                  <img src="/angle.png" alt="img" className='img-fluid me-2 lg:me-30 md:me-22' width={"15px"} style={{ height: "15px" }} />
                </div>

                <div className='bg-[#0360D9] p-2 hidden lg:block md:block  absolute  top-1.2 right-0 mr-1 ' style={{ borderRadius: "50%" }}>
                  <img src="/search.png" alt="img" className='img-fluid ' width={"25px"} />
                </div>
              </div>

            </motion.div>
          </div>

          {/* Right Image Section */}
          <div className="lg:w-[50%] pt-20 mainhero2 relative hidden lg:block " data-aos="fade-up">
            <img
              src="/shade.png"
              alt="hero"
              className="object-cover object-center mx-auto lg:w-[600px] -mr-1  img-fluid mainheroimg"
            />
          </div> 

        </div>
      </section>



      <div className='bg-[#0360D9] '>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex justify-center lg:ps-5 container mx-auto  md:flex-row flex-col items-center"
        >

          <div className="flex flex-wrap lg:p-3 pt-10 justify-between mx-auto  gap-10 lg:w-full items-center  lg:py-3 lg:px-5  py-3 px-3 focus:outline-none  text-base  md:mt-0 relative"  >

            <div className='flex flex-wrap gap-10 text-center  text-white  justify-center items-center'>
              <div className=' lg:border-e lg:border-white pe-10'>
                <p className='lg:text-4xl text-2xl font-bold'>24/7</p>
                <span>Online Support</span>
              </div>
              <div className=' lg:border-e lg:border-white pe-10'>
                <p className='lg:text-4xl text-2xl font-bold'>100+</p>
                <span>Doctors</span>
              </div>
              <div className=' '>
                <p className='lg:text-4xl text-2xl font-bold'>1M+</p>
                <span>Active Patients</span>
              </div>
            </div>

            <div className='absolute hidden lg:block md:block  right-0 lg:me-20 md:-me-25 bottom-0'>
              <img src="/doc.png" alt="doctor img" className='img-fluid docimg' />
            </div>

          </div>
        </motion.div>
      </div>





    </div>
  );
};

export default Hero;

