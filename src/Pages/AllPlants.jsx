import { Helmet } from "@dr.pogodin/react-helmet";
import React, { useState } from "react";
import { IoWater } from "react-icons/io5";
import { Link, useLoaderData } from "react-router";
import { delay, motion } from "framer-motion";

const AllPlants = () => {
  const initialPlants = useLoaderData();

  const [plants, setPlants] = useState(initialPlants);

  const handleSort = (e) => {
    const selected = e.target.value;

    fetch(`https://planto-beta.vercel.app/plants?sort=${selected}`)
      .then((res) => res.json())
      .then((data) => setPlants(data));
  };

  const tableVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delay:0.8
      },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        
      },
    },
  };

  const theadVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const thVariants = {
    hidden: { opacity: 0, x: -30 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      className="py-25 bg-top bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1509423350716-97f9360b4e09?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <Helmet>
        <title>Planto | All Plants</title>
      </Helmet>
      <div className="container mx-auto px-4 py-6">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[#6A8C25] text-3xl md:text-5xl font-bold mb-5 md:mb-1 text-center md:text-start"
        >
          All Plants
        </motion.h1>
        <div className="w-full flex justify-center md:justify-end mb-5">
          <motion.select
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            onChange={handleSort}
            name="sort"
            className="inline-block p-2 border-0 outline-0 bg-[#6A8C25] text-white rounded-sm"
            defaultValue={"sort"}
          >
            <option
              className="bg-[#6A8C25] text-white p-1"
              value="sort"
              disabled
            >
              Sort By Care Lavel
            </option>
            <option className="bg-[#6A8C25] text-white p-1" value="easy">
              Easy
            </option>
            <option className="bg-[#6A8C25] text-white p-1" value="moderate">
              Moderate
            </option>
            <option className="bg-[#6A8C25] text-white p-1" value="difficult">
              Difficult
            </option>
          </motion.select>
        </div>
        <div className="overflow-x-auto rounded-lg shadow bg-[#ffffff50] dark:bg-[#00000050] backdrop-blur-lg">
          <table className="min-w-full text-sm text-left px-5">
            <thead className="bg-[#6a8c2523] dark:bg-[#6A8C25] text-[#6A8C25] dark:text-white uppercase text-xs font-semibold">
              <motion.tr
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={theadVariants}
              >
                 <motion.th variants={thVariants}>
                  <span className="py-5 px-3 inline-block text-base md:text-lg">
                    SL
                  </span>
                </motion.th>
                 <motion.th variants={thVariants}>
                  <span className="py-5 px-3 inline-block text-base md:text-lg">
                    Image
                  </span>
                </motion.th>
                 <motion.th variants={thVariants}>
                  <span className="py-5 px-3 inline-block text-base md:text-lg">
                    Name
                  </span>
                </motion.th>
                 <motion.th variants={thVariants}>
                  <span className="py-5 px-3 inline-block text-base md:text-lg">
                    Category
                  </span>
                </motion.th>
                 <motion.th variants={thVariants}>
                  <span className="py-5 px-3 inline-block text-base md:text-lg">
                    Care Lavel
                  </span>
                </motion.th>
                 <motion.th variants={thVariants}>
                  <p className="py-5 px-3 text-base md:text-lg flex items-center gap-2">
                    <IoWater size={"24"} />
                    <span>Freq.</span>
                  </p>
                </motion.th>
                 <motion.th variants={thVariants}>
                  <span className="py-5 px-3 inline-block text-base md:text-lg">
                    Action
                  </span>
                </motion.th>
              </motion.tr>
            </thead>
            <motion.tbody
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={tableVariants}
              className="divide-y divide-gray-50"
            >
              {plants.map((plant, index) => (
                <motion.tr
                  key={index}
                  variants={rowVariants}
                  className="hover:bg-[#ffffff90] backdrop-blur-xl"
                >
                  <td>
                    <span className="pl-5 inline-block font-bold">
                      {index + 1}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <img
                      src={plant["plant-image"]}
                      alt={plant.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="px-4 py-3 font-medium text-base md:text-lg text-gray-800 dark:text-gray-100">
                    {plant.name}
                  </td>
                  <td className="px-4 py-3 capitalize">{plant.category}</td>
                  <td className="px-4 py-3 capitalize">
                    {plant["care-level"]}
                  </td>
                  <td className="px-4 py-3 ">
                    {plant["watering-frequency"]} Days
                  </td>
                  <td className="px-4 py-3">
                    <Link
                      to={`/details/${plant._id}`}
                      className="inline-block bg-[#6A8C25] text-white px-3 py-2 rounded hover:bg-[#204e36] transition-all duration-300 ease-in-out"
                    >
                      View Details
                    </Link>
                  </td>
                </motion.tr>
              ))}
            </motion.tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AllPlants;
