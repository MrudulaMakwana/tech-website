import React from "react";
import { useLocation, Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import internshipData from "../data/internshipData";
import coursesData from "../data/coursesData";
import blogs from "../data/blogs";
import { FaSearch } from "react-icons/fa";
const SearchResults = () => {
  const query = new URLSearchParams(useLocation().search).get("q") || "";

  //  Combine all data
 const allData = [
  ...servicesData.map((item) => ({
    ...item,
    description: item.desc, 
    type: "service",
    link: `/service-details/${item.id}`,
  })),

  ...internshipData.map((item) => ({
    ...item,
    description: item.desc, 
    type: "internship",
    link: `/internship-details/${item.id}`,
  })),

 
];

  //  Filter logic
const results = allData.filter((item) => {
  const text = `
    ${item.title || ""}
    ${item.desc || ""}
    ${item.description || ""}
  `.toLowerCase();

  const searchWords = query.toLowerCase().split(" ");

  return searchWords.every((word) => text.includes(word));
});


  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-6">
      <div className="max-w-6xl mx-auto mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Search Results</h2>
        <p className="text-gray-500 mt-2">
          Showing results for:
          <span className="text-orange-500 font-semibold">"{query}"</span>
        </p>
      </div>

      {results.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20 text-center">
          <div className="text-6xl">
            <FaSearch className="text-orange-500 cursor-pointer" />
          </div>
          <h3 className="text-xl font-semibold mt-4 text-gray-700">
            No results found
          </h3>
          <p className="text-gray-500 mt-2">
            Try searching with different keywords
          </p>

          <Link
            to="/"
            className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-black transition"
          >
            Go Back Home
          </Link>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {results.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="group bg-white border rounded-xl p-5 shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-1"
            >
              {/*  Type Badge */}
              <span className="inline-block text-xs px-3 py-1 rounded-full bg-orange-100 text-orange-600 mb-3 capitalize">
                {item.type}
              </span>

              {/*  Title */}
              <h3 className="font-semibold text-lg text-gray-800 group-hover:text-orange-500 transition">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 mt-2 line-clamp-3">
                {item.description}
              </p>

              {/*  Read More */}
              <div className="mt-4 text-orange-500 text-sm font-medium group-hover:underline">
                View Details 
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
