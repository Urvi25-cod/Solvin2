import React from "react";
import sr1 from "../Images/sr1.png";
import sr2 from "../Images/sr2.png";
import sr3 from "../Images/sr3.png";
import sr4 from "../Images/sr4.png";
import se55 from "../Images/se55.svg";
import sr5 from "../Images/sr5.png";
// import sr6 from "../Images/sr6.png";
import ship66 from "../Images/ship66.svg";
import ship7 from "../Images/ship7.svg";


import sr7 from "../Images/sr7.png";
import sr8 from "../Images/sr8.png";

import se1 from "../Images/se1.png";
import se2 from "../Images/se2.png";
import se3 from "../Images/se3.png";
// import se4 from "../Images/se4.png";
import se5 from "../Images/se5.png";
// import se6 from "../Images/se6.png";
import se7 from "../Images/se7.png";
import se8 from "../Images/se8.png";

import Arrow from "../Images/Arrow.png";
import { useNavigate } from "react-router-dom";
// import { Link} from "react-router-dom";

const OurServices = () => {
  const navigate = useNavigate();

  const categories = [
    { name: "Export-Import Services", icon: sr1, hover: se1, pagename: '/Services' },
    { name: "E2E Logistic Services", icon: sr2, hover: se2, pagename: '/E2Eservices' },
    { name: "Product Distribution", icon: sr3, hover: se3, pagename: '/Distribution' },
    { name: "Warehousing Services", icon: sr4, hover: se55, pagename: '/Warehousing' },
    { name: "Product R&D", icon: sr5, hover: se5, pagename: '/ITOutsourcing' },
    { name: "Ship Candling Services", icon: ship66, hover: ship7, pagename: '/Tradefinance' },
    { name: "IT Outsourcing Services", icon: sr7, hover: se7, pagename: '/ProductRandD' },
    { name: "IT Outsourcing Services", icon: sr8, hover: se8, pagename: '/Shipchandling' },

  ];




  return (
    <div className="container mx-auto px-8 md:px-10 py-12">
      <div className="text-center mb-8">
        <h2 className="text-orange-500 font-semibold text-sm">Our Services</h2>
        <h1 className="text-2xl md:text-3xl font-bold  text-[#1F4278]">
          Supplying <span className="text-orange-500">what you need</span>
          <span className="text-[#1F4278]">, when you need it</span>
        </h1>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center justify-center w-full h-40 hover:shadow-xl  rounded-br-4xl transition-shadow duration-300 cursor-pointer group  p-4 hover:border border-gray-300"
          >
            {/* Icon Placeholder */}
            <div className="mb-4 relative w-16 h-16">
              <img src={category.icon} alt={category.name} className="absolute top-0 left-0 w-16 h-16 transition-opacity duration-300 group-hover:opacity-0" />

              <img
                src={category.hover}
                alt={category.name}
                className="absolute top-0 left-0 w-16 h-16 opacity-0 transition-opacity duration-300 group-hover:opacity-100"

              />
            </div>

            {/* Category Name */}
            <p className="text-center text-base md:text-lg font-medium text-gray-700 group-hover:text-orange-500">
              {category.name}
            </p>

            {/* Bottom Border Under Hover Effect */}
            <div className="absolute bottom-[-30px] left-0 right-0 h-[1px] bg-gray-300 group-hover:bg-orange-500 transition-all mt-50 duration-300"></div>

            {/* Arrow Icon (Visible on Hover) */}
            <img
              src={Arrow}
              alt="Arrow Icon"
              className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              onClick={() => {
                navigate(category.pagename);
                setTimeout(() => {
                  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }, 100);
              }}



            />
          </div>
        ))}
      </div>

    </div>
  );
};

export default OurServices;
