// import React from "react";
// import image from "./../assets/images/star-icon.png";
// import img1 from "./../assets/images/da.png";
// import img2 from "./../assets/images/ai&ml.png";
// import img3 from "./../assets/images/ds.png";
// import img4 from "./../assets/images/pa.png";
// import img5 from "./../assets/images/sd.png";
// import img6 from "./../assets/images/es.png";
// import { FaArrowRightLong } from "react-icons/fa6";
// import { IoReload } from "react-icons/io5";
// import { useNavigate } from "react-router-dom";
// import { servicesData } from "../data/servicesData";
// import ServiceCard from "./ServiceCard";

// const Services = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         {/* Heading */}
//         <div className="flex items-center justify-center gap-2">
//           <img
//             src={image}
//             alt="Star Icon"
//             className="w-5 animate-[float_4s_ease-in-out_infinite]"
//           />
//           <p className="text-orange-500 font-bold uppercase text-sm">
//             Our Services
//           </p>
//         </div>

//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
//           We Offer Professional Solutions For Business
//         </h2>

//         <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna.
//         </p>


//         <div className="max-w-7xl mx-auto mt-5 px-6 pb-16 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {servicesData.slice(0, 3).map((item) => (
//             <ServiceCard key={item.id} item={item} />
//           ))}
//         </div>
//         {/* Button */}
//         <button
//           className="mx-auto  flex justify-center items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-black transition duration-300"
//           onClick={() => navigate(`/services`)}
//         >
//           <IoReload /> <span>Load More</span>
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Services;
import React from "react";
import image from "./../assets/images/star-icon.png";
import { IoReload } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const navigate = useNavigate();

  return (
    <section className="py-10 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">

        {/* 🔥 Heading */}
        <div className="flex items-center justify-center gap-2">
          <img
            src={image}
            alt="Star Icon"
            className="w-4 md:w-5 animate-[float_4s_ease-in-out_infinite]"
          />
          <p className="text-orange-500 font-bold uppercase text-xs md:text-sm">
            Our Services
          </p>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mt-2 leading-tight">
          We Offer Professional Solutions For Business
        </h2>

        <p className="text-gray-500 mt-3 md:mt-4 text-sm md:text-base max-w-xl md:max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </p>

        {/* 🔥 SERVICES GRID */}
        <div className="mt-6 md:mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8 px-2 sm:px-4 md:px-0">
          {servicesData.slice(0, 3).map((item) => (
            <ServiceCard key={item.id} item={item} />
          ))}
        </div>

        {/* 🔥 BUTTON */}
        <div className="flex justify-center mt-6 md:mt-10">
          <button
            className="flex items-center gap-2 bg-orange-500 text-white px-5 md:px-6 py-2.5 md:py-3 rounded-md hover:bg-black transition duration-300 text-sm md:text-base"
            onClick={() => navigate(`/services`)}
          >
            <IoReload className="text-lg md:text-xl" />
            <span>Load More</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Services;