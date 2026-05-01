import React from "react";
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
import reviewData from "../data/reviewData";
import PageHeader from "../components/PageHeader";

const InternshipPage = () => {
  return (
    <section className="bg-gray-50 py-12 md:py-20 overflow-hidden">
      
      {/* TOP HEADER */}
      <PageHeader title="Internship" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION TITLE */}
        <div className="text-center mb-10 md:mb-14">
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
            Internship Opportunities
          </h2>

          <p className="text-sm sm:text-base text-gray-500 mt-3">
            Explore internships and start your career journey
          </p>
        </div>

        {/* ================= INTERNSHIP SLIDER ================= */}
        <div className="relative">
          
          {/* LEFT BUTTON */}
          <button
            className="intern-prev absolute left-0 sm:left-1 md:left-2 lg:left-5 top-1/2 -translate-y-1/2 
            text-white bg-orange-500 shadow-lg w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full 
            flex justify-center items-center hover:bg-gray-200 hover:text-orange-500 transition z-10"
          >
            <MdOutlineKeyboardArrowLeft size={24} />
          </button>

          {/* RIGHT BUTTON */}
          <button
            className="intern-next absolute right-0 sm:right-1 md:right-2 lg:right-5 top-1/2 -translate-y-1/2 
            bg-orange-500 shadow-lg w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full 
            flex justify-center items-center text-white hover:bg-gray-200 hover:text-orange-500 transition z-10"
          >
            <MdOutlineKeyboardArrowRight size={24} />
          </button>

          {/* SWIPER */}
          <div className="px-8 sm:px-10 md:px-14 lg:px-16">
            
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
                nextEl: ".intern-next",
                prevEl: ".intern-prev",
              }}
              breakpoints={{
                480: {
                  slidesPerView: 1.1,
                },
                640: {
                  slidesPerView: 1.3,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {internshipData.map((item) => (
                <SwiperSlide
                  key={item.id}
                  className="flex justify-center"
                >
                  <InternshipCard item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* ================= REVIEW SECTION ================= */}
        <div className="bg-gray-50 py-12 md:py-16 mt-14 md:mt-20 rounded-2xl">
          
          {/* HEADING */}
          <div className="text-center mb-8 md:mb-10">
            
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              What Our Interns Say
            </h2>

            <p className="text-sm sm:text-base text-gray-500 mt-2">
              Real experiences from our students
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            
            {/* LEFT BUTTON */}
            <button
              className="review-prev absolute left-0 sm:left-1 top-1/2 -translate-y-1/2 
              bg-orange-500 text-white shadow-lg w-8 h-8 sm:w-10 sm:h-10 rounded-full 
              flex justify-center items-center hover:bg-orange-600 transition z-10"
            >
              <MdOutlineKeyboardArrowLeft size={20} />
            </button>

            {/* RIGHT BUTTON */}
            <button
              className="review-next absolute right-0 sm:right-1 top-1/2 -translate-y-1/2 
              bg-orange-500 text-white shadow-lg w-8 h-8 sm:w-10 sm:h-10 rounded-full 
              flex justify-center items-center hover:bg-orange-600 transition z-10"
            >
              <MdOutlineKeyboardArrowRight size={20} />
            </button>

            {/* REVIEW SLIDER */}
            <div className="px-8 sm:px-10 md:px-12">
              
              <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: ".review-next",
                  prevEl: ".review-prev",
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1.2,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
              >
                {reviewData.map((item) => (
                  <SwiperSlide key={item.id}>
                    
                    <div className="bg-gray-200 min-h-[220px] p-5 md:p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col">
                      
                      {/* USER */}
                      <div className="flex items-center gap-4 mb-4">
                        
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-orange-400"
                        />

                        <div>
                          <h4 className="font-semibold text-gray-800 text-sm md:text-base">
                            {item.name}
                          </h4>

                          <p className="text-xs md:text-sm text-orange-500">
                            {item.role}
                          </p>
                        </div>
                      </div>

                      {/* REVIEW TEXT */}
                      <p className="text-gray-600 text-sm leading-relaxed italic line-clamp-5">
                        “{item.text}”
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipPage;