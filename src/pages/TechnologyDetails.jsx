import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import techData from "../data/techData";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const TechnologyDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const technology = techData.find((tech) => {
    const techSlug = tech.title
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/\s+/g, "-");

    return techSlug === slug;
  });

  if (!technology) {
    return (
      <h2 className="p-10 text-red-500">
        Technology Not Found
      </h2>
    );
  }

  const allTechnologies = technology.items;

  return (
    <div className="bg-gray-50 pt-16 md:pt-20 overflow-hidden">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
          {technology.title}
        </h1>

        <p className="text-sm md:text-base text-gray-500 mt-2">
          Technology /{" "}
          <span className="text-orange-500">
            {technology.title}
          </span>
        </p>
      </div>

      {/* MAIN SECTION */}
      <div className="bg-gray-100 py-8 md:py-10 px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* ABOUT */}
            <div className="bg-white p-5 md:p-6 rounded-2xl shadow-md border border-gray-100">
              
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-black">
                About {technology.title}
              </h2>

              <p className="text-gray-700 leading-7 md:leading-8 text-sm md:text-base tracking-wide">
                {technology.description}
              </p>
            </div>

            {/* FEATURES */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* FEATURES BOX */}
              <div className="bg-white p-5 md:p-6 rounded-2xl shadow-md border border-gray-100">
                
                <h3 className="text-xl font-bold mb-4 text-black">
                  Features
                </h3>

                <ul className="space-y-3">
                  {technology.features.map((f, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-700 text-sm md:text-base"
                    >
                      <span className="w-2 h-2 mt-2 bg-orange-500 rounded-full shrink-0"></span>

                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* WHY LEARN */}
              <div className="bg-white p-5 md:p-6 rounded-2xl shadow-md border border-gray-100">
                
                <h3 className="text-xl font-bold mb-4 text-black">
                  Why Learn It?
                </h3>

                <p className="text-gray-600 leading-7 text-sm md:text-base">
                  {technology.title} is widely used in modern industry and helps
                  you build scalable real-world applications.
                </p>
              </div>
            </div>

            {/* USE CASES */}
            <div className="bg-white p-5 md:p-6 rounded-2xl shadow-md border border-gray-100">
              
              <h3 className="text-xl text-black font-bold mb-4">
                Use Cases
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {technology.useCases.map((u, i) => (
                  <div
                    key={i}
                    className="bg-gray-100 p-3 rounded-lg text-center text-sm md:text-base hover:bg-orange-500 hover:text-white transition"
                  >
                    {u}
                  </div>
                ))}
              </div>
            </div>

            {/* ROADMAP */}
            <div className="bg-white p-5 md:p-6 rounded-2xl shadow-md border border-gray-100">
              
              <h3 className="text-xl text-black font-bold mb-4">
                Learning Roadmap
              </h3>

              <ol className="space-y-4">
                {technology.roadmap.map((r, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-gray-700 text-sm md:text-base"
                  >
                    <span className="font-bold text-orange-500 shrink-0">
                      {i + 1}.
                    </span>

                    <span>{r}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* PROJECTS */}
            <div className="bg-white p-5 md:p-6 rounded-2xl shadow-md border border-gray-100">
              
              <h3 className="text-xl font-bold text-black mb-4">
                Project Ideas
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {technology.projects.map((p, i) => (
                  <div
                    key={i}
                    className="p-4 bg-gray-50 rounded-xl border hover:bg-orange-500 hover:text-white transition cursor-pointer text-sm md:text-base"
                  >
                    {p}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-black to-gray-800 text-white p-6 sm:p-8 md:p-10 rounded-2xl text-center shadow-xl">
              
              <h2 className="text-2xl md:text-3xl font-bold leading-snug">
                Start Learning {technology.title}
              </h2>

              <p className="text-gray-300 mt-3 text-sm md:text-base">
                Build real-world projects and become job-ready.
              </p>

              <button
                onClick={() => navigate(`/internship-details/${slug}`)}
                className="mt-6 bg-orange-500 px-6 py-3 rounded-xl hover:bg-orange-600 transition text-sm md:text-base"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-6">
            
            {/* TECHNOLOGY LIST */}
            <div className="bg-white p-5 md:p-6 rounded-2xl shadow-md border border-gray-100">
              
              <h3 className="text-lg md:text-xl text-black font-bold mb-4">
                Technologies
              </h3>

              <ul className="space-y-3">
                {allTechnologies.map((item, i) => {
                  const slug = item
                    .toLowerCase()
                    .replace(/\s+/g, "-");

                  return (
                    <Link key={i} to={`/course-details/${slug}`}>
                      
                      <li className="flex justify-between items-center px-4 py-3 rounded-lg hover:bg-orange-500 hover:text-white transition group bg-white">
                        
                        <span className="text-sm md:text-base font-medium text-gray-800 group-hover:text-white break-words">
                          {item}
                        </span>

                        <MdOutlineKeyboardArrowRight className="group-hover:translate-x-1 transition text-gray-400 group-hover:text-white shrink-0" />
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>

            {/* INFO BOX */}
            <div className="bg-white p-5 md:p-6 rounded-2xl shadow-md border border-gray-100">
              
              <h3 className="text-lg font-semibold text-black mb-3">
                Why Choose This Technology?
              </h3>

              <p className="text-sm md:text-base text-gray-600 leading-6 md:leading-7">
                Mastering {technology.title} improves your skills and opens
                career opportunities in modern software development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyDetails;