// import { useState } from "react";

// import { Link } from "react-router-dom";
// import logo2 from "../Images/logo2.png";

// export default function Nav({ bgColor, textColor }) {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
//   const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)
//   const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

//   return (
//     <>
//       <nav className={`flex justify-between items-center px-4 py-5 ${bgColor} md:px-10 lg:px-20`}>
//         <div className="flex justify-start">
//           <Link to="/"><img src={logo2} alt="Solvi Globe Logo" className="h-8 w-auto md:h-10 lg:h-12" /></Link>
//         </div>

//         {/* Desktop Navigation */}
//         <ul className={`hidden md:flex space-x-6 items-center ${textColor}`}>
//           <Link to="/About">
//             <li
//               className="relative text-sm md:text-base lg:text-lg hover:text-orange-500 cursor-pointer z-10 lg:border-r-1  lg:pr-4 border-gray-500"
//               onMouseEnter={() => setIsAboutDropdownOpen(true)}
//               onMouseLeave={() => setIsAboutDropdownOpen(false)}
//             >
//               About us
//               {isAboutDropdownOpen && (
//                 <ul className="absolute top-full left-0 bg-white text-black mt-2 w-[220px] rounded shadow-lg">
//                   <Link to="/OurTeam"><li className="px-4 py-2 hover:bg-orange-500 text-sm md:text-base">Our Team</li></Link>
//                   <li className="px-4 py-2 hover:bg-orange-500 text-sm md:text-base">
//                     Founder’s Note
//                   </li>
//                   <li className="px-4 py-2 hover:bg-orange-500 text-sm md:text-base">
//                     Founder’s Note
//                   </li>

//                 </ul>
//               )}
//             </li>
//           </Link>

//           {/* Product Dropdown */}



//           <Link to="/Product">
//             <li
//               className="relative text-sm md:text-base lg:text-lg hover:text-orange-500 cursor-pointer z-10  lg:pr-4 lg:border-r-1  border-gray-500"
//               onMouseEnter={() => setIsProductDropdownOpen(true)}
//               onMouseLeave={() => setIsProductDropdownOpen(false)}
//             >
//               Product
//               {isProductDropdownOpen && (
//                 <ul className="absolute top-full  left-0  bg-white text-black mt-2 rounded shadow-lg w-[220px]">
//                   {/* Categories */}

//                   <li className="px-4 py-2  hover:bg-gray-200 text-sm md:text-base">FMCG Products</li>
//                   <li className="px-4 py-2  hover:bg-gray-200 text-sm md:text-base">Industrial Chemicals</li>
//                   <li className="px-4 py-2  hover:bg-gray-200 text-sm md:text-base">Petrochemical Products</li>
//                   <li className="px-4 py-2  hover:bg-orange-500 text-sm md:text-base ">Metals & Alloys</li>
//                   <li className="px-4 py-2  hover:bg-gray-200 text-sm md:text-base">Agri-Commodities</li>
//                   <li className="px-4 py-2  hover:bg-gray-200 text-sm md:text-base">Aviation Service and Parts</li>
//                   <li className="px-4 py-2  hover:bg-gray-200 text-sm md:text-base">Pharmaceutical Products</li>
//                   <li className="px-4 py-2  hover:bg-gray-200 text-sm md:text-base">Machinery & Equipment</li>
//                   <li className="px-4 py-2  hover:bg-gray-200 text-sm md:text-base">Animal Nutrition & Feed</li>

//                 </ul>
//               )}
//             </li>
//           </Link>


//           {/* Services Dropdown */}
//           <Link to="/Services">
//             <li
//               className="relative text-sm md:text-base lg:text-lg hover:text-orange-500 cursor-pointer z-10 lg:pr-4 lg:border-r-1  border-gray-500"
//               onMouseEnter={() => setIsServicesDropdownOpen(true)}
//               onMouseLeave={() => setIsServicesDropdownOpen(false)}
//             >
//               Services
//               {isServicesDropdownOpen && (
//                 <ul className="absolute top-full left-0 bg-white text-black mt-2 p-2 rounded shadow-lg w-[220px]">
//                   <li className="px-4 py-2 hover:bg-orange-500 text-gray-700 rounded-lg hover:text-white text-sm md:text-base">Export-Import Services</li>
//                   <li className="px-4 py-2 hover:bg-orange-500 text-gray-700 rounded-lg hover:text-white text-sm md:text-base">E2E Logistic Services</li>
//                   <li className="px-4 py-2 hover:bg-orange-500 text-gray-700 rounded-lg hover:text-white text-sm md:text-base">Product Distribution</li>
//                   <li className="px-4 py-2 hover:bg-orange-500 text-gray-700 rounded-lg hover:text-white text-sm md:text-base">Warehousing Services</li>
//                   <li className="px-4 py-2 hover:bg-orange-500 text-gray-700 rounded-lg hover:text-white text-sm md:text-base">IT Outsourcing Services</li>
//                   <li className="px-4 py-2 hover:bg-orange-500 text-gray-700 rounded-lg hover:text-white text-sm md:text-base">Trade Finance</li>
//                   <li className="px-4 py-2 hover:bg-orange-500 text-gray-700 rounded-lg hover:text-white text-sm md:text-base">Product R&D</li>
//                   <li className="px-4 py-2 hover:bg-orange-500 text-gray-700 rounded-lg hover:text-white text-sm md:text-base">Ship Chandling Services</li>
//                 </ul>
//               )}
//             </li>
//           </Link>

//           <Link to="/Career"> <li className="text-sm md:text-base lg:text-lg hover:text-orange-500 cursor-pointer lg:pr-4  lg:border-r-1  border-gray-500">Career</li></Link>
//           <Link to="/Blog"><li className="text-sm md:text-base lg:text-lg hover:text-orange-500 cursor-pointer  lg:border-r-1  lg:pr-4 border-gray-500">Blog</li></Link>
//           <Link to="/ContactUs"><li className="text-sm md:text-base lg:text-lg hover:text-orange-500 cursor-pointer">Contact us</li></Link>

//           {/* Inquiry Button */}
//           <Link to="/InquiryForm"><button className="bg-orange-500 hover:bg-orange-600 text-white text-sm md:text-base px-4 py-2 rounded-lg">
//             Inquiry Form
//           </button></Link>
//         </ul>

