// import React from "react";
// import { Link } from "react-router-dom";
// import logo from "../Images/logo.png";



  
// export default function Header() {
//   return (
//     <header className="bg-white shadow-md">
//       <div className="container mx-auto px-4 py-3 flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex items-center space-x-2">
//           <img
//             src={logo} // Replace with your logo path
//             alt="Solvi Globe Logo"
//             className="h-10"
//           />
//           {/* <span className="font-bold text-lg text-orange-500">SOLVI GLOBE</span> */}
//         </div>

//         {/* Navigation Links */}
//         <nav className="hidden md:flex space-x-6">
//           <a href="#about" className="text-gray-700 hover:text-orange-500">
//             About us
//           </a>
//           <div className="relative group">
//           <Link to='/Product' > <button className="text-gray-700 hover:text-orange-500 flex items-center">
//               Product
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={2}
//                 stroke="currentColor"
//                 className="w-4 h-4 ml-1"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M19 9l-7 7-7-7"
//                 />
//               </svg>
//             </button>
//             </Link>
//             {/* Dropdown */}
//             <div className="absolute hidden group-hover:block bg-white shadow-md rounded-lg mt-2 w-40">
//               <a
//                 href="#product1"
//                 className="block px-4 py-2 text-gray-700 hover:bg-orange-500 hover:text-white"
//               >
//                 Product 1
//               </a>
//               <a
//                 href="#product2"
//                 className="block px-4 py-2 text-gray-700 hover:bg-orange-500 hover:text-white"
//               >
//                 Product 2
//               </a>
//             </div>
//           </div>
//           <div className="relative group">
//           <Link to='/Services' > <button className="text-gray-700 hover:text-orange-500 flex items-center">
//               Services
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={2}
//                 stroke="currentColor"
//                 className="w-4 h-4 ml-1"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M19 9l-7 7-7-7"
//                 />
//               </svg>
//               </button></Link>
//             {/* Dropdown */}
//             <div className="absolute hidden group-hover:block bg-white shadow-md rounded-lg mt-2 w-40">
//               <a
//                 href="#service1"
//                 className="block px-4 py-2 text-gray-700 hover:bg-orange-500 hover:text-white"
//               >
//                 Service 1
//               </a>
//               <a
//                 href="#service2"
//                 className="block px-4 py-2 text-gray-700 hover:bg-orange-500 hover:text-white"
//               >
//                 Service 2
//               </a>
//             </div>
//           </div>
//           <a href="#career" className="text-gray-700 hover:text-orange-500">
//             Career
//           </a>
//           <Link to ='/Blog' className="text-gray-700 hover:text-orange-500">
//             Blog
//           </Link>
//           <a href="#contact" className="text-gray-700 hover:text-orange-500">
//             Contact us
//           </a>
//         </nav>

//         {/* Inquiry Button */}
//         <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 hidden md:block">
//           Inquiry Form
//         </button>

//         {/* Mobile Menu */}
//         <button className="md:hidden text-gray-700 focus:outline-none">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={2}
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M4 6h16M4 12h16m0 6h16"
//             />
//           </svg>
//         </button>
//       </div>
//     </header>
//   );
// }


import React from "react";
import Navbar from "./Header1";
// import MainSec from "./MainSec";

const Header = () => {
  return (
    <>
      <header
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('/Images/background.png')" }}
      >
        <Navbar bgColor="bg-white" textColor="text-black" />
        <Navbar bgColor="" textColor="text-white" />

        {/* <MainSec /> */}
      </header>
    </>
  );
};

export default Header;