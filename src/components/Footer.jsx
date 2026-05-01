import React from "react";
import {
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { LuPhoneCall } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    { icon: FaFacebookF, url: "https://facebook.com" },
    { icon: FaWhatsapp, url: "https://wa.me/919409259294" },
    {
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com/in/infinity3-technology-0aba81342?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/infinity3technology?igsh=bTR3dDM2ZWgwbmVt",
    },
  ];
  return (
    <footer className="bg-gray-50 text-gray-600 pt-20">
      <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Column 1 */}
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" className="w-32 mb-5" />
          </Link>

          <p className="text-sm leading-relaxed text-gray-500">
            Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Social Icons */}
          {/* <div className="flex gap-3 mt-6">
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
          </div> */}
          <div className="flex gap-3 mt-6">
            {socialLinks.map((item, i) => {
              const Icon = item.icon;
              return (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm border border-gray-200 hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  <Icon size={14} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-gray-800 font-semibold mb-6 text-lg relative inline-block">
            Explore
            <span className="block w-10 h-0.5 bg-orange-500 mt-1"></span>
          </h3>

          <ul className="space-y-3 text-sm">
            <li className="hover:text-orange-500 hover:pl-1 transition-all duration-200">
              <Link to="/">Home</Link>
            </li>

            <li className="hover:text-orange-500 hover:pl-1 transition-all duration-200">
              <Link to="/about">About Us</Link>
            </li>

            <li className="hover:text-orange-500 hover:pl-1 transition-all duration-200">
              <Link to="/blog">Blog Grid</Link>
            </li>

            <li className="hover:text-orange-500 hover:pl-1 transition-all duration-200">
              <Link to="/contact-us">Contact Us</Link>
            </li>

            <li className="hover:text-orange-500 hover:pl-1 transition-all duration-200">
              <Link to="/case-studies">Case Studies</Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-gray-800 font-semibold mb-6 text-lg relative inline-block">
            Resources
            <span className="block w-10 h-0.5 bg-orange-500 mt-1"></span>
          </h3>

          <ul className="space-y-3 text-sm">
            {[
              "Content Marketing",
              "Digital Strategy",
              "Email Marketing",
              "SaaS Solutions",
              "E-Commerce",
            ].map((item, i) => (
              <li
                key={i}
                className="hover:text-orange-500 hover:pl-1 transition-all duration-200 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-gray-800 font-semibold mb-6 text-lg relative inline-block">
            Contact
            <span className="block w-10 h-0.5 bg-orange-500 mt-1"></span>
          </h3>

          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3 hover:text-orange-500 hover:pl-1 transition-all duration-200 cursor-pointer">
              <SlLocationPin
                className="text-orange-500 min-w-[20px]"
                size={16}
              />
              <p>
                205, Emerald Complex, CG Road, Near Mithakhali, Navrangpura,
                Ahmedabad Gujarat 380009
              </p>
            </div>

            <div className="flex items-center gap-3 hover:text-orange-500 hover:pl-1 transition-all duration-200 cursor-pointer">
              <a href="tel:+919409259294" className="flex items-center gap-3 ">
                <LuPhoneCall className="text-orange-500" size={16} />
                <p>+91 94092 59294</p>
              </a>
            </div>

            <div className="flex items-center gap-3 hover:text-orange-500 hover:pl-1 cursor-pointer transition-all duration-200">
              <a
                href="mailto:infinity3tech@gmail.com"
                className="flex items-center gap-3 hover:text-orange-500 transition"
              >
                <MdOutlineMailOutline className="text-orange-500" size={16} />
                <p>infinity3tech@gmail.com</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 mt-16 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Infinity3 technology. All Rights
            Reserved.
          </p>

          <div className="flex gap-4 mt-3 md:mt-0">
            <p className="hover:text-orange-500 cursor-pointer transition">
              <Link to="/privacy-policy">Privacy Policy</Link>
            </p>
            <p className="hover:text-orange-500 cursor-pointer transition">
              <Link to="terms-conditions">Terms & Conditions</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
