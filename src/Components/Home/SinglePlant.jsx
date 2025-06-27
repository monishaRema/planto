import React from "react";
import { FaHandHoldingWater } from "react-icons/fa";
import { GiWateringCan } from "react-icons/gi";
import { Link } from "react-router";
import { motion } from "framer-motion";
const SinglePlant = ({ plant }) => {

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
    <motion.div variants={cardVariants} className="bg-white dark:bg-[#6A8C25] shadow-lg rounded-lg overflow-hidden group text-center md:text-start flex flex-col justify-between">
      <div className="img-box w-full h-64 overflow-hidden">
        <img
          src={plant["plant-image"]}
          alt=""
          className="size-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3"
        />
      </div>
      <div className="content-box p-5">
        <h2 className="text-[#6A8C25] dark:text-white text-xl lg:text-2xl font-semibold mb-2">
          {plant.name}
        </h2>
        <p className="text-gray-500 dark:text-gray-200 text-sm md:text-base mb-2">
          {plant.description.slice(0, 90)}
          {plant.description.length > 90 && "..."}
        </p>
        <div className="plant-meta flex justify-between items-center mt-8 mb-5">
          <p className="flex items-center gap-2">
            <span className="size-8 rounded-full bg-[#6A8C25] dark:bg-white flex items-center justify-center text-white dark:text-[#6A8C25]">
              <FaHandHoldingWater size={18} />
            </span>
            <span className="text-base md:text-lg text-gray-500 dark:text-gray-200 capitalize">
              {plant["care-level"]}
            </span>
          </p>

          <p className="flex items-center gap-2 mb-3">
            <span className="size-8 rounded-full bg-[#6A8C25] dark:bg-white flex items-center justify-center text-white dark:text-[#6A8C25]">
              <GiWateringCan size={22} />
            </span>

            <span className="text-base md:text-lg text-gray-500 dark:text-gray-200">
              {plant["watering-frequency"]} days
            </span>
          </p>
        </div>
        <Link
        to={`/details/${plant._id}`}
        className="w-full block bg-[#6A8C25] dark:bg-green-950 dark:text-white text-white  hover:bg-yellow-600 hover:text-white text-center font-semibold py-3 px-4 rounded-md transition duration-300 ease-in-out">
        View Plant
        </Link>
      </div>
    </motion.div>
  );
};

export default SinglePlant;
