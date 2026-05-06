import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import star from "./../assets/images/star-icon.png";
import img1 from "./../assets/images/person1.jpg";
import img2 from "./../assets/images/person2.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const Testimonials = () => {
 const data = [
  {
    name: "John Smith",
    role: "CEO, Company",
    image: img1,
    text: "The team delivered our project on time with excellent quality. Their support and communication were outstanding throughout the process.",
  },
  {
    name: "Sarah Lee",
    role: "Manager",
    image: img2,
    text: "We saw a huge improvement in our website performance after working with them. Highly professional and reliable service.",
  },
  {
    name: "David Brown",
    role: "Founder",
    image: img1,
    text: "Amazing experience! They understood our requirements clearly and built exactly what we needed for our business growth.",
  },
  {
    name: "Emma Wilson",
    role: "Designer",
    image: img2,
    text: "Great attention to detail and modern design approach. The final product exceeded our expectations.",
  },
  {
    name: "Michael Scott",
    role: "Manager",
    image: img1,
    text: "Very responsive team with strong technical skills. I would definitely recommend them for any web development work.",
  },
];

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
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

          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-800 dark:text-white transition">
            What Our Clients Are Saying?
          </h2>

          <p className="text-gray-500 dark:text-gray-300 mt-4 transition">
              We value our clients feedback and continuously improve our services based on their experiences. Here’s what our customers say about working with us.
          </p>
        </div>

        {/* SLIDER */}
        <div className="mt-12">
          {/* NAVIGATION BUTTONS */}
          <div className="relative mt-12">
            <button className="prev-btn absolute -top-15 left-0  bg-orange-500 dark:bg-orange-500 
              text-white dark:text-white shadow-md w-10 h-10 rounded-full flex justify-center items-center  hover:bg-white hover:text-orange-500 transition">
              <MdOutlineKeyboardArrowLeft size={23} />
            </button>

            <button className="next-btn absolute -top-15 right-0 bg-orange-500 dark:bg-orange-500 
              text-white dark:text-white shadow-md w-10 h-10 rounded-full flex justify-center items-center hover:bg-white hover:text-orange-500 transition">
              <MdOutlineKeyboardArrowRight size={23} />
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
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-lg transition duration-300 h-full hover:-translate-y-2">
                  {/* TOP */}
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />

                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white transition">
                        {item.name}
                      </h4>

                      <p className="text-sm text-gray-500 dark:text-gray-300 transition">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  {/* TEXT */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition">
                    "{item.text}"
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
