import React, { useState } from "react";
import { useParams } from "react-router-dom";
import bg from "./../assets/images/course-details-bg.jpg";
import CourseCard from "../components/CourseCard";
import courses from "../data/coursesData";

import {
  FaEnvelope,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPlus,
  FaMinus,
} from "react-icons/fa";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CourseDetailsPage = () => {
  const { slug } = useParams();

  const BASE_URL =import.meta.env.VITE_BASE_URL;

  const [openIndex, setOpenIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("curriculum");
  const [showModal, setShowModal] = useState(false);

  const [sidebarLoading, setSidebarLoading] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);

  const [modalFormData, setModalFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
  });

  const [sidebarFormData, setSidebarFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
  });

  const course = courses.find((item) => item.slug === slug);

  const inputClass =
    "w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-black dark:text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400";

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <h1 className="text-2xl font-bold text-black dark:text-white">
          Course Not Found
        </h1>
      </div>
    );
  }

  // MODAL INPUT CHANGE
  const handleModalChange = (e) => {
    setModalFormData({
      ...modalFormData,
      [e.target.name]: e.target.value,
    });
  };

  // SIDEBAR INPUT CHANGE
  const handleSidebarChange = (e) => {
    setSidebarFormData({
      ...sidebarFormData,
      [e.target.name]: e.target.value,
    });
  };

  // SIDEBAR FORM SUBMIT
  const handleSidebarSubmit = async (e) => {
    e.preventDefault();

    setSidebarLoading(true);

    const payload = {
      Name: sidebarFormData.fullName,
      Email: sidebarFormData.email,
      ContactNo: sidebarFormData.contact,
      Subject: `Inquiry for ${course.title}`,
      Message: `Student wants free demo for ${course.title}`,
    };

    try {
      const response = await fetch(`${BASE_URL}/contact-inquiry-create/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Inquiry sent successfully");
        console.log("Data:",payload)
        setSidebarFormData({
          fullName: "",
          email: "",
          contact: "",
        });
      } else {
        toast.error(data?.message || "Something went wrong");
      }
    } catch (error) {
      toast.error("Server error");
    } finally {
      setSidebarLoading(false);
    }
  };

  // MODAL FORM SUBMIT
  const handleModalSubmit = async (e) => {
    e.preventDefault();

    setModalLoading(true);

    const payload = {
      Name: modalFormData.fullName,
      Email: modalFormData.email,
      ContactNo: modalFormData.contact,
      Subject: `Curriculum Download - ${course.title}`,
      Message: `Student requested curriculum for ${course.title}`,
    };

    try {
      const response = await fetch(`${BASE_URL}/contact-inquiry-create/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Inquiry sent successfully");
        console.log('Data',payload)
        setModalFormData({
          fullName: "",
          email: "",
          contact: "",
        });

        setShowModal(false);
      } else {
        toast.error(data?.message || "Something went wrong");
      }
    } catch (error) {
      toast.error("Server error");
    } finally {
      setModalLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen pt-16 sm:pt-20 overflow-hidden">
      <ToastContainer />

      {/* PAGE HEADER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white">
          {course.title}
        </h1>

        <p className="text-sm md:text-base text-gray-500 dark:text-gray-300 mt-2">
          Home / Technology /
          <span className="text-orange-500 ml-1">{course.title}</span>
        </p>
      </div>

      {/* MAIN SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-8 pb-14">
        {/* LEFT SIDE */}
        <div className="lg:col-span-2">
          {/* IMAGE */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm mb-6">
            <img
              src={bg}
              alt={course.title}
              className="w-full h-64 sm:h-72 md:h-80 object-cover"
            />
          </div>

          {/* TABS */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-4 sm:p-6">
            {/* TAB BUTTONS */}
            <div className="flex flex-wrap gap-6 border-b border-gray-200 dark:border-gray-700 pb-4">
              <button
                onClick={() => setActiveTab("curriculum")}
                className={`font-medium transition ${
                  activeTab === "curriculum"
                    ? "text-orange-500 border-b-2 border-orange-500 pb-2"
                    : "text-gray-600 dark:text-gray-300"
                }`}
              >
                Curriculum
              </button>

              <button
                onClick={() => setActiveTab("overview")}
                className={`font-medium transition ${
                  activeTab === "overview"
                    ? "text-orange-500 border-b-2 border-orange-500 pb-2"
                    : "text-gray-600 dark:text-gray-300"
                }`}
              >
                Overview
              </button>
            </div>

            {/* TAB CONTENT */}
            <div className="mt-6 text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-7">
              {/* OVERVIEW */}
              {activeTab === "overview" && (
                <>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                    {course.title} Course Description
                  </h2>

                  <p>
                    Learn {course.title} from beginner to advanced level with
                    real-world projects and industry-focused training.
                  </p>

                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white mt-8 mb-3">
                    Certification
                  </h2>

                  <p>
                    Get industry-recognized certification after successful
                    completion of the course.
                  </p>

                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white mt-8 mb-3">
                    Who This Course is For
                  </h2>

                  <p>
                    Students, beginners, working professionals, and anyone
                    interested in learning modern technologies.
                  </p>
                </>
              )}

              {/* CURRICULUM */}
              {activeTab === "curriculum" && (
                <div>
                  {/* TOP */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
                      Course Curriculum
                    </h2>

                    <button
                      onClick={() => setShowModal(true)}
                      className="bg-orange-500 hover:bg-black transition text-white px-6 py-3 rounded-xl font-medium"
                    >
                      Download Curriculum
                    </button>
                  </div>

                  {/* ACCORDION */}
                  <div className="space-y-4">
                    {course.curriculum.map((item, index) => (
                      <div
                        key={index}
                        className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"
                      >
                        {/* HEADER */}
                        <button
                          onClick={() =>
                            setOpenIndex(
                              openIndex === index ? null : index
                            )
                          }
                          className="w-full flex items-center justify-between px-5 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                        >
                          <span className="font-semibold text-left text-gray-800 dark:text-white">
                            {item.title}
                          </span>

                          {openIndex === index ? (
                            <FaMinus className="text-gray-500 dark:text-gray-300" />
                          ) : (
                            <FaPlus className="text-gray-500 dark:text-gray-300" />
                          )}
                        </button>

                        {/* CONTENT */}
                        {openIndex === index && (
                          <div className="px-8 py-5 bg-gray-50 dark:bg-gray-900">
                            <ul className="list-disc space-y-2 text-black dark:text-gray-200">
                              {item.content.map((lesson, i) => (
                                <li key={i}>{lesson}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="sticky top-24 h-fit">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            {/* TOP */}
            <div className="bg-orange-500 p-6 text-white">
              <h2 className="text-2xl font-bold">Attend a Free Demo</h2>

              <p className="text-sm mt-2 text-orange-100">
                Fill the details and we will contact you shortly
              </p>
            </div>

            {/* SIDEBAR FORM */}
            <form onSubmit={handleSidebarSubmit}>
              <div className="p-6 space-y-4">
                <input
                  type="text"
                  name="fullName"
                  value={sidebarFormData.fullName}
                  onChange={handleSidebarChange}
                  placeholder="Your Name"
                  required
                  className={inputClass}
                />

                <input
                  type="email"
                  name="email"
                  value={sidebarFormData.email}
                  onChange={handleSidebarChange}
                  placeholder="Email Address"
                  required
                  className={inputClass}
                />

                <input
                  type="tel"
                  name="contact"
                  value={sidebarFormData.contact}
                  onChange={handleSidebarChange}
                  placeholder="+91 Contact Number"
                  required
                  className={inputClass}
                />

                <button
                  type="submit"
                  disabled={sidebarLoading}
                  className="w-full bg-orange-500 hover:bg-black transition text-white py-3 rounded-xl font-semibold"
                >
                  {sidebarLoading ? "Sending..." : "Send Inquiry"}
                </button>
              </div>
            </form>

            {/* SOCIAL */}
            <div className="px-6 pb-6">
              <p className="text-center text-orange-500 font-medium mb-4">
                Share This Course
              </p>

              <div className="flex justify-center gap-3">
                {[FaEnvelope, FaTwitter, FaLinkedinIn, FaInstagram].map(
                  (Icon, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white hover:bg-orange-500 hover:text-white transition cursor-pointer"
                    >
                      <Icon size={14} />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MORE COURSES */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
          More Courses You Might Like
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.slice(0, 3).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden w-full max-w-md"
          >
            {/* TOP */}
            <div className="bg-orange-500 p-6 text-white relative">
              <h2 className="text-2xl font-bold">Attend a Free Demo</h2>

              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-4 text-3xl"
              >
                ×
              </button>

              <p className="text-sm mt-2 text-orange-100">
                Fill the details and we will contact you shortly
              </p>
            </div>

            {/* MODAL FORM */}
            <form onSubmit={handleModalSubmit}>
              <div className="p-6 space-y-4">
                <input
                  type="text"
                  name="fullName"
                  value={modalFormData.fullName}
                  onChange={handleModalChange}
                  placeholder="Your Name"
                  required
                  className={inputClass}
                />

                <input
                  type="email"
                  name="email"
                  value={modalFormData.email}
                  onChange={handleModalChange}
                  placeholder="Email Address"
                  required
                  className={inputClass}
                />

                <input
                  type="tel"
                  name="contact"
                  value={modalFormData.contact}
                  onChange={handleModalChange}
                  placeholder="+91 Contact Number"
                  required
                  className={inputClass}
                />

                <button
                  type="submit"
                  disabled={modalLoading}
                  className="w-full bg-orange-500 hover:bg-black transition text-white py-3 rounded-xl font-semibold"
                >
                  {modalLoading ? "Sending..." : "Send Inquiry"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetailsPage;