import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="p-8 bg-gray-100 md:w-1/2 md:ml-[100px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold">About Me</h2>
      <p className="mt-4 text-gray-700">
        I'm a passionate developer with a love for creating dynamic and
        visually stunning web experiences.
      </p>
    </motion.div>
  );
};

export default About;
