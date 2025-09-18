import { motion } from 'framer-motion';

const Header = () => {
  return (
    <div className="max-xl bg-white">
      <header className="body-font">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
        >
          {/* Logo + Brand */}
          <motion.a
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex title-font font-medium items-center mb-4 md:mb-0"
            href="#"
          >
            <img src="/toplogo.png" alt="img" className="img-fluid" />
            <span className="text-2xl font-bold">Nextcent</span>
          </motion.a>

          {/* Nav Links */}
          <motion.nav
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="md:ml-auto gap-2 flex font-medium flex-wrap items-center text-base justify-center"
          >
            {['Home', 'Features', 'Community', 'Blog', 'Pricing'].map((link, i) => (
              <motion.a
                key={i}
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="mr-5 text-gray-900 hover:text-[#4CAF4F]"
                href="#!"
              >
                {link}
              </motion.a>
            ))}
          </motion.nav>

          {/* Button */}
          <motion.button
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex text-white items-center bg-[#4CAF4F] border-0 py-2 px-3 focus:outline-none hover:bg-[#4CAF4F] rounded text-base mt-4 md:mt-0"
          >
            Register Now
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
        </motion.div>
      </header>
    </div>
  );
};

export default Header;