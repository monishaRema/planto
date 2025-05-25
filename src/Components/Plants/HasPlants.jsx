import React from "react";
import Plant from "./Plant";
import { motion } from "framer-motion";
const HasPlants = ({ plants, setPlant }) => {
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
    >
      <motion.h2
        key={0}
        variants={cardVariants}
        className="text-center text-[#6A8C25] dark:text-white text-3xl md:text-5xl mb-2"
      >
        My Plants
      </motion.h2>
      <motion.p
        key={1}
        variants={cardVariants}
        className="max-w-[750px] mx-auto text-center text-gray-500 dark:text-gray-200 text-base md:text-lg"
      >
        Welcome to your personal plant sanctuary! Here you can view all your
        beloved plants, track their care schedules, and monitor their health
        status at a glance.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-15">
        {plants?.map((plant) => (
          <Plant
            key={plant._id}
            plant={plant}
            plants={plants}
            setPlant={setPlant}
          ></Plant>
        ))}
      </div>
    </motion.div>
  );
};

export default HasPlants;
