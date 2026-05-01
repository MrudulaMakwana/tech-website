import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import bg from "./../assets/images/course-details-bg.jpg";
import coursePreviewBg from "./../assets/images/course-preview-bg.jpg";
import CourseCard from "../components/CourseCard";
import courses from "../data/coursesData";
import { GiDuration } from "react-icons/gi";
import { MdOutlinePlayLesson } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import { MdLockOpen } from "react-icons/md";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { MdLockOutline } from "react-icons/md";
import { LuTag } from "react-icons/lu";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import instructorImg from "../assets/images/blogperson1.jpg";
import blogperson1 from "../assets/images/blogperson1.jpg";
import blogperson2 from "../assets/images/blogperson2.jpg";
import blogperson3 from "../assets/images/blogperson3.jpg";
import blogperson4 from "../assets/images/blogperson4.jpg";
import PageHeader from "../components/PageHeader";
import { FaPlus, FaMinus } from "react-icons/fa";
const CourseDetailsPage = () => {
  const { slug } = useParams();
  const [openIndex, setOpenIndex] = useState(0);
  const course = courses.find((item) => item.slug === slug);
  const [activeTab, setActiveTab] = useState("overview");
  const navigate=useNavigate();
 const curriculumData = [
  {
    title: "WD - HTML",
    content: [
      "Student Intro, Career Center Login",
      "What is Internet, HTTP/HTTPS",
      "HTML Introduction",
      "HTML Tags and Attributes",
      "HTML Images, Links, Lists",
      "Forms and Tables",
    ],
  },
  {
    title: "CSS and CSS3",
    content: [
      "CSS Syntax",
      "Selectors",
      "Flexbox",
      "Grid",
      "Responsive Design",
    ],
  },
  {
    title: "Website Designing - HTML5",
    content: [
      "Semantic Tags",
      "Audio & Video",
      "Canvas",
      "SVG",
    ],
  },
  {
    title: "JavaScript Basic & DOM",
    content: [
      "Variables",
      "Functions",
      "DOM Manipulation",
      "Events",
    ],
  },
  {
    title: "React - Components, State, Props",
    content: [
      "JSX",
      "Components",
      "Props",
      "State",
      "Conditional Rendering",
    ],
  },
];

  return (
    <>
      <div className="bg-gray-50  pt-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* HEADER */}

          {/* <PageHeader title="Course Details" /> */}
          <div className="max-w-7xl mx-auto px-6 py-10">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
              Course Details-{course.title}
            </h1>

            <p className="text-sm md:text-base text-gray-500 mt-2">
              Home /Course Details/{" "}
              <span className="text-orange-500">{course.title}</span>
            </p>
          </div>

          {/* MAIN SECTION */}
          <div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-3 gap-8">
            {/* LEFT SIDE */}
            <div className="lg:col-span-2">
              {/* IMAGE BANNER */}
              <div className="bg-white rounded-xl overflow-hidden mb-6">
                <img src={bg} alt="" className="w-full h-72 object-cover" />
              </div>

              {/* TABS */}
              <div className="bg-white rounded-xl p-4 mb-6">
                <div className="flex gap-6 border-b pb-3 text-gray-600">
                  <button
                    onClick={() => setActiveTab("overview")}
                    className={`${activeTab === "overview" ? "text-orange-500 border-b-2 border-orange-500 pb-2" : ""}`}
                  >
                    Overview
                  </button>

                  <button
                    onClick={() => setActiveTab("curriculum")}
                    className={`${activeTab === "curriculum" ? "text-orange-500 border-b-2 border-orange-500 pb-2" : ""}`}
                  >
                    Curriculum
                  </button>

                  {/* <button
                    onClick={() => setActiveTab("instructor")}
                    className={`${activeTab === "instructor" ? "text-orange-500 border-b-2 border-orange-500 pb-2" : ""}`}
                  >
                    Instructor
                  </button> */}

                  {/* <button
                    onClick={() => setActiveTab("reviews")}
                    className={`${activeTab === "reviews" ? "text-orange-500 border-b-2 border-orange-500 pb-2" : ""}`}
                  >
                    Reviews
                  </button> */}
                </div>
                {/* CONTENT */}
                <div className="mt-4 text-gray-600 text-sm leading-relaxed">
                  {activeTab === "overview" && (
                    <>
                      <h2 className="text-lg font-semibold text-gray-800 mb-2">
                        {course.title} Course Description
                      </h2>

                      <p>
                        Learn {course.title} from beginner to advanced level
                        with real-world projects and industry-focused training.
                      </p>

                      <h2 className="text-lg font-semibold text-gray-800 mt-6 mb-2">
                        Certification
                      </h2>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Aliquam fugit aliquid porro non tempora ea atque
                        possimus incidunt dolores consectetur.
                      </p>
                      <h2 className="text-lg font-semibold text-gray-800 mt-6 mb-2">
                        Who this course is for
                      </h2>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Blanditiis id asperiores quidem, sequi recusandae
                        numquam.
                      </p>
                    </>
                  )}
                  {activeTab === "curriculum" && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* LEFT SIDE */}
                      <div className="lg:col-span-3">
                        <div className="bg-white rounded-2xl shadow-sm p-6">
                          {/* HEADING */}
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                            <h2 className="text-3xl font-bold text-gray-800">
                              Course Curriculum
                            </h2>

                            <button className="bg-orange-500 hover:bg-black transition text-white px-6 py-3 rounded-xl font-medium" onClick={()=>{navigate(`/contact-us`)}}>
                              Download Curriculum
                            </button>
                          </div>

                          {/* ACCORDION */}
                          <div className="space-y-4">
                            {curriculumData.map((item, index) => (
                              <div
                                key={index}
                                className="border border-gray-200 rounded-xl overflow-hidden"
                              >
                                {/* HEADER */}
                                <button
                                  onClick={() =>
                                    setOpenIndex(
                                      openIndex === index ? null : index,
                                    )
                                  }
                                  className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-gray-50 transition"
                                >
                                  <span className="font-semibold text-lg text-gray-800">
                                    {item.title}
                                  </span>

                                  {openIndex === index ? (
                                    <FaMinus className="text-gray-500" />
                                  ) : (
                                    <FaPlus className="text-gray-500" />
                                  )}
                                </button>

                                {/* CONTENT */}
                                {openIndex === index && (
                                  <div className="px-8 py-5 bg-gray-50">
                                    <ul className="list-disc space-y-2 text-black">
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
                      </div>
                    </div>
                  )}

                  {activeTab === "instructor" && (
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                      {/* LEFT IMAGE */}
                      <div className="w-full md:w-1/3">
                        <img
                          src={instructorImg}
                          alt="Instructor"
                          className="w-full h-60 object-cover rounded-lg"
                        />
                      </div>

                      {/* RIGHT CONTENT */}
                      <div className="w-full md:w-2/3">
                        <h2 className="text-2xl font-bold text-gray-800">
                          Sarah Taylor
                        </h2>

                        <p className="text-orange-500 mt-1 font-medium">
                          Agile Project Expert
                        </p>

                        {/* SOCIAL ICONS */}
                        <div className="flex gap-3 mt-4">
                          <div className="bg-gray-200 p-2 rounded hover:bg-orange-500 hover:text-white cursor-pointer transition">
                            <FaFacebookF />
                          </div>
                          <div className="bg-gray-200 p-2 rounded hover:bg-orange-500 hover:text-white cursor-pointer transition">
                            <FaTwitter />
                          </div>
                          <div className="bg-gray-200 p-2 rounded hover:bg-orange-500 hover:text-white cursor-pointer transition">
                            <FaInstagram />
                          </div>
                          <div className="bg-gray-200 p-2 rounded hover:bg-orange-500 hover:text-white cursor-pointer transition">
                            <FaLinkedinIn />
                          </div>
                        </div>

                        {/* OPTIONAL DESCRIPTION */}
                        <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                          Sarah Taylor is a highly experienced Agile Project
                          Expert with over 10+ years of experience in project
                          management, helping teams deliver high-quality
                          products efficiently.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* {activeTab === "reviews" && (
                    <p>Student reviews will show here</p>
                  )} */}
                  {activeTab === "reviews" && (
                    <div>
                      {/* COURSE RATING */}
                      <div className="mb-8">
                        <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                          Course Rating
                          <span className="text-orange-400 text-sm">★★★★☆</span>
                        </h2>
                        <p className="text-sm text-gray-500 mt-1">
                          4.1 average based on 4 reviews.
                        </p>

                        {/* PROGRESS BARS */}
                        <div className="mt-6 space-y-4">
                          {[
                            {
                              star: 5,
                              count: 2,
                              width: "90%",
                              color: "bg-green-500",
                            },
                            {
                              star: 4,
                              count: 3,
                              width: "75%",
                              color: "bg-blue-500",
                            },
                            {
                              star: 3,
                              count: 4,
                              width: "55%",
                              color: "bg-cyan-500",
                            },
                            {
                              star: 2,
                              count: 5,
                              width: "35%",
                              color: "bg-orange-400",
                            },
                            {
                              star: 1,
                              count: 0,
                              width: "5%",
                              color: "bg-gray-300",
                            },
                          ].map((item) => (
                            <div
                              key={item.star}
                              className="flex items-center gap-4"
                            >
                              <div className="w-12 text-sm text-gray-700">
                                {item.star} star
                              </div>

                              <div className="flex-1 bg-gray-200 h-3 rounded-full overflow-hidden">
                                <div
                                  className={`${item.color} h-3 rounded-full`}
                                  style={{ width: item.width }}
                                ></div>
                              </div>

                              <div className="w-6 text-sm text-gray-600">
                                {item.count.toString().padStart(2, "0")}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* REVIEWS LIST */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-6">
                          3 Reviews
                        </h3>

                        {[
                          {
                            name: "James Anderson",
                            rating: 5,
                            title: "Excellent",
                            text: "Very well built theme, couldn't be happier with it. Can't wait for future updates to see what else they add in.",
                            img: blogperson1,
                          },
                          {
                            name: "Sarah Taylor",
                            rating: 3,
                            title: "Video Quality!",
                            text: "Was really easy to implement and they quickly answer my additional questions!",
                            img: blogperson2,
                          },
                          {
                            name: "David Warner",
                            rating: 5,
                            title: "Perfect Coding!",
                            text: "Stunning design, very dedicated crew who welcome new ideas suggested by customers, nice support.",
                            img: blogperson3,
                          },
                          {
                            name: "King Kong",
                            rating: 4,
                            title: "Perfect Video!",
                            text: "Stunning design, very dedicated crew who welcome new ideas suggested by customers, nice support.",
                            img: blogperson4,
                          },
                        ].map((review, index) => (
                          <div
                            key={index}
                            className="flex gap-4 py-6 border-b last:border-none"
                          >
                            {/* IMAGE */}
                            <img
                              src={review.img}
                              alt=""
                              className="w-14 h-14 rounded-md object-cover"
                            />

                            {/* CONTENT */}
                            <div>
                              {/* STARS + NAME */}
                              <div className="flex items-center gap-2">
                                <span className="text-orange-400 text-sm">
                                  {"★".repeat(review.rating)}
                                  {"☆".repeat(5 - review.rating)}
                                </span>
                                <h4 className="font-semibold text-gray-800">
                                  {review.name}
                                </h4>
                              </div>

                              {/* TITLE */}
                              <p className="font-semibold text-gray-700 mt-1">
                                {review.title}
                              </p>

                              {/* TEXT */}
                              <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                                {review.text}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE (CARD) */}
            {/* <div>
              <div className="bg-white rounded-xl shadow p-5 sticky top-24">
                {/* VIDEO PREVIEW 
                <div className="relative mb-4">
                  <img src={coursePreviewBg} className="rounded-lg" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl">
                      ▶
                    </div>
                  </div>
                </div>

                {/* DETAILS 
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <div className="flex justify-center items-center gap-3">
                      <LuTag className="text-orange-500 text-lg" />
                      Price
                    </div>
                    <span className="text-orange-500 font-semibold">
                      <span>{course.price}</span>
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <div className="flex justify-center items-center gap-3">
                      <LiaChalkboardTeacherSolid className="text-orange-500 text-lg" />
                      Instructor
                    </div>
                    <span>{course.author}</span>
                  </div>

                  <div className="flex justify-between">
                    <div className="flex justify-center items-center gap-3">
                      <GiDuration className="text-orange-500 text-lg" />
                      Duration
                    </div>
                    <span>{course.duration}</span>
                  </div>

                  <div className="flex justify-between">
                    <div className="flex justify-center items-center gap-3">
                      <MdOutlinePlayLesson className="text-orange-500 text-lg" />
                      Lessons
                    </div>
                    <span>25</span>
                  </div>

                  <div className="flex justify-between">
                    <div className="flex justify-center items-center gap-3">
                      <FaUserGraduate className="text-orange-500 text-lg" />
                      Enrolled
                    </div>
                    <span>255 students</span>
                  </div>

                  <div className="flex justify-between">
                    <div className="flex justify-center items-center gap-3">
                      <MdLockOpen className="text-orange-500 text-lg" />
                      Access
                    </div>
                    <span>Lifetime</span>
                  </div>
                </div>

                {/* BUTTONS 
                <div className="mt-6 space-y-3">
                  <button className="w-full bg-orange-500 text-white py-2 rounded-lg cursor-pointer hover:bg-black transition">
                    Add to Cart
                  </button>
                  <button className="w-full bg-gray-100 text-black border py-2 rounded-lg cursor-pointer hover:bg-black hover:text-white transition">
                    Buy Now
                  </button>
                </div>

                <p className="text-center text-orange-500 mt-4 text-sm">
                  Share This Course
                </p>
                <div className="flex justify-center items-center gap-3 mt-6">
                  {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
                    (Icon, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm border border-gray-200 hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-pointer"
                      >
                        <Icon size={14} />
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div> */}

            {/* RIGHT SIDE FORM */}
            <div className="sticky top-24 h-fit">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
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
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
                  />

                  <input
                    type="tel"
                    placeholder="+91 Contact Number"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
                  />

                  <button className="w-full bg-orange-500 hover:bg-black transition text-white py-3 rounded-xl font-semibold">
                    Send Inquiry
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* MORE COURSES */}
          <div className="max-w-7xl mx-auto px-6 py-12">
            <h2 className="text-2xl font-bold text-center mb-8">
              More Projects You Might Like
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* reuse your CourseCard here */}
              {courses.slice(0, 3).map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetailsPage;
