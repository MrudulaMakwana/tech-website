import React from "react";
import step1 from "./../assets/images/step1.png";
import step2 from "./../assets/images/step2.png";
import step3 from "./../assets/images/step3.png";
import step4 from "./../assets/images/step4.png";
import step5 from "./../assets/images/step5.png";
import step6 from "./../assets/images/step6.png";
import Star from "./../assets/images/star-icon.png";
const steps = [
  {
    id: 1,
    title: "Frame the Problem",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    src: step1,
  },
  {
    id: 2,
    title: "Collect the Raw Data",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    src: step2,
  },
  {
    id: 3,
    title: "Process the Data",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    src: step3,
  },
  {
    id: 4,
    title: "Explore the Data",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    src: step4,
  },
  {
    id: 5,
    title: "Perform In-depth Analysis",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    src: step5,
  },
  {
    id: 6,
    title: "Communicate Results",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    src: step6,
  },
];

export default function DataScienceProcess() {
  return (
    <div className="w-full min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
         <div className="flex items-center justify-center gap-2">
           <img
            src={Star}
            alt="Star Icon"
            className="w-5 animate-[float_4s_ease-in-out_infinite]"
          />
          <p className="text-sm font-bold text-orange-500 uppercase">
            How It's Work
          </p>
         </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">The Data Science Process</h2>
          <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-xl shadow-md p-6 border border-transparent hover:border-orange-500 hover:shadow-xl transition"
            >
              {/* Number Circle */}
              {/* <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white font-bold mb-4">
                {step.id}
              </div> */}

              {/* Image Placeholder */}
              <div className="w-full h-32 bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400">
                <img src={step.src} alt="" />
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>

              <p className="text-gray-500 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
