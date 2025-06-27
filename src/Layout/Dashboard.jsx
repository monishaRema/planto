import React, { useState } from "react";
import { Link, Outlet } from "react-router";
import { Slide, ToastContainer } from "react-toastify";
import Sidebar from "../Components/Dashboard/Sidebar";
import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";
import Logo from "../../src/assets/logo.png";
import ToggleTheme from "../Components/Header/ToggleTheme";

const navVarient = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, y: -30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>


      <section className="min-h-screen bg-gradient-to-b from-yellow-50 to-green-50 dark:from-[#6A8C25] dark:to-[#204e36] transition-colors duration-300 ">
        <div className="lg:hidden flex items-center justify-between p-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-2xl text-[#6A8C25] dark:text-yellow-300"
          >
            <FaBars />
          </button>
          <div className="flex justify-between gap-5">
            <Link className="flex items-center gap-1" to="/">
              <motion.img
                variants={navItemVariants}
                className="size-10 md:size-15"
                src={Logo}
                alt=""
              />

              <motion.span
                variants={navItemVariants}
                className="text-xl md:text-2xl font-bold text-[#6A8C25] dark:text-white"
              >
                Planto.
              </motion.span>
            </Link>

            <ToggleTheme></ToggleTheme>
          </div>
        </div>

        <div className="flex relative">
          
          <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

          <main className="flex-1 w-full transition-all duration-300">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Outlet />
            </motion.div>
          </main>
        </div>
      </section>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
    </>
  );
};

export default Dashboard;