//         {/* Mobile Navigation Toggle */}
//         <button
//           className="md:hidden flex justify-center w-8 h-8 bg-black-900"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-9">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//           </svg>
//         </button>
//       </nav>

//       {/* Mobile Navigation Slider */}
//       <div
//         className={`fixed top-0 right-0 h-screen w-full bg-white shadow-lg z-30 duration-500   ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
//       >
//         <button
//           className="absolute top-4 right-4"
//           onClick={() => setIsMobileMenuOpen(false)}
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>

//         <ul className="flex flex-col space-y-4 p-4">
//           {/* <Link to={'/About'}><li className="text-sm md:text-base py-2 hover:bg-gray-200">About us</li></Link> */}

//           <Link to="/About">
//             <li
//               className="relative text-sm md:text-base py-2 hover:bg-gray-200"
//               onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
//               onMouseLeave={() => setIsAboutDropdownOpen(false)}
//             >
//               About us
//               {isAboutDropdownOpen && (
//                 <ul className="mt-2">
//                    <Link to="/OurTeam"><li className="px-4 py-2 hover:bg-orange-500 text-sm md:text-base">Our Team</li></Link>
//                    <Link to="/FounderNote">  <li className="px-4 py-2 hover:bg-orange-500 text-sm md:text-base">
//                     Founder’s Note </li></Link>
//                 </ul>
//               )}
//             </li>
//           </Link>

//           {/* Product Dropdown */}
//           <Link to="/Product"><li
//             className="relative text-sm md:text-base py-2 hover:bg-gray-200"
//             onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
//           >
//             Product
//             {isProductDropdownOpen && (
//               <ul className="mt-2">
//                 <li className="px-4 py-2 hover:bg-gray-200 text-sm md:text-base">Product 1</li>
//                 <li className="px-4 py-2 hover:bg-gray-200 text-sm md:text-base">Product 2</li>
//                 <li className="px-4 py-2 hover:bg-gray-200 text-sm md:text-base">Product 3</li>
//               </ul>
//             )}
//           </li>
//           </Link>

//           {/* Services Dropdown */}
//           <Link to="/Services">
//             <li
//               className="relative text-sm md:text-base py-2 hover:bg-gray-200"
//               onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
//             >
//               Services
//               {isServicesDropdownOpen && (
//                 <ul className="mt-2">
//                   <li className="px-4 py-2 hover:bg-gray-200 text-sm md:text-base">Service 1</li>
//                   <li className="px-4 py-2 hover:bg-gray-200 text-sm md:text-base">Service 2</li>
//                   <li className="px-4 py-2 hover:bg-gray-200 text-sm md:text-base">Service 3</li>
//                 </ul>
//               )}
//             </li></Link>

//           <Link to="/Career"><li className="text-sm md:text-base py-2 hover:bg-gray-200">Career</li></Link>
//           <Link to="/Blog"><li className="text-sm md:text-base py-2 hover:bg-gray-200">Blog</li></Link>
//           <Link to="/Map"><li className="text-sm md:text-base py-2 hover:bg-gray-200">Contact us</li></Link>

//           {/* Inquiry Button */}
//           <Link to="/InquiryForm"><button className="bg-orange-500 hover:bg-orange-600 text-white text-sm md:text-base px-4 py-2 rounded-lg">
//             Inquiry Form
//           </button></Link>
//         </ul>
//       </div>
//     </>
//   );
// }



//-------------------------------my code----------------------

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo2 from "../Images/logo2.png";

