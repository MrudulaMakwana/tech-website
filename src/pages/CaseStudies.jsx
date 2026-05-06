import React from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { caseStudies } from "../data/caseStudies";
import PageHeader from "../components/PageHeader";
import CTA from "../components/CTA";

const CaseStudies = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      {/* HEADER */}
      <PageHeader title="Portfolio" />

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        {caseStudies.map((item) => (
          <div
            key={item.id}
            className="group 
            bg-white dark:bg-gray-800 
            rounded-xl shadow-md overflow-hidden 
            hover:shadow-xl hover:-translate-y-2 
            transition-all duration-300 
            border border-gray-200 dark:border-gray-700"
          >
            {/* IMAGE */}
            <div className="relative overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
              />

              {/* OVERLAY */}
              <div
                className="absolute inset-0 
                bg-orange-500/70 opacity-0 
                group-hover:opacity-100 
                transition flex items-center justify-center"
              >
                <Link to={`/case-studies/${item.slug}`}>
                  <div
                    className="w-12 h-12 flex items-center justify-center 
                    rounded-full bg-white text-orange-500 
                    hover:bg-black hover:text-white 
                    transition"
                  >
                    <FaPlus />
                  </div>
                </Link>
              </div>

              {/* CATEGORY */}
              <span
                className="absolute top-4 left-4 
                bg-orange-500 text-white 
                text-xs px-3 py-1 rounded-full"
              >
                {item.category}
              </span>
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <h3
                className="text-lg font-semibold 
                text-black dark:text-white 
                group-hover:text-orange-500 transition"
              >
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
      <CTA />
    </div>
  );
};

export default CaseStudies;
