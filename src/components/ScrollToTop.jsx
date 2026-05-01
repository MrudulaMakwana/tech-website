import React, { useEffect, useState } from "react";
import { FaChevronUp, FaWhatsapp } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation();

  const phoneNumber = "919409259294";

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  // Show button after scroll
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=Hello, I want more information`,
      "_blank"
    );
  };

  return (
    <>
      {visible && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">

          {/* WhatsApp Button */}
          <button
            onClick={openWhatsApp}
            className="bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition"
          >
            <FaWhatsapp size={22} />
          </button>

          {/* Scroll To Top Button */}
          <button
            onClick={scrollToTop}
            className=" bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-black transition"
          >
            <FaChevronUp />
          </button>

        </div>
      )}
    </>
  );
};

export default ScrollToTop;