export default function Nav({ bgColor, textColor }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const handleNavigation = (categoryName) => {
    // Navigate to the Product.jsx page with the category name as a query parameter
    navigate(`/product?category=${encodeURIComponent(categoryName)}`);
    console.log(categoryName, "22");
  };
  const navigate = useNavigate();

  // console.log(location.pathname === "/", 'location');

  return (
    <>
      {/* <nav className={`flex justify-between items-center px-4 py-5 ${bgColor} md:px-10 lg:px-20`}> */}
      <nav className={`flex justify-between items-center lg:px-16 py-8  px-4 container mx-auto  ${bgColor}`}>
        <div className="flex justify-start">
          <Link to="/"><img src={logo2} alt="" className="h-15 w-auto md:h-10 lg:h-12" /></Link>
        </div>

        {/* Desktop Navigation */}
        {/* <ul className={`hidden  md:flex space-x-6 items-center ${textColor}`}> */}
        <ul className={`hidden md:flex flex-1 justify-center space-x-6 items-center ${textColor}`}>
          <Link to={'/About'}><li
            className="relative text-sm md:text-base lg:text-lg hover:text-orange-500 cursor-pointer z-40 lg:border-r-1 lg:pr-4 border-gray-500"
            // onClick={() => {

            //   setIsAboutDropdownOpen(!isAboutDropdownOpen)
            //   setIsProductDropdownOpen(false)
            //   setIsServicesDropdownOpen(false)
            // }

            // }
            onMouseEnter={() => setIsAboutDropdownOpen(true)}
            onMouseLeave={() => setIsAboutDropdownOpen(false)}
          >
            About us
            {/* {isAboutDropdownOpen && (
              <ul className="absolute top-full left-0 bg-white text-black  w-[220px] rounded shadow-lg">
                <Link to="/OurTeam">
                  <li className="px-4 py-2 hover:bg-orange-500 hover:text-white text-sm md:text-base">
                    Our Team
                  </li>
                </Link>
                <Link to="/Founder">
                  <li className="px-4 py-2 hover:bg-orange-500 hover:text-white text-sm md:text-base">
                    Founder’s Note
                  </li>
                </Link>
                <Link to="/About">
                  <li className="px-4 py-2 hover:bg-orange-500 hover:text-white text-sm md:text-base">
                    About Us
                  </li>
                </Link>
              </ul>
            )} */}
          </li></Link>

          {/* Product Dropdown */}




          <li
            className="relative text-sm md:text-base lg:text-lg hover:text-orange-500 cursor-pointer z-40   lg:pr-4 lg:border-r-1  border-gray-500"
            onClick={() => {
              setIsProductDropdownOpen(!isProductDropdownOpen)
              setIsAboutDropdownOpen(false)
              setIsServicesDropdownOpen(false)
            }}
            onMouseEnter={() => setIsProductDropdownOpen(true)}
            onMouseLeave={() => setIsProductDropdownOpen(false)}
          // onMouseLeave={() => setIsProductDropdownOpen(false)}
          >
            Product
            {isProductDropdownOpen && (
              <ul className="absolute top-full  left-0  bg-white text-black  rounded shadow-lg w-[220px]">
                {/* Categories */}

                <li className="px-4 py-2  hover:bg-orange-500 hover:text-white text-sm md:text-base" onClick={() => handleNavigation("FMCG Products")}>FMCG Products</li>
                <li className="px-4 py-2  hover:bg-orange-500 hover:text-white  text-sm md:text-base" onClick={() => handleNavigation("Industrial Chemicals")}>Industrial Chemicals</li>
                <li className="px-4 py-2  hover:bg-orange-500 hover:text-white  text-sm md:text-base" onClick={() => handleNavigation("Petrochemical Products")}>Petrochemical Products</li>
                <li className="px-4 py-2  hover:bg-orange-500 hover:text-white  text-sm md:text-base" onClick={() => handleNavigation("Metals & Alloys")}>Metals & Alloys</li>
                <li className="px-4 py-2  hover:bg-orange-500 hover:text-white text-sm md:text-base" onClick={() => handleNavigation("Agri-Commodities")}>Agri-Commodities</li>
                <li className="px-4 py-2  hover:bg-orange-500 hover:text-white text-sm md:text-base" onClick={() => handleNavigation("Aviation Service and Parts")}>Aviation Service and Parts</li>
                <li className="px-4 py-2  hover:bg-orange-500 hover:text-white text-sm md:text-base" onClick={() => handleNavigation("Pharmaceutical Products")}>Pharmaceutical Products</li>
                <li className="px-4 py-2  hover:bg-orange-500 hover:text-white text-sm md:text-base" onClick={() => handleNavigation("Machinery & Equipment")}>Machinery & Equipment</li>
                <li className="px-4 py-2  hover:bg-orange-500 hover:text-white text-sm md:text-base" onClick={() => handleNavigation("Animal Nutrition & Feed")}>Animal Nutrition & Feed</li>

              </ul>
            )}
          </li>



          {/* Services Dropdown */}

          <li
            className="relative text-sm md:text-base lg:text-lg hover:text-orange-500 cursor-pointer z-40 lg:pr-4 lg:border-r-1  border-gray-500"
            onClick={() => {
              setIsServicesDropdownOpen(!isServicesDropdownOpen)
              setIsAboutDropdownOpen(false)
              setIsProductDropdownOpen(false)
            }}
            onMouseEnter={() => setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
          // onMouseLeave={() => setIsServicesDropdownOpen(false)}
          >
            Services
            {isServicesDropdownOpen && (
              <ul className="absolute top-full left-0 bg-white text-black   rounded shadow-lg w-[220px]">
                <Link to={'/Services'}><li className="px-4 py-2 hover:bg-orange-500 text-gray-700  hover:text-white text-sm md:text-base">Export-Import Services</li></Link>
                <Link to={'/E2Eservices'}><li className="px-4 py-2 hover:bg-orange-500 text-gray-700  hover:text-white text-sm md:text-base">E2E Logistic Services</li></Link>
                <Link to={'/Distribution'}>  <li className="px-4 py-2 hover:bg-orange-500 text-gray-700  hover:text-white text-sm md:text-base">Product Distribution</li></Link>
                <Link to={'/Warehousing'}> <li className="px-4 py-2 hover:bg-orange-500 text-gray-700  hover:text-white text-sm md:text-base">Warehousing Services</li></Link>
                <Link to={'/ITOutsourcing'}> <li className="px-4 py-2 hover:bg-orange-500 text-gray-700  hover:text-white text-sm md:text-base">IT Outsourcing Services</li></Link>
                <Link to={'/Tradefinance'}> <li className="px-4 py-2 hover:bg-orange-500 text-gray-700  hover:text-white text-sm md:text-base">Trade Finance</li></Link>
                <Link to={'/ProductRandD'}> <li className="px-4 py-2 hover:bg-orange-500 text-gray-700  hover:text-white text-sm md:text-base">Product R&D</li></Link>
                <Link to={'/Shipchandling'}> <li className="px-4 py-2 hover:bg-orange-500 text-gray-700  hover:text-white text-sm md:text-base">Ship Chandling Services</li></Link>
              </ul>
            )}
          </li>


          {/* <Link to="/Career"> <li className="text-sm md:text-base lg:text-lg hover:text-orange-500 cursor-pointer lg:pr-4  lg:border-r-1  border-gray-500">Career</li></Link> */}
          {/* <Link to="/Blog"><li className="text-sm md:text-base lg:text-lg hover:text-orange-500 cursor-pointer  lg:border-r-1  lg:pr-4 border-gray-500">Blog</li></Link> */}
          <Link to="/ContactUs"><li className="text-sm md:text-base lg:text-lg hover:text-orange-500 cursor-pointer">Contact us</li></Link>

          {/* Inquiry Button */}

        </ul>
        <Link to="/InquiryForm"><button className="bg-orange-500 hover:bg-orange-600 text-white text-sm md:text-base px-4 py-2 rounded-lg hidden md:block cursor-pointer">
          Inquiry Form
        </button></Link>
        {/* Mobile Navigation Toggle */}
        <button
          className={`md:hidden flex justify-end  w-8 h-8 bg-black-900 ml-2 ${location.pathname === "/" ? "text-white" : ""} ` }
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {!isMobileMenuOpen ? (
            // Hamburger Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            // Close Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Navigation Slider */}


      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-full bg-white shadow-lg z-30 duration-500 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-0 text-black mb-20 p-2"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Menu Items */}
        <ul className="flex flex-col space-y-4 p-4">
          {/* About Dropdown */}
          <li>
            <Link to={'/About'}> <div
              className="flex justify-between items-center text-sm md:text-base py-2 hover:bg-gray-200 cursor-pointer mt-5"
              onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
            >
              About Us
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-4 h-4 transform ${isAboutDropdownOpen ? "rotate-180" : ""
                  }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 9l-7.5 7.5L4.5 9"
                />
              </svg> */}
            </div></Link>
            {/* {isAboutDropdownOpen && (
              <ul className="pl-4 space-y-2">
                <Link to="/OurTeam">
                  <li className="text-sm md:text-base py-2 hover:bg-orange-500">
                    Our Team
                  </li>
                </Link>
                <Link to="/Founder">
                  <li className="text-sm md:text-base py-2 hover:bg-orange-500">
                    Founder’s Note
                  </li>
                </Link>
                <Link to="/About">
                  <li className="text-sm md:text-base py-2 hover:bg-orange-500">
                    About Us
                  </li>
                </Link>
              </ul>
            )} */}
          </li>

          {/* Product Dropdown */}
          <li>
            <div
              className="flex justify-between items-center text-sm md:text-base py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
            >
              Product
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-4 h-4 transform ${isProductDropdownOpen ? "rotate-180" : ""
                  }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 9l-7.5 7.5L4.5 9"
                />
              </svg>
            </div>
            {isProductDropdownOpen && (
              <ul className="pl-4 space-y-2">
                <li className="text-sm md:text-base py-2 hover:bg-gray-200" onClick={() => {
                  handleNavigation("FMCG Products");
                  setIsMobileMenuOpen(false);
                }} >
                  FMCG Products
                </li>
                <li className="text-sm md:text-base py-2 hover:bg-gray-200" onClick={() => {
                  handleNavigation("Industrial Chemicals")
                  setIsMobileMenuOpen(false);
                }}>
                  Industrial Chemicals
                </li>
                <li className="text-sm md:text-base py-2 hover:bg-gray-200" onClick={() => {
                  handleNavigation("Petrochemical Products")
                  setIsMobileMenuOpen(false);
                }}>

                  Petrochemical Products
                </li>
                <li className="text-sm md:text-base py-2 hover:bg-gray-200" onClick={() => {
                  handleNavigation("Metals & Alloys")
                  setIsMobileMenuOpen(false);
                }}>
                  Metals & Alloys
                </li>
                <li className="text-sm md:text-base py-2 hover:bg-gray-200" onClick={() => {
                  handleNavigation("Agri-Commodities");
                  setIsMobileMenuOpen(false);
                }}>
                  Agri-Commodities
                </li>
                <li className="text-sm md:text-base py-2 hover:bg-gray-200" onClick={() => {
                  handleNavigation("Aviation Service and Parts");
                  setIsMobileMenuOpen(false);
                }}>
                  Aviation Service and Parts
                </li>
                <li className="text-sm md:text-base py-2 hover:bg-gray-200" onClick={() => {
                  handleNavigation(" Pharmaceutical Products");
                  setIsMobileMenuOpen(false);
                }}>
                  Pharmaceutical Products
                </li>
                <li className="text-sm md:text-base py-2 hover:bg-gray-200" onClick={() => {
                  handleNavigation("Machinery & Equipment");
                  setIsMobileMenuOpen(false);
                }}>
                  Machinery & Equipment
                </li>
                <li className="text-sm md:text-base py-2 hover:bg-gray-200" onClick={() => {
                  handleNavigation("Animal Nutrition & Feed");
                  setIsMobileMenuOpen(false);
                }}>
                  Animal Nutrition & Feed
                </li>
              </ul>
            )}
          </li>

          {/* Services Dropdown */}
          <li>
            <div
              className="flex justify-between items-center text-sm md:text-base py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
            >
              Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-4 h-4 transform ${isServicesDropdownOpen ? "rotate-180" : ""
                  }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 9l-7.5 7.5L4.5 9"
                />
              </svg>
            </div>
            {isServicesDropdownOpen && (
              <ul className="pl-4 space-y-2">

                <Link to={'/Services'}><li className="text-sm md:text-base py-2 hover:bg-gray-200" onClick={() => { setIsMobileMenuOpen(false) }} >
                  Export-Import Services
                </li></Link>
                <Link to={'/E2Eservices'}><li className="text-sm md:text-base py-2 hover:bg-gray-200" onClick={() => { setIsMobileMenuOpen(false) }}>
                  E2E Logistic Services
                </li></Link>
                <Link to={'/Distribution'}><li className="text-sm md:text-base py-2 hover:bg-gray-200" onClick={() => { setIsMobileMenuOpen(false) }}>
                  Product Distribution
                </li></Link>
                <Link to={'/Warehousing'}>    <li className="text-sm md:text-base py-2 hover:bg-gray-200" onClick={() => { setIsMobileMenuOpen(false) }}>
                  Warehousing Services
                </li></Link>
                <Link to={'/ITOutsourcing'}> <li className="text-sm md:text-base py-2 hover:bg-gray-200" onClick={() => { setIsMobileMenuOpen(false) }}>
                  IT Outsourcing Services
                </li></Link>
                <Link to={'/Tradefinance'}> <li className="text-sm md:text-base py-2 hover:bg-gray-200" onClick={() => { setIsMobileMenuOpen(false) }}>
                  Trade Finance
                </li></Link>
                <Link to={'/ProductRandD'}><li className="text-sm md:text-base py-2 hover:bg-gray-200" onClick={() => { setIsMobileMenuOpen(false) }}>
                  Product R&D
                </li></Link>
                <Link to={'/Shipchandling'}> <li className="text-sm md:text-base py-2 hover:bg-gray-200" onClick={() => { setIsMobileMenuOpen(false) }}>
                  Ship Chandling Services
                </li></Link>

              </ul>
            )}
          </li>

          {/* Other Links */}
          {/* <Link to="/Career">
            <li className="text-sm md:text-base py-2 hover:bg-gray-200">Career</li>
          </Link>
          <Link to="/Blog">
            <li className="text-sm md:text-base py-2 hover:bg-gray-200">Blog</li>
          </Link> */}
          <Link to="/ContactUs">
            <li className="text-sm md:text-base py-2 hover:bg-gray-200">Contact Us</li>
          </Link>

          {/* Inquiry Button */}
          <Link to="/InquiryForm">
            <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm md:text-base px-4 py-2 rounded-lg w-full">
              Inquiry Form
            </button>
          </Link>
        </ul>
      </div>
    </>
  );
}



// ------------old codee


// import { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../Images/logo2.png";

// export default function Nav({ bgColor, textColor }) {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
//   const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)
//   const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

//   return (
//     <>
//       <nav className={`flex justify-between items-center px-4 py-5 ${bgColor} md:px-10 lg:px-20`}>
//         <div className="flex justify-start">
//           <Link to="/"><img src={logo} alt="Solvi Globe Logo" className="h-8 w-auto md:h-10 lg:h-12" /></Link>
//         </div>

//         {/* Desktop Navigation */}
//         <ul className={`hidden md:flex space-x-6 items-center ${textColor}`}>
//           <Link to="/About">
//             <li
//               className="relative text-sm md:text-base lg:text-lg hover:text-orange-500 cursor-pointer z-10 lg:border-r-1  lg:pr-4 border-gray-500"
//               onMouseEnter={() => setIsAboutDropdownOpen(true)}
//               onMouseLeave={() => setIsAboutDropdownOpen(false)}
//             >
//               About us
//               {isAboutDropdownOpen && (
//                 <ul className="absolute top-full left-0 bg-white text-black mt-2 w-[220px] rounded shadow-lg">
//                   <Link to="/OurTeam"><li className="px-4 py-2 hover:bg-orange-500 text-sm md:text-base">Our Team</li></Link>
//                   <li className="px-4 py-2 hover:bg-orange-500 text-sm md:text-base">
//                     Founder’s Note
//                   </li>
//                   <li className="px-4 py-2 hover:bg-orange-500 text-sm md:text-base">
//                     Founder’s Note
//                   </li>

//                 </ul>
//               )}
//             </li>
//           </Link>

//           {/* Product Dropdown */}



//           <Link to="/Product">
//             <li
//               className="relative text-sm md:text-base lg:text-lg hover:text-orange-500 cursor-pointer z-10  lg:pr-4 lg:border-r-1  border-gray-500"
//               onMouseEnter={() => setIsProductDropdownOpen(true)}
//               onMouseLeave={() => setIsProductDropdownOpen(false)}
//             >
//               Product
//               {isProductDropdownOpen && (
//                 <ul className="absolute top-full  left-0  bg-white text-black mt-2 rounded shadow-lg w-[220px]">
//                   {/* Categories */}

//                   <li className="px-4 py-2  hover:bg-gray-200 text-sm md:text-base">FMCG Products</li>
//                   <li className="px-4 py-2  hover:bg-gray-200 text-sm md:text-base">Industrial Chemicals</li>
//                   <li className="px-4 py-2  hover:bg-gray-200 text-sm md:text-base">Petrochemical Products</li>
//                   <li className="px-4 py-2  hover:bg-orange-500 text-sm md:text-base ">Metals & Alloys</li>
//                   <li className="px-4 py-2  hover:bg-gray-200 text-sm md:text-base">Agri-Commodities</li>
//                   <li className="px-4 py-2  hover:bg-gray-200 text-sm md:text-base">Aviation Service and Parts</li>
//                   <li className="px-4 py-2  hover:bg-gray-200 text-sm md:text-base">Pharmaceutical Products</li>
//                   <li className="px-4 py-2  hover:bg-gray-200 text-sm md:text-base">Machinery & Equipment</li>
//                   <li className="px-4 py-2  hover:bg-gray-200 text-sm md:text-base">Animal Nutrition & Feed</li>

//                 </ul>
//               )}
//             </li>
//           </Link>


//           {/* Services Dropdown */}
//           <Link to="/Services">
//             <li
//               className="relative text-sm md:text-base lg:text-lg hover:text-orange-500 cursor-pointer z-10 lg:pr-4 lg:border-r-1  border-gray-500"
//               onMouseEnter={() => setIsServicesDropdownOpen(true)}
//               onMouseLeave={() => setIsServicesDropdownOpen(false)}
//             >
//               Services
//               {isServicesDropdownOpen && (
//                 <ul className="absolute top-full left-0 bg-white text-black mt-2 p-2 rounded shadow-lg w-[220px]">
//                   <li className="px-4 py-2 hover:bg-orange-500 text-gray-700 rounded-lg hover:text-white text-sm md:text-base">Export-Import Services</li>
//                   <li className="px-4 py-2 hover:bg-orange-500 text-gray-700 rounded-lg hover:text-white text-sm md:text-base">E2E Logistic Services</li>
//                   <li className="px-4 py-2 hover:bg-orange-500 text-gray-700 rounded-lg hover:text-white text-sm md:text-base">Product Distribution</li>
//                   <li className="px-4 py-2 hover:bg-orange-500 text-gray-700 rounded-lg hover:text-white text-sm md:text-base">Warehousing Services</li>
//                   <li className="px-4 py-2 hover:bg-orange-500 text-gray-700 rounded-lg hover:text-white text-sm md:text-base">IT Outsourcing Services</li>
//                   <li className="px-4 py-2 hover:bg-orange-500 text-gray-700 rounded-lg hover:text-white text-sm md:text-base">Trade Finance</li>
//                   <li className="px-4 py-2 hover:bg-orange-500 text-gray-700 rounded-lg hover:text-white text-sm md:text-base">Product R&D</li>
//                   <li className="px-4 py-2 hover:bg-orange-500 text-gray-700 rounded-lg hover:text-white text-sm md:text-base">Ship Chandling Services</li>
//                 </ul>
//               )}
//             </li>
//           </Link>

//           <Link to="/Career"> <li className="text-sm md:text-base lg:text-lg hover:text-orange-500 cursor-pointer lg:pr-4  lg:border-r-1  border-gray-500">Career</li></Link>
//           <Link to="/Blog"><li className="text-sm md:text-base lg:text-lg hover:text-orange-500 cursor-pointer  lg:border-r-1  lg:pr-4 border-gray-500">Blog</li></Link>
//           <Link to="/ContactUs"><li className="text-sm md:text-base lg:text-lg hover:text-orange-500 cursor-pointer">Contact us</li></Link>

//           {/* Inquiry Button */}
//           <Link to="/InquiryForm"><button className="bg-orange-500 hover:bg-orange-600 text-white text-sm md:text-base px-4 py-2 rounded-lg">
//             Inquiry Form
//           </button></Link>
//         </ul>

//         {/* Mobile Navigation Toggle */}
//         <button
//           className="md:hidden flex justify-center w-8 h-8 bg-black-900"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-9">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//           </svg>
//         </button>
//       </nav>

//       {/* Mobile Navigation Slider */}
//       <div
//         className={`fixed top-0 right-0 h-screen w-full bg-white shadow-lg z-30 duration-500   ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
//       >
//         <button
//           className="absolute top-4 right-4"
//           onClick={() => setIsMobileMenuOpen(false)}
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>

//         <ul className="flex flex-col space-y-4 p-4">
//           {/* <Link to={'/About'}><li className="text-sm md:text-base py-2 hover:bg-gray-200">About us</li></Link> */}

//           <Link to="/About">
//             <li
//               className="relative text-sm md:text-base py-2 hover:bg-gray-200"
//               onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
//               onMouseLeave={() => setIsAboutDropdownOpen(false)}
//             >
//               About us
//               {isAboutDropdownOpen && (
//                 <ul className="mt-2">
//                    <Link to="/OurTeam"><li className="px-4 py-2 hover:bg-orange-500 text-sm md:text-base">Our Team</li></Link>
//                    <Link to="/FounderNote">  <li className="px-4 py-2 hover:bg-orange-500 text-sm md:text-base">
//                     Founder’s Note </li></Link>
//                 </ul>
//               )}
//             </li>
//           </Link>

//           {/* Product Dropdown */}
//           <Link to="/Product"><li
//             className="relative text-sm md:text-base py-2 hover:bg-gray-200"
//             onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
//           >
//             Product
//             {isProductDropdownOpen && (
//               <ul className="mt-2">
//                 <li className="px-4 py-2 hover:bg-gray-200 text-sm md:text-base">Product 1</li>
//                 <li className="px-4 py-2 hover:bg-gray-200 text-sm md:text-base">Product 2</li>
//                 <li className="px-4 py-2 hover:bg-gray-200 text-sm md:text-base">Product 3</li>
//               </ul>
//             )}
//           </li>
//           </Link>

//           {/* Services Dropdown */}
//           <Link to="/Services">
//             <li
//               className="relative text-sm md:text-base py-2 hover:bg-gray-200"
//               onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
//             >
//               Services
//               {isServicesDropdownOpen && (
//                 <ul className="mt-2">
//                   <li className="px-4 py-2 hover:bg-gray-200 text-sm md:text-base">Service 1</li>
//                   <li className="px-4 py-2 hover:bg-gray-200 text-sm md:text-base">Service 2</li>
//                   <li className="px-4 py-2 hover:bg-gray-200 text-sm md:text-base">Service 3</li>
//                 </ul>
//               )}
//             </li></Link>

//           <Link to="/Career"><li className="text-sm md:text-base py-2 hover:bg-gray-200">Career</li></Link>
//           <Link to="/Blog"><li className="text-sm md:text-base py-2 hover:bg-gray-200">Blog</li></Link>
//           <Link to="/Map"><li className="text-sm md:text-base py-2 hover:bg-gray-200">Contact us</li></Link>

//           {/* Inquiry Button */}
//           <Link to="/InquiryForm"><button className="bg-orange-500 hover:bg-orange-600 text-white text-sm md:text-base px-4 py-2 rounded-lg">
//             Inquiry Form
//           </button></Link>
//         </ul>
//       </div>
//     </>
//   );
// }




// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import logo2 from "../Images/logo2.png";

// export default function Nav({ bgColor, textColor }) {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
//   const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)
//   const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

//   const handleNavigation = (categoryName) => {
//     // Navigate to the Product.jsx page with the category name as a query parameter
//     navigate(`/product?category=${encodeURIComponent(categoryName)}`);
//     console.log(categoryName, "22");
//   };
//   const navigate = useNavigate();
//   return (
//     <>
//       {/* <nav className={`flex justify-between items-center px-4 py-5 ${bgColor} md:px-10 lg:px-20`}> */}
//       <nav className={`flex justify-between items-center px-16 py-8 container mx-auto  ${bgColor}`}>
//         <div className="flex justify-start">
//           <Link to="/"><img src={logo2} alt="Solvi Globe Logo" className="h-8 w-auto md:h-10 lg:h-12" /></Link>
//         </div>

//         {/* Desktop Navigation */}
//         <ul className={`hidden  md:flex space-x-6 items-center ${textColor}`}>
//           <li
//             className="relative text-sm md:text-base lg:text-lg hover:text-orange-500 cursor-pointer z-40 lg:border-r-1 lg:pr-4 border-gray-500"
//             onClick={() => {

//               setIsAboutDropdownOpen(!isAboutDropdownOpen)
//               setIsProductDropdownOpen(false)
//               setIsServicesDropdownOpen(false)
//             }

//             }
//             onMouseEnter={() => setIsAboutDropdownOpen(true)}
//             onMouseLeave={() => setIsAboutDropdownOpen(false)}
//           >
//             About us
//             {isAboutDropdownOpen && (
//               <ul className="absolute top-full left-0 bg-white text-black  w-[220px] rounded shadow-lg">
//                 <Link to="/OurTeam">
//                   <li className="px-4 py-2 hover:bg-orange-500 hover:text-white text-sm md:text-base">
//                     Our Team
//                   </li>
//                 </Link>
//                 <Link to="/Founder">
//                   <li className="px-4 py-2 hover:bg-orange-500 hover:text-white text-sm md:text-base">
//                     Founder’s Note
//                   </li>
//                 </Link>
//                 <Link to="/About">
//                   <li className="px-4 py-2 hover:bg-orange-500 hover:text-white text-sm md:text-base">
//                     About Us
//                   </li>
//                 </Link>
//               </ul>
//             )}
//           </li>

//           {/* Product Dropdown */}




//           <li
//             className="relative text-sm md:text-base lg:text-lg hover:text-orange-500 cursor-pointer z-40   lg:pr-4 lg:border-r-1  border-gray-500"
//             onClick={() => {
//               setIsProductDropdownOpen(!isProductDropdownOpen)
//               setIsAboutDropdownOpen(false)
//               setIsServicesDropdownOpen(false)
//             }}
//             onMouseEnter={() => setIsProductDropdownOpen(true)}
//             onMouseLeave={() => setIsProductDropdownOpen(false)}
//           // onMouseLeave={() => setIsProductDropdownOpen(false)}
//           >
//             Product
//             {isProductDropdownOpen && (
//               <ul className="absolute top-full  left-0  bg-white text-black  rounded shadow-lg w-[220px]">
//                 {/* Categories */}

//                 <li className="px-4 py-2  hover:bg-orange-500 hover:text-white text-sm md:text-base" onClick={() => handleNavigation("FMCG Products")}>FMCG Products</li>
//                 <li className="px-4 py-2  hover:bg-orange-500 hover:text-white  text-sm md:text-base" onClick={() => handleNavigation("Industrial Chemicals")}>Industrial Chemicals</li>
//                 <li className="px-4 py-2  hover:bg-orange-500 hover:text-white  text-sm md:text-base" onClick={() => handleNavigation("Petrochemical Products")}>Petrochemical Products</li>
//                 <li className="px-4 py-2  hover:bg-orange-500 hover:text-white  text-sm md:text-base" onClick={() => handleNavigation("Metals & Alloys")}>Metals & Alloys</li>
//                 <li className="px-4 py-2  hover:bg-orange-500 hover:text-white text-sm md:text-base" onClick={() => handleNavigation("Agri-Commodities")}>Agri-Commodities</li>
//                 <li className="px-4 py-2  hover:bg-orange-500 hover:text-white text-sm md:text-base" onClick={() => handleNavigation("Aviation Service and Parts")}>Aviation Service and Parts</li>
//                 <li className="px-4 py-2  hover:bg-orange-500 hover:text-white text-sm md:text-base" onClick={() => handleNavigation("Pharmaceutical Products")}>Pharmaceutical Products</li>
//                 <li className="px-4 py-2  hover:bg-orange-500 hover:text-white text-sm md:text-base" onClick={() => handleNavigation("Machinery & Equipment")}>Machinery & Equipment</li>
//                 <li className="px-4 py-2  hover:bg-orange-500 hover:text-white text-sm md:text-base" onClick={() => handleNavigation("Animal Nutrition & Feed")}>Animal Nutrition & Feed</li>

//               </ul>
//             )}
//           </li>



//           {/* Services Dropdown */}

//           <li
//             className="relative text-sm md:text-base lg:text-lg hover:text-orange-500 cursor-pointer z-40 lg:pr-4 lg:border-r-1  border-gray-500"
//             onClick={() => {
//               setIsServicesDropdownOpen(!isServicesDropdownOpen)
//               setIsAboutDropdownOpen(false)
//               setIsProductDropdownOpen(false)
//             }}
//             onMouseEnter={() => setIsServicesDropdownOpen(true)}
//             onMouseLeave={() => setIsServicesDropdownOpen(false)}
//           // onMouseLeave={() => setIsServicesDropdownOpen(false)}
//           >
//             Services
//             {isServicesDropdownOpen && (
//               <ul className="absolute top-full left-0 bg-white text-black   rounded shadow-lg w-[220px]">
//                 <Link to={'/Services'}><li className="px-4 py-2 hover:bg-orange-500 text-gray-700  hover:text-white text-sm md:text-base">Export-Import Services</li></Link>
//                 <Link to={'/E2Eservices'}><li className="px-4 py-2 hover:bg-orange-500 text-gray-700  hover:text-white text-sm md:text-base">E2E Logistic Services</li></Link>
//                 <Link to={'/Distribution'}>  <li className="px-4 py-2 hover:bg-orange-500 text-gray-700  hover:text-white text-sm md:text-base">Product Distribution</li></Link>
//                 <Link to={'/Warehousing'}> <li className="px-4 py-2 hover:bg-orange-500 text-gray-700  hover:text-white text-sm md:text-base">Warehousing Services</li></Link>
//                 <Link to={'/ITOutsourcing'}> <li className="px-4 py-2 hover:bg-orange-500 text-gray-700  hover:text-white text-sm md:text-base">IT Outsourcing Services</li></Link>
//                 <Link to={'/Tradefinance'}> <li className="px-4 py-2 hover:bg-orange-500 text-gray-700  hover:text-white text-sm md:text-base">Trade Finance</li></Link>
//                 <Link to={'/ProductRandD'}> <li className="px-4 py-2 hover:bg-orange-500 text-gray-700  hover:text-white text-sm md:text-base">Product R&D</li></Link>
//                 <Link to={'/Shipchandling'}> <li className="px-4 py-2 hover:bg-orange-500 text-gray-700  hover:text-white text-sm md:text-base">Ship Chandling Services</li></Link>
//               </ul>
//             )}
//           </li>


//           <Link to="/Career"> <li className="text-sm md:text-base lg:text-lg hover:text-orange-500 cursor-pointer lg:pr-4  lg:border-r-1  border-gray-500">Career</li></Link>
//           <Link to="/Blog"><li className="text-sm md:text-base lg:text-lg hover:text-orange-500 cursor-pointer  lg:border-r-1  lg:pr-4 border-gray-500">Blog</li></Link>
//           <Link to="/ContactUs"><li className="text-sm md:text-base lg:text-lg hover:text-orange-500 cursor-pointer">Contact us</li></Link>

//           {/* Inquiry Button */}
//           <Link to="/InquiryForm"><button className="bg-orange-500 hover:bg-orange-600 text-white text-sm md:text-base px-4 py-2 rounded-lg">
//             Inquiry Form
//           </button></Link>
//         </ul>

//         {/* Mobile Navigation Toggle */}
//         <button
//           className="md:hidden flex justify-center w-8 h-8 bg-black-900"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         >
//           {!isMobileMenuOpen ? (
//             // Hamburger Icon
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="w-7 h-7"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//               />
//             </svg>
//           ) : (
//             // Close Icon
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="w-7 h-7"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           )}
//         </button>
//       </nav>

