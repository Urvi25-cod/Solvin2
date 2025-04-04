import React from "react";
import sr1 from "../Images/sr1.png";
import sr2 from "../Images/sr2.png";
import sr3 from "../Images/sr3.png";
import sr4 from "../Images/sr4.png";
import sr5 from "../Images/sr5.png";
import sr6 from "../Images/sr6.png";
import sr7 from "../Images/sr7.png";
import sr8 from "../Images/sr8.png";

import Arrow from "../Images/Arrow.png";
import { Link} from "react-router-dom";

const OurServices = () => {

  const categories = [
      { name: "Export-Import Services", icon: sr1 },
      { name: "E2E Logistic Services", icon: sr2 },
      { name: "Product Distribution", icon: sr3 },
      { name: "Warehousing Services", icon: sr4 },
      { name: "Product R&D", icon: sr5 },
      { name: "Ship Candling Services", icon: sr6 },
      { name: "IT Outsourcing Services", icon: sr7 },
      { name: "IT Outsourcing Services", icon: sr8 },
     
  ];

  


  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="text-center mb-8">
              <h2 className="text-orange-500 font-semibold text-sm">Our Services</h2>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1F4278]">
                To <span className="text-orange-500">increase productivity</span>
                <span className="text-[#1F4278]">and cost effectiveness</span>
              </h1>
            </div>
      
            {/* Categories Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
               <Link to={'/Services'}><div
                  key={index}
                  className="relative flex flex-col items-center justify-center w-full h-40 hover:shadow-xl  rounded-br-4xl transition-shadow duration-300 cursor-pointer group  p-4 hover:border border-gray-300"
                >
                  {/* Icon Placeholder */}
                  <div className="mb-4">
                   <Link to={'/Services'}><img src={category.icon} alt={category.name} className="w-16 h-16" /></Link>
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
                  />
                </div></Link>
              ))}
            </div>
      
    </div>
  );
};

export default OurServices;
