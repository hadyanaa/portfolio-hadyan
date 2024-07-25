"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PhotoHeader(){
  return (
    <div className="flex justify-center w-full h-full mx-auto relative">
      <motion.div
        initial={{ opacity: 0}}
        animate={{
          opacity: 1,
          transition: {
            delay: 1,
            duration: 0.4,
            ease: 'easeIn',
          }
        }}
      >
        <div className="w-[250px] h-[250px] xl:w-[400px] xl:h-[400px] mix-blend-lighten absolute pb-8">
          <Image
            src="/images/hadyan.png"
            priority
            fill
            quality={100}
            alt=""
            className="object-contain rounded-full"
          />
        </div>

        {/* circle */}
        <motion.svg
          className="w-[252px] h-[252px] xl:w-[406px] xl:h-[406px]"
          fill="transparent"
          viewBox="0 0 406 406"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle cx="203" cy="203" r="200" stroke="#38BDF8" strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
              transition: {
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  )
}