//       {/* Mobile Navigation Slider */}


//       {/* Mobile Navigation Menu */}
//       <div
//         className={`fixed top-0 right-0 h-screen w-full bg-white shadow-lg z-30 duration-500 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
//           }`}
//       >
//         {/* Close Button */}
//         <button
//           className="absolute top-4 right-4 text-black mb-20"
//           onClick={() => setIsMobileMenuOpen(false)}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         </button>

//         {/* Menu Items */}
//         <ul className="flex flex-col space-y-4 p-4">
//           {/* About Dropdown */}
//           <li>
//             <div
//               className="flex justify-between items-center text-sm md:text-base py-2 hover:bg-gray-200 cursor-pointer mt-5"
//               onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
//             >
//               About Us
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className={`w-4 h-4 transform ${isAboutDropdownOpen ? "rotate-180" : ""
//                   }`}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M19.5 9l-7.5 7.5L4.5 9"
//                 />
//               </svg>
//             </div>
//             {isAboutDropdownOpen && (
//               <ul className="pl-4 space-y-2">
//                 <Link to="/OurTeam">
//                   <li className="text-sm md:text-base py-2 hover:bg-orange-500">
//                     Our Team
//                   </li>
//                 </Link>
//                 <Link to="/Founder">
//                   <li className="text-sm md:text-base py-2 hover:bg-orange-500">
//                     Founder’s Note
//                   </li>
//                 </Link>
//                 <Link to="/About">
//                   <li className="text-sm md:text-base py-2 hover:bg-orange-500">
//                     About Us
//                   </li>
//                 </Link>
//               </ul>
//             )}
//           </li>

