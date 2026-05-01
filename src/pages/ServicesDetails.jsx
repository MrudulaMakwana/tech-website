import React from "react";
import bg from "./../assets/images/services-bg.jpg";
import img from "./../assets/images/cs2.jpg";
import servicesBottom from "./../assets/images/servicesBottom.jpg";
import { servicesData } from "../data/servicesData";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaClipboardUser } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { FaFilePdf } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import ServiceCard from "../components/ServiceCard";
import techData from "../data/techData";

const ServicesDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = servicesData.find((item) => item.id === parseInt(id));
  if (!service) {
    return <h2 className="p-10 text-red-500">Service Not Found</h2>;
  }
  console.log(id);
   const techMap = {
    "Web Development": "Frontend Technology",
    "Apps Development": "Mobile Technology",
    "MERN/MEAN Stack Developer": "Backend Technology",
    "Python Full Course": "Backend Technology",
    "SEO Services": "Frontend Technology",
    "SaaS Products": "Cloud & DevOps",
  };

  const relatedTech = techData.find(
    (tech) => tech.title === techMap[service.title]
  );
  return (
    <div className="bg-gray-50 pt-20">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
          {service.title}
        </h1>

        <p className="text-sm md:text-base text-gray-500 mt-2">
          Service / <span className="text-orange-500">{service.title}</span>
        </p>
      </div>

      {/* MAIN SECTION */}
      <div className="bg-gray-100 py-10 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image */}
            <img src={bg} alt="banner" className="rounded-xl w-full" />

            {/* About */}
            <div>
              {/* <p className="text-orange-500 text-xl mt-2 font-bold">
                {service.title}
              </p> */}

              <h2 className="text-lg text-black font-semibold my-4">
                About this Service
              </h2>

              <p className="text-gray-600 leading-7">{service.desc}</p>
            </div>

            {/* Important Facts */}
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <img src={img} alt="" className="rounded-lg" />

              <div>
                <h3 className="text-xl text-black font-bold mb-3">
                  Important Facts
                </h3>
                <ul className="space-y-2 text-gray-700">
                  {[
                    "The Field of Data Science",
                    "The Problem",
                    "The Solution",
                    "The Skills",
                    "Statistics",
                    "Mathematics",
                  ].map((item) => (
                    <li key={item} className="">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-7">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using ‘Content here,
              content here’, making it look like readable English. Latin words,
              combined with a handful of model sentence structures, to generate
              Lorem Ipsum which looks reasonable.
            </p>

            {/* Application Areas */}
            <div>
              <h3 className="text-xl text-black font-bold mb-4">
                Application Areas
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "Manufacturing",
                  "Healthcare",
                  "Automobile",
                  "Banking",
                  "Real Estate",
                  "Logistics",
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-gray-200  p-4 rounded-lg shadow text-center hover:bg-orange-500 hover:text-white transition"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-xl text-black font-bold mb-4">
                Technologies That We Use
              </h3>

              {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-700">
                {techData.map((tech, i) => {

                  <div className="flex flex-wrap gap-2" key={i}>
                    {tech.items.map((item, index) => (
                      <p
                        key={index}
                        className="text-sm font-medium bg-white px-3 py-1 rounded-md shadow-sm hover:bg-orange-500 hover:text-white transition-all"
                      >
                        {item}
                      </p>
                    ))}
                  </div>;
                })}
              </div> */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-700">

  {relatedTech ? (
    <div className="flex flex-wrap gap-2 col-span-full">

      {relatedTech.items.map((item, index) => (
        <p
          key={index}
          className="text-sm font-medium bg-white px-3 py-1 rounded-md shadow-sm hover:bg-orange-500 hover:text-white transition-all"
        >
          {item}
        </p>
      ))}

    </div>
  ) : (
    <p className="text-gray-400 col-span-full">
      No related technologies found
    </p>
  )}

</div>
            </div>

            {/* Bottom Image */}
            <img src={servicesBottom} alt="" className="rounded-xl" />
          </div>

          {/* RIGHT SIDEBAR (FIXED POSITION) */}
          <div className="space-y-8">
            {/* SERVICES */}
            <div className="bg-gray-50 p-6 rounded-2xl shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Our Services
              </h3>

              {/* <ul className="space-y-3">
                {servicesData.map((item) => (
                  <li
                    key={item}
                    className="flex justify-between  items-center px-4 py-3 text-black rounded-lg cursor-pointer 
          hover:bg-orange-500 hover:text-white transition duration-300 group"
                  >
                    <span className="text-sm font-medium">{item.title}</span>

                    <MdOutlineKeyboardArrowRight
                      size={20}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </li>
                ))}
              </ul> */}
              <ul className="space-y-3">
                {servicesData.map((item) => (
                  <Link to={`/service-details/${item.id}`} key={item.id}>
                    <li
                      className="flex justify-between items-center px-4 py-3 text-black rounded-lg cursor-pointer 
        hover:bg-orange-500 hover:text-white transition duration-300 group"
                    >
                      <span className="text-sm font-medium">{item.title}</span>

                      <MdOutlineKeyboardArrowRight
                        size={20}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </li>
                  </Link>
                ))}
              </ul>
            </div>

            {/* Technology */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Technology
              </h3>

              <div className="space-y-3 text-sm">
                <div className="px-4 py-3 text-black bg-gray-50 rounded-lg  transition cursor-pointer">
                  {techData.slice(0, 2).map((tech, i) => (
                    <div key={i} className="mb-4">
                      {/* TITLE */}
                      <h3 className="font-bold mb-2">{tech.title}</h3>

                      {/* ITEMS */}
                      <div className="flex flex-wrap gap-2">
                        {tech.items.map((item, index) => (
                          <p
                            key={index}
                            className="text-sm font-medium bg-white px-3 py-1 rounded-md shadow-sm hover:bg-orange-500 hover:text-white transition-all"
                          >
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CONTACT */}
            {/* <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Contact Info
              </h3>

              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex items-center gap-3">
                  <FaClipboardUser className="text-orange-500 text-lg" />
                  <span>+91 94092 59294</span>
                </div>

                <div className="flex items-center gap-3">
                  <GrLocation className="text-orange-500 text-lg" />
                  <span>205, Emerald Complex, CG Road, Near Mithakhali, Navrangpura,
                Ahmedabad Gujarat 380009</span>
                </div>

                <div className="flex items-center gap-3">
                  <MdOutlineMailOutline className="text-orange-500 text-lg" />
                  <span>infinity3tech@gmail.com</span>
                </div>
              </div>
            </div> */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
              {/* HEADING */}
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Contact Info
              </h3>

              {/* CONTACT LIST */}
              <div className="space-y-4 text-sm">
                {/* PHONE */}
                <div
                  className="flex items-start gap-3 px-4 py-4 bg-gray-50 rounded-xl 
      hover:bg-orange-500 hover:text-white transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <FaClipboardUser className="text-orange-500 text-lg group-hover:text-orange-500" />
                  </div>

                  <div>
                    <p className="text-xs text-black font-bold group-hover:text-orange-100">
                      Phone Number
                    </p>

                    <p className=" text-black  group-hover:text-orange-100">
                      +91 94092 59294
                    </p>
                  </div>
                </div>

                {/* ADDRESS */}
                <div
                  className="flex items-start gap-3 px-4 py-4 bg-gray-50 rounded-xl 
      hover:bg-orange-500 hover:text-white transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-15 h-15 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <GrLocation className="text-orange-500 text-lg group-hover:text-orange-500" />
                  </div>

                  <div>
                    <p className="text-xs text-black font-bold group-hover:text-orange-100">
                      Office Address
                    </p>

                    <p className="leading-relaxed text-black  group-hover:text-orange-100">
                      205, Emerald Complex, CG Road, Near Mithakhali,
                      Navrangpura, Ahmedabad Gujarat 380009
                    </p>
                  </div>
                </div>

                {/* EMAIL */}
                <div
                  className="flex items-start gap-3 px-4 py-4 bg-gray-50 rounded-xl 
      hover:bg-orange-500 hover:text-white transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <MdOutlineMailOutline className="text-orange-500 text-lg group-hover:text-orange-500" />
                  </div>

                  <div>
                    <p className="text-xs text-black font-bold group-hover:text-orange-100">
                      Email Address
                    </p>

                    <p className="font-medium text-black hover:text-orange-100">
                      infinity3tech@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MORE SERVICES */}
      <div className="max-w-7xl mx-auto mt-16 px-6">
        <h2 className="text-2xl text-black font-bold text-center mb-10">
          More Services You Might Like
        </h2>
        <div className="max-w-7xl mx-auto px-6 pb-16 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {servicesData.slice(0, 3).map((item) => (
            <ServiceCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
