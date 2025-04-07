// import React from "react";
// import { useNavigate } from "react-router-dom";

// import icon1 from "../Images/icon1.png";
// import icon2 from "../Images/icon2.png";
// import icon3 from "../Images/icon3.png";
// import icon4 from "../Images/icon4.png";
// import icon5 from "../Images/icon5.png";
// import icon6 from "../Images/icon6.png";
// import icon7 from "../Images/icon7.png";
// import icon8 from "../Images/icon8.png";
// import icon9 from "../Images/icon9.png";
// import Arrow from "../Images/Arrow.png";

// // import or1 from "../Images/or1.png";
// // import or2 from "../Images/or2.png";
// // import or3 from "../Images/or3.png";
// // import or4 from "../Images/or4.png";
// // import or5 from "../Images/or5.png";
// // import or6 from "../Images/or6.png";
// // import or7 from "../Images/or7.png";
// // import or8 from "../Images/or8.png"; // Import Arrow Icon
// // import or9 from "../Images/or9.png";

// const Ourproduct = () => {

//   const navigate = useNavigate();

//   const categories = [
//     { name: "FMCG Products", icon: icon1},
//     { name: "Industrial Chemicals", icon: icon2},
//     { name: "Petrochemical Products", icon: icon3 },
//     { name: "Metals & Alloys", icon: icon4},
//     { name: "Agri-Commodities", icon: icon5},
//     { name: "Aviation Service and Parts", icon: icon6},
//     { name: "Pharmaceutical Products", icon: icon7},
//     { name: "Machinery & Equipment", icon: icon8},
//     { name: "Animal Nutrition & Feed", icon: icon9 },
//   ];

//   const handleNavigation = (categoryName) => {
//     // Navigate to the Product.jsx page with the category name as a query parameter
//     navigate(`/product?category=${encodeURIComponent(categoryName)}`);
//     console.log()
//   };

//   return (
//     <div className="container mx-auto px-5 md:px-6 py-12">
//       {/* Header */}
//       <div className="text-center mb-8">
//         <h2 className="text-orange-500 font-semibold text-sm">Our Product</h2>
//         <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1F4278]">
//           Premium Raw Material <span className="text-orange-500">Supply Solutions</span>
//         </h1>
//       </div>

//       {/* Categories Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
//         {categories.map((category, index) => (
//           <div
//             key={index}
//             className="relative flex flex-col items-center   justify-center w-full h-40 hover:shadow-xl rounded-br-4xl transition-shadow duration-300 cursor-pointer group  p-4  hover:border border-gray-300"
//             onClick={() => handleNavigation(category.name)}
//           >
//             {/* Icon Placeholder */}
//             <div className="mb-4">
//               <img src={category.icon} alt={category.name} className="w-16 h-16" />
//             </div>

//             {/* Category Name */}
//             <p className="text-center text-base md:text-lg font-medium text-gray-700 group-hover:text-orange-500">
//               {category.name}
//             </p>

//             {/* Bottom Border Under Hover Effect */}
//             <div className="absolute bottom-[-20px] left-0 right-0 h-[1px] bg-gray-300 group-hover:bg-orange-500 transition-all mt-50 duration-300 "></div>

//             {/* Arrow Icon (Visible on Hover) */}
//             <img
//               src={Arrow}
//               alt="Arrow Icon"
//               className="absolute  top-4 right-4 opacity-0   group-hover:opacity-100 transition-opacity duration-300"
//             />
//           </div>
//         ))}
//       </div>



//     </div>
//   );
// };

// export default Ourproduct;


// import React from "react";
// import { useNavigate } from "react-router-dom";

// import icon1 from "../Images/icon1.png";
// import icon2 from "../Images/icon2.png";
// import icon3 from "../Images/icon3.png";
// import icon4 from "../Images/icon4.png";
// import icon5 from "../Images/icon5.png";
// import icon6 from "../Images/icon6.png";
// import icon7 from "../Images/icon7.png";
// import icon8 from "../Images/icon8.png";
// import icon9 from "../Images/icon9.png";

// import or1 from "../Images/or1.png";
// import or2 from "../Images/or2.png";
// import or3 from "../Images/or3.png";
// import or4 from "../Images/or4.png";
// import or5 from "../Images/or5.png";
// import or6 from "../Images/or6.png";
// import or7 from "../Images/or7.png";
// import or8 from "../Images/or8.png";
// import or9 from "../Images/or9.png";

// import Arrow from "../Images/Arrow.png";

// const Ourproduct = () => {
//   const navigate = useNavigate();

//   const categories = [
//     { name: "FMCG Products", icon: icon1, hoverIcon: or1 },
//     { name: "Industrial Chemicals", icon: icon2, hoverIcon: or2 },
//     { name: "Petrochemical Products", icon: icon3, hoverIcon: or3 },
//     { name: "Metals & Alloys", icon: icon4, hoverIcon: or4 },
//     { name: "Agri-Commodities", icon: icon5, hoverIcon: or5 },
//     { name: "Aviation Service and Parts", icon: icon6, hoverIcon: or6 },
//     { name: "Pharmaceutical Products", icon: icon7, hoverIcon: or7 },
//     { name: "Machinery & Equipment", icon: icon8, hoverIcon: or8 },
//     { name: "Animal Nutrition & Feed", icon: icon9, hoverIcon: or9 },
//   ];

