import React from "react";
import { ArrowLeft} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Social media icons (your own images)
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
      link: "https://www.facebook.com/sheteamhyd?rdid=WEXV2C5oxqLhWIR2&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Bd29uKbMn%2F#",
    },
    { icon: twitter, label: "Twitter", link: "https://x.com/hydsheteam" },
    { icon: youtube, label: "YouTube", link: "#" },
    {
      icon: globe,
      label: "Website",
      link: "https://womensafetywing.telangana.gov.in/she-module/she-teams/",
    },
  ];

  const cyberCrimeLinks = [
    { icon: instagram, label: "Instagram", link: "#" },
    { icon: facebook, label: "Facebook", link: "#" },
    { icon: twitter, label: "Twitter", link: "#" },
    { icon: youtube, label: "YouTube", link: "#" },
    { icon: globe, label: "Website", link: "#" },
  ];

  return (
    <div className="min-h-screen bg-[#F4F5F6] flex flex-col items-center py-10 px-6">
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 text-gray-600 mb-6 self-start hover:text-black"
      >
        <ArrowLeft size={20} /> Back
      </button>

      <h1 className="text-3xl font-bold mb-8 text-[#1B1F23]">
        Connect with Us
      </h1>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* SHE Teams Section */}
        <div className="bg-[#1B1F23] text-white p-8 rounded-2xl shadow-lg">
          <img
            src={sheTeamsLogo}
            className="w-20 h-20 object-contain rounded-full bg-[#F4F5F6]"
            alt="SHE Teams logo"
          />
          <h2 className="text-xl font-semibold mb-4 text-[#D8FF57]">
            SHE Teams
          </h2>
          <p className="text-gray-300 mb-6">
            Stay connected with SHE Teams and follow their awareness programs.
          </p>
          <div className="space-y-4">
            {sheTeamsLinks.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 bg-[#2F343A] hover:bg-[#D8FF57] hover:text-black transition p-3 rounded-xl"
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-8 h-8 object-contain"
                />
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Cyber Crime Section */}
        <div className="bg-[#1B1F23] text-white p-8 rounded-2xl shadow-lg">
          <img
            src={cyberCrimeLogo}
            alt="Cyber crime logo"
            className="w-20 h-20 object-contain rounded-full bg-[#F4F5F6] p-2"
          />
          <h2 className="text-xl font-semibold mb-4 text-[#D8FF57]">
            Cyber Crime
          </h2>
          <p className="text-gray-300 mb-6">
            Reach official cybercrime units for digital safety and reporting.
          </p>
          <div className="space-y-4">
            {cyberCrimeLinks.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 bg-[#2F343A] hover:bg-[#D8FF57] hover:text-black transition p-3 rounded-xl"
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-8 h-8 object-contain"
                />
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <footer className="text-gray-500 text-sm mt-10">
        © 2025 TS Police | All Rights Reserved.
      </footer>
    </div>
  );
};

export default ConnectPage;
