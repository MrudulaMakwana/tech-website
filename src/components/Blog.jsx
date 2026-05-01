import React from "react";
import { IoCalendarOutline } from "react-icons/io5";
import img1 from "../assets/images/blog1.jpg";
import img2 from "../assets/images/blog2.jpg";
import img3 from "../assets/images/blog3.jpg";
import imgp1 from "../assets/images/blogperson1.jpg";
import imgp2 from "../assets/images/blogperson2.jpg";
import imgp3 from "../assets/images/blogperson3.jpg";
import star from "./../assets/images/star-icon.png";
import { useNavigate } from "react-router-dom";
import blogs from "../data/blogs";

const Blog = () => {
  const navigate=useNavigate();
  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}

        <div className="flex justify-center items-center gap-2">
            <img
          src={star}
          alt="star"
          className="w-6 animate-[float_4s_ease-in-out_infinite]"
        />
        <p className="text-orange-500 font-semibold uppercase text-sm">
          Our Blog
        </p>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-800">
          Latest Valuable Insights
        </h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {blogs.slice(0,3).map((item, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:scale-110 transition duration-500"
              onClick={()=>navigate("/blog-details/1")}
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-52 object-contain "
                />
              </div>

              {/* Content */}
              <div className="p-5 text-left">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-11 h-11 rounded-full object-cover"
                  />
                  <span>{item.author}</span>
                  <div className="flex items-center gap-2 min-w-30">
                    <IoCalendarOutline className="text-base text-orange-500" />
                    <span>{item.date}</span>
                  </div>
                </div>

                <h3 className="mt-3 text-lg font-semibold text-gray-800 group-hover:text-orange-500 transition">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