//           {/* Product Dropdown */}
//           <li>
//             <div
//               className="flex justify-between items-center text-sm md:text-base py-2 hover:bg-gray-200 cursor-pointer"
//               onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
//             >
//               Product
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className={`w-4 h-4 transform ${isProductDropdownOpen ? "rotate-180" : ""
//                   }`}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M19.5 9l-7.5 7.5L4.5 9"
//                 />
//               </svg>
//             </div>
//             {isProductDropdownOpen && (
//               <ul className="pl-4 space-y-2">
//                 <li className="text-sm md:text-base py-2 hover:bg-gray-200" onClick={() => {
//                   handleNavigation("FMCG Products");
//                   setIsMobileMenuOpen(false);
//                 }} >
//                   FMCG Products
//                 </li>
//                 <li className="text-sm md:text-base py-2 hover:bg-gray-200" onClick={() => {
//                   handleNavigation("Industrial Chemicals")
//                   setIsMobileMenuOpen(false);
//                 }}>
//                   Industrial Chemicals
//                 </li>
//                 <li className="text-sm md:text-base py-2 hover:bg-gray-200" onClick={() => {
//                   handleNavigation("Petrochemical Products")
//                   setIsMobileMenuOpen(false);
//                 }}>

//                   Petrochemical Products
//                 </li>
//                 <li className="text-sm md:text-base py-2 hover:bg-gray-200" onClick={() => {
//                   handleNavigation("Metals & Alloys")
//                   setIsMobileMenuOpen(false);
//                 }}>
//                   Metals & Alloys
//                 </li>
//                 <li className="text-sm md:text-base py-2 hover:bg-gray-200" onClick={() => {
//                   handleNavigation("Agri-Commodities");
//                   setIsMobileMenuOpen(false);
//                 }}>
//                   Agri-Commodities
//                 </li>
//                 <li className="text-sm md:text-base py-2 hover:bg-gray-200" onClick={() => {
//                   handleNavigation("Aviation Service and Parts");
//                   setIsMobileMenuOpen(false);
//                 }}>
//                   Aviation Service and Parts
//                 </li>
//                 <li className="text-sm md:text-base py-2 hover:bg-gray-200" onClick={() => {
//                   handleNavigation(" Pharmaceutical Products");
//                   setIsMobileMenuOpen(false);
//                 }}>
//                   Pharmaceutical Products
//                 </li>
//                 <li className="text-sm md:text-base py-2 hover:bg-gray-200" onClick={() => {
//                   handleNavigation("Machinery & Equipment");
//                   setIsMobileMenuOpen(false);
//                 }}>
//                   Machinery & Equipment
//                 </li>
//                 <li className="text-sm md:text-base py-2 hover:bg-gray-200" onClick={() => {
//                   handleNavigation("Animal Nutrition & Feed");
//                   setIsMobileMenuOpen(false);
//                 }}>
//                   Animal Nutrition & Feed
//                 </li>
//               </ul>
//             )}
//           </li>

