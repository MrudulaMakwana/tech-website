import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import bg from "./../assets/images/course-details-bg.jpg";
import CourseCard from "../components/CourseCard";
import courses from "../data/coursesData";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import blogperson1 from "../assets/images/blogperson1.jpg";
import blogperson2 from "../assets/images/blogperson2.jpg";
import blogperson3 from "../assets/images/blogperson3.jpg";
import blogperson4 from "../assets/images/blogperson4.jpg";

const CourseDetailsPage = () => {
  const { slug } = useParams();
  const [openIndex, setOpenIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("curriculum");
  const navigate = useNavigate();
  const course = courses.find((item) => item.slug === slug);
  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <h1 className="text-2xl font-bold text-black dark:text-white">
          Course Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen pt-16 sm:pt-20 overflow-hidden">
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
              alt=""
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
                      onClick={() => navigate("/contact-us")}
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
                            setOpenIndex(openIndex === index ? null : index)
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

              {/* REVIEWS */}
              {activeTab === "reviews" && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                    Student Reviews
                  </h2>

                  {[
                    {
                      name: "James Anderson",
                      rating: 5,
                      title: "Excellent",
                      text: "Very well built course with practical examples.",
                      img: blogperson1,
                    },
                    {
                      name: "Sarah Taylor",
                      rating: 4,
                      title: "Very Helpful",
                      text: "Easy to understand and beginner friendly.",
                      img: blogperson2,
                    },
                    {
                      name: "David Warner",
                      rating: 5,
                      title: "Perfect",
                      text: "Best course structure and real-world projects.",
                      img: blogperson3,
                    },
                    {
                      name: "King Kong",
                      rating: 4,
                      title: "Amazing",
                      text: "Loved the teaching style and support.",
                      img: blogperson4,
                    },
                  ].map((review, index) => (
                    <div
                      key={index}
                      className="flex gap-4 py-6 border-b border-gray-200 dark:border-gray-700"
                    >
                      <img
                        src={review.img}
                        alt=""
                        className="w-14 h-14 rounded-full object-cover"
                      />

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-orange-400">
                            {"★".repeat(review.rating)}
                          </span>

                          <h4 className="font-semibold text-gray-800 dark:text-white">
                            {review.name}
                          </h4>
                        </div>

                        <p className="font-medium text-gray-700 dark:text-gray-200 mt-1">
                          {review.title}
                        </p>

                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          {review.text}
                        </p>
                      </div>
                    </div>
                  ))}
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

            {/* FORM */}
            <div className="p-6 space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="
                  w-full
                  border border-gray-300 dark:border-gray-700
                  bg-white dark:bg-gray-900
                  text-black dark:text-white
                  rounded-xl px-4 py-3
                  outline-none
                  focus:ring-2 focus:ring-orange-400
                "
              />

              <input
                type="email"
                placeholder="Email Address"
                className="
                  w-full
                  border border-gray-300 dark:border-gray-700
                  bg-white dark:bg-gray-900
                  text-black dark:text-white
                  rounded-xl px-4 py-3
                  outline-none
                  focus:ring-2 focus:ring-orange-400
                "
              />

              <input
                type="tel"
                placeholder="+91 Contact Number"
                className="
                  w-full
                  border border-gray-300 dark:border-gray-700
                  bg-white dark:bg-gray-900
                  text-black dark:text-white
                  rounded-xl px-4 py-3
                  outline-none
                  focus:ring-2 focus:ring-orange-400
                "
              />

              <button className="w-full bg-orange-500 hover:bg-black transition text-white py-3 rounded-xl font-semibold">
                Send Inquiry
              </button>
            </div>

            {/* SOCIAL */}
            <div className="px-6 pb-6">
              <p className="text-center text-orange-500 font-medium mb-4">
                Share This Course
              </p>

              <div className="flex justify-center gap-3">
                {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
                  (Icon, i) => (
                    <div
                      key={i}
                      className="
                        w-10 h-10
                        flex items-center justify-center
                        rounded-full
                        bg-gray-100 dark:bg-gray-700
                        text-gray-700 dark:text-white
                        hover:bg-orange-500 hover:text-white
                        transition
                        cursor-pointer
                      "
                    >
                      <Icon size={14} />
                    </div>
                  ),
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
    </div>
  );
};

export default CourseDetailsPage;
