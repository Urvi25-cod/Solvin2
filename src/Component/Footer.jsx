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
import flag1 from "../Images/flag1.png";
import flag2 from "../Images/flag2.png";
import flag3 from "../Images/flag3.png";

import flag5 from "../Images/flag5.png";
import flag6 from "../Images/flag6.png";
import flag7 from "../Images/flag7.png";
import flag8 from "../Images/flag8.png";
import flag9 from "../Images/flag9.png";
import flag10 from "../Images/flag10.png";


export default function Footer() {
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setLanguageDropdownOpen(!languageDropdownOpen);
  };

  const languages = [
    { name: "English", flag: flag1 },
    { name: "हिंदी", flag: flag2 },
    { name: "Español", flag: flag3 },
    { name: "عربي", flag: flag3 },
    { name: "Русский", flag: flag5 },
    { name: "Deutsch", flag: flag6 },
    { name: "Français", flag: flag7 },
    { name: "Português", flag: flag8 },
    { name: "日本語", flag: flag9 },
    { name: "中文", flag: flag10 },
  ];

  return (
    <footer className="bg-orange-500 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start lg:items-center gap-6 pb-6 border-b border-white">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 py-10  mb-8">
          {/* Address Section */}
          <div>
            <Link to={'/'}><img src={footer} alt="Solvi Globe Logo" className="mb-4" /></Link>
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
            <h3 className="font-bold mb-4">About</h3>
            <ul className="space-y-2 text-base">
              <Link to={'/About'}> <li>Company</li></Link>
              <Link to={'/Founder'}> <li>Founder’s Note</li></Link>
              <Link to={'/OurTeam'}><li>Our Core Team</li></Link>

              <Link to="/Registration">
                <li>Register as Vendor</li>
              </Link>
            </ul>
          </div>

          {/* Industry Links */}
          <div>
            <h3 className="font-bold mb-4">Product</h3>
            <Link to="/Product"><ul className="space-y-2 text-[#FFFFFF]">
              <li>FMCG Products</li>
              <li>Industrial Chemicals</li>
              <li>Petrochemical Products</li>
              <li>Metals & Alloys</li>
              <li>Agri-Commodities</li>
              <li>Aviation Service and Parts</li>
              <li>Pharmaceutical Products</li>
              <li>Animal Nutrition & Feed</li>
              <li>Machinery & Equipment</li>
            </ul></Link>
          </div>

          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <Link to={'/Services'}><ul className="space-y-2 text-[#FFFFFF]">
              <li>Export-Import Services</li>
              <li>vE2E Logistic Services</li>
              <li>Product Distribution</li>
              <li>Warehousing Services</li>
              <li>IT Outsourcing Services</li>
              <li>Trade Finance</li>
              <li>Product R&D</li>
              <li>Ship Chandling Services</li>
            </ul></Link>
          </div>

          <div>

            <Link to={'/InquiryForm'}><p className="text-2xl">BUSINESS INQUIRY</p></Link>
            <Link to={'/Registration'}><p className="text-2xl">REGISTER AS VENDOR</p></Link>
            <Link to={'/Career'}><p className="text-2xl">JOIN OUR TEAM</p></Link>


            <div>
              <ul className="space-y-2 text-[#FFFFFF]">
                <Link><li>Blog</li></Link>
                <li>Privacy Policy</li>
                <li>Terms & Condition</li>
              </ul>
            </div>
          </div>




          {/* Services Links */}

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
                  <img src={lang.flag} className="h-[10%] w-[20%]" />
                  <h1>{lang.name}</h1>
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



//   3

// import React, { useState } from "react";
// import { FiInstagram, FiFacebook, FiLinkedin, FiYoutube } from "react-icons/fi";

// const Footer = () => {
//   const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setLanguageDropdownOpen(!languageDropdownOpen);
//   };

//   return (
//     <footer className="bg-orange-500 text-white px-4 py-8">
//       <div className="container mx-auto px-4">
//         {/* Top Section */}
//         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pb-6 border-b border-white">
//           <h2 className="text-2xl font-semibold max-w-xl">
//             Connect with us to fulfill your business needs with smart solutions
//           </h2>
//           <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
//             <input
//               type="email"
//               placeholder="Enter Mail"
//               className="px-4 py-2 text-gray-700 rounded-md outline-none w-full sm:w-[300px]"
//             />
//             <button className="bg-white text-black px-4 py-2 rounded-md">
//               Subscribe
//             </button>
//           </div>
//         </div>

//         {/* Middle Section */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 py-10 text-sm">
//           {/* Address */}
//           <div>
//             <img src="/logo.png" alt="Solvi Globe Logo" className="mb-4 w-32" />
//             <p className="mb-2">
//               Address: 633, Meridian Business Center, Lajamni Chowk, opposite Opera Business
//               center, Mota Varachha. Surat, Gujarat 394105
//             </p>
//             <p className="mb-2">Email : solviglobe@gmail.com</p>
//             <p>Number : +91 83200 83200</p>
//             <div className="flex space-x-4 mt-4">
//               <FiInstagram className="w-6 h-6 bg-white text-orange-500 rounded-full p-1" />
//               <FiFacebook className="w-6 h-6 bg-white text-orange-500 rounded-full p-1" />
//               <FiLinkedin className="w-6 h-6 bg-white text-orange-500 rounded-full p-1" />
//               <FiYoutube className="w-6 h-6 bg-white text-orange-500 rounded-full p-1" />
//             </div>
//           </div>

//           {/* About */}
//           <div>
//             <h3 className="font-bold mb-4">About</h3>
//             <ul className="space-y-2">
//               <li>Company</li>
//               <li>Founder’s Note</li>
//               <li>Our Core Team</li>
//             </ul>
//           </div>

//           {/* Product */}
//           <div>
//             <h3 className="font-bold mb-4">Product</h3>
//             <ul className="space-y-2">
//               <li>FMCG Products</li>
//               <li>Industrial Chemicals</li>
//               <li>Petrochemical Products</li>
//               <li>Metals & Alloys</li>
//               <li>Agri-Commodities</li>
//               <li>Aviation Service and Parts</li>
//               <li>Pharmaceutical Products</li>
//               <li>Animal Nutrition & Feed</li>
//               <li>Machinery & Equipment</li>
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="font-bold mb-4">Services</h3>
//             <ul className="space-y-2">
//               <li>Export-Import Services</li>
//               <li>E2E Logistic Services</li>
//               <li>Product Distribution</li>
//               <li>Warehousing Services</li>
//               <li>IT Outsourcing Services</li>
//               <li>Trade Finance</li>
//               <li>Product R&D</li>
//               <li>Ship Chandling Services</li>
//             </ul>
//           </div>

//           {/* Extra Links */}
//           <div className="space-y-4">
//             <div className="space-y-1 text-lg font-bold">
//               <p>BUSINESS INQUIRY</p>
//               <p>REGISTER AS VENDOR</p>
//               <p>JOIN OUR TEAM</p>
//             </div>
//             <ul className="space-y-2">
//               <li>Blog</li>
//               <li>Privacy Policy</li>
//               <li>Terms & Condition</li>
//             </ul>
//             <div className="relative">
//               <button
//                 onClick={toggleDropdown}
//                 className="bg-blue-700 px-4 py-2 rounded-md flex justify-between items-center w-full"
//               >
//                 <span className="flex items-center gap-2">
//                   <img src="/uk-flag.png" alt="English" className="w-5 h-5" /> ENGLISH
//                 </span>
//                 <span>{languageDropdownOpen ? "▲" : "▼"}</span>
//               </button>
//               {languageDropdownOpen && (
//                 <ul className="absolute bg-white text-black mt-2 rounded-md w-full shadow-md z-10">
//                   <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">English</li>
//                   <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Hindi</li>
//                   <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Gujarati</li>
//                 </ul>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="text-center text-sm border-t border-white pt-4">
//           © 2022–2026 SolviGlobe Limited. All Rights Reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
