"use client";
import { useState } from "react";
import { CgClose, CgMenu } from "react-icons/cg";
import { AnimatePresence, motion } from "framer-motion";

const navVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
    }
  }
}

export default function Navbar(){
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="xl:hidden flex flex-col gap-8 items-end top-full">
      <motion.button onClick={toggleMenu}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9, rotate: 360 }}
        transition={{ duration: 0.2 }}
        className="inline-flex items-center justify-center p-2 rounded-md transition-transform duration-300"
      >
        {isOpen ? 
          <CgClose className="text-[32px] hover:text-blue transform rotate-90 transition-transform duration-300" /> :
          <CgMenu className="text-[32px] hover:text-blue transition-transform duration-300" /> 
        }
      </motion.button>
      <AnimatePresence>
        { isOpen &&
          <motion.div className="xl:hidden w-[80%] sm:w-[85%] md:w-[90%] absolute top-14"
            variants={navVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="flex flex-col rounded-xl gap-8 bg-nav duration-200 -translate-x-2 shadow-xl p-8 text-sm text-gray">
              <a href="#about"
                onClick={toggleMenu}
                className="hover:text-blue transition duration-200 hover:cursor-pointer hover:underline hover:underline-offset-8">About</a>
              <a href="#services"
                onClick={toggleMenu}
                className="hover:text-blue transition duration-200 hover:cursor-pointer hover:underline hover:underline-offset-8">Services</a>
              <a href="#experiences"
                onClick={toggleMenu}
                className="hover:text-blue transition duration-200 hover:cursor-pointer hover:underline hover:underline-offset-8">Experiences</a>
              <a href="#projects"
                onClick={toggleMenu}
                className="hover:text-blue transition duration-200 hover:cursor-pointer hover:underline hover:underline-offset-8">Projects</a>
              <a href="#"
                onClick={toggleMenu}
                className="hover:text-blue transition duration-200 hover:cursor-pointer hover:underline hover:underline-offset-8">Contact</a>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </div>
  )
}