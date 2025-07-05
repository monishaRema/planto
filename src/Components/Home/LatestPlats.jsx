import React, { useEffect, useState } from "react";
import SinglePlant from "./SinglePlant";
import { motion } from "framer-motion";
import { baseUrl } from "../../config";
const LatestPlats = () => {
  const [latestPlants, setLatestPlants] = useState([]);
  useEffect(() => {
    fetch(`${baseUrl}/latest-plants`)
      .then((res) => res.json())
      .then((data) => setLatestPlants(data));
  }, []);

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
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="bg-gradient-to-b from-green-50 via-yellow-50 to-green-50 dark:from-[#204e36] dark:via-[#6A8C25] dark:to-[#204e36] py-25"
    >
      <div className="container mx-auto px-5">
        <motion.h2
          key={0}
          variants={cardVariants}
          className="text-center text-[#6A8C25] dark:text-white text-4xl md:text-5xl font-bold mb-2"
        >
          Latest Plants
        </motion.h2>
        <motion.p
          key={1}
          variants={cardVariants}
          className="max-w-[500px] mx-auto text-center text-gray-500 dark:text-gray-200 text-base md:text-lg"
        >
          Discover the latest additions to our plant collection, handpicked from
          different users.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-15">
          {latestPlants?.length > 0 && latestPlants?.map((plant, index) => (
            <SinglePlant key={index + 2} plant={plant}></SinglePlant>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default LatestPlats;
