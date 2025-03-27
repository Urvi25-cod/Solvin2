// import React from "react";
// import background from "../Images/background.png"; // Replace with your background image path
// import Product1 from "../Images/Product1.png";

// const Product = () => {
//   return (
//     <>
//       <div
//         className="relative h-100 w-full bg-cover bg-center  flex items-center"
//         style={{ backgroundImage: `url(${background})` }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-opacity-30"></div>

//         {/* Content */}
//         <div className="relative z-10 container mx-auto px-4 text-white">
//           {/* Breadcrumb */}
//           <p className="text-sm md:text-base font-light mb-2">
//             Home / Product
//           </p>

//           {/* Title */}
//           <h1 className="text-2xl md:text-4xl font-bold text-orange-500">
//             Product
//           </h1>
//         </div>
//       </div>
//       <div className="container mx-auto px-4 py-8">
//         {/* Main Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//           {/* Sidebar */}
//           <div className="bg-white shadow-md rounded-lg p-2">
//             <ul className="space-y-3">
//               {/* <li className="text-gray-700 hover:text-orange-500 cursor-pointerfont-medium">Aliphatic Based Spotting Fluid</li> */}
//               <li
//                 className="cursor-pointer font-medium px-4 py-2 rounded-lg hover:bg-orange-500 text-gray-700 hover:text-white"

//               >
//                 Aliphatic Based Spotting Fluid
//               </li>
//               <li className="cursor-pointer font-medium px-4 py-2 rounded-lg hover:bg-orange-500 text-gray-700 hover:text-white">Plastic Raw Materials</li>
//               <li className="cursor-pointer font-medium px-4 py-2 rounded-lg hover:bg-orange-500 text-gray-700 hover:text-white">FMCG Products</li>
//               <li className="cursor-pointer font-medium px-4 py-2 rounded-lg hover:bg-orange-500 text-gray-700 hover:text-white">Commodities</li>
//               <li className="cursor-pointer font-medium px-4 py-2 rounded-lg hover:bg-orange-500 text-gray-700 hover:text-white">Metals</li>
//               <li className="cursor-pointer font-medium px-4 py-2 rounded-lg hover:bg-orange-500 text-gray-700 hover:text-white">Oil & Gas</li>
//               <li className="cursor-pointer font-medium px-4 py-2 rounded-lg hover:bg-orange-500 text-gray-700 hover:text-white">Chemicals</li>
//               <li className="cursor-pointer font-medium px-4 py-2 rounded-lg hover:bg-orange-500 text-gray-700 hover:text-white">Aviation Spare Parts</li>
//             </ul>
//           </div>

//           {/* Product Grid */}
//           <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {/* Product Cards */}
//             {Array(9)
//               .fill(0)
//               .map((_, index) => (
//                 <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
//                   <img src={Product1} alt="Product" className="w-full h-auto" />
//                   <div className="p-4 text-center">
//                     {index % 2 === 0 ? (
//                       <p className="font-medium text-gray-800">Aviation Spare Parts</p>
//                     ) : (
//                       <p className="font-medium text-gray-800">Zinc Carbonate - Hydrogen Sulphide Scavenger</p>
//                     )}
//                   </div>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Product



import React from "react"
import { useLocation } from "react-router-dom";
import background from "../Images/background.png";
import product1 from "../Images/product1.png"
import Nav from "./Nav";

export default function Product() {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category"); // Get the 'category' value

  const categories = [
    "Aliphatic Based Spotting Fluid",
    "FMCG Products",
    "Industrial Chemicals",
    "Petrochemical Products",
    "Metals & Alloys",
    "Agri-Commodities",
    "Aviation Service and Parts",
    "Pharmaceutical Products",
    "Machinery & Equipment",
    "Animal Nutrition & Feed",
  ];

  return (
    <>
      <Nav bgColor="bg-white" textColor="text-black" />
      <div
        className="relative h-[40vh] w-full bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${background})` }}
      >

        {/* Content Container */}
        <div className="relative  h-full flex flex-col justify-center px-6 md:px-12 lg:px-20">
          {/* Breadcrumb Navigation */}
          {/* <div className="absolute inset-0  bg-opacity-50"></div> */}

          <div className="mb-2 text-white text-sm md:text-base">
            <a href="/" className="hover:text-orange-400 transition-colors">
              Home
            </a>
            <span className="mx-2">/</span>
            <a
              href="/product"
              className="hover:text-orange-400 transition-colors"
            >
              Product
            </a>
          </div>

          {/* Page Title */}
          <h1 className="text-orange-500 text-3xl sm:text-4xl md:text-5xl font-bold">
            Product
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-4 flex rounded-lg">
          <input
            type="text"
            placeholder="Search Product..."
            className="w-full md:w-72  px-4 py-2 text-gray-700 bg-[#1F4278]"
          />
          <button className="text-white px-4 py-2 bg-[#1F4278] transition-colors duration-300">
            Search
          </button>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Sidebar */}
          {/* Sidebar */}
          <div className="bg-white shadow-md rounded-lg p-2">
            <ul className="space-y-3">
              {categories.map((item, index) => (
                <li
                  key={index}
                  className={`cursor-pointer font-medium px-4 py-2 rounded-lg 
                ${category === item ? "bg-orange-500 text-white" : "hover:bg-orange-500 hover:text-white text-gray-700"}`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Product Grid */}
          <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Product Cards */}
            {Array(9)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={product1} alt="Product" className="w-full h-auto" />
                  <div className="p-4 text-center">
                    {index % 2 === 0 ? (
                      <p className="font-medium text-gray-800">Aviation Spare Parts</p>
                    ) : (
                      <p className="font-medium text-gray-800">Zinc Carbonate - Hydrogen Sulphide Scavenger</p>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}


