import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router";
import { motion } from "framer-motion";
const Banner = () => {
  const slides = [
    {
      id: 1,
      title: "Welcome to Planto",
      description:
        "Your personal assistant for tracking and caring for all your plants. Keep your green friends happy and healthy with our easy-to-use plant care management system.",
      image:
        "https://i.ibb.co/5x9nYX2N/calathea-ornata-plant-grey-pot-vibrant-indoor-plant.png",
      cta: "Get Started",
    },
    {
      id: 2,
      title: "Track Plant Health",
      description:
        "Set personalized reminders, track watering schedules, and maintain detailed care histories for each plant. Our smart notifications ensure your plants get the attention they deserve.",
      image:
        "https://file.aiquickdraw.com/imgcompressed/img/compressed_b6621e0d2357a0439b89cfb56670e220.webp",
      cta: "Start Tracking",
    },
    {
      id: 3,
      title: "Build Your Digital Garden",
      description:
        "Add unlimited plants to your collection with detailed care profiles, growth tracking, and species-specific guidance. Watch your indoor jungle flourish with expert care tips.",
      image:
        "https://file.aiquickdraw.com/imgcompressed/img/compressed_4151e74fc47c35d36b92075391564c42.webp",
      cta: "Add Plants",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    appendDots: (dots) => (
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 ">
        <ul className="flex mt-3 justify-center space-x-1">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 rounded-full bg-[#6A8C25] dark:bg-white bg-opacity-50"></div>
    ),
    responsive: [
      {
        breakpoint: 1024,
      },
    ],
  };

  const sliderVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,

      },
    },
  };

  const sliderElementVariants = {
    hidden: { opacity: 0, y: -40,},
    show: {
      opacity: 1,
    y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="bg-gradient-to-r from-yellow-50 dark:from-green-900 via-lime-50 dark:via-lime-700 to-green-50 dark:to-[#204e36] overflow-x-hidden py-20">
      <div className="container mx-auto px-5">
        <Slider {...settings}>
          {slides.map((slide) => (
            <motion.div key={slide.id}
               initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.5 }}
                    variants={sliderVariants}
            
            className="relative">
              <div
               
              className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
                <div className="w-full md:w-1/2">
                  <div
                
                    className="max-w-[600px] mx-auto md:mx-0 text-center md:text-left md:pl-5"
                  >
                    <motion.h2
                    key={0}
                    variants={sliderElementVariants}
                    className="text-3xl md:text-5xl font-bold mb-4 text-[#6A8C25] dark:text-white">
                      {slide.title}
                    </motion.h2>
                    <motion.p key={1} variants={sliderElementVariants} className="text-lg md:text-xl mb-10 text-gray-500 dark:text-gray-200">
                      {slide.description}
                    </motion.p>
                   
                     
                  <motion.div key={2} variants={sliderElementVariants}>
                    <Link
                      to={"/register"}
                      className="bg-[#6A8C25] text-white font-medium px-8 py-4 rounded-md hover:bg-[#204e36] dark:hover:bg-yellow-600 transition duration-300 ease-in-out"
                    >
                      {slide.cta}
                    </Link>
                  </motion.div>
                  </div>
                </div>
                <div className="img-box w-full md:w-1/2">
                  <motion.img key={3} variants={sliderElementVariants}
                    src={slide.image}
                    alt={slide.title}
                    className="mx-auto md:mx-0 md:ml-auto max-w-full h-[300px] md:h-[500px] "
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
