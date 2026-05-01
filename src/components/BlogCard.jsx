import React from "react";

import { BsCalendar2Week } from "react-icons/bs";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
      <Link to={`/blog-details/${blog.id}`}>
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">
        {/* Author + Date */}
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-2">
            <img
              src={blog.avatar}
              alt="author"
              className="w-6 h-6 rounded-full"
            />
            <span>{blog.author}</span>
          </div>

          <span className="flex items-center gap-1">
               <BsCalendar2Week className="text-orange-500" size={20} /> {blog.date}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 leading-snug hover:text-orange-500 cursor-pointer">
          {blog.title}
        </h3>
      </div>
    </div>
    </Link>
  );
};

export default BlogCard;