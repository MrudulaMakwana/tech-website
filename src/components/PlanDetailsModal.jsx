import React from "react";
import { IoClose } from "react-icons/io5";

const PlanDetailsModal = ({ plan, techTitle, onClose }) => {
  if (!plan) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 px-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-gray-50 text-black max-w-2xl w-full rounded-xl p-8 relative shadow-xl max-h-[90vh] overflow-y-auto"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4  text-xl"
        >
          <IoClose />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-orange-400 mb-2">
          {techTitle}
        </h2>

        <h3 className="text-xl font-semibold mb-6">
          {plan.duration} Program - {plan.level}
        </h3>

        {/* Features */}
        <h4 className="text-orange-400 font-semibold mb-3">
          Program Features:
        </h4>

        <ul className="space-y-2 mb-6">
          {plan.topics.map((topic, i) => (
            <li key={i}>✔ {topic}</li>
          ))}
        </ul>

        {/* About */}
        <h4 className="text-orange-400 font-semibold mb-2">
          About This Technology:
        </h4>
        <p className="text-black mb-6 text-sm">
          {plan.about}
        </p>

        {/* Learn */}
        <h4 className="text-orange-400 font-semibold mb-2">
          What You'll Learn: 
        </h4>

        <p className="text-black text-sm">
          {plan.learn}
        </p>
      </div>
    </div>
  );
};

export default PlanDetailsModal;