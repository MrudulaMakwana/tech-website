import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "+919409259294"; 

  const handleClick = () => {
    window.open(
      `https://wa.me/${phoneNumber}`,
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 left-6 z-50 bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition"
    >
      <FaWhatsapp size={24} />
    </button>
  );
};

export default WhatsAppButton;