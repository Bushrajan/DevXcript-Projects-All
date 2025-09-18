import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const EntireComunity = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const members = [
    {
      h2: 'Membership Organisations',
      para: 'Our membership management software provides full automation of membership renewals and payments',
      img: '/Icon.png',
    },
    {
      h2: 'National Associations',
      para: 'Our membership management software provides full automation of membership renewals and payments',
      img: '/Icon-1.png',
    },
    {
      h2: 'Clubs And Groups',
      para: 'Our membership management software provides full automation of membership renewals and payments',
      img: '/Icon-4.png',
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        {/* Top Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-4 mt-5"
        >
          <h1 className="title-font sm:text-4xl font-medium text-gray-600 mb-4">
            <span className="text-gray-600 text-4xl">
              Manage your entire community <br /> in a single system
            </span>
          </h1>
          <p className="text-base leading-relaxed mb-16 xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            Who is Nextcent suitable for?
          </p>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-wrap -m-4">
          {members.map((member, index) => (
            <div
              key={index}
              className="lg:p-4 p-2 rounded-2xl mb-15 shadow-lg lg:w-[400px] mx-auto md:w-1/2"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="h-full lg:w-[250px] w-full flex flex-col items-center mx-auto justify-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg img-fluid mb-4"
                  src={member.img}
                />
                <div className="w-full">
                  <h2 className="title-font font-bold text-lg lg:text-3xl text-gray-600">
                    {member.h2}
                  </h2>
                  <h3 className="text-gray-500 mb-3">{member.para}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-10 pt-0 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center">
            {/* Image with AOS */}
            <img
              alt="ecommerce"
              className="img-fluid object-cover object-center rounded"
              src="/mobile-login/rafiki.png"
              data-aos="fade-up"
            />

            {/* Text with Framer Motion */}
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
                    The unseen of spending three years at Pixelgrade
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-base leading-relaxed mb-8 mx-auto text-gray-500"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</motion.p>

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
    </section>
  );
};

export default EntireComunity;