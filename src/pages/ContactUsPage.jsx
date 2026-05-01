import React from "react";
import { LuPhoneCall, LuClock8 } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import img from "./../assets/images/contact-us.png";
import Star from "./../assets/images/star-icon.png";
import PageHeader from "../components/PageHeader";

const ContactUsPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-16 md:pt-20 overflow-hidden">
      
      {/* HEADER */}
      <PageHeader title="Contact Us" />

      {/* INFO SECTION */}
      <div className="max-w-6xl mx-auto py-10 md:py-14 px-4 sm:px-6">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          
          {/* ADDRESS */}
          <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition flex items-start gap-4">
            <div className="bg-gray-100 p-3 rounded-xl hover:bg-orange-500 group cursor-pointer transition shrink-0">
              <SlLocationPin
                size={24}
                className="text-orange-500 group-hover:text-white transition"
              />
            </div>

            <div>
              <h3 className="font-semibold text-black text-lg mb-2">
                Our Address
              </h3>

              <p className="text-gray-500 text-sm leading-6">
                205, Emerald Complex, CG Road, Near Mithakhali,
                Navrangpura, Ahmedabad Gujarat 380009
              </p>
            </div>
          </div>

          {/* CONTACT */}
          <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition flex items-start gap-4">
            <div className="bg-gray-100 p-3 rounded-xl hover:bg-orange-500 group cursor-pointer transition shrink-0">
              <LuPhoneCall
                size={24}
                className="text-orange-500 group-hover:text-white transition"
              />
            </div>

            <div>
              <h3 className="font-semibold text-black text-lg mb-2">
                Contact Us
              </h3>

              <p className="text-gray-500 text-sm leading-6">
                +91 94092 59294
              </p>

              <p className="text-gray-500 text-sm break-all leading-6">
                infinity3tech@gmail.com
              </p>
            </div>
          </div>

          {/* HOURS */}
          <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition flex items-start gap-4 sm:col-span-2 lg:col-span-1">
            <div className="bg-gray-100 p-3 rounded-xl hover:bg-orange-500 group cursor-pointer transition shrink-0">
              <LuClock8
                size={24}
                className="text-orange-500 group-hover:text-white transition"
              />
            </div>

            <div>
              <h3 className="font-semibold text-black text-lg mb-2">
                Hours of Operation
              </h3>

              <p className="text-gray-500 text-sm leading-6">
                Monday - Saturday:
              </p>

              <p className="text-gray-500 text-sm leading-6">
                09:30 AM - 06:30 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT FORM SECTION */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-14 md:pb-20">
        
        {/* TITLE */}
        <div className="text-center mb-10">
          <div className="flex justify-center items-center gap-2">
            <img
              src={Star}
              alt="Star Icon"
              className="w-4 sm:w-5 animate-[float_4s_ease-in-out_infinite]"
            />

            <p className="text-orange-500 text-xs sm:text-sm font-semibold uppercase">
              Get In Touch
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mt-3">
            Ready to Get Started?
          </h2>

          <p className="text-gray-500 text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-6">
            Your email address will not be published. Required fields are
            marked *
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          
          {/* IMAGE */}
          <div className="flex justify-center">
            <img
              src={img}
              alt="contact"
              className="w-full max-w-md lg:max-w-full"
            />
          </div>

          {/* FORM */}
          <div className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl shadow-md">
            <form className="space-y-5">
              
              {/* ROW */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* NAME */}
                <div>
                  <label className="text-black text-sm font-medium">
                    Name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full mt-2 p-3 border border-orange-300 rounded-xl text-black outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="text-black text-sm font-medium">
                    E-Mail *
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full mt-2 p-3 border border-orange-300 rounded-xl text-black outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>
              </div>

              {/* PHONE */}
              <div>
                <label className="text-black text-sm font-medium">
                  Contact Number *
                </label>

                <input
                  type="tel"
                  name="phone"
                  required
                  pattern="[0-9]{10}"
                  className="w-full mt-2 p-3 border border-orange-300 rounded-xl text-black outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              {/* SUBJECT */}
              <div>
                <label className="text-black text-sm font-medium">
                  Subject *
                </label>

                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full mt-2 p-3 border border-orange-300 rounded-xl text-black outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="text-black text-sm font-medium">
                  Your Message *
                </label>

                <textarea
                  name="message"
                  rows="5"
                  required
                  className="w-full mt-2 p-3 border border-orange-300 rounded-xl text-black outline-none focus:ring-2 focus:ring-orange-400 resize-none"
                ></textarea>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full sm:w-auto bg-orange-500 hover:bg-black text-white px-6 py-3 rounded-xl font-semibold transition"
              >
                Send Your Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* MAP */}
      <div className="w-full">
        <iframe
          title="Infinite Soft Tech Location"
          src="https://www.google.com/maps?q=Infinite%20Soft%20Tech%20Ahmedabad&output=embed"
          className="w-full h-[250px] sm:h-[350px] md:h-[450px] border-0"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUsPage;