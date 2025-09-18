import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sidebarVariants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
    exit: { x: '100%', transition: { duration: 0.3 } },
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-[#E1EEFF]">
         <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto flex flex-wrap lg:px-5 p-2 flex-col md:flex-row items-center justify-between"
        >
          <div className='flex justify-between items-center gap-45'>
            {/* Logo */}
            <motion.a
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex title-font font-medium items-center mb-4 md:mb-0"
              href="#"
            >
              <img src="/logo.png" alt="img" className="img-fluid pt-2" />
            </motion.a>
            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              onClick={() => setIsOpen(true)}
              className="md:hidden text-[#0360D9] text-2xl"
            >
              ☰
            </motion.button>

          </div>
          {/* Desktop Nav */}
          <motion.nav
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
            className="hidden md:flex md:mx-auto gap-2 font-medium flex-wrap items-center text-base justify-center"
          >
            {['Home', 'About', 'Application', 'History'].map((link, i) => (
              <motion.a
                key={i}
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="mr-5 text-[#0D2B46] hover:text-[#0360D9] hover:underline hover:underline-offset-4"
                href="#!"
              >
                {link}
              </motion.a>
            ))}
          </motion.nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center">
            <motion.button
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex text-[#0360D9] border-[#0360D9] lg:px-6 items-center lg:me-3 m-1 border py-2 px-3 focus:outline-none hover:bg-[#ffffff] rounded-4xl text-base"
              style={{
                boxShadow:
                  'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
              }}
            >
              Log in
            </motion.button>
            <motion.button
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex text-white hover:text-[#0360D9] lg:px-6 items-center m-1 bg-[#0360D9] border-0 py-2 px-3 focus:outline-none hover:bg-[#ffffff] rounded-4xl text-base"
              style={{
                boxShadow:
                  'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
              }}
            >
              Sign up
            </motion.button>
          </div>


        </motion.div>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 p-6 flex flex-col gap-4"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={sidebarVariants}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="text-2xl text-[#0360D9] self-end"
              >
                ×
              </button>

              {/* Nav Links */}
              {['Home', 'About', 'Application', 'History'].map((link, i) => (
                <motion.a
                  key={i}
                  whileHover={{ x: 5 }}
                  className="text-[#0D2B46] hover:text-[#0360D9] hover:underline hover:underline-offset-4"
                  href="#!"
                  onClick={handleLinkClick}
                >
                  {link}
                </motion.a>
              ))}

              {/* Auth Buttons */}
              <button
                onClick={handleLinkClick}
                className="text-[#0360D9] border border-[#0360D9] px-4 py-2 rounded-3xl"
              >
                Log in
              </button>
              <button
                onClick={handleLinkClick}
                className="bg-[#0360D9] text-white px-4 py-2 rounded-3xl"
              >
                Sign up
              </button>
            </motion.div>
          )}
        </AnimatePresence> 
    </div>
  );
};

export default Header;