//   const handleNavigation = (categoryName) => {
//     navigate(`/product?category=${encodeURIComponent(categoryName)}`);
//   };

//   return (
//     <div className="container mx-auto px-5 md:px-6 py-12">
//       {/* Header */}
//       <div className="text-center mb-8">
//         <h2 className="text-orange-500 font-semibold text-sm">Our Product</h2>
//         <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1F4278]">
//           Premium Raw Material{" "}
//           <span className="text-orange-500">Supply Solutions</span>
//         </h1>
//       </div>

//       {/* Categories Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {categories.map((category, index) => (
//           <div
//             key={index}
//             className="relative flex flex-col items-center justify-center w-full h-40 hover:shadow-xl rounded-br-4xl transition-shadow duration-300 cursor-pointer group p-4 hover:border border-gray-300"
//             onClick={() => handleNavigation(category.name)}
//           >
//             {/* Icon Placeholder with hover switch */}
//             <div className="mb-4 relative w-16 h-16">
//               <img
//                 src={category.icon}
//                 alt={category.name}
//                 className="absolute top-0 left-0 w-16 h-16 transition-opacity duration-300 group-hover:opacity-0"
//               />
//               <img
//                 src={category.hoverIcon}
//                 alt={category.name}
//                 className="absolute top-0 left-0 w-16 h-16 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
//               />
//             </div>

//             {/* Category Name */}
//             <p className="text-center text-base md:text-lg font-medium text-gray-700 group-hover:text-orange-500">
//               {category.name}
//             </p>

//             {/* Bottom Border */}
//             <div className="absolute bottom-[-20px] left-0 right-0 h-[1px] bg-gray-300 group-hover:bg-orange-500 transition-all mt-50 duration-300 "></div>

//             {/* Arrow Icon */}
//             <img
//               src={Arrow}
//               alt="Arrow Icon"
//               className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Ourproduct;


import React, { useState } from "react"; // 👈 import useState
import { useNavigate } from "react-router-dom";

// ... your import icons


import icon1 from "../Images/icon1.png";
import icon2 from "../Images/icon2.png";
import icon3 from "../Images/icon3.png";
import icon4 from "../Images/icon4.png";
import icon5 from "../Images/icon5.png";
import icon6 from "../Images/icon6.png";
import icon7 from "../Images/icon7.png";
import icon8 from "../Images/icon8.png";
import icon9 from "../Images/icon9.png";

import or1 from "../Images/or1.png";
import or2 from "../Images/or2.png";
import or3 from "../Images/or3.png";
import or4 from "../Images/or4.png";
import or5 from "../Images/or5.png";
import or6 from "../Images/or6.png";
import or7 from "../Images/or7.png";
import or8 from "../Images/or8.png";
import or9 from "../Images/or9.png";

import Arrow from "../Images/Arrow.png";

const Ourproduct = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null); // 👈 state to track hovered index

  const categories = [
    { name: "FMCG Products", icon: icon1, hoverIcon: or1 },
    { name: "Industrial Chemicals", icon: icon2, hoverIcon: or2 },
    { name: "Petrochemical Products", icon: icon3, hoverIcon: or3 },
    { name: "Metals & Alloys", icon: icon4, hoverIcon: or4 },
    { name: "Agri-Commodities", icon: icon5, hoverIcon: or5 },
    { name: "Aviation Service and Parts", icon: icon6, hoverIcon: or6 },
    { name: "Pharmaceutical Products", icon: icon7, hoverIcon: or7 },
    { name: "Machinery & Equipment", icon: icon8, hoverIcon: or8 },
    { name: "Animal Nutrition & Feed", icon: icon9, hoverIcon: or9 },
  ];

  const handleNavigation = (categoryName) => {
    navigate(`/product?category=${encodeURIComponent(categoryName)}`);
  };

  return (
    <div className="container mx-auto px-5 md:px-6 py-12">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-orange-500 font-semibold text-sm">Our Product</h2>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1F4278]">
          Premium Raw Material <span className="text-orange-500">Supply Solutions</span>
        </h1>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => handleNavigation(category.name)}
            onMouseEnter={() => setHoveredIndex(index)} // 👈 track hover
            // onMouseLeave={() => setHoveredIndex(null)}  // 👈 reset on leave
            className="relative flex flex-col items-center justify-center w-full h-40 hover:shadow-xl rounded-br-4xl transition-shadow duration-300 cursor-pointer group p-4 hover:border border-gray-300"
          >
            {/* Single img with ternary operator */}
            <div className="mb-4 relative w-16 h-16">
              <img
                src={hoveredIndex === index ? category.hoverIcon : category.icon}
                alt={category.name}
                className="w-16 h-16 transition duration-300"
              />
            </div>

            {/* Category Name */}
            <p className="text-center text-base md:text-lg font-medium text-gray-700 group-hover:text-orange-500">
              {category.name}
            </p>

            {/* Bottom Border */}
            <div className="absolute bottom-[-20px] left-0 right-0 h-[1px] bg-gray-300 group-hover:bg-orange-500 transition-all mt-50 duration-300 "></div>

            {/* Arrow Icon */}
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

export default Ourproduct;