//           {/* Services Dropdown */}
//           <li>
//             <div
//               className="flex justify-between items-center text-sm md:text-base py-2 hover:bg-gray-200 cursor-pointer"
//               onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
//             >
//               Services
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className={`w-4 h-4 transform ${isServicesDropdownOpen ? "rotate-180" : ""
//                   }`}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M19.5 9l-7.5 7.5L4.5 9"
//                 />
//               </svg>
//             </div>
//             {isServicesDropdownOpen && (
//               <ul className="pl-4 space-y-2">

//                 <Link to={'/Services'}><li className="text-sm md:text-base py-2 hover:bg-gray-200" onClick={() => { setIsMobileMenuOpen(false) }} >
//                   Export-Import Services
//                 </li></Link>
//                    <Link to={'/E2Eservices'}><li className="text-sm md:text-base py-2 hover:bg-gray-200" onClick={() => { setIsMobileMenuOpen(false) }}>
//                   E2E Logistic Services
//                 </li></Link>
//                   <Link to={'/Distribution'}><li className="text-sm md:text-base py-2 hover:bg-gray-200" onClick={() => { setIsMobileMenuOpen(false) }}>
//                   Product Distribution
//                 </li></Link>
//                    <Link to={'/Warehousing'}>    <li className="text-sm md:text-base py-2 hover:bg-gray-200" onClick={() => { setIsMobileMenuOpen(false) }}>
//                   Warehousing Services
//                 </li></Link>
//                  <Link to={'/ITOutsourcing'}> <li className="text-sm md:text-base py-2 hover:bg-gray-200" onClick={() => { setIsMobileMenuOpen(false) }}>
//                   IT Outsourcing Services
//                 </li></Link>
//                  <Link to={'/Tradefinance'}> <li className="text-sm md:text-base py-2 hover:bg-gray-200" onClick={() => { setIsMobileMenuOpen(false) }}>
//                   Trade Finance
//                 </li></Link>
//                   <Link to={'/ProductRandD'}><li className="text-sm md:text-base py-2 hover:bg-gray-200" onClick={() => { setIsMobileMenuOpen(false) }}>
//                   Product R&D
//                 </li></Link>
//                 <Link to={'/Shipchandling'}> <li className="text-sm md:text-base py-2 hover:bg-gray-200" onClick={() => { setIsMobileMenuOpen(false) }}>
//                   Ship Chandling Services
//                 </li></Link>

//               </ul>
//             )}
//           </li>

//           {/* Other Links */}
//           <Link to="/Career">
//             <li className="text-sm md:text-base py-2 hover:bg-gray-200">Career</li>
//           </Link>
//           <Link to="/Blog">
//             <li className="text-sm md:text-base py-2 hover:bg-gray-200">Blog</li>
//           </Link>
//           <Link to="/ContactUs">
//             <li className="text-sm md:text-base py-2 hover:bg-gray-200">Contact Us</li>
//           </Link>

//           {/* Inquiry Button */}
//           <Link to="/InquiryForm">
//             <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm md:text-base px-4 py-2 rounded-lg w-full">
//               Inquiry Form
//             </button>
//           </Link>
//         </ul>
//       </div>
//     </>
//   );
// }