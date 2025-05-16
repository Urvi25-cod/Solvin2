import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import footerlogo from "../Images/footerlogo.png"


import flag1 from "../Images/flag1.png";
import flag2 from "../Images/flag2.png";
import flag3 from "../Images/flag3.png";
import flag5 from "../Images/flag5.png";
import flag6 from "../Images/flag6.png";
import flag7 from "../Images/flag7.png";
import flag8 from "../Images/flag8.png";
import flag9 from "../Images/flag9.png";
import flag10 from "../Images/flag10.png"
const Footer2 = () => {

      const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

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
    // ...add other languages here
  ];

  return (
    <footer className="bg-[#FA6400] text-white py-10 px-4 md:px-20">
        <div className=" container mx-auto">
      <div className="grid md:grid-cols-5 grid-cols-1 gap-10">
        {/* Logo & Contact */}
        <div className="space-y-4">
          <img src={footerlogo} alt="SolviGlobe Logo" className="w-32" />
          <p className="text-sm">
            34, Meridian Business Center, Lajamni Chowk, opposite Opera Business center, Mota Varachha. Surat, Gujarat 394105
          </p>
          <p className="text-sm">
            <strong>Email :</strong> info@solviglobe.com
          </p>
          <p className="text-sm">
            <strong>Number :</strong> +91 84011 48142
          </p>
          <div className="flex space-x-4 mt-2">
            <FaInstagram className="text-2xl hover:scale-110 duration-300 cursor-pointer" />
            <FaFacebookF className="text-2xl hover:scale-110 duration-300 cursor-pointer" />
            <FaTwitter className="text-2xl hover:scale-110 duration-300 cursor-pointer" />
            <FaYoutube className="text-2xl hover:scale-110 duration-300 cursor-pointer" />
          </div>
              <div className="flex flex-col lg:flex-row w-full ">
              <input
                type="email"
                placeholder="Enter Mail"
                className="px-4 py-2 bg-white rounded-lg text-gray-700 outline-none mb-2 lg:mb-0 lg:mr-2 flex-1"
              />
              <button className="px-4 py-2 bg-white text-gray-800 font-semibold rounded-lg hover:bg-gray-100 w-full">
                Subscribe
              </button>
            </div>
        </div>

        {/* About */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg mb-2">About</h3>
          <ul className="space-y-2 text-base">
              <Link to="/About" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><li>Company</li></Link>
              <Link to="/Founder" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><li>Founder’s Note</li></Link>
              <Link to="/OurTeam" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><li>Our Core Team</li></Link>
            </ul>
        </div>

        {/* Product */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg mb-2">Product</h3>
          <Link Link to="/Product" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}><ul className="space-y-2 text-base">
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

        {/* Services */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg mb-2">Services</h3>
        <ul className="space-y-2 text-base">
              <Link to={'/Services'}><li className="mb-2" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}>Export-Import Services</li></Link>
              <Link to={'/E2Eservices'}><li className="mb-2" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}>vE2E Logistic Services</li></Link>
              <Link to={'/Distribution'}><li className="mb-2" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}>Product Distribution</li></Link>
              <Link to={'/Warehousing'}><li className="mb-2" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}>Warehousing Services</li></Link>
              <Link to={'/ITOutsourcing'}><li className="mb-2" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}>IT Outsourcing Services</li></Link>
              <Link to={'/Tradefinance'}><li className="mb-2" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}>Trade Finance</li></Link>
              <Link to={'/ProductRandD'}><li className="mb-2" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}>Product R&D</li></Link>
              <Link to={'/Shipchandling'}><li onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}>Ship Chandling Services</li></Link>
            </ul>
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
           <ul className="space-y-2 text-base mt-2">
              <Link to="/InquiryForm" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} ><li>Business Inquiry</li></Link>
              <Link to="/Registration" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><li>Register As Vendor</li></Link>
              <Link to="/Career" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><li>Join Our Team</li></Link>
              <Link to="/Blog" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><li>Blog</li></Link>
              <Link to={'/'} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><li>Privacy Policy</li></Link>
              <Link to={'/'} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><li>Terms & Condition</li></Link>
              </ul>

          {/* <div className="mt-4 relative ">
            <select className="bg-[#1B3A6F] text-white px-4 py-2 rounded w-full">
             <button
                    onClick={() => setLanguageDropdownOpen((open) => !open)}
                    className="max-w-full bg-[#1F4278]   text-white px-4 py-2  rounded-md flex items-center justify-between mt-1"
                  >
                    <img src={flag1} alt="flag" className="inline-block w-6 h-6 mr-2 md:w-4 h-4 " />
                    ENGLISH
                    <span className="ml-1">{languageDropdownOpen ? "▲" : "▼"}</span>
                  </button>
                  {languageDropdownOpen && (
                    <ul className="absolute right-0 z-10 mt-2 bg-white bottom-full   text-black rounded-md shadow-lg w-[200px]">
                      {languages.map((lang) => (
                        <li
                          key={lang.name}
                          className="py-2 px-4 hover:bg-gray-200 cursor-pointer flex items-center"
                        >
                          <img src={lang.flag} alt={lang.name} className="w-6 h-6 mr-2" />
                          <p className="md:text-sm">{lang.name}</p>
                        </li>
                      ))}
                    </ul>
                  )}
            </select>
          </div> */}
          <div className="flex justify-end lg:ml-10 xl:m-2 xl:mt-25 lg:mt-23 md:mr-2">
                <div className="relative">
                  <button
                    onClick={() => setLanguageDropdownOpen((open) => !open)}
                    className="max-w-full bg-[#1F4278]   text-white px-4 py-2  rounded-md flex items-center justify-between mt-1    md:w-[108px] md:text-sm md:px-2 md:mt-[130px]  lg:mr-[50px] lg:mt-[70px] xl:mr-[100px] xl:m-[1px] 2xl:mr-[140px] 2xl:w-[6%]"
                  >
                    <img src={flag1} alt="flag" className="inline-block w-6 h-6 mr-2 md:w-4 h-4 " />
                    ENGLISH
                    <span className="ml-1">{languageDropdownOpen ? "▲" : "▼"}</span>
                  </button>
                  {languageDropdownOpen && (
                    <ul className="absolute right-0 z-10 mt-2  mr-20  bg-white bottom-full   text-black rounded-md shadow-lg w-[200px]">
                      {languages.map((lang) => (
                        <li
                          key={lang.name}
                          className="py-2 px-4 hover:bg-gray-200 cursor-pointer flex items-center"
                        >
                          <img src={lang.flag} alt={lang.name} className="w-6 h-6 mr-2" />
                          <p className="md:text-sm">{lang.name}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
        </div>
      </div>

      {/* Subscribe Section */}
      {/* <div className="flex flex-col md:flex-row items-center justify-between mt-10 border-t border-white pt-6"> */}
       
        {/* <p className="text-center text-sm w-full md:w-1/2 mt-2 md:mt-0">
          © 2022–2026 SolviGlobe Limited. All Rights Reserved.
        </p> */}
      {/* </div> */}
     
      </div>
    </footer>
  );
};

export default Footer2;