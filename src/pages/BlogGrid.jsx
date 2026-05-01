import React, { useState } from "react";
import BlogCard from "../components/BlogCard";
import blogs from "../data/blogs";
import PageHeader from "../components/PageHeader";

const BlogGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const blogsPerPage = 9;

  const indexOfLast = currentPage * blogsPerPage;
  const indexOfFirst = indexOfLast - blogsPerPage;

  const currentBlogs = blogs.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      
      {/* Header */}
      
       <PageHeader title=" Blog Grid" />
    

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-10 gap-2 items-center">

          {/* PREV */}
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
            className="px-3 py-2 bg-white rounded shadow disabled:opacity-50"
          >
            «
          </button>

          {/* PAGE NUMBERS */}
          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;

            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded ${
                  currentPage === page
                    ? "bg-orange-500 text-white"
                    : "bg-white shadow"
                }`}
              >
                {page}
              </button>
            );
          })}

          {/* NEXT */}
          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-2 bg-white rounded shadow disabled:opacity-50"
          >
            »
          </button>

        </div>
      </div>
    </div>
  );
};

export default BlogGrid;