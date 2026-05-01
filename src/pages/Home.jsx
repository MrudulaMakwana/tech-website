import React from "react";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import DataScienceProcess from "../components/DataScienceProcess";
import CaseStudySlider from "../components/CaseStudySlider";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import Blog from "../components/Blog";
import CTA from "../components/CTA";
import OurSolutions from "../components/OurSolutions";
import Hero from "../components/Hero";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import internshipData from "../data/internshipData";
import InternshipCard from "../components/InternshipCard";
import Star from "./../assets/images/star-icon.png";

const Home = () => {
  return (
    <>
      <Hero />
      {/* <OurSolutions /> */}
      <AboutUs />
      <section className="bg-gray-100 py-10 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Heading */}
          <div className="flex items-center justify-center gap-2">
            <img
              src={Star}
              alt="Star Icon"
              className="w-4 md:w-5 animate-[float_4s_ease-in-out_infinite]"
            />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center">
              Internship Opportunities
            </h2>
          </div>

          <p className="text-gray-500 text-center mt-2 mb-6 md:mb-10 text-sm md:text-base">
            Explore internships and start your career journey
          </p>

          <div className="relative">
            {/*  LEFT BUTTON */}
            <button
              className="prev-btn absolute left-1 md:left-2 lg:left-5 top-1/2 -translate-y-1/2 
        text-white bg-orange-500 shadow-lg w-9 h-9 md:w-12 md:h-12 rounded-full flex justify-center items-center 
        hover:bg-gray-200 hover:text-orange-500 transition z-10"
            >
              <MdOutlineKeyboardArrowLeft size={20} className="md:text-2xl" />
            </button>

            {/*  RIGHT BUTTON */}
            <button
              className="next-btn absolute right-1 md:right-2 lg:right-5 top-1/2 -translate-y-1/2 
        bg-orange-500 shadow-lg w-9 h-9 md:w-12 md:h-12 rounded-full flex justify-center items-center text-white
        hover:bg-gray-200 hover:text-orange-500 transition z-10"
            >
              <MdOutlineKeyboardArrowRight size={20} className="md:text-2xl" />
            </button>

            {/*  SLIDER */}
            <div className="px-2 sm:px-4 md:px-10 lg:px-16">
              <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                centeredSlides={true}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: ".next-btn",
                  prevEl: ".prev-btn",
                }}
                breakpoints={{
                  480: { slidesPerView: 1, spaceBetween: 10 },
                  640: { slidesPerView: 1.3, spaceBetween: 20 },
                  768: { slidesPerView: 2.2, spaceBetween: 25 },
                  1024: { slidesPerView: 3.2, spaceBetween: 30 },
                }}
              >
                {internshipData.map((item) => (
                  <SwiperSlide key={item.id} className="flex justify-center">
                    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
                      <InternshipCard item={item} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <Services />
      <DataScienceProcess />
      <CaseStudySlider />
      <Team limit={4} showHeader={true} />
      <Testimonials />
      <Blog />
      <CTA />
    </>
  );
};

export default Home;
