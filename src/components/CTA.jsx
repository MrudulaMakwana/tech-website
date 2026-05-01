import React from "react";
import cta from "./../assets/images/cta.png";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-12 md:py-20 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          
          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={cta}
              alt="CTA PNG"
              className="w-full max-w-sm md:max-w-md lg:max-w-lg object-cover"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-black text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
              We Like to Start Your Project With Us
            </h2>

            <p className="mt-4 text-sm sm:text-base text-black/90 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>

            <button
              className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-black transition duration-300"
              onClick={() => navigate("/contact-us")}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;