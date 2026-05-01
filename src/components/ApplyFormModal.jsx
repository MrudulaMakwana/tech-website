import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaUser, FaPhone, FaEnvelope, FaCity } from "react-icons/fa";

const ApplyFormModal = ({ plan, techTitle, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    department: "",
    city: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalData = {
      ...formData,
      technology: techTitle,
      duration: plan?.duration,
    };

    console.log(finalData);
    onClose();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center z-50 px-4"
    >
      {/* MODAL */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl bg-white animate-[scaleUp_.3s_ease]"
      >
        {/* HEADER */}
        <div className="bg-gray-50 text-white p-6 relative">
          <h2 className="text-2xl text-black font-bold">Apply for Internship</h2>
          <p className="text-sm text-black mt-1 opacity-90">
            {techTitle} {plan?.duration}
          </p>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:scale-110 transition"
          >
            <IoClose size={24} />
          </button>
        </div>

        {/* BODY */}
        <form
          onSubmit={handleSubmit}
          className="p-6 space-y-5 max-h-[70vh] overflow-y-auto"
        >
          {/* Full Name */}
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-black" />
            <input
              type="text"
              name="fullName"
              placeholder="Full Name *"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2 border text-black rounded-lg focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Mobile */}
          <div className="relative">
            <FaPhone className="absolute left-3 top-3 text-black" />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number *"
              pattern="[0-9]{10}"
              required
              value={formData.mobile}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2 border text-black rounded-lg focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-black" />
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2 border text-black rounded-lg focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Department */}
          <select
            name="department"
            required
            value={formData.department}
            onChange={handleChange}
            className="w-full border text-black rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400"
          >
            <option value="">Select Department *</option>
            <option>IT</option>
            <option>Computer Engineering</option>
            <option>BCA</option>
            <option>MCA</option>
            <option>Other</option>
          </select>

          {/* City */}
          <div className="relative">
            <FaCity className="absolute left-3 top-3 text-black" />
            <input
              type="text"
              name="city"
              placeholder="Current City (Optional)"
              value={formData.city}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2 border text-black rounded-lg focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-black active:scale-95 transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyFormModal;
