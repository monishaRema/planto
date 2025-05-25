import React from "react";
import { motion } from "framer-motion";

const WhyTrack = () => {

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
    
    className="bg-gradient-to-t from-yellow-50 to-green-50 dark:from-[#6A8C25] dark:to-[#204e36] py-25">
      <div className="container mx-auto px-5 ">
        <motion.h2 
        key={0}
        variants={cardVariants}
        className="text-center text-[#6A8C25] dark:text-white text-4xl font-bold md:text-5xl mb-2">
          Why track your plant
        </motion.h2>
        <motion.p
            key={1}
        variants={cardVariants}
        className="max-w-[650px] mx-auto text-center text-gray-500 dark:text-gray-200 text-base md:text-lg mb-15">
            Discover the key benefits that make plant tracking an essential habit for every successful plant parent.
           </motion.p>
          <div className="flex flex-wrap gap-20 md:gap-10 flex-col md:flex-row justify-center text-center mb-20 max-w-[1000px] mx-auto">
          <motion.div 
          key={2}
          variants={cardVariants} className="reason-card max-w-[400px] mx-auto flex flex-col gap-4">
                <span className="text-6xl mb-2">🌱</span>
                <h3 className="text-2xl md:text-3xl text-[#6A8C25] dark:text-white">Monitor Growth Progress</h3>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-200">Keep detailed records of your plant's development stages, from seedling to maturity. Track details.</p>
            </motion.div>
            
            <motion.div 
          key={3}
          variants={cardVariants} className="reason-card max-w-[400px] mx-auto flex flex-col gap-4">
                <span className="text-6xl mb-2">🩺</span>
                <h3 className="text-2xl md:text-3xl text-[#6A8C25] dark:text-white">Maintain Plant Health</h3>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-200">Early detection of problems can save your plants. By tracking symptoms, changes in appearance, and conditions.</p>
            </motion.div>

          </div>

          <div className="flex flex-wrap gap-20 md:gap-10 flex-col md:flex-row justify-center text-center">
    <motion.div 
          key={4}
          variants={cardVariants} className="reason-card max-w-[400px] mx-auto flex flex-col gap-4">
                <span className="text-6xl mb-2">📅</span>
                <h3 className="text-2xl md:text-3xl text-[#6A8C25] dark:text-white">Perfect Care Scheduling</h3>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-200">Never forget watering, fertilizing, or repotting again. Track care activities to establish optimal schedules.</p>
            </motion.div>
            
               <motion.div 
          key={5}
          variants={cardVariants} className="reason-card max-w-[400px] mx-auto flex flex-col gap-4">
                <span className="text-6xl mb-2">📊</span>
                <h3 className="text-2xl md:text-3xl text-[#6A8C25] dark:text-white">Document details</h3>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-200">Learn from both triumphs and setbacks by maintaining detailed records. Track what works best for each plant species.</p>
            </motion.div>
            
               <motion.div 
          key={6}
          variants={cardVariants} className="reason-card max-w-[400px] mx-auto flex flex-col gap-4">
                <span className="text-6xl mb-2">🧠</span>
                <h3 className="text-2xl md:text-3xl text-[#6A8C25] dark:text-white">Be a Plant Parent</h3>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-200">Transform from beginner to expert by analyzing patterns in your plant care data. Understand seasonal changes.</p>
            </motion.div>
          </div>

           <div className="flex flex-wrap gap-20 md:gap-10 flex-col md:flex-row justify-center text-center mt-20 max-w-[1000px] mx-auto">
    <motion.div 
          key={7}
          variants={cardVariants} className="reason-card max-w-[400px] mx-auto flex flex-col gap-4">
                <span className="text-6xl mb-2">🗂️</span>
                <h3 className="text-2xl md:text-3xl text-[#6A8C25] dark:text-white">Organize Your Collections</h3>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-200">Keep your growing plant family organized with detailed records of each specimen. Track purchase dates, origins, care requirements.</p>
            </motion.div>
            
            <motion.div 
          key={8}
          variants={cardVariants} className="reason-card max-w-[400px] mx-auto flex flex-col gap-4">
                <span className="text-6xl mb-2">💰</span>
                <h3 className="text-2xl md:text-3xl text-[#6A8C25] dark:text-white">Save Money & Resources</h3>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-200">Avoid costly mistakes by tracking what works and what doesn't. Prevent plant deaths from overwatering or neglect optimize fertilizer.</p>
            </motion.div>

          </div>
      

      
            
           
       
      </div>
    </motion.section>
  );
};

export default WhyTrack;
