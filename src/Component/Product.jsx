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



// import React from "react";
// import { useLocation } from "react-router-dom";
// import background from "../Images/background.png";
// import product1 from "../Images/product1.png"
// import Nav from "./Nav";

// export default function Product() {

//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const category = queryParams.get("category"); // Get the 'category' value
//   console.log(category);
//   const categories = [
//     "Aliphatic Based Spotting Fluid",
//     "FMCG Products",
//     "Industrial Chemicals",
//     "Petrochemical Products",
//     "Metals & Alloys",
//     "Agri-Commodities",
//     "Aviation Service and Parts",
//     "Pharmaceutical Products",
//     "Machinery & Equipment",
//     "Animal Nutrition & Feed",
//   ];



//   return (
//     <>
//       <Nav bgColor="bg-white" textColor="text-black" />
//       <div
//         className="relative h-[40vh] w-full bg-cover bg-center flex items-center"
//         style={{ backgroundImage: `url(${background})` }}
//       >

//         {/* Content Container */}
//         <div className="relative  h-full flex flex-col justify-center px-6 md:px-12 lg:px-20">
//           {/* Breadcrumb Navigation */}
//           {/* <div className="absolute inset-0  bg-opacity-50"></div> */}

//           <div className="mb-2 text-white text-sm md:text-base">
//             <a href="/" className="hover:text-orange-400 transition-colors">
//               Home
//             </a>
//             <span className="mx-2">/</span>
//             <a
//               href="/product"
//               className="hover:text-orange-400 transition-colors"
//             >
//               Product
//             </a>
//           </div>

//           {/* Page Title */}
//           <h1 className="text-orange-500 text-3xl sm:text-4xl md:text-5xl font-bold">
//             Product
//           </h1>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-8">
//         <div className="mb-4 flex rounded-lg">
//           <input
//             type="text"
//             placeholder="Search Product..."
//             className="w-full md:w-72  px-4 py-2 text-gray-700 bg-[#1F4278]"
//           />
//           <button className="text-white px-4 py-2 bg-[#1F4278] transition-colors duration-300">
//             Search
//           </button>
//         </div>

//         {/* Main Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//           {/* Sidebar */}
//           {/* Sidebar */}
//           <div className="bg-white shadow-md rounded-lg p-2">
//             <ul className="space-y-3">
//               {categories.map((item, index) => (
//                 <li
//                   key={index}
//                   className={`cursor-pointer font-medium px-4 py-2 rounded-lg  cursor-pointer
//                 ${category === item ? "bg-orange-500 text-white" : "hover:bg-orange-500 hover:text-white text-gray-700"}`}
//                 >
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Product Grid */}
//           <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {/* Product Cards */}
//             {Array(9)
//               .fill(0)
//               .map((_, index) => (
//                 <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
//                   <img src={product1} alt="Product" className="w-full h-auto" />
//                   <div className="p-4 text-center">
//                     {index % 2 === 0 ? (
//                       <p className="font-medium text-gray-800">Aviation Spare Parts</p>
//                     ) : (
//                       <p className="font-medium text-gray-800">Zinc Carbonate - Hydrogen Sulphide Scavenger</p>
//                     )}
//                   </div>
//                 </div>
//               ))

//               }
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }





import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import background from "../Images/background.png";
import Nav from "./Nav";
// import product1 from "../Images/product1.png"
import f1 from "../Images/f1.png";
import f2 from "../Images/f2.png";
import f3 from "../Images/f3.png";
import f4 from "../Images/f4.png";
import f5 from "../Images/f5.png";
import f6 from "../Images/f6.png";
import f7 from "../Images/f7.png";
import f8 from "../Images/f8.png";
import f9 from "../Images/f9.png";
import f10 from "../Images/f10.png";
import f11 from "../Images/f11.png";
import f12 from "../Images/f12.png";
import f13 from "../Images/f13.png";
import f14 from "../Images/f14.png";
import f15 from "../Images/f15.png";
import f16 from "../Images/f16.png";
import f17 from "../Images/f17.png";
import f18 from "../Images/f18.png";
import f19 from "../Images/f19.png";
import f20 from "../Images/f20.png";
import f21 from "../Images/f21.png";
import f22 from "../Images/f22.png";
import f23 from "../Images/f23.png";
import f24 from "../Images/f24.png";
import f25 from "../Images/f25.png";
import f26 from "../Images/f26.png";
import f27 from "../Images/f27.png";
import f28 from "../Images/f28.png";
import f29 from "../Images/f29.png";
import f30 from "../Images/f30.png";

import f31 from "../Images/f31.png";
import f32 from "../Images/f32.png";
import f33 from "../Images/f33.png";
import f34 from "../Images/f34.png";
import f35 from "../Images/f35.png";
import f36 from "../Images/f36.png";
import f37 from "../Images/f37.png";
import f38 from "../Images/f38.png";
import f39 from "../Images/f39.png";
import f40 from "../Images/f40.png";
import f41 from "../Images/f41.png";
import f42 from "../Images/f42.png";
import f43 from "../Images/f43.png";
import f44 from "../Images/f44.png";
import f45 from "../Images/f45.png";
import f46 from "../Images/f46.png";
import f47 from "../Images/f47.png";
import f48 from "../Images/f48.png";
import f49 from "../Images/f49.png";
// import f50 from "../Images/f50.png";
import f51 from "../Images/f51.png";
import f52 from "../Images/f52.png";
import f53 from "../Images/f53.png";
import f54 from "../Images/f54.png";
import f55 from "../Images/f55.png";
import f56 from "../Images/f56.png";
import f57 from "../Images/f57.png";
import f58 from "../Images/f58.png";
import f59 from "../Images/f59.png";
import f60 from "../Images/f60.png";
import f62 from "../Images/f62.png";
import f63 from "../Images/f63.png";
import f64 from "../Images/f64.png";
import f65 from "../Images/f65.png";
import f66 from "../Images/f66.png";
import f67 from "../Images/f67.png";
import f68 from "../Images/f68.png";
import f69 from "../Images/f69.png";
import f70 from "../Images/f70.png";

import f72 from "../Images/f72.png";
import f73 from "../Images/f73.png";
import f74 from "../Images/f74.png";




