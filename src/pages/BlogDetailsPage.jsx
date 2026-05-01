import React from "react";
import { useParams } from "react-router-dom";
import blogs from "../data/blogs";
import Sidebar from "../components/Sidebar";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import PageHeader from "../components/PageHeader";

const BlogDetailsPage = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <div className="text-center py-20">Blog not found</div>;
  }

  const relatedPosts = blogs.slice(0, 2);

  return (
    <div className="bg-gray-50 min-h-screen pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* HEADER */}
        
       <PageHeader title=" Blog Details" />
        

        <div className="grid lg:grid-cols-3 gap-10">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2">
            {/* BLOG CARD */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              {/* IMAGE */}
              <img src={blog.image} alt="" className="w-full  object-cover" />

              <div className="p-6">
                {/* META */}
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                  <img
                    src={blog.avatar}
                    className="w-8 h-8 rounded-full"
                    alt=""
                  />
                  <span>{blog.author}</span>
                  <span>•</span>
                  <span>{blog.date}</span>
                </div>

                {/* TITLE */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 leading-snug">
                  {blog.title}
                </h2>

                {/* CONTENT */}
                <p className="text-gray-600 leading-relaxed mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit...
                </p>

                {/* QUOTE */}
                <blockquote className="bg-gray-100 border-l-4 border-orange-500 p-4 italic text-gray-600 rounded-md mb-6">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </blockquote>

                <p className="text-gray-600 leading-relaxed mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit...
                </p>

                {/* LIST */}
                <h3 className="font-semibold text-black text-lg mb-3">
                  Four major elements that we offer:
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-600 mb-6">
                  <li>Scientific skills for better results</li>
                  <li>Communication skills</li>
                  <li>Career opportunities</li>
                  <li>Good work environment</li>
                </ul>
                <h3 className="font-semibold text-black text-lg mb-3">
                  Setting the mood with incense
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime fugiat aspernatur, beatae voluptatum, quo repudiandae
                  tenetur sint dolores consectetur quibusdam non qui eveniet
                  neque asperiores nulla aliquid cupiditate ipsam voluptate?
                </p>
                <h3 className="font-semibold text-black text-lg mb-3">
                  The rise of marketing and why you need it
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime fugiat aspernatur, beatae voluptatum, quo repudiandae
                  tenetur sint dolores consectetur quibusdam non qui eveniet
                  neque asperiores nulla aliquid cupiditate ipsam voluptate?
                </p>
                <br />
                {/* TAGS + SHARE */}
                <div className="flex flex-wrap justify-between items-center border-y py-4 mb-6">
                  <div className="flex gap-2 flex-wrap">
                    {["Fashion", "Games", "Travel"].map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 px-3 py-1 font-bold text-black rounded-full text-sm hover:bg-orange-500 cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-center gap-3  sm:mt-0">
                    <span className="text-sm font-bold text-black">Share:</span>

                    <div className="flex justify-center items-center gap-3 ">
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
                </div>

                {/* AUTHOR */}
                <div className="flex gap-4 bg-gray-50 p-5 rounded-xl">
                  <img
                    src={blog.avatar}
                    className="w-16 h-16 rounded-full"
                    alt=""
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {blog.author}
                    </h4>
                    <p className="text-sm text-gray-500 mb-1">
                      Photographer, Author, Writer
                    </p>
                    <p className="text-sm text-gray-600">
                      Chris Orwig is a celebrated photographer and writer who
                      brings passion to everything he does.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RELATED POSTS */}
            <div className="bg-white mt-8 p-6 rounded-2xl shadow-sm">
              <h3 className="font-semibold text-lg mb-4">Related Posts</h3>

              <div className="grid sm:grid-cols-2 gap-4">
                {relatedPosts.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <img
                      src={item.image}
                      className="w-24 h-20 rounded-lg object-cover"
                      alt=""
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        {item.title}
                      </p>
                      <p className="text-xs text-gray-400">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* COMMENTS */}
            <div className="bg-white mt-8 p-6 rounded-2xl shadow-sm">
              <h3 className="font-semibold text-lg mb-6">2 Comments</h3>

              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                  <div>
                    <h4 className="font-medium text-gray-800">John Jones</h4>
                    <p className="text-xs text-gray-400 mb-1">April 24, 2025</p>
                    <p className="text-gray-600 text-sm">
                      Lorem Ipsum has been the industry standard.
                    </p>
                    <button className="text-xs text-orange-500 mt-1 ">
                      Reply
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* REPLY FORM */}
            <div className="bg-white mt-8 p-6 rounded-2xl shadow-sm">
              <h3 className="font-semibold text-black text-lg mb-4">
                Leave a Reply
              </h3>

              <p className="text-sm text-black mb-4">
                Your email address will not be published.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <input
                  className="border text-black rounded-lg px-3 py-2 w-full"
                  placeholder="Your Name*"
                />
                <input
                  className="border text-black rounded-lg px-3 py-2 w-full"
                  placeholder="Your Email*"
                />
              </div>

              <input
                className="border text-black rounded-lg px-3 py-2 w-full mb-4"
                placeholder="Website"
              />

              <textarea
                className="border text-black rounded-lg px-3 py-2 w-full mb-4"
                rows="4"
                placeholder="Your Comment..."
              />

              <div className="flex items-center gap-2 mb-4">
                <input
                  type="checkbox"
                  className="w-4 h-4  border  rounded cursor-pointer bg-white"
                />
                <label
                  htmlFor="saveInfo"
                  className="text-sm text-gray-700 cursor-pointer"
                >
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </label>
              </div>

              <button className="bg-orange-500 cursor-pointer hover:bg-black text-white px-6 py-2 rounded-lg transition">
                Post Comment
              </button>
            </div>
          </div>

          {/* SIDEBAR */}
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
