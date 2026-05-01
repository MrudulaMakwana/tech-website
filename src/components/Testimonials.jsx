import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoEye } from "react-icons/io5";
import star from "./../assets/images/star-icon.png";
import img1 from "./../assets/images/person1.jpg";
import img2 from "./../assets/images/person2.jpg";
import testimonials1 from "./../assets/images/t1.png";
import testimonials2 from "./../assets/images/t2.png";
import testimonials3 from "./../assets/images/t3.png";
import testimonials4 from "./../assets/images/t4.png";
import testimonials5 from "./../assets/images/t5.png";
import testimonials6 from "./../assets/images/t6.png";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
const Testimonials = () => {
  const data = [
    {
      name: "John Smith",
      role: "CEO, Company",
      image: img1,
      text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    },
    {
      name: "Sarah Lee",
      role: "Manager",
      image: img2,
      text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    },
    {
      name: "David Brown",
      role: "Founder",
      image: img1,
      text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    },
    {
      name: "Emma Wilson",
      role: "Designer",
      image: img2,
      text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    },
    {
      name: "Michael Scott",
      role: "Manager",
      image: img1,
      text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex justify-center items-center gap-2">
            <img
              src={star}
              alt="star"
              className="w-6 animate-[float_4s_ease-in-out_infinite]"
            />
            <p className="text-orange-500 font-semibold uppercase text-sm">
              Testimonials
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-800">
            What Our Clients Are Saying?
          </h2>

          <p className="text-gray-500 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>

        {/* Slider */}
        <div className="mt-12">
          <div className="relative mt-12">
            <button className="prev-btn bg-white absolute -top-15 left-0 bg-grey-500 shadow-md w-10 h-10 rounded-full flex justify-center items-center hover:bg-orange-500 hover:text-white transition">
              <MdOutlineKeyboardArrowLeft size={23} />
            </button>
            <button className="next-btn bg-white absolute -top-15 right-0 bg-grey-500 shadow-md w-10 h-10 rounded-full flex justify-center items-center hover:bg-orange-500 hover:text-white transition">
              <MdOutlineKeyboardArrowRight size={23} className="" />
            </button>
          </div>
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // navigation={true}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition duration-300 h-full hover:-translate-y-2">
                  {/* Top */}
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />

                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-500">{item.role}</p>
                    </div>
                  </div>

                  {/* Text */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    "{item.text}"
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* <div className="flex justify-center align-center">
          <button className="mt-6 flex justify-center items-center gap-2 bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-black transition">
           <IoEye /> Check Out All Reviews
          </button>
        </div> */}
        <div className="flex justify-center items-center gap-5 p-6 flex-wrap">
          <img
            src={testimonials1}
            alt="image1"
            className="w-36 h-36 object-contain"
          />
          <img
            src={testimonials2}
            alt="image1"
            className="w-36 h-36 object-contain"
          />
          <img
            src={testimonials3}
            alt="image1"
            className="w-36 h-36 object-contain"
          />
          <img
            src={testimonials4}
            alt="image1"
            className="w-36 h-36 object-contain"
          />
          <img
            src={testimonials5}
            alt="image1"
            className="w-36 h-36 object-contain"
          />
          <img
            src={testimonials6}
            alt="image1"
            className="w-36 h-36 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