import i1 from "../Images/i1.png";
import i2 from "../Images/i2.png";
import i3 from "../Images/i3.png";
import i4 from "../Images/i4.png";
import i5 from "../Images/i5.png";
import i6 from "../Images/i6.png";
import i7 from "../Images/i7.png";
import i8 from "../Images/i8.png";
import i9 from "../Images/i9.png";
import i10 from "../Images/i10.png";
import i11 from "../Images/i11.png";


// import i4 from "../Images/i1.png";

import ma1 from "../Images/ma1.png";
import ma2 from "../Images/ma2.png";
import ma3 from "../Images/ma3.png";
import ma4 from "../Images/ma4.png";
import ma5 from "../Images/ma5.png";
import ma6 from "../Images/ma6.png";
import ma7 from "../Images/ma7.png";
import ma8 from "../Images/ma8.png";
import ma9 from "../Images/ma9.png";
import ma10 from "../Images/ma10.png";

//----------------------------------8.  Animal Nutrition & Feed----------------------------------------

import aa1 from "../Images/aa1.png";
import aa2 from "../Images/aa2.png";
import aa3 from "../Images/aa3.png";
import aa4 from "../Images/aa4.png";
import aa5 from "../Images/aa5.png";
import aa6 from "../Images/aa6.png";
import aa7 from "../Images/aa7.png";
import aa8 from "../Images/aa8.png";
import aa9 from "../Images/aa9.png";
import aa10 from "../Images/aa10.png";
import aa11 from "../Images/aa11.png";
import aa12 from "../Images/aa12.png";
import aa13 from "../Images/aa13.png";
import aa14 from "../Images/aa14.png";
import aa15 from "../Images/aa15.png";
import aa16 from "../Images/aa16.png";
import aa17 from "../Images/aa17.png";
import aa18 from "../Images/aa18.png";
import aa19 from "../Images/aa19.png";
import aa20 from "../Images/aa20.png";
import aa21 from "../Images/aa21.png";
import aa22 from "../Images/aa22.png";
import aa23 from "../Images/aa23.png";
import aa24 from "../Images/aa24.png";
import aa25 from "../Images/aa25.png";
import aa26 from "../Images/aa26.png";
import aa27 from "../Images/aa27.png";
import aa28 from "../Images/aa28.png";
import aa29 from "../Images/aa29.png";
import aa30 from "../Images/aa30.png";


//---------------------Pharmaceutical Products----------------------------------------------------
import ph1 from "../Images/ph1.png";
import ph2 from "../Images/ph2.png";
import ph3 from "../Images/ph3.png";
import ph4 from "../Images/ph4.png";
import ph5 from "../Images/ph5.png";
import ph6 from "../Images/ph6.png";
import ph7 from "../Images/ph7.png";
import ph8 from "../Images/ph8.png";
import ph9 from "../Images/ph9.png";
import ph10 from "../Images/ph10.png";
import ph11 from "../Images/ph11.png";
import ph12 from "../Images/ph12.png";
import ph13 from "../Images/ph13.png";
import ph14 from "../Images/ph14.png";
import ph15 from "../Images/ph15.png";
import ph16 from "../Images/ph16.png";
import ph17 from "../Images/ph17.png";
import ph18 from "../Images/ph18.png";
import ph19 from "../Images/ph19.png";
import ph20 from "../Images/ph20.png";
import ph21 from "../Images/ph21.png";
import ph22 from "../Images/ph22.png";
import ph23 from "../Images/ph23.png";
import ph24 from "../Images/ph24.png";
import ph25 from "../Images/ph25.png";
// import ph26 from "../Images/ph26.png";
import ph27 from "../Images/ph27.png";
import ph28 from "../Images/ph28.png";
import ph29 from "../Images/ph29.png";
import ph30 from "../Images/ph30.png";
import ph31 from "../Images/ph31.png";
import ph32 from "../Images/ph32.png";
import ph33 from "../Images/ph33.png";
import ph34 from "../Images/ph34.png";
import ph35 from "../Images/ph35.png";
import ph36 from "../Images/ph36.png";
import ph37 from "../Images/ph37.png";
import ph38 from "../Images/ph38.png";
import ph39 from "../Images/ph39.png";
import ph40 from "../Images/ph40.png";
import ph41 from "../Images/ph41.png";
import ph42 from "../Images/ph42.png";
import ph43 from "../Images/ph43.png";
// import ph44 from "../Images/ph44.png";
import ph45 from "../Images/ph45.png";
import ph46 from "../Images/ph46.png";
import ph47 from "../Images/ph47.png";
import ph48 from "../Images/ph48.png";
import ph49 from "../Images/ph49.png";
import ph50 from "../Images/ph50.png";


//-----------------------------Agri-Commodities-------------------------------------------
import ag1 from "../Images/ag1.png";
import ag2 from "../Images/ag2.png";
import ag3 from "../Images/ag3.png";
import ag4 from "../Images/ag4.png";
import ag5 from "../Images/ag5.png";
import ag6 from "../Images/ag6.png";
import ag7 from "../Images/ag7.png";
import ag8 from "../Images/ag8.png";
// import ag9 from "../Images/ag9.png";
import ag10 from "../Images/ag10.png";
import ag11 from "../Images/ag11.png";
import ag12 from "../Images/ag12.png";
import ag13 from "../Images/ag13.png";
import ag14 from "../Images/ag14.png";
import ag15 from "../Images/ag15.png";
import ag16 from "../Images/ag16.png";
import ag17 from "../Images/ag17.png";
import ag18 from "../Images/ag18.png";
import ag19 from "../Images/ag19.png";
import ag20 from "../Images/ag20.png";
import ag21 from "../Images/ag21.png";
import ag22 from "../Images/ag22.png";
import ag23 from "../Images/ag23.png";
import ag24 from "../Images/ag24.png";
import ag25 from "../Images/ag25.png";
import ag26 from "../Images/ag26.png";
import ag27 from "../Images/ag27.png";
import ag28 from "../Images/ag28.png";
import ag29 from "../Images/ag29.png";
import ag30 from "../Images/ag30.png";
import ag31 from "../Images/ag31.png";
import ag32 from "../Images/ag32.png";
import ag33 from "../Images/ag33.png";
import ag34 from "../Images/ag34.png";
import ag35 from "../Images/ag35.png";
import ag36 from "../Images/ag36.png";
import ag37 from "../Images/ag37.png";
import ag38 from "../Images/ag38.png";
import ag39 from "../Images/ag39.png";
import ag40 from "../Images/ag40.png";
import ag41 from "../Images/ag41.png";
import ag42 from "../Images/ag42.png";
import ag43 from "../Images/ag43.png";
import ag44 from "../Images/ag44.png";
import ag45 from "../Images/ag45.png";
import ag46 from "../Images/ag46.png";
import ag47 from "../Images/ag47.png";
import ag48 from "../Images/ag48.png";
import ag49 from "../Images/ag49.png";
import ag50 from "../Images/ag50.png";



