import { motion } from "framer-motion";
import { use } from "react";
import { AuthContext } from "../../Contex/AuthContex";
import { Link } from "react-router";

const ctaVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const CTA = () => {
    const {user} = use(AuthContext)
return (
  <motion.section
    initial="hidden"
    animate="show"
    variants={ctaVariants}
    className="bg-gradient-to-b from-yellow-50 to-green-50 dark:from-[#6A8C25] dark:to-[#204e36] py-28"
  >
    <div className="container mx-auto px-5 flex flex-col items-center">
      <motion.h2
        variants={ctaVariants}
        className="text-3xl md:text-4xl font-bold text-[#6A8C25] dark:text-white text-center mb-4"
      >
        Ready to help your plants thrive?
      </motion.h2>
      <motion.p
        variants={ctaVariants}
        className="text-gray-600 dark:text-gray-200 text-lg text-center max-w-xl mb-7"
      >
        Start tracking your plant care journey with Planto. It’s free, easy, and your plants will thank you.
      </motion.p>
      <motion.div
        variants={ctaVariants}
      >
        <Link
        to={user ? "/": "/register"}
         className="rounded inline-block px-2 md:px-5 py-1 md:py-2  text-base md:text-lg border-0 bg-[#6A8C25]  text-white dark:text-[#6A8C25]  dark:bg-white font-semibold hover:scale-105">
         Get Started
        </Link>
       
      </motion.div>
    </div>
  </motion.section>
);
}

export default CTA;
