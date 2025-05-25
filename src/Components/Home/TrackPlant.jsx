import React from "react";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaArrowRight, FaCalendar, FaHeart } from "react-icons/fa";

import { IoWater } from "react-icons/io5";
import { Link } from "react-router";
import { motion } from "framer-motion";

const TrackPlant = () => {

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
};
  return (
    <motion.section
        initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    
    className="py-25 bg-gradient-to-t from-green-50 via-yellow-50 to-lime-50 dark:from-[#204e36] dark:via-lime-800 dark:to-[#6A8C25]">
      <div className="container mx-auto px-5">
        <motion.h2
         key={0}
          variants={cardVariants}
        className="text-center text-[#6A8C25] dark:text-white text-4xl font-bold md:text-5xl mb-2">
          Plant Care Journey
        </motion.h2>
        <motion.p
         key={1}
          variants={cardVariants}
        className="max-w-[650px] mx-auto text-center text-gray-500 dark:text-gray-200 text-base md:text-lg">
          Our comprehensive tools help you monitor your plants' health, set care
          reminders, and track growth over time for a thriving indoor garden.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-15 text-center md:text-start">
          <motion.div 
          key={2}
          variants={cardVariants}
          className="bg-lime-50 dark:bg-[#204e36] shadow-lg rounded-lg p-8">
            <div className="size-20 mx-auto md:mx-0 rounded-full bg-[#6A8C25] text-white flex items-center justify-center ">
              <IoWater size={42} />
            </div>
            <h2 className="text-[#6A8C25] dark:text-white text-xl md:text-2xl font-semibold mt-10">
              Watering Schedule
            </h2>
            <p className="text-gray-500 dark:text-gray-300 text-base md:text-lg mt-3 mb-8">
              Track watering dates and receive reminders customized to each
              plant's specific needs and your local climate.
            </p>

            <div className="inline-block">
              <Link
                className="bg-[#6A8C25] text-white hover:bg-yellow-500 font-semibold py-2 shadow-sm px-4 rounded-md transition duration-300 ease-in-out flex items-center gap-2"
                to="/login"
              >
                <span>Learn More </span>
                <FaArrowRight size={15} />
              </Link>
            </div>
          </motion.div>
           <motion.div
          key={3}
          variants={cardVariants}
           className="bg-lime-50 dark:bg-[#204e36] shadow-lg rounded-lg p-8">
            <div className="size-20 mx-auto md:mx-0 rounded-full bg-[#6A8C25] text-white flex items-center justify-center ">
              <BsGraphUpArrow size={32} />
            </div>
            <h2 className="text-[#6A8C25] dark:text-white text-xl md:text-2xl font-semibold mt-10">
              Growth Tracking
            </h2>
            <p className="text-gray-500 dark:text-gray-300 text-base md:text-lg mt-3 mb-8">
             Document your plant's growth journey with photos and measurements to visualize progress over time.
            </p>

            <div className="inline-block">
              <Link
                className="bg-[#6A8C25] text-white hover:bg-yellow-500 font-semibold py-2 shadow-sm px-4 rounded-md transition duration-300 ease-in-out flex items-center gap-2"
                to="/login"
              >
                <span>Learn More </span>
                <FaArrowRight size={15} />
              </Link>
            </div>
          </motion.div>
           <motion.div
             key={4}
          variants={cardVariants}
           className="bg-lime-50 dark:bg-[#204e36] shadow-lg rounded-lg p-8">
            <div className="size-20 mx-auto md:mx-0 rounded-full bg-[#6A8C25] text-white flex items-center justify-center ">
              <FaHeart size={32} />
            </div>
            <h2 className="text-[#6A8C25] dark:text-white text-xl md:text-2xl font-semibold mt-10">
              Health Monitor

            </h2>
            <p className="text-gray-500 dark:text-gray-300 text-base md:text-lg mt-3 mb-8">
              Track plant health indicators, identify issues early, and get personalized care recommendations.

.
            </p>

            <div className="inline-block">
              <Link
                className="bg-[#6A8C25] text-white hover:bg-yellow-500 font-semibold py-2 shadow-sm px-4 rounded-md transition duration-300 ease-in-out flex items-center gap-2"
                to="/login"
              >
                <span>Learn More </span>
                <FaArrowRight size={15} />
              </Link>
            </div>
          </motion.div>
           <motion.div
             key={5}
          variants={cardVariants}
           className="bg-lime-50 dark:bg-[#204e36] shadow-lg rounded-lg p-8">
            <div className="size-20 mx-auto md:mx-0 rounded-full bg-[#6A8C25] text-white flex items-center justify-center ">
              <FaCalendar size={32} />
            </div>
            <h2 className="text-[#6A8C25] dark:text-white text-xl md:text-2xl font-semibold mt-10">
             Care Calendar

            </h2>
            <p className="text-gray-500 dark:text-gray-300 text-base md:text-lg mt-3 mb-8">
             Never miss watering, fertilizing, or repotting again. Set custom reminders for each plant's unique needs.
            </p>

            <div className="inline-block">
              <Link
                className="bg-[#6A8C25] text-white hover:bg-yellow-500 font-semibold py-2 shadow-sm px-4 rounded-md transition duration-300 ease-in-out flex items-center gap-2"
                to="/login"
              >
                <span>Learn More </span>
                <FaArrowRight size={15} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default TrackPlant;