import av1 from "../Images/av1.png";
import av2 from "../Images/av2.png";
import av3 from "../Images/av3.png";
import av4 from "../Images/av4.png";
import av5 from "../Images/av5.png";
import av6 from "../Images/av6.png";
import av7 from "../Images/av7.png";
import av8 from "../Images/av8.png";
// import av9 from "../Images/av9.png";
import av10 from "../Images/av10.png";
import av11 from "../Images/av11.png";
import av12 from "../Images/av12.png";
import av13 from "../Images/av13.png";
import av14 from "../Images/av14.png";
import av15 from "../Images/av15.png";
import av16 from "../Images/av16.png";
import av17 from "../Images/av17.png";
// import av18 from "../Images/av18.png";
// import av19 from "../Images/av19.png";
import av20 from "../Images/av20.png";
import av21 from "../Images/av21.png";
// import av22 from "../Images/av22.png";
import av23 from "../Images/av23.png";
import av24 from "../Images/av24.png";
// import av25 from "../Images/av25.png";
import av26 from "../Images/av26.png";
// import av27 from "../Images/av27.png";
import av28 from "../Images/av28.png";
import av29 from "../Images/av29.png";
import av30 from "../Images/av30.png";
import av31 from "../Images/av31.png";
// import av32 from "../Images/av32.png";
import av33 from "../Images/av33.png";
import av34 from "../Images/av34.png";
// import av35 from "../Images/av35.png";
// import av36 from "../Images/av36.png";
import av37 from "../Images/av37.png";
// import av38 from "../Images/av38.png";
import av39 from "../Images/av39.png";
import av40 from "../Images/av40.png";
import av41 from "../Images/av41.png";
import av43 from "../Images/av43.png";
import av46 from "../Images/av46.png";
import av47 from "../Images/av47.png";
// import av41 from "../Images/av41.png";

//------------------------------------------------Metals & Alloys--------------------------------------------------

import me1 from "../Images/me1.png";
import me2 from "../Images/me2.png";
import me3 from "../Images/me3.png";
import me4 from "../Images/me4.png";
import me5 from "../Images/me5.png";
import me6 from "../Images/me6.png";
import me7 from "../Images/me7.png";
import me8 from "../Images/me8.png";
import me9 from "../Images/me9.png";
import me10 from "../Images/me10.png";
import me11 from "../Images/me11.png";
import me12 from "../Images/me12.png";
import me13 from "../Images/me13.png";
import me14 from "../Images/me14.png";
import me15 from "../Images/me15.png";
// import me16 from "../Images/me16.png";
import me17 from "../Images/me17.png";
// import me18 from "../Images/me18.png";
import me19 from "../Images/me19.png";
import me20 from "../Images/me20.png";
import me21 from "../Images/me21.png";
import me22 from "../Images/me22.png";
import me23 from "../Images/me23.png";
import me24 from "../Images/me24.png";
import me25 from "../Images/me25.png";
import me26 from "../Images/me26.png";
import me29 from "../Images/me29.png";
import me30 from "../Images/me30.png";





