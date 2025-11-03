import React from "react";
import { useNavigate } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import QRCode from "../assets/qr-code.png"; // your QR image

const QRCodePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1B1F23] text-white px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-[#2F343A] p-8 rounded-3xl shadow-2xl flex flex-col items-center text-center w-full max-w-md border border-[#D8FF57]/40"
      >
        {/* Security Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-2 mb-4 text-[#D8FF57] text-sm font-medium"
        >
          <ShieldCheck size={18} />
          <span> Be Alert, Stay Safe - Cyber Crime Hyderabad</span>
        </motion.div>

        {/* QR Section */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 120 }}
          className="relative mb-6"
        >
          <div className="bg-white p-4 rounded-xl shadow-inner">
            <motion.img
              src={QRCode}
              alt="QR Code"
              className="w-46 h-48 rounded-lg"
            />
          </div>

          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 rounded-xl bg-[#D8FF57]/10 blur-2xl -z-10"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </motion.div>

        {/* Text Section */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-gray-400 mb-6 text-sm"
        >
          Scan the QR to access official Cyber Crime and SHE Teams channels for
          safety updates and support.
        </motion.p>

        {/* Button */}
        <motion.button
          onClick={() => navigate("/connect")}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 150 }}
          className="bg-[#D8FF57] text-black font-semibold py-3 px-8 rounded-full hover:shadow-lg hover:shadow-[#D8FF57]/30 transition-all"
        >
          Click to Connect
        </motion.button>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-gray-500 text-xs mt-8"
        >
          © 2025 Cyber Crime Division & SHE Teams, Hyderabad | All Rights
          Reserved.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default QRCodePage;
