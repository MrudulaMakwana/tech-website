import React, { useState } from "react";
import CourseCard from "../components/CourseCard";
import courses from "../data/coursesData";
import PageHeader from "../components/PageHeader";

const CoursesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const coursesPerPage = 6;

  const indexOfLast = currentPage * coursesPerPage;
  const indexOfFirst = indexOfLast - coursesPerPage;

  const currentCourses = courses.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(courses.length / coursesPerPage);

  return (
    <div className="bg-gray-100  pt-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* HEADER */}
       <PageHeader title="Courses"/>

        {/* CONTENT */}
        <div className="max-w-7xl mx-auto px-6 py-10">
          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {/* PAGINATION */}
          <div className="flex justify-center mt-12 items-center gap-2">
            {/* PREV */}
            <button
              onClick={() => setCurrentPage((prev) => prev - 1)}
              disabled={currentPage === 1}
              className="px-3 py-2 bg-white rounded shadow disabled:opacity-50"
            >
              «
            </button>

            {/* NUMBERS */}
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
    </div>
  );
};

export default CoursesPage;
