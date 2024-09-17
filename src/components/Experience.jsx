import React from "react";
import { motion } from "framer-motion";

function Experience() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h1>
      <div className="text-center">
        <div className="mb-2 text-sm text-neutral-400">2022-2023</div>
        <div className="w-full max-w-xl lg:w-3/4 mx-auto">
          <h6 className="mb-2 font-semibold">
            I am working as a software developer
            <span className="text-sm text-purple-100"> at Scult Software</span>
          </h6>
          <p className="mb-4 text-neutral-400">
            {" "}
            First and foremost, I am a computer guy since a kid. At the early
            age of Engineering, I faced challenges but gradually I understand
            how beautiful the execution of code looks like. I have been obsessed
            with the idea of using software to solve practical
          </p>
          <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500">
            HTML
          </span>
          <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500">
            CSS
          </span>
          <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500">
            JS
          </span>
          <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500">
            React
          </span>
          <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500">
            MongoDB
          </span>
        </div>
      </div>
    </div>
  );
}

export default Experience;
