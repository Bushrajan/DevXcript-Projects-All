 import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Marketing = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const cards = [
    {
      image: '/image18.png',
      title: 'Creating Streamlined Safeguarding Processes with OneRen',
    },
    {
      image: '/image19.png',
      title: 'What are your safeguarding responsibilities and how can you manage them?',
    },
    {
      image: '/image20.png',
      title: 'Revamping the Membership Model with Triathlon Australia',
    },
  ];

  return (
    <div>
      {/* Heading Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-4 mt-5"
      >
        <h1 className="title-font sm:text-4xl font-medium text-gray-600 leading-20">
          <span className="text-gray-600 text-4xl">Caring is the new marketing</span>
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
          The Nextcent blog is the best place to read about the latest membership insights, trends and more...
        </p>
      </motion.div>

      {/* Cards Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-wrap gap-6 justify-center mb-2">
            {cards.map((card, index) => (
              <div
                key={index}
                className="relative lg:w-[350px] w-full h-[200px] rounded-xl mb-15 shadow-md"
                style={{
                  backgroundImage: `url('${card.image}')`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                {/* Overlay Card */}
                <div className="absolute top-[40%] left-1/2 shadow transform -translate-x-1/2 bg-white bg-opacity-80 px-6 pt-8 pb-4 w-[270px] rounded-lg text-center">
                  <p className="text-gray-800 text-base font-semibold mb-3 leading-relaxed">
                    {card.title}
                  </p>
                  <a
                    href="#"
                    className="text-green-600 inline-flex items-center font-medium hover:underline"
                  >
                    Readmore
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Marketing;