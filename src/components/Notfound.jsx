import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1B1F23] text-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-[#2F343A] p-10 rounded-3xl shadow-2xl text-center border border-[#D8FF57]/40 max-w-md w-full"
      >
        <motion.div
          initial={{ rotate: -10, scale: 0.8 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <AlertTriangle size={60} className="text-[#D8FF57]" />
        </motion.div>

        <h1 className="text-4xl font-bold mb-4 text-[#D8FF57]">404</h1>
        <p className="text-gray-300 text-lg mb-6">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>

        <button
          onClick={() => navigate("/")}
          className="bg-[#D8FF57] text-black font-semibold py-3 px-8 rounded-full hover:scale-105 transition-transform"
        >
          Go Home
        </button>
      </motion.div>

      <p className="text-gray-500 text-xs mt-8">
        © 2025 Cyber Crime Division & SHE Teams, Hyderabad | All Rights
        Reserved.
      </p>
    </div>
  );
};

export default NotFound;
