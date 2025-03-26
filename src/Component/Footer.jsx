// import React from "react";
// import { Link } from "react-router-dom";
// import { FiInstagram, FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";
// import footer from "../Images/footer.png"

// export default function Footer() {
//   return (
//     <footer className="bg-orange-500 text-white py-8">
//       <div className="container mx-auto px-4">
//         {/* Top Section */}
//         <div className="flex flex-col md:flex-row justify-between items-center mb-8">
//           {/* Heading */}
//           <h2 className="text-lg md:text-2xl font-bold text-center md:text-left mb-4 md:mb-0">
//             Connect with Us for Business Solutions
//           </h2>

//           {/* Email Input */}
//           <div className="flex items-center bg-white rounded-lg overflow-hidden">
//             <input
//               type="email"
//               placeholder="Enter Mail"
//               className="px-4 py-2 w-full text-gray-700 outline-none"
//             />
//             <button className="px-4 py-2 bg-orange-500 text-white">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={2}
//                 stroke="currentColor"
//                 className="w-6 h-6 "
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M21 8.5L3.75 3m0 0L8.5 21l12.5-12.5z"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Middle Section */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
//           {/* Address Section */}
//           <div>
//             <img src={footer} alt="Solvi Globe Logo" className="mb-4" />
//             <p className="text-sm">
//               Address: G33, MBC-Meridian Business Center, Lajamni Chowk,
//               opposite Opera Business center, Mota Varachha, Surat, Gujarat
//               394105
//             </p>
//             {/* Social Icons */}
//             <div className="flex space-x-4 mt-4">
//               <FiInstagram className="w-6 h-6 hover:text-gray-300 cursor-pointer" />
//               <FiFacebook className="w-6 h-6 hover:text-gray-300 cursor-pointer" />
//               <FiLinkedin className="w-6 h-6 hover:text-gray-300 cursor-pointer" />
//               <FiTwitter className="w-6 h-6 hover:text-gray-300 cursor-pointer" />
//             </div>
//           </div>

//           {/* Company Links */}
//           <div>
//             <h3 className="font-bold mb-4">Company</h3>
//             <ul className="space-y-2 text-sm">
//               <li>Why choose us</li>
//               <li>Review</li>
//               <li>Customers</li>
//               <li>Blog</li>
//             <Link to="/Registration"> <li>Register as Vendor</li></Link>
//             </ul>
//           </div>

//           {/* Industry Links */}
//           <div>
//             <h3 className="font-bold mb-4">Industry</h3>
//             <ul className="space-y-2 text-sm">
//               <li>Aviation Spare Parts</li>
//               <li>Chemicals</li>
//               <li>Oil & Gas</li>
//               <li>Metals</li>
//               <li>Commodities</li>
//               <li>FMCG Products</li>
//               <li>Plastic Raw Materials</li>
//               <li>Pharmaceutical Products</li>
//             </ul>
//           </div>

//           {/* Services Links */}
//           <div>
//             <h3 className="font-bold mb-4">Services</h3>
//             <ul className="space-y-2 text-sm">
//               <li>Sourcing & Processing</li>
//               <li>Recycling & Sustainability</li>
//               <li>Supply Chain & Logistics</li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="text-center text-sm border-t border-white pt-4">
//           © 2025 All rights reserved by Solvi Globe
//         </div>
//       </div>
//     </footer>
//   );
// }


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiInstagram, FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";
import footer from "../Images/footer.png";

export default function Footer() {
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setLanguageDropdownOpen(!languageDropdownOpen);
  };

  const languages = [
    { name: "English", flag: "🇬🇧" },
    { name: "हिंदी", flag: "🇮🇳" },
    { name: "Español", flag: "🇪🇸" },
    { name: "عربي", flag: "🇦🇪" },
    { name: "Русский", flag: "🇷🇺" },
    { name: "Deutsch", flag: "🇩🇪" },
    { name: "Français", flag: "🇫🇷" },
    { name: "Português", flag: "🇵🇹" },
    { name: "日本語", flag: "🇯🇵" },
    { name: "中文", flag: "🇨🇳" },
  ];

  return (
    <footer className="bg-orange-500 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Heading */}
          <h2 className="text-lg md:text-2xl font-bold text-center md:text-left mb-4 md:mb-0">
            Connect with Us for Business Solutions
          </h2>

          {/* Email Input */}
          <div className="flex items-center bg-white rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter Mail"
              className="px-4 py-2 w-full text-gray-700 outline-none"
            />
            <button className="px-4 py-2 bg-white text-gray-500 outline-none">
              Subscribe
            </button>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Address Section */}
          <div>
            <img src={footer} alt="Solvi Globe Logo" className="mb-4" />
            <p className="text-sm">
              Address: G33, MBC-Meridian Business Center, Lajamni Chowk,
              opposite Opera Business center, Mota Varachha, Surat, Gujarat
              394105
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <FiInstagram className="w-6 h-6 hover:text-gray-300 cursor-pointer" />
              <FiFacebook className="w-6 h-6 hover:text-gray-300 cursor-pointer" />
              <FiLinkedin className="w-6 h-6 hover:text-gray-300 cursor-pointer" />
              <FiTwitter className="w-6 h-6 hover:text-gray-300 cursor-pointer" />
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>Why choose us</li>
              <li>Review</li>
              <li>Customers</li>
              <li>Blog</li>
              <Link to="/Registration">
                <li>Register as Vendor</li>
              </Link>
            </ul>
          </div>

          {/* Industry Links */}
          <div>
            <h3 className="font-bold mb-4">Industry</h3>
            <ul className="space-y-2 text-sm">
              <li>Aviation Spare Parts</li>
              <li>Chemicals</li>
              <li>Oil & Gas</li>
              <li>Metals</li>
              <li>Commodities</li>
              <li>FMCG Products</li>
              <li>Plastic Raw Materials</li>
              <li>Pharmaceutical Products</li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Sourcing & Processing</li>
              <li>Recycling & Sustainability</li>
              <li>Supply Chain & Logistics</li>
            </ul>
          </div>
        </div>

        {/* Language Selector Dropdown */}
        <div className="relative flex justify-end mb-8">
          {/* Dropdown Trigger */}
          <button
            onClick={toggleDropdown}
            className="bg-[#1F4278] text-white px-4 py-2 w-[200px] rounded-md flex items-center"
          >
             English
            {/* Dropdown Arrow */}
            {languageDropdownOpen ? (
              <span className="ml-25">▲</span>
            ) : (
              <span className="ml-25">▼</span>
            )}
          </button>

          {/* Dropdown Menu */}
          {languageDropdownOpen && (
            <ul className="absolute right-0 bottom-full mt-2 bg-white text-black rounded-md shadow-lg w-[200px] z-10">
              {languages.map((lang) => (
                <li
                  key={lang.name}
                  className="py-2 px-4 hover:bg-gray-200 cursor-pointer flex items-center gap-x-[10px]"
                >
                  {lang.flag} {lang.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        

        {/* Bottom Section */}
        <div className="text-center text-sm border-t border-white pt-4">
          © 2025 All rights reserved by Solvi Globe
        </div>
      </div>
    </footer>
  );
}
