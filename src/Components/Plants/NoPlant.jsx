import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
const NoPlant = () => {
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
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="text-center"
    >
      <motion.h3
        key={0}
        variants={cardVariants}
        className="text-center text-[#6A8C25] dark:text-white text-3xl md:text-5xl mb-2"
      >
        No Plants Found
      </motion.h3>
      <motion.p
        key={1}
        variants={cardVariants}
        className="max-w-[550px] mx-auto text-center text-gray-500 dark:text-gray-200 text-base md:text-lg mb-10"
      >
        It seems like you haven't added any plants yet. Start your plant journey
        by adding your first plant!
      </motion.p>
      <motion.button key={2} variants={cardVariants}>
        <Link
          to="/add-plant"
          className="bg-[#6A8C25] text-white hover:bg-yellow-600 dark:bg-white dark:text-[#6A8C25] dark:hover:text-white text-center font-semibold py-3 px-6 rounded-md transition duration-300 ease-in-out"
        >
          Add Your First Plant
        </Link>
      </motion.button>
    </motion.div>
  );
};

export default NoPlant;
