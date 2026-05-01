import React from "react";
import history2010 from "./../assets/images/history2010.jpg";
import history2013 from "./../assets/images/history2013.jpg";
import history2016 from "./../assets/images/history2016.jpg";
import history2023 from "./../assets/images/history2023.jpg";

import image from "./../assets/images/star-icon.png";
const timelineData = [
  {
    year: "2023",
    date: "February 20th",
    title: "Founded",
    desc: "Real innovations and a positive customer experience are the heart of successful communication.",
    image: history2010,
  },
  {
    year: "2024",
    date: "January 14th",
    title: "Global Success",
    desc: "Real innovations and a positive customer experience are the heart of successful communication.",
    image: history2013,
  },
  {
    year: "2025",
    date: "March 25th",
    title: "Founded Data Center",
    desc: "Real innovations and a positive customer experience are the heart of successful communication.",
    image: history2016,
  },
  {
    year: "2026",
    date: "December 10th",
    title: "International Award",
    desc: "Real innovations and a positive customer experience are the heart of successful communication.",
    image: history2023,
  },
];

const OurHistory = () => {
  return (
    <div className="bg-white py-16 px-6">
      <div className="text-center mb-12">
        <div className="flex  justify-center items-center gap-3">
          <img
            src={image}
            alt="Star Icon"
            className="w-5 animate-[float_4s_ease-in-out_infinite]"
          />
          <p className="text-orange-500 font-bold uppercase">Our History</p>
        </div>
        <h2 className="text-3xl font-bold text-black mt-2">
          History Begins in 2010
        </h2>
        <p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="relative max-w-5xl mx-auto">
        {/* FULL VERTICAL LINE */}
        <span className="absolute left-[200px] top-0 h-full w-[2px] bg-gray-300"></span>

        {timelineData.map((item, index) => (
          <div
            key={index}
            className="grid md:grid-cols-[200px_1fr] gap-10 mb-16 items-center"
          >
            {/* LEFT (YEAR + DATE) */}
            <div className="text-right pr-8">
              <h3 className="font-bold text-xl text-gray-800">{item.year}</h3>
              <p className="text-sm text-gray-400">{item.date}</p>
            </div>

            {/* RIGHT (CONTENT + IMAGE) */}
            <div className="relative flex items-center gap-6 pl-10">
              {/* DOT (ALIGNED WITH LINE) */}
              <div className="absolute left-[-52px] top-1/2 -translate-y-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-md"></div>

              {/* TEXT BOX */}
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition flex flex-col gap-3 w-[60%]">
                <h3 className="font-semibold text-lg text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>

              {/* IMAGE */}
              <img
                src={item.image}
                alt=""
                className="w-40 h-28 object-cover rounded-lg shadow-sm"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurHistory;