export default function Product() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const defaultCategory = queryParams.get("category"); // default category from URL
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory || null);

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

  // Simulated product list
  const allProducts = [

    { name: "Aircraft Fuselages", category: "Aviation Service and Parts", imgs: av1 },
    { name: "Wing Components", category: "Aviation Service and Parts", imgs: av2 },
    { name: "MRO Services (A320)", category: "Aviation Service and Parts", imgs: av3 },
    { name: "Landing Gear Parts", category: "Aviation Service and Parts", imgs: av4 },
    { name: "Avionics Components", category: "Aviation Service and Parts", imgs: av5 },
    { name: "Turbine Blades", category: "Aviation Service and Parts", imgs: av6 },
    { name: "Aircraft Fasteners", category: "Aviation Service and Parts", imgs: av7 },
    { name: "Hydraulic Actuators", category: "Aviation Service and Parts", imgs: av8 },
    // { name: "Ground Support Equipment (GSE)", category: "Aviation Service and Parts", imgs: av9 },
    { name: "Composite Panels", category: "Aviation Service and Parts", imgs: av10 },
    { name: "Engine Mounts", category: "Aviation Service and Parts", imgs: av11 },
    { name: "Cable Assemblies", category: "Aviation Service and Parts", imgs: av12 },
    { name: "Sheet Metal Parts", category: "Aviation Service and Parts", imgs: av13 },
    { name: "Aircraft Hoses", category: "Aviation Service and Parts", imgs: av14 },
    { name: "Insulation Blankets", category: "Aviation Service and Parts", imgs: av15 },
    { name: "Precision Machined Parts", category: "Aviation Service and Parts", imgs: av16 },
    { name: "Aircraft Seals", category: "Aviation Service and Parts", imgs: av17 },
    // { name: "Control Surfaces", category: "Aviation Service and Parts", imgs: av18 },
    // { name: "Propeller Parts", category: "Aviation Service and Parts", imgs: av19 },
    { name: "Aircraft Bearings", category: "Aviation Service and Parts", imgs: av20 },
    { name: "Pneumatic Valves", category: "Aviation Service and Parts", imgs: av21 },
    // { name: "De-Icing Systems", category: "Aviation Service and Parts", imgs: av22 },
    { name: "Aircraft Pumps", category: "Aviation Service and Parts", imgs: av23 },
    { name: "Tooling Services", category: "Aviation Service and Parts", imgs: av24 },
    // { name: "Aircraft Interiors", category: "Aviation Service and Parts", imgs: av25 },
    { name: "Jet Engine Parts", category: "Aviation Service and Parts", imgs: av26 },
    // { name: "Avionics Systems", category: "Aviation Service and Parts", imgs: av27 },
    { name: "Landing Gear Assemblies", category: "Aviation Service and Parts", imgs: av28 },
    { name: "Hydraulic Systems", category: "Aviation Service and Parts", imgs: av29 },
    { name: "Composite Materials", category: "Aviation Service and Parts", imgs: av30 },
    { name: "Aircraft Tires", category: "Aviation Service and Parts", imgs: av31 },
    // { name: "Flight Control Systems", category: "Aviation Service and Parts", imgs: av32 },
    { name: "Engine Control Units", category: "Aviation Service and Parts", imgs: av33 },
    { name: "APU (Auxiliary Power Unit)", category: "Aviation Service and Parts", imgs: av34 },
    // { name: "Radar Systems", category: "Aviation Service and Parts", imgs: av35 },
    // { name: "Cockpit Displays", category: "Aviation Service and Parts", imgs: av36 },
    { name: "Fuel Pumps", category: "Aviation Service and Parts", imgs: av37 },
    // { name: "De-Icing Equipment", category: "Aviation Service and Parts", imgs: av38 },
    { name: "Aircraft Batteries", category: "Aviation Service and Parts", imgs: av39 },
    { name: "Actuators (Electric)", category: "Aviation Service and Parts", imgs: av40 },
    { name: "Oxygen Systems", category: "Aviation Service and Parts", imgs: av41 },
    { name: "Heat Exchangers", category: "Aviation Service and Parts", imgs: av43 },
    { name: "Fire Suppression Systems", category: "Aviation Service and Parts", imgs: av46 },
    { name: "Vibration Isolators", category: "Aviation Service and Parts", imgs: av47 },
    // { name: "Oxygen Systems", category: "Aviation Service and Parts", imgs: av41 },


    //----------------------  FMCG Products----------------------------------------
    { name: "Whole & Ground Spices", category: "FMCG Products", imgs: f1 },
    { name: "Vinegar, Sauces & Ketchup", category: "FMCG Products", imgs: f2 },
    { name: "Tinned Fruits & Vegetables", category: "FMCG Products", imgs: f3 },
    { name: "Tea, Coffee & Infusions", category: "FMCG Products", imgs: f4 },
    { name: "Sugar and Salt", category: "FMCG Products", imgs: f5 },
    { name: "Salad Dressings & Dips", category: "FMCG Products", imgs: f6 },
    { name: "Rice Varieties", category: "FMCG Products", imgs: f7 },
    { name: "Assorted FMCG Grocery (20ft/40ft)", category: "FMCG Products", imgs: f74 },
    { name: "Ready-to-Eat Meals", category: "FMCG Products", imgs: f8 },
    { name: "Ready-to-Cook Gravy Mixes", category: "FMCG Products", imgs: f9 },

    { name: "Pickles & Chutneys", category: "FMCG Products", imgs: f12 },
    { name: "Papads & Fryums", category: "FMCG Products", imgs: f16 },
    { name: "Organic Grains & Millets", category: "FMCG Products", imgs: f17 },
    { name: "Organic & Gluten-Free Products", category: "FMCG Products", imgs: f18 },
    { name: "Non-stick Cookware", category: "FMCG Products", imgs: f19 },
    { name: "Non-Dairy Milk Alternatives", category: "FMCG Products", imgs: f20 },
    { name: "Keto & Low-Carb Products", category: "FMCG Products", imgs: f26 },
    { name: "Juices & Beverages", category: "FMCG Products", imgs: f27 },
    { name: "Jaggery & Natural Sweeteners", category: "FMCG Products", imgs: f28 },
    { name: "Instant Noodles & Pasta", category: "FMCG Products", imgs: f29 },
    { name: "Instant Mixes (Food)", category: "FMCG Products", imgs: f30 },
    { name: "Indian Traditional Sweets", category: "FMCG Products", imgs: f31 },
    { name: "Indian Snacks & Namkeen", category: "FMCG Products", imgs: f32 },
    { name: "Diabetic-Friendly Foods", category: "FMCG Products", imgs: f59 },
    { name: "Indian Masalas & Spice Blends", category: "FMCG Products", imgs: f33 },
    { name: "Incense Sticks & Cones", category: "FMCG Products", imgs: f34 },
    { name: "Ice Creams & Frozen Desserts", category: "FMCG Products", imgs: f35 },
    { name: "Baby Cereals & Foods", category: "FMCG Products", imgs: f73 },
    { name: "Pulses & Lentils", category: "FMCG Products", imgs: f10 },
    { name: "Herbal Teas & Infusions", category: "FMCG Products", imgs: f37 },
    { name: "Health Supplements & Capsules", category: "FMCG Products", imgs: f38 },
    { name: "Health Foods & Supergrains", category: "FMCG Products", imgs: f39 },
    { name: "Hair Oil & Shampoo", category: "FMCG Products", imgs: f41 },
    { name: "Gourmet Sauces & Condiments", category: "FMCG Products", imgs: f42 },
    { name: "Gluten-Free Bakery Items", category: "FMCG Products", imgs: f43 },
    { name: "Ghee & Butter", category: "FMCG Products", imgs: f44 },
    { name: "Frozen Indian Breads & Snacks", category: "FMCG Products", imgs: f45 },
    { name: "Flours (Wheat, Rice, Gram)", category: "FMCG Products", imgs: f46 },
    { name: "Essential Oils & Diffusers", category: "FMCG Products", imgs: f51 },
    { name: "Energy & Soft Drinks", category: "FMCG Products", imgs: f52 },
    { name: "Energy & Protein Bars", category: "FMCG Products", imgs: f53 },
    { name: "Edible Oils", category: "FMCG Products", imgs: f54 },
    { name: "Eco-friendly Disposable Cutlery", category: "FMCG Products", imgs: f55 },
    { name: "Dry Fruits & Nuts", category: "FMCG Products", imgs: f56 },
    { name: "Diwali Diyas & Holi Colors", category: "FMCG Products", imgs: f57 },

    // { name: "Dals (Split Pulses)", category: "FMCG Products", imgs: f61 },
    { name: "Cooking Pastes & Marinades", category: "FMCG Products", imgs: f64 },
    { name: "Chocolates & Confectionery", category: "FMCG Products", imgs: f65 },
    { name: "Canned Foods", category: "FMCG Products", imgs: f66 },
    { name: "Camphor & Pooja Samagri", category: "FMCG Products", imgs: f67 },
    { name: "Breakfast Cereals & Oats", category: "FMCG Products", imgs: f68 },
    { name: "Biscuits & Bakery Items", category: "FMCG Products", imgs: f70 },
    // { name: "Bathroom Cleaning Tools", category: "FMCG Products", imgs: f71 },

    { name: "Mouth Fresheners & Digestives", category: "FMCG Products", imgs: f21 },
    { name: "Mosquito Repellents", category: "FMCG Products", imgs: f22 },
    { name: "Mehendi & Hair Color", category: "FMCG Products", imgs: f23 },
    { name: "Makeup & Beauty Kits", category: "FMCG Products", imgs: f24 },
    { name: "Laundry Detergents", category: "FMCG Products", imgs: f25 },
    { name: "Perfumes & Attars", category: "FMCG Products", imgs: f14 },
    { name: "Paper Products (Tissue, Towels, Napkins)", category: "FMCG Products", imgs: f15 },
    { name: "Pet Food & Care", category: "FMCG Products", imgs: f13 },
    { name: "Handwash & Sanitizers", category: "FMCG Products", imgs: f40 },
    { name: "Floor & Toilet Cleaners", category: "FMCG Products", imgs: f47 },
    { name: "Body Lotions & Oils", category: "FMCG Products", imgs: f69 },
    { name: "Festive Decorative Lights", category: "FMCG Products", imgs: f48 },
    { name: "Festival Gift Boxes & Hampers", category: "FMCG Products", imgs: f49 },
    // { name: "Face Wash, Scrubs & Creams", category: "FMCG Products", imgs: f50 },
    { name: "Cookware & Kitchen Utensils", category: "FMCG Products", imgs: f63 },
    { name: "Copper Bottles & Utensils", category: "FMCG Products", imgs: f62 },
    { name: "Pressure Cookers & Pans", category: "FMCG Products", imgs: f11 },
    { name: "Deodorants & Fragrances", category: "FMCG Products", imgs: f60 },
    { name: "Dishwashing & Cleaning Products", category: "FMCG Products", imgs: f58 },
    { name: "Household Cleaning Tools", category: "FMCG Products", imgs: f36 },
    { name: "Bath & Personal Care Products", category: "FMCG Products", imgs: f72 },








    //-------------------------------------

    { name: "Sulfuric Acid", category: "Industrial Chemicals", imgs: i1 },
    { name: "Hydrochloric Acid", category: "Industrial Chemicals", imgs: i2 },
    { name: "Sodium Hydroxide", category: "Industrial Chemicals", imgs: i3 },
    { name: "Sodium Carbonate", category: "Industrial Chemicals", imgs: i4 },
    { name: "Potassium Chloride", category: "Industrial Chemicals", imgs: i5 },
    { name: "Calcium Chloride", category: "Industrial Chemicals", imgs: i6 },
    { name: "Ammonium Chloride", category: "Industrial Chemicals", imgs: i7 },
    { name: "Zinc Oxide", category: "Industrial Chemicals", imgs: i8 },
    { name: "Alumina", category: "Industrial Chemicals", imgs: i9 },
    { name: "Ferric Chloride", category: "Industrial Chemicals", imgs: i10 },
    { name: "Phosphoric Acid", category: "Industrial Chemicals", imgs: i11 },
    // { name: "Nitric Acid", category: "Industrial Chemicals", imgs: i12},
    // { name: "Liquid Chlorine", category: "Industrial Chemicals", imgs: i13 },
    // { name: "Hydrogen Peroxide", category: "Industrial Chemicals", imgs: i14 },




    //---------------------------------Machinery & Equipment--------------------------

    { name: "Excavators", category: "Machinery & Equipment", imgs: ma1 },
    { name: "Loaders (incl. JCBs)", category: "Machinery & Equipment", imgs: ma2 },
    { name: "Bulldozers", category: "Machinery & Equipment", imgs: ma3 },
    { name: "Cranes (Mobile/Tower)", category: "Machinery & Equipment", imgs: ma4 },
    { name: "Concrete Mixers", category: "Machinery & Equipment", imgs: ma5 },
    { name: "Backhoes", category: "Machinery & Equipment", imgs: ma6 },
    { name: "Graders", category: "Machinery & Equipment", imgs: ma7 },
    { name: "Dump Trucks", category: "Machinery & Equipment", imgs: ma8 },
    { name: "Compactors", category: "Machinery & Equipment", imgs: ma9 },
    { name: "Forklifts", category: "Machinery & Equipment", imgs: ma10 },


    // -------------------------------------"Animal Nutrition & Feed",------------------------------



    { name: "Oxytetracycline Injection", category: "Animal Nutrition & Feed", imgs: aa1 },
    { name: "Rabies Vaccine", category: "Animal Nutrition & Feed", imgs: aa2 },
    { name: "Ivermectin Tablets", category: "Animal Nutrition & Feed", imgs: aa3 },
    { name: "FMD Vaccine", category: "Animal Nutrition & Feed", imgs: aa4 },
    { name: "Albendazole Bolus", category: "Animal Nutrition & Feed", imgs: aa5 },
    { name: "Amoxicillin Injection", category: "Animal Nutrition & Feed", imgs: aa6 },
    { name: "PPR Vaccine", category: "Animal Nutrition & Feed", imgs: aa7 },
    { name: "Enrofloxacin Injection", category: "Animal Nutrition & Feed", imgs: aa8 },
    { name: "Levamisole Injection", category: "Animal Nutrition & Feed", imgs: aa9 },
    { name: "Clorsulon Injection", category: "Animal Nutrition & Feed", imgs: aa10 },
    { name: "Canine Parvovirus Vaccine", category: "Animal Nutrition & Feed", imgs: aa11 },
    { name: "Tilmicosin Injection", category: "Animal Nutrition & Feed", imgs: aa12 },
    { name: "Fenbendazole Powder", category: "Animal Nutrition & Feed", imgs: aa13 },
    { name: "Canine Monoclonal Antibodies", category: "Animal Nutrition & Feed", imgs: aa14 },
    { name: "Pet Nutraceuticals", category: "Animal Nutrition & Feed", imgs: aa15 },
    { name: "Bovine Growth Hormones", category: "Animal Nutrition & Feed", imgs: aa16 },
    { name: "Avian Influenza Vaccine", category: "Animal Nutrition & Feed", imgs: aa17 },
    { name: "Canine Distemper Vaccine", category: "Animal Nutrition & Feed", imgs: aa18 },
    { name: "Equine Tetanus Toxoid", category: "Animal Nutrition & Feed", imgs: aa19 },
    { name: "APIs (Oxytetracycline)", category: "Animal Nutrition & Feed", imgs: aa20 },
    { name: "APIs (Tilmicosin)", category: "Animal Nutrition & Feed", imgs: aa21 },
    { name: "APIs (Ceftiofur)", category: "Animal Nutrition & Feed", imgs: aa22 },
    { name: "Tylosin Injection", category: "Animal Nutrition & Feed", imgs: aa23 },
    { name: "Coccidiostats (Amprolium)", category: "Animal Nutrition & Feed", imgs: aa24 },
    { name: "Meloxicam Injection", category: "Animal Nutrition & Feed", imgs: aa25 },
    { name: "Poultry Vitamin Premix", category: "Animal Nutrition & Feed", imgs: aa26 },
    { name: "Fish Meal", category: "Animal Nutrition & Feed", imgs: aa27 },
    { name: "Cattle Mineral Mix", category: "Animal Nutrition & Feed", imgs: aa28 },
    { name: "Poultry Layer Feed", category: "Animal Nutrition & Feed", imgs: aa29 },
    { name: "Swine Grower Feed", category: "Animal Nutrition & Feed", imgs: aa30 },


    //-----------------------------------7.  Pharmaceutical Products-------------------------


    // { name: "Product 47", category: "Pharmaceutical Products", imgs: ph50 },

    { name: "Paracetamol (Acetaminophen)", category: "Pharmaceutical Products", imgs: ph1 },
    { name: "Amoxicillin", category: "Pharmaceutical Products", imgs: ph2 },
    { name: "Azithromycin", category: "Pharmaceutical Products", imgs: ph3 },
    { name: "Ciprofloxacin", category: "Pharmaceutical Products", imgs: ph4 },
    { name: "Metformin", category: "Pharmaceutical Products", imgs: ph5 },
    { name: "Glimepiride", category: "Pharmaceutical Products", imgs: ph6 },
    { name: "Atorvastatin", category: "Pharmaceutical Products", imgs: ph7 },
    { name: "Rosuvastatin", category: "Pharmaceutical Products", imgs: ph8 },
    { name: "Losartan", category: "Pharmaceutical Products", imgs: ph9 },
    { name: "Amlodipine", category: "Pharmaceutical Products", imgs: ph10 },
    { name: "Omeprazole", category: "Pharmaceutical Products", imgs: ph11 },
    { name: "Pantoprazole", category: "Pharmaceutical Products", imgs: ph12 },
    { name: "Ranitidine", category: "Pharmaceutical Products", imgs: ph13 },
    { name: "Levothyroxine", category: "Pharmaceutical Products", imgs: ph14 },
    { name: "Vitamin C (Ascorbic Acid)", category: "Pharmaceutical Products", imgs: ph15 },
    { name: "Vitamin D3 (Cholecalciferol)", category: "Pharmaceutical Products", imgs: ph16 },
    { name: "Vitamin B12 (Cyanocobalamin)", category: "Pharmaceutical Products", imgs: ph17 },
    { name: "Folic Acid", category: "Pharmaceutical Products", imgs: ph18 },
    { name: "Iron-Folic Acid Tablets", category: "Pharmaceutical Products", imgs: ph19 },
    { name: "Calcium Carbonate", category: "Pharmaceutical Products", imgs: ph20 },
    { name: "Zinc Sulfate", category: "Pharmaceutical Products", imgs: ph21 },
    { name: "Oral Rehydration Salts (ORS)", category: "Pharmaceutical Products", imgs: ph22 },
    { name: "Albendazole", category: "Pharmaceutical Products", imgs: ph23 },
    { name: "Ivermectin", category: "Pharmaceutical Products", imgs: ph24 },
    { name: "Hydroxychloroquine", category: "Pharmaceutical Products", imgs: ph25 },
    // { name: "Artemisinin-based Combination Therapies", category: "Pharmaceutical Products", imgs: ph26 },
    { name: "Ceftriaxone", category: "Pharmaceutical Products", imgs: ph27 },
    { name: "Cefixime", category: "Pharmaceutical Products", imgs: ph28 },
    { name: "Doxycycline", category: "Pharmaceutical Products", imgs: ph29 },
    { name: "Clindamycin", category: "Pharmaceutical Products", imgs: ph30 },
    { name: "Fluconazole", category: "Pharmaceutical Products", imgs: ph31 },
    { name: "Ketoconazole", category: "Pharmaceutical Products", imgs: ph32 },
    { name: "Metronidazole", category: "Pharmaceutical Products", imgs: ph33 },
    { name: "Tinidazole", category: "Pharmaceutical Products", imgs: ph34 },
    { name: "Rifampicin", category: "Pharmaceutical Products", imgs: ph35 },
    { name: "Ethambutol", category: "Pharmaceutical Products", imgs: ph36 },
    { name: "Isoniazid", category: "Pharmaceutical Products", imgs: ph37 },
    { name: "Pyrazinamide", category: "Pharmaceutical Products", imgs: ph38 },
    { name: "Dapsone", category: "Pharmaceutical Products", imgs: ph39 },
    { name: "Clofazimine", category: "Pharmaceutical Products", imgs: ph40 },
    { name: "Insulin (Human Recombinant)", category: "Pharmaceutical Products", imgs: ph41 },
    { name: "Recombinant Erythropoietin", category: "Pharmaceutical Products", imgs: ph42 },
    { name: "Filgrastim (G-CSF)", category: "Pharmaceutical Products", imgs: ph43 },
    // { name: "Rabies Vaccine (Human Diploid Cell)", category: "Pharmaceutical Products", imgs: ph44 },
    { name: "Rabies Vaccine (Human Diploid Cell)", category: "Pharmaceutical Products", imgs: ph45 },
    { name: "Hepatitis B Vaccine (Recombinant)", category: "Pharmaceutical Products", imgs: ph46 },
    { name: "Influenza Vaccine (Inactivated)", category: "Pharmaceutical Products", imgs: ph47 },
    { name: "Rotavirus Vaccine", category: "Pharmaceutical Products", imgs: ph48 },
    { name: "DTP Vaccine (Diphtheria-Tetanus-Pertussis)", category: "Pharmaceutical Products", imgs: ph49 },
    { name: "Multivitamin + Multimineral Capsules", category: "Pharmaceutical Products", imgs: ph50 },



    //--------------------------------------------    "Agri-Commodities"-------------------------------
    { name: "Almonds", category: "Agri-Commodities", imgs: ag1 },
    { name: "Barley", category: "Agri-Commodities", imgs: ag2 },
    { name: "Basmati Rice", category: "Agri-Commodities", imgs: ag3 },
    { name: "Cardamom", category: "Agri-Commodities", imgs: ag4 },
    { name: "Cashew Kernels", category: "Agri-Commodities", imgs: ag5 },
    { name: "Chia Seeds", category: "Agri-Commodities", imgs: ag6 },
    { name: "Chickpeas (Desi)", category: "Agri-Commodities", imgs: ag7 },
    { name: "Cocoa Powder & Powder", category: "Agri-Commodities", imgs: ag8 },
    // { name: "Coconut Oil", category: "Agri-Commodities", imgs: ag9 },
    { name: "Coffee", category: "Agri-Commodities", imgs: ag10 },
    { name: "Coriander Seeds", category: "Agri-Commodities", imgs: ag11 },
    { name: "Corn", category: "Agri-Commodities", imgs: ag12 },
    { name: "Cotton Lint", category: "Agri-Commodities", imgs: ag13 },
    { name: "Cumin Seeds", category: "Agri-Commodities", imgs: ag14 },
    { name: "Fennel Seeds", category: "Agri-Commodities", imgs: ag15 },
    { name: "Fenugreek Seeds", category: "Agri-Commodities", imgs: ag16 },
    { name: "Flax Seeds", category: "Agri-Commodities", imgs: ag17 },
    { name: "Ginger (Dry)", category: "Agri-Commodities", imgs: ag18 },
    { name: "Groundnut Kernels", category: "Agri-Commodities", imgs: ag19 },
    { name: "Guar Gum", category: "Agri-Commodities", imgs: ag20 },
    { name: "Hazelnuts", category: "Agri-Commodities", imgs: ag21 },
    { name: "Hemp Seeds", category: "Agri-Commodities", imgs: ag22 },
    { name: "Honey", category: "Agri-Commodities", imgs: ag23 },
    { name: "Isabgol (Psyllium)", category: "Agri-Commodities", imgs: ag24 },
    { name: "Lentils", category: "Agri-Commodities", imgs: ag25 },
    { name: "Maple Syrup", category: "Agri-Commodities", imgs: ag26 },
    { name: "Milk Powder", category: "Agri-Commodities", imgs: ag27 },
    { name: "Millets (Mixed)", category: "Agri-Commodities", imgs: ag28 },
    { name: "Moong Dal (Split)", category: "Agri-Commodities", imgs: ag29 },
    { name: "Mustard Seeds", category: "Agri-Commodities", imgs: ag30 },
    { name: "Natural Rubber", category: "Agri-Commodities", imgs: ag31 },
    { name: "Non-Basmati Rice", category: "Agri-Commodities", imgs: ag32 },
    { name: "Olive Oil", category: "Agri-Commodities", imgs: ag33 },
    { name: "Palm Oil", category: "Agri-Commodities", imgs: ag34 },
    { name: "Peas (Green/Frozen)", category: "Agri-Commodities", imgs: ag35 },
    { name: "Pecans", category: "Agri-Commodities", imgs: ag36 },
    { name: "Pigeon Pea", category: "Agri-Commodities", imgs: ag37 },
    { name: "Pistachios", category: "Agri-Commodities", imgs: ag38 },
    { name: "Quinoa", category: "Agri-Commodities", imgs: ag39 },
    { name: "Raisins", category: "Agri-Commodities", imgs: ag40 },
    { name: "Sesame Seeds", category: "Agri-Commodities", imgs: ag41 },
    { name: "Sorghum (Jowar)", category: "Agri-Commodities", imgs: ag42 },
    { name: "Soya Bean", category: "Agri-Commodities", imgs: ag43 },
    { name: "Sugar", category: "Agri-Commodities", imgs: ag44 },
    { name: "Sunflower Oil", category: "Agri-Commodities", imgs: ag45 },
    { name: "Sunflower Seeds", category: "Agri-Commodities", imgs: ag46 },
    { name: "Tamarind", category: "Agri-Commodities", imgs: ag47 },
    { name: "Turmeric Fingers", category: "Agri-Commodities", imgs: ag48 },
    { name: "Vanilla", category: "Agri-Commodities", imgs: ag49 },
    { name: "Wheat", category: "Agri-Commodities", imgs: ag50 },


    // //-----------------------------------------------------Metals & Alloys---------------------------------------------------------------------
    { name: "HMS 1 & HMS 2", category: "Metals & Alloys", imgs: me1 },
    { name: "Shredded Steel Scrap (ISRI 210-211)", category: "Metals & Alloys", imgs: me2 },
    { name: "Cast Iron Scrap", category: "Metals & Alloys", imgs: me3 },
    { name: "Mild Steel Scrap", category: "Metals & Alloys", imgs: me4 },
    { name: "CRGO / CRNO Sheet Scrap", category: "Metals & Alloys", imgs: me5 },
    { name: "Rail Scrap (R50-R65)", category: "Metals & Alloys", imgs: me6 },
    { name: "Automobile Scrap", category: "Metals & Alloys", imgs: me7 },
    { name: "Re-Rollable Scrap", category: "Metals & Alloys", imgs: me8 },
    { name: "Steel Turning & Boring Scrap", category: "Metals & Alloys", imgs: me9 },
    { name: "Aluminum Scrap – Tense", category: "Metals & Alloys", imgs: me10 },
    { name: "Aluminum Scrap – Taint/Tabor", category: "Metals & Alloys", imgs: me11 },
    { name: "Aluminum Scrap – UBC", category: "Metals & Alloys", imgs: me12 },
    { name: "Aluminum Scrap – Twitch", category: "Metals & Alloys", imgs: me13 },
    { name: "Copper Scrap – Millberry", category: "Metals & Alloys", imgs: me14 },
    { name: "Copper Scrap – Berry/Birch", category: "Metals & Alloys", imgs: me15 },
    // { name: "Brass Scrap – Honey", category: "Metals & Alloys", imgs: me16 },
    { name: "Brass Turnings", category: "Metals & Alloys", imgs: me17 },
    // { name: "Lead Scrap – Rains", category: "Metals & Alloys", imgs: me18 },
    { name: "Zinc Scrap (Old Die Cast, Dross)", category: "Metals & Alloys", imgs: me19 },
    { name: "Stainless Steel Scrap (304, 316, etc.)", category: "Metals & Alloys", imgs: me20 },
    { name: "Nickel Scrap (incl. Inconel)", category: "Metals & Alloys", imgs: me21 },
    { name: "Titanium Scrap", category: "Metals & Alloys", imgs: me22 },
    { name: "Tungsten Carbide Scrap", category: "Metals & Alloys", imgs: me23 },
    { name: "Tool Steel & HSS Scrap", category: "Metals & Alloys", imgs: me24 },
    { name: "Monel / Hastelloy Scrap", category: "Metals & Alloys", imgs: me25 },
    { name: "Electric Motor Scrap", category: "Metals & Alloys", imgs: me26 },
    // { name: "Generator & Transformer Scrap", category: "Metals & Alloys", imgs: me27 },
    // { name: "Battery Scrap (Lead-Acid, Lithium-Ion)", category: "Metals & Alloys", imgs: me28 },
    { name: "Electronic Waste Scrap (Wires, PCBs)", category: "Metals & Alloys", imgs: me29 },
    { name: "Cable Scrap (Aluminum/Copper Cables)", category: "Metals & Alloys", imgs: me30 },






  ];

  // Filter products if a category is selected
  const filteredProducts = selectedCategory
    ? allProducts.filter(product => product.category === selectedCategory)
    : allProducts;

  return (
    <>



      {/* <Nav bgColor="bg-white" textColor="text-black" />
      <div
        className="relative h-[40vh] w-full bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="relative h-full flex flex-col justify-center px-6 md:px-12 lg:px-20">
          <div className="mb-2 text-white text-sm md:text-base">
            <a href="/" className="hover:text-orange-400 transition-colors">
              Home
            </a>
            <span className="mx-2">/</span>
            <a href="/product" className="hover:text-orange-400 transition-colors">
              Product
            </a>
          </div>
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
        </div> */}




      {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-4"> */}
      {/* Sidebar */}
      {/* <div className="bg-white shadow-md rounded-lg p-2">
            <ul className="space-y-3">
              {categories.map((item, index) => (
                <li
                  key={index}
                  className={`cursor-pointer font-medium px-4 py-2 rounded-lg 
                    ${selectedCategory === item
                      ? "bg-orange-500 text-white"
                      : "hover:bg-orange-500 hover:text-white text-gray-700"
                    }`}
                  onClick={() => setSelectedCategory(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div> */}

      {/* Product Grid */}
      {/* <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={product.imgs}
                  alt="Product"
                  className="w-full h-70 object-cover"
                />
                <div className="p-2 text-center">
                  <p className="font-medium text-gray-800">{product.name}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div> */}
      {/* ----------------- */}
      <Nav bgColor="bg-white" textColor="text-black" />

      {/* Hero Section */}
      <div
        className="relative h-[40vh] w-full bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="relative h-full flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="mb-2 text-white text-xs sm:text-sm md:text-base">
            <a href="/" className="hover:text-orange-400 transition-colors">
              Home
            </a>
            <span className="mx-2">/</span>
            <a href="/product" className="hover:text-orange-400 transition-colors">
              Product
            </a>
          </div>
          <h1 className="text-orange-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Product
          </h1>
        </div>
      </div>

      {/* Main Container */}
      <div className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        {/* <div className="mb-4 flex flex-col sm:flex-row sm:space-x-1 rounded-lg">
          <input
            type="text"
            placeholder="Search Product..."
            className="lg:w-[18%] sm:w-auto  px-4 py-2 text-gray-700 bg-[#1F4278] rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
          />
          <button className="mt-2 sm:mt-0 text-white md:px-4 px-6  py-2 bg-[#1F4278] rounded-md hover:bg-gray-600 transition-colors duration-300">
            Search
          </button>
        </div> */}
        <div className="mb-4 flex sm:mt-2 flex-col md:flex-row md:space-x-1 lg:flex-row lg:space-x-1 rounded-lg">
          <input
            type="text"
            placeholder="Search Product..."
            className="w-full lg:w-[18%] px-4 py-2 text-white bg-[#1F4278] rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition mb-[2px] "
          />
          <button className=" lg:mt-0 text-white px-6 py-2 bg-[#1F4278] rounded-md hover:bg-gray-600 transition-colors duration-300">
            Search
          </button>
        </div>


        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="md:w-1/4 bg-white shadow-lg border border-gray-200 rounded-lg p-4">
            <ul className="space-y-3">
              {categories.map((item, index) => (
                <li
                  key={index}
                  className={`cursor-pointer font-medium px-4 py-2 rounded-lg text-center md:text-left
              ${selectedCategory === item
                      ? "bg-orange-500 text-white"
                      : "hover:bg-orange-500 hover:text-white text-gray-700"
                    }`}
                  onClick={() => setSelectedCategory(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Product Grid */}
          {/* <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
              >
                <img
                  src={product.imgs}
                  alt={product.name}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover"
                />
                <div className="p-4 text-center">
                  <p className="font-medium text-gray-800 text-sm sm:text-base">
                    {product.name}
                  </p>
                </div>
              </div>
            ))}
          </div> */}
          <div className="md:w-3/4 max-h-[80vh] overflow-y-auto pr-2 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
              {filteredProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col "
                >
                  <img
                    src={product.imgs}
                    alt={product.name}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover"
                  />
                  <div className="p-4 text-center">
                    <p className="font-medium text-gray-800 text-sm sm:text-base">
                      {product.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </>
  );
}
