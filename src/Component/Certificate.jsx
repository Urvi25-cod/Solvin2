// import React from "react";
// import certificate from "../Images/certificate.png";

// const Certificate = () => {
//   // Array of image sources (can be dynamic)
  

//   return (
//     <div className="container mx-auto px-6 py-12">
//      <h4 className="text-orange-500 font-semibold mt-15">Certificate</h4>
//       <h2 className="text-2xl md:text-4xl font-bold text-[#1F4278]">
//         To <span className="text-orange-500">increase productivity</span>
//         <span className="text-[#1F4278]"> and cost effectiveness</span>
//       </h2>

// <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-6 ml-15  ">
//       <img src={certificate} 
//       alt="logo" 
//       className="w-[80%] h-full rounded-lg" />
      
//       <img src={certificate} 
//       alt="logo" 
//       className="w-[80%] h-full rounded-lg mt-10" />
      
//       <img src={certificate} 
//       alt="logo" 
//       className="w-[80%] h-full rounded-lg" />
      
//       <img src={certificate} 
//       alt="logo" 
//       className="w-[80%] h-full rounded-lg mt-10" />
      
//     </div>

     
//     </div>
//   );
// };

// export default Certificate;


import React from "react";
import icon1 from "../Images/icon1.png";
import icon2 from "../Images/icon2.png";
import icon3 from "../Images/icon3.png";
import icon4 from "../Images/icon4.png";
import icon5 from "../Images/icon5.png";
import icon6 from "../Images/icon6.png";
import icon7 from "../Images/icon7.png";
import icon8 from "../Images/icon8.png";
import icon9 from "../Images/icon9.png";
import Arrow from "../Images/Arrow.png";

const Certificate = () => {

  const categories = [
      { name: "FMCG Products", icon: icon1 },
      { name: "Industrial Chemicals", icon: icon2 },
      { name: "Petrochemical Products", icon: icon3 },
      { name: "Metals & Alloys", icon: icon4 },
      { name: "Agri-Commodities", icon: icon5 },
      { name: "Aviation Service and Parts", icon: icon6 },
      { name: "Pharmaceutical Products", icon: icon7 },
      { name: "Machinery & Equipment", icon: icon8 },
      { name: "Animal Nutrition & Feed", icon: icon9 },
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
                <div
                  key={index}
                  className="relative flex flex-col items-center justify-center w-65 h-40 hover:shadow-xl rounded-br-4xl transition-shadow duration-300 cursor-pointer group  p-4"
                >
                  {/* Icon Placeholder */}
                  <div className="mb-4">
                    <img src={category.icon} alt={category.name} className="w-16 h-16" />
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
                </div>
              ))}
            </div>
      
    </div>
  );
};

export default Certificate;
