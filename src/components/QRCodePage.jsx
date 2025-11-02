import React from "react";
import { useNavigate } from "react-router-dom";
import { ShieldCheck, Smartphone } from "lucide-react"; 
import QRCode from "../assets/qr-code.png";

const QRCodePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1B1F23] text-white px-6">
      <div className="bg-[#2F343A] p-8 rounded-3xl shadow-2xl flex flex-col items-center text-center w-full max-w-md border border-[#D8FF57]/40">
        {/* Security Badge */}
        <div className="flex items-center gap-2 mb-4 text-[#D8FF57] text-sm font-medium">
          <ShieldCheck size={18} />
          <span>Official Telangana Police Portal</span>
        </div>

        {/* Animated Scanner Vector */}
        <div className="relative mb-6">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-[#D8FF57] animate-pulse">
            <Smartphone size={28} className="mx-auto mb-2" />
            <p className="text-xs tracking-wide">Scan QR to Connect</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-inner">
            <img
              src={QRCode}
              alt="QR Code"
              className="w-46 h-48 rounded-lg"
            />
          </div>
        </div>

        {/* Text Section */}
        <h1 className="text-2xl font-semibold mb-2">Connect Securely ✨</h1>
        <p className="text-gray-400 mb-6 text-sm">
          Scan the QR to access official SHE Teams & Cyber crime awareness
          channels.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/connect")}
          className="bg-[#D8FF57] text-black font-semibold py-3 px-8 rounded-full hover:scale-105 transition-transform"
        >
          Continue to Connect
        </button>

        {/* Footer */}
        <p className="text-gray-500 text-xs mt-8">
          © 2025 Telangana Police | SHE Teams & Cybercrime Division
        </p>
      </div>
    </div>
  );
};

export default QRCodePage;
