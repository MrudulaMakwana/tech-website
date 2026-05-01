// import React from "react";
// import { motion } from "framer-motion";
// import heroImg from "../assets/images/hero.png";
// import { FaPlay } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const Hero = () => {
//   const navigate = useNavigate();
//   return (
//     <section className="w-full min-h-screen flex items-center mt-10 pt-24 bg-linear-to-r from-[#eef6ff] to-white py-20">
//       <div className="max-w-6xl mx-auto  px-6 grid md:grid-cols-2 gap-10 items-center ">
//         {/* LEFT CONTENT */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
//             Data Science <br />
//             Consulting Services
//           </h1>
//           <p className="mt-6 text-gray-600 text-lg max-w-md">

//             Get professional & reliable research oriented solutions for Data
//             Science and Machine Learning business needs.
//           </p>

//           {/* BUTTONS */}
//           <motion.div
//             className="mt-8 flex gap-4"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//           >
//             <button
//               className="bg-orange-500 cursor-pointer text-white px-6 py-3 rounded-md hover:bg-black transition-all duration-300"
//               onClick={() => navigate("/about")}
//             >
//               About Us
//             </button>

//             <button
//               className="flex items-center cursor-pointer gap-3 group"
//               onClick={() =>
//                 window.open(
//                   "https://www.youtube.com/watch?v=u31qwQUeGuM",
//                   "_blank",
//                 )
//               }
//             >
//               {/* Circle */}
//               <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md relative transition duration-300 group-hover:bg-orange-500">
//                 {/* Ripple */}
//                 <span className="absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-20 animate-ping group-hover:bg-white"></span>

//                 {/* Icon */}
//                 <FaPlay className="text-orange-500 text-sm ml-1 relative transition duration-300 group-hover:text-white" />
//               </div>

//               {/* Text */}
//               <span className="text-orange-500 font-semibold uppercase tracking-wide group-hover:text-orange-600">
//                 Watch Video
//               </span>
//             </button>
//           </motion.div>
//         </motion.div>

//         {/* RIGHT IMAGE */}
//         <motion.div
//           className="flex justify-center"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <motion.img
//             src={heroImg}
//             alt="hero"
//             className="w-full max-w-lg"
//             // animate={{ y: [0, -15, 0] }}
//             // transition={{ repeat: Infinity, duration: 3 }}
//             animate={{ y: [0, -20, 0] }}
//             transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";

import heroImg from "../assets/images/hero.png";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const heroData = [
  {
    title: "Data Science Consulting Services",
    desc: "Get professional & reliable research oriented solutions for Data Science and Machine Learning business needs.",
    image: heroImg,
  },
  {
    title: "AI & Machine Learning Solutions",
    desc: "We build intelligent systems that help businesses grow with AI-powered insights.",
    image: heroImg,
  },
  {
    title: "Advanced Analytics Services",
    desc: "Transform your data into actionable insights using modern analytics techniques.",
    image: heroImg,
  },
];

const Hero = () => {
  const navigate = useNavigate();

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="w-full min-h-screen mt-10 pt-20 bg-gradient-to-r from-[#eef6ff] to-white relative">
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative">

        {/*  NAVIGATION BUTTONS (RESPONSIVE) */}
        <div
          ref={prevRef}
          // className="absolute -left-2 md:left-0 top-1/2 -translate-y-1/2 z-50 cursor-pointer"
          className="absolute left-2 sm:left-3 md:-left-6 lg:-left-2 top-1/2 -translate-y-1/2 z-50 cursor-pointer"
        >
          <span className="text-orange-500 text-3xl md:text-7xl font-bold hover:text-black transition">
            &#8249;
          </span>
        </div>

        <div
          ref={nextRef}
          className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-50 cursor-pointer"
        >
          <span className="text-orange-500 text-3xl md:text-7xl font-bold hover:text-black transition">
            &#8250;
          </span>
        </div>

        {/*  SWIPER */}
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 3500 }}
          loop={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
        >
          {heroData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center min-h-[60vh] md:min-h-[70vh] py-10">

                {/* LEFT CONTENT */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  className="text-center md:text-left"
                >
                  <h1 className="text-3xl md:text-6xl font-bold text-gray-900 leading-tight">
                    {item.title}
                  </h1>

                  <p className="mt-5 text-gray-600 text-sm md:text-lg max-w-md mx-auto md:mx-0">
                    {item.desc}
                  </p>

                  <div className="mt-7 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

                    <button
                      className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-black transition"
                      onClick={() => navigate("/about")}
                    >
                      About Us
                    </button>

                    <button
                      className="flex items-center gap-3 justify-center group"
                      onClick={() =>
                        window.open(
                          "https://www.youtube.com/watch?v=u31qwQUeGuM",
                          "_blank"
                        )
                      }
                    >
                      <div className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white shadow-md relative group-hover:bg-orange-500 transition">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-20 animate-ping"></span>

                        <FaPlay className="text-orange-500 text-sm group-hover:text-white" />
                      </div>

                      <span className="text-orange-500 font-semibold uppercase text-sm md:text-base group-hover:text-black">
                        Watch Video
                      </span>
                    </button>

                  </div>
                </motion.div>

                {/* RIGHT IMAGE */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  className="flex justify-center"
                >
                  <motion.img
                    src={item.image}
                    alt="hero"
                    className="w-[85%] md:w-full max-w-sm md:max-w-lg"
                    animate={{ y: [0, -15, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 5,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;