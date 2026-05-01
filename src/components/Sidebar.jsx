import React from "react";
import blogs from "../data/blogs";
import { FaSearch } from "react-icons/fa";

const SectionTitle = ({ children }) => (
  <div className="mb-4">
    <h3 className="text-lg  text-black font-semibold">{children}</h3>
    <div className="w-10 h-0.5 bg-orange-500 mt-1"></div>
  </div>
);

const Sidebar = () => {
  return (
    <div className="space-y-10">

      {/* Search */}
      <div>
        <SectionTitle>Search</SectionTitle>

        <div className="flex items-center bg-gray-100 rounded-md px-4 py-3">
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent outline-none text-sm"
          />
          <FaSearch className="text-orange-500 text-sm" />
        </div>
      </div>

      {/* Popular Posts */}
      <div>
        <SectionTitle>Popular Posts</SectionTitle>

        <div className="space-y-4">
          {blogs.slice(0, 3).map((blog) => (
            <div key={blog.id} className="flex gap-3 items-start">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-16 h-16 rounded-md object-cover"
              />

              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  {blog.date}
                </p>
                <p className="text-sm font-semibold text-gray-800 leading-snug hover:text-orange-500 cursor-pointer">
                  {blog.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div>
        <SectionTitle>Categories</SectionTitle>

        <ul className="space-y-3 text-sm text-gray-700">
          {[
            "Design (03)",
            "Lifestyle (05)",
            "Script (10)",
            "Device (08)",
            "Tips (01)",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div>
        <SectionTitle>Popular Tags</SectionTitle>

        <div className="flex flex-wrap gap-2">
          {[
            "Business (3)",
            "Design (3)",
            "Braike (2)",
            "Fashion (2)",
            "Travel (1)",
            "Smart (1)",
            "Marketing (1)",
            "Tips (2)",
          ].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-200 text-black text-sm rounded-md hover:bg-orange-500 hover:text-white cursor-pointer transition"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Sidebar;