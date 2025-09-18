import { motion } from 'framer-motion';

const Prefooter = () => {
  return (
    <div className="text-center mt-10">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="title-font text-4xl lg:text-6xl text-center mb-4 font-bold text-gray-900 lg:leading-20"
      >
        <span className="text-gray-700">Pellentesque suscipit</span>
        <br className="hidden lg:inline-block" />
        <span className="ps-2">fringilla libero eu.</span>
      </motion.h1>

      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
        className="inline-flex text-white items-center bg-[#4CAF4F] border-0 py-3 px-3 focus:outline-none hover:bg-[#4CAF4F] rounded text-base mt-4 md:mt-0"
      >
        Get a Demo
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </motion.button>
    </div>
  );
};

export default Prefooter;