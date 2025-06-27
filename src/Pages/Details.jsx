import React, { use } from "react";
import { Link, Navigate } from "react-router";
import { useLoaderData } from "react-router";
import { GiHolyWater, GiPlantWatering, GiWateringCan } from "react-icons/gi";
import { TbRibbonHealth } from "react-icons/tb";
import { FaHandHoldingWater, FaRegUser, FaArrowRight } from "react-icons/fa";
import { format } from "date-fns";
import { Helmet } from "@dr.pogodin/react-helmet";
import { motion } from "framer-motion";
import { AuthContext } from "../Contex/AuthContex";
const Details = () => {
const {user} = use(AuthContext)

    const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
   hidden: { opacity: 0, y: -30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const plant = useLoaderData();

  if(plant.length >= 0){
    return <Navigate to="/all-plants"></Navigate>
  }
  return (
    <motion.section
    
    initial="hidden"
    animate="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants} 
    className="bg-gradient-to-b from-green-50 to-yellow-50 dark:to-[#6A8C25] dark:from-[#204e36] py-25  md:py-32 min-h-screen">
           <Helmet>
      <title>Planto | Plant Details
      </title>
    </Helmet>
      <div className="container mx-auto px-5">
        <div className="flex flex-col md:flex-row gap-10 items-center text-center md:text-start">
          <div className="w-full md:w-1/2">
            <motion.img
            variants={cardVariants}
              src={plant["plant-image"]}
              alt={plant.name}
              className="w-full h-[300px] md:h-[600px] object-cover "
            />
          </div>
          <div className="w-full md:w-1/2">
            <motion.p
             variants={cardVariants}
            className="text-sm md:text-base text-[#204e36] dark:text-gray-100 mb-2 font-bold uppercase tracking-[8px] ">
              {plant.category}
            </motion.p>
            <motion.h1 
             variants={cardVariants} className="text-2xl md:text-4xl font-bold mb-4 text-[#6A8C25] dark:text-gray-50">
              {plant.name}
            </motion.h1>
            <motion.p  variants={cardVariants} className="text-base md:text-lg text-gray-500 dark:text-gray-200 mb-2">
              Description: {plant.description}
            </motion.p>

            <div className="meta-data flex flex-wrap justify-center md:justify-start gap-4 my-8">
              <motion.p  variants={cardVariants} className="flex items-center gap-2">
                <span className="size-8 rounded-full bg-[#6A8C25] flex items-center justify-center text-white">
                  <FaRegUser size={18} />
                </span>
                <span className="text-base md:text-lg text-gray-500 dark:text-gray-200">{plant.userName}</span>
              </motion.p>

              <motion.p  variants={cardVariants} className="flex items-center gap-2">
                <span className="size-8 rounded-full bg-[#6A8C25] flex items-center justify-center text-white">
                  <FaHandHoldingWater size={18} />
                </span>
                <span className="text-base md:text-lg text-gray-500 dark:text-gray-200">
                  {plant["care-level"]}
                </span>
              </motion.p>

              <motion.p  variants={cardVariants} className="flex items-center gap-2">
                <span className="size-8 rounded-full bg-[#6A8C25] flex items-center justify-center text-white">
                  <TbRibbonHealth size={18} />
                </span>
                <span className="text-base md:text-lg text-gray-500 dark:text-gray-200">
                  {plant["health-status"]}
                </span>
              </motion.p>
            </div>
            <motion.p  variants={cardVariants} className="flex items-center gap-2 mb-3 justify-center md:justify-start">
              <span className="size-8 rounded-full bg-[#6A8C25] flex items-center justify-center text-white">
                <GiHolyWater size={22} />
              </span>

              <span className="text-base md:text-lg text-gray-500 dark:text-gray-200">
                Watering Fequency : {plant["watering-frequency"]} days
              </span>
            </motion.p>

            <motion.p  variants={cardVariants} className="flex items-center gap-2 mb-3 justify-center md:justify-start">
              <span className="size-8 rounded-full bg-[#6A8C25] flex items-center justify-center text-white">
                <GiWateringCan size={22} />
              </span>
              <span className="text-base md:text-lg text-gray-500 dark:text-gray-200">
                Last Watered :{" "}
                {format(new Date(plant["last-watered"]), "dd, MMM-yy")}
              </span>
            </motion.p>

            <motion.p  variants={cardVariants} className="flex items-center gap-2 mb-8 justify-center md:justify-start">
              <span className="size-8 rounded-full bg-[#6A8C25] flex items-center justify-center text-white">
                <GiPlantWatering size={18} />
              </span>
              <span className="text-base md:text-lg text-gray-500 dark:text-gray-200">
                Next Watering :{" "}
                {format(new Date(plant["next-watering"]), "dd, MMM-yy")}
              </span>
            </motion.p>

            <motion.span  variants={cardVariants} className="inline-block">
              <Link
                to={user ? "/dashboard/all-plants" : "/all-plants"}

                className="flex items-center gap-2  bg-[#6A8C25] dark:bg-white dark:hover:bg-yellow-500 dark:hover:text-white dark:text-[#6A8C25] text-white px-8 py-3 rounded-md hover:bg-[#204e36] transition duration-300 ease-in-out"
              >
                <span className="font-semibold"> All Plants</span> <FaArrowRight></FaArrowRight>
              </Link>
            </motion.span>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Details;
