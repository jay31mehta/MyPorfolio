import React from "react";
import p from "../assets/kevinRushProfile.png";
import { delay, motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              //initial={{ x: 100, opacity: 0 }}
              //animate={{ x: 0, opacity: 1 }}
              //transition={{ duration: 0.6, delay: 1 }}
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tighter lg:mt-16 lg-text-8xl"
            >
              Jay
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl  tracking-tighter text-transparent"
            >
              Front-end Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6  font-light tracking-tighter"
            >
              First and foremost, I am a computer guy since a kid. At the early
              age of Engineering, I faced challenges but gradually I understand
              how beautiful the execution of code looks like. I have been
              obsessed with the idea of using software to solve practical
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={p}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
