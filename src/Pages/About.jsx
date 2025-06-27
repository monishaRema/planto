import React from "react";
import { motion } from "framer-motion";
import { FaSeedling, FaHeart, FaUsers, FaRegSmileWink } from "react-icons/fa";
import CTA from "../Components/Home/CTA";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.22,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeInOut" },
  },
};

const About = () => {
  return (
    <>
    <motion.section
      initial="hidden"
      animate="show"
      variants={containerVariants}
      className="bg-gradient-to-b from-yellow-50 to-green-50 dark:from-[#6A8C25] dark:to-[#204e36] py-25"
    >
      <div className="container mx-auto px-5">
       
        <motion.h1
          variants={cardVariants}
          className="text-center text-[#6A8C25] dark:text-white text-4xl font-bold md:text-5xl mb-4"
        >
          About <span className="text-green-700 dark:text-yellow-300">Planto</span>
        </motion.h1>
        <motion.p
          variants={cardVariants}
          className="max-w-[650px] mx-auto text-center text-gray-500 dark:text-gray-200 text-base md:text-lg mb-12"
        >
          Planto is your next-gen assistant for plant care, built for plant parents who want to grow more than just their collection—track, learn, and thrive, all in one place.
        </motion.p>


        <div className="flex flex-wrap gap-10 md:gap-6 flex-col md:flex-row justify-center text-center max-w-[1100px] mx-auto">
          <motion.div
            variants={cardVariants}
            className="about-card max-w-[340px] mx-auto flex justify-center items-center flex-col gap-3 bg-white/70 dark:bg-white/10 rounded-xl shadow p-7"
          >
            <span className="text-4xl mb-1 text-[#6A8C25] dark:text-white">
              <FaSeedling size="42"/>
            </span>
            <h3 className="text-2xl text-[#6A8C25] dark:text-white font-semibold">
              For Real Plant Lovers
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-200">
              Every feature is built by plant people for plant people. We get the struggle, so Planto is here to keep your greens alive and thriving.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="about-card max-w-[340px] mx-auto flex flex-col justify-center items-center gap-3 bg-white/70 dark:bg-white/10 rounded-xl shadow p-7"
          >
            <span className="text-4xl mb-1 text-green-700 dark:text-white">
              <FaHeart size="42" />
            </span>
            <h3 className="text-2xl text-[#6A8C25] dark:text-white font-semibold">
              Beyond Reminders
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-200">
              Track growth, health, and history—get personalized tips, not just basic notifications. Planto evolves with your plant journey.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="about-card max-w-[340px] mx-auto flex  flex-col justify-center items-center gap-3 bg-white/70 dark:bg-white/10 rounded-xl shadow p-7"
          >
            <span className="text-4xl mb-1 text-[#6A8C25] dark:text-white">
              <FaUsers size={42}/>
            </span>
            <h3 className="text-2xl text-[#6A8C25] dark:text-white font-semibold">
              Community Driven
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-200">
              Share, learn, and grow together. Planto listens to users and updates fast—your feedback shapes our features.
            </p>
          </motion.div>
        </div>

      </div>
    </motion.section>
    <CTA></CTA>
    </>
  );
};

export default About;
