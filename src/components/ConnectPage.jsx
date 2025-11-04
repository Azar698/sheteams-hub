import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Social media icons
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube.png";
import globe from "../assets/globe.png";

// Logos
import cyberCrimeLogo from "../assets/cybercrime-logo.png";
import sheTeamsLogo from "../assets/she-teams-logo.png";

const ConnectPage = () => {
  const navigate = useNavigate();

  const sheTeamsLinks = [
    {
      icon: instagram,
      label: "Instagram",
      link: "https://www.instagram.com/hydsheteams",
    },
    {
      icon: facebook,
      label: "Facebook",
      link: "https://www.facebook.com/sheteamhyd",
    },
    { icon: twitter, label: "Twitter", link: "https://x.com/hydsheteam" },
    {
      icon: youtube,
      label: "YouTube",
      link: "https://www.youtube.com/@sheteamhyd",
    },
    {
      icon: globe,
      label: "Website",
      link: "https://hyderabadpolice.gov.in/SheTeam&Bharosa.html",
    },
  ];

  const cyberCrimeLinks = [
    {
      icon: instagram,
      label: "Instagram",
      link: "https://www.instagram.com/cybercrimepshyd",
    },
    {
      icon: facebook,
      label: "Facebook",
      link: "https://www.facebook.com/cybercrimepshyd/",
    },
    { icon: twitter, label: "Twitter", link: "https://x.com/CyberCrimeshyd" },
    {
      icon: youtube,
      label: "YouTube",
      link: "https://www.youtube.com/@cybercrimespshyd",
    },
    {
      icon: globe,
      label: "Website",
      link: "https://hyderabadpolice.gov.in/cyber_crimes_hyderabad_police_station.html",
    },
  ];

  return (
    <motion.div
      className="min-h-screen bg-[#F4F5F6] flex flex-col items-center py-10 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Back Button */}
      <motion.button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 text-gray-600 mb-6 self-start hover:text-black"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowLeft size={20} /> Back
      </motion.button>

      <motion.h1
        className="text-3xl font-bold mb-5 text-[#1B1F23]"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Be Alert and Stay Safe
      </motion.h1>

      <motion.p
        className="text-md font-semibold mb-8 text-[#1B1F23]"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Stay Connected with Us for Updates.
      </motion.p>

      <motion.div
        className="grid md:grid-cols-2 gap-8 w-full max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {/* Cyber Crime Section */}
        <motion.div
          className="bg-[#1B1F23] text-white p-8 rounded-2xl shadow-lg"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src={cyberCrimeLogo}
            alt="Cyber crime logo"
            className="w-20 h-20 object-contain rounded-full bg-[#F4F5F6] p-2"
            whileHover={{ rotate: 10 }}
          />
          <h2 className="text-xl font-semibold mb-4 text-[#D8FF57] mt-4">
            Cyber Crime
          </h2>
          <p className="text-gray-300 mb-6">
            Reach out to our official cyber crime social media channels for
            online safety and reporting.
          </p>
          <div className="space-y-4">
            {cyberCrimeLinks.map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 bg-[#2F343A] hover:bg-[#D8FF57] hover:text-black transition p-3 rounded-xl"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-8 h-8 object-contain"
                />
                <span>{item.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* SHE Teams Section */}
        <motion.div
          className="bg-[#1B1F23] text-white p-8 rounded-2xl shadow-lg"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src={sheTeamsLogo}
            className="w-20 h-20 object-contain rounded-full bg-[#F4F5F6]"
            alt="SHE Teams logo"
            whileHover={{ rotate: 10 }}
          />
          <h2 className="text-xl font-semibold mb-4 text-[#D8FF57] mt-4">
            SHE Teams
          </h2>
          <p className="text-gray-300 mb-6">
            Stay connected with our SHE Teams through official social media
            channels for awareness and assistance.
          </p>
          <div className="space-y-4">
            {sheTeamsLinks.map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 bg-[#2F343A] hover:bg-[#D8FF57] hover:text-black transition p-3 rounded-xl"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-8 h-8 object-contain"
                />
                <span>{item.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.footer
        className="text-gray-500 text-sm mt-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        © 2025 Cyber Crime Division & SHE Teams, Hyderabad | All Rights Reserved.
      </motion.footer>
    </motion.div>
  );
};

export default ConnectPage;
