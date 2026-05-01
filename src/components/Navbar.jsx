import React, { useState, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import logo from "./../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [mobileSubMenu, setMobileSubMenu] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isLocked, setIsLocked] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const dropdownRef = useRef();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
        setIsOpen(false);
    }
  };
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
        setIsLocked(false);
      }
    };

    const handleScroll = () => {
      setOpenDropdown(null);
      setIsLocked(false);
      setOpenSubMenu(null);
      setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //  Handle menu click
  const handleMenuClick = (menu) => {
    if (menu === "home") {
      if (isLocked) {
        setOpenDropdown(null);
        setIsLocked(false);
      } else {
        setOpenDropdown("home");
        setIsLocked(true);
      }
    } else {
      setOpenDropdown(null);
      setIsLocked(false);
    }
  };

  return (
    <nav className="w-full fixed top-0 left-0 bg-white z-50 shadow-sm">
      {/* <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] z-50"> */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* <div className="max-w-7xl mx-auto px-6  flex items-center justify-between"> */}
        {/* <div className="flex items-center justify-between px-5 py-3 
  bg-white/10 backdrop-blur-lg 
  border border-white/20 
  rounded-2xl shadow-lg"> */}
        {/* Logo */}

        <Link to="/" className="hover:text-orange-500">
          {/* <img
            src={logo}
            alt="LOGO"
            className="h-20 w-auto object-contain cursor-pointer"
          /> */}
          <img src={logo} alt="LOGO" className="h-10 w-auto object-contain" />
        </Link>
        {/* Menu */}
        <ul className="ml-6 hidden md:flex items-center gap-8 text-black font-medium">
          <li>
            <Link to="/" className="hover:text-orange-500">
              Home
            </Link>
          </li>

          {/* SERVICES DROPDOWN */}
          <li
            className="relative"
            onMouseEnter={() => setOpenDropdown("services")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <div className="flex items-center gap-1 cursor-pointer hover:text-orange-500">
              <Link to="/services">Services </Link>
              {/* <FaChevronDown size={12} /> */}
            </div>

            {/* {openDropdown === "services" && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-md w-56">
                <span className="block h-1 bg-orange-500"></span>
                <ul className="py-2 text-sm">
                  <li>
                    <Link
                      to="/services"
                      className="block px-4 py-2 hover:text-orange-500"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/service-details/1"
                      className="block px-4 py-2 hover:text-orange-500"
                    >
                      Services Details
                    </Link>
                  </li>
                </ul>
              </div>
            )} */}
          </li>
          {/*  Case Studies */}
          <li
            className="relative"
            onMouseEnter={() => setOpenDropdown("case")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <div className="flex items-center gap-1 cursor-pointer hover:text-orange-500">
              <Link to="/case-studies"> Case Studies</Link>
              {/* <FaChevronDown size={12} /> */}
            </div>

            {/* {openDropdown === "case" && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-md w-56">
                <span className="block h-1 bg-orange-500"></span>

                <ul className="py-2 text-sm">
                  <li>
                    <Link
                      to="/case-studies"
                      className="block px-4 py-2 hover:text-orange-500"
                    >
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/case-studies/1"
                      className="block px-4 py-2 hover:text-orange-500"
                    >
                      Case Studies Details
                    </Link>
                  </li>
                </ul>
              </div>
            )} */}
          </li>
          <li
            className="relative"
            onMouseEnter={() => setOpenDropdown("technology")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <div className="flex items-center gap-1 cursor-pointer hover:text-orange-500">
              <Link to="/technology"> Technology</Link>
            </div>
          </li>

          {/* Internship */}

          <li
            className="relative"
            onMouseEnter={() => setOpenDropdown("internship")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <div className="flex items-center gap-1 cursor-pointer hover:text-orange-500">
              <Link to="/internship">Internship</Link>
              {/* <FaChevronDown size={12} /> */}
            </div>

            {/* {openDropdown === "internship" && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-md w-56">
                <span className="block h-1 bg-orange-500"></span>

                <ul className="py-2 text-sm">
                  <li>
                    <Link
                      to="/internship"
                      className="block px-4 py-2 hover:text-orange-500"
                    >
                      Internship
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/internship-details/1"
                      className="block px-4 py-2 hover:text-orange-500"
                    >
                      Internship Details
                    </Link>
                  </li>
                </ul>
              </div>
            )} */}
          </li>
          <li
            className="relative"
            onMouseEnter={() => setOpenDropdown("about")}
            onMouseLeave={() => {
              setOpenDropdown(null);
              setOpenSubMenu(null);
            }}
          >
            <div className="flex items-center gap-1 cursor-pointer hover:text-orange-500">
              About <FaChevronDown size={12} />
            </div>

            {openDropdown === "about" && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-md w-56">
                <span className="block h-1 bg-orange-500"></span>

                <ul className="py-2 text-sm">
                  <li>
                    <Link
                      to="/about"
                      className="block px-4 py-2 hover:text-orange-500"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/team"
                      className="block px-4 py-2 hover:text-orange-500"
                    >
                      Team
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/gallery"
                      className="block px-4 py-2 hover:text-orange-500"
                    >
                      Gallery
                    </Link>
                  </li>

                  {/* EVENTS */}
                  {/* <li
                    className="relative group px-4 py-2 cursor-pointer"
                    onMouseEnter={() => setOpenSubMenu("events")}
                    onMouseLeave={() => setOpenSubMenu(null)}
                  >
                    <div className="flex justify-between items-center hover:text-orange-500">
                      <span className="group-hover:text-orange-500">
                        Events
                      </span>
                      <MdOutlineKeyboardArrowRight className="group-hover:text-orange-500" />
                    </div>

                    {openSubMenu === "events" && (
                      <div className="absolute top-0 left-full bg-white shadow-lg rounded-md w-52 z-50">
                        <span className="block h-1 bg-orange-500"></span>

                        <ul className="py-2 text-sm">
                          <li>
                            <Link
                              to="/events"
                              className="block px-4 py-2 text-black hover:text-orange-500"
                            >
                              Events
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="event-details/1"
                              className="block px-4 py-2 text-black hover:text-orange-500"
                            >
                              Event Details
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </li> */}
                  <li>
                    <Link
                      to="/faq"
                      className="block px-4 py-2 hover:text-orange-500"
                    >
                      FAQ
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/contact-us"
                      className="block px-4 py-2 hover:text-orange-500"
                    >
                      Contact Us
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      to="/privacy-policy"
                      className="block px-4 py-2 hover:text-orange-500"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/terms-conditions"
                      className="block px-4 py-2 hover:text-orange-500"
                    >
                      Terms & Conditions
                    </Link>
                  </li> */}
                </ul>
              </div>
            )}
          </li>

          {/* <li
            className="relative"
            onMouseEnter={() => setOpenDropdown("blog")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <div className="flex items-center gap-1 cursor-pointer hover:text-orange-500">
              Blog <FaChevronDown size={12} />
            </div>

            {openDropdown === "blog" && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-md w-56">
                <span className="block h-1 bg-orange-500"></span>

                <ul className="py-2 text-sm">
                  <li>
                    <Link
                      to="/blog"
                      className="block px-4 py-2 hover:text-orange-500"
                    >
                      Blog Grid
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog-rightsidebar"
                      className="block px-4 py-2 hover:text-orange-500"
                    >
                      Blog Right Sidebar
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog-details/1"
                      className="block px-4 py-2 hover:text-orange-500"
                    >
                      Blog Details
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li> */}
        </ul>

        {/* Right Section */}
        <div className="ml-4 hidden md:flex items-center gap-4">
          {/* Search */}
          <div className="flex items-center  rounded-md px-3 text-black border-0 py-2 bg-gray-200">
            <input
              type="text"
              placeholder="Search here..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
              className="outline-none bg-transparent text-sm"
            />
            <FaSearch
              className="text-orange-500 cursor-pointer"
              onClick={handleSearch}
            />
          </div>

          {/* Button */}
          <button
            className="w-full flex justify-center items-center gap-2 text-center bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-black transition"
            onClick={() => navigate("/contact-us")}
          >
            <FaArrowRightLong /> <span>Get Started</span>
          </button>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden flex items-center gap-4">
          {/* Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-black"
          >
            ☰
          </button>
        </div>
      </div>
      <>
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Side Drawer */}
        <div
          className={`fixed top-0 left-0 w-[280px] h-full z-50 md:hidden p-4 overflow-y-auto
    bg-white/10 backdrop-blur-xl border-r border-white/20
    transition-transform duration-300 ease-in-out
    ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6 border-b border-white/20 pb-3">
            <img src={logo} alt="logo" className="h-8" />
            <button
              onClick={() => setIsOpen(false)}
              className="text-xl text-white hover:text-orange-400"
            >
              ✕
            </button>
          </div>

          {/* Menu Items */}
          <div className="space-y-2 text-white font-medium">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-white/10 hover:text-orange-400 transition"
            >
              Home
            </Link>

            <Link
              to="/services"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-white/10 hover:text-orange-400 transition"
            >
              Services
            </Link>

            <Link
              to="/case-studies"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-white/10 hover:text-orange-400 transition"
            >
              Case Studies
            </Link>

            <Link
              to="/technology"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-white/10 hover:text-orange-400 transition"
            >
              Technology
            </Link>

            <Link
              to="/internship"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-white/10 hover:text-orange-400 transition"
            >
              Internship
            </Link>

            {/* About Dropdown */}
            <div className="border border-white/20 rounded-lg overflow-hidden">
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="w-full flex justify-between items-center px-3 py-2 hover:bg-white/10 transition"
              >
                About
                <FaChevronDown
                  className={`transition-transform ${
                    aboutOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {aboutOpen && (
                <div className="bg-white/10 backdrop-blur-md border-t border-white/20">
                  <Link
                    to="/about"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-sm hover:text-orange-400 hover:bg-white/10"
                  >
                    About Us
                  </Link>

                  <Link
                    to="/team"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-sm hover:text-orange-400 hover:bg-white/10"
                  >
                    Team
                  </Link>

                  <Link
                    to="/gallery"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-sm hover:text-orange-400 hover:bg-white/10"
                  >
                    Gallery
                  </Link>

                  <Link
                    to="/faq"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-sm hover:text-orange-400 hover:bg-white/10"
                  >
                    FAQ
                  </Link>

                  <Link
                    to="/contact-us"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-sm hover:text-orange-400 hover:bg-white/10"
                  >
                    Contact Us
                  </Link>
                </div>
              )}
            </div>

            {/* Search */}
            <div className="flex items-center gap-2 border border-white/20 rounded-md px-3 py-2 bg-white/10 mt-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-transparent outline-none text-sm text-white placeholder:text-white/60"
                value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
              />
              <FaSearch className="text-orange-400" onClick={handleSearch}/>
            </div>

            {/* Button */}
            <button
              onClick={() => {
                navigate("/contact-us");
                setIsOpen(false);
              }}
              className="w-full flex justify-center items-center gap-2 
        bg-orange-500 text-white px-4 py-2 rounded-md 
        hover:bg-black transition mt-3 shadow-lg"
            >
              <FaArrowRightLong />
              Get Started
            </button>
          </div>
        </div>
      </>
    </nav>
  );
};

export default Navbar;
