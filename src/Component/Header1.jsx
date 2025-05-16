

// import React from "react";
// import { Link } from "react-router-dom";
// import { ChevronDown } from "lucide-react";
// import background from "../Images/background.png"; // Replace with your background image path

// // import MobileMenu from "@/components/mobile-menu";

// export default function App() {
//   return (
//     <main className="min-h-screen">
//       <div className="relative w-full h-screen bg-gradient-to-r from-[#0a1520] to-[#0f2030] overflow-hidden">
//         {/* Background Image */}
//         <div className="absolute inset-0 z-0">
//           <img
//             src={background}
//             alt="Oil field equipment"
//             fill
//             className="object-cover opacity-70"
//             priority
//           />
//         </div>

//         {/* Navbar */}
//         <nav className="relative z-10 flex items-center justify-between px-4 py-4 md:px-8 lg:px-16">
//           <div className="flex items-center">
//             <Link href="/" className="flex items-center">
//               <div className="flex items-center">
//                 <span className="text-3xl font-bold text-[#FF6B1A]">S</span>
//                 <span className="text-3xl font-bold text-[#FF6B1A]">G</span>
//                 <span className="ml-1 text-xl font-semibold text-[#3B82F6]">
//                   SOLVI
//                 </span>
//                 <span className="text-xl font-semibold text-[#3B82F6]">
//                   GLOBE
//                 </span>
//               </div>
//             </Link>
//           </div>

//           <div className="hidden md:flex items-center space-x-1 lg:space-x-6">
//             <Link
//               href="/about"
//               className="px-3 py-2 text-white hover:text-gray-300"
//             >
//               About us
//             </Link>
//             <div className="relative group">
//               <button className="flex items-center px-3 py-2 text-white hover:text-gray-300">
//                 Product
//                 <ChevronDown className="ml-1 h-4 w-4" />
//               </button>
//             </div>
//             <div className="relative group">
//               <button className="flex items-center px-3 py-2 text-white hover:text-gray-300">
//                 Services
//                 <ChevronDown className="ml-1 h-4 w-4" />
//               </button>
//             </div>
//             <Link
//               href="/career"
//               className="px-3 py-2 text-white hover:text-gray-300"
//             >
//               Career
//             </Link>
//             <Link
//               href="/blog"
//               className="px-3 py-2 text-white hover:text-gray-300"
//             >
//               Blog
//             </Link>
//             <Link
//               href="/contact"
//               className="px-3 py-2 text-white hover:text-gray-300"
//             >
//               Contact us
//             </Link>
//           </div>

//           <div>
//             <Link
//               href="/inquiry"
//               className="hidden md:inline-block px-6 py-2 bg-[#FF6B1A] text-white font-medium rounded hover:bg-[#e05c10] transition-colors"
//             >
//               Inquiry From
//             </Link>
//             {/* <MobileMenu /> */}
//           </div>
//         </nav>

//         {/* Hero Section */}
//         <div className="relative z-10 flex flex-col justify-center h-[calc(100vh-80px)] px-4 md:px-8 lg:px-16">
//           <div className="max-w-3xl">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
//               From Raw to Refined: We <br />
//               <span className="text-[#FF6B1A]">Deliver</span> Excellence.
//             </h1>
//             <p className="mt-6 text-xl md:text-2xl text-white">
//               Connecting <span className="text-[#FF6B1A]">Your Needs</span> with
//               Our Expertise.
//             </p>
//           </div>
//         </div>
//       </div>
//     </main>
//   )
// }


// import React from "react";
// import Nav from "./Nav";

// import background from "../Images/background.png";

// export default function Header1() {





//   return (
//     <>
//     <header className="min-h-screen bg-cover bg-center z-10 " style={{ backgroundImage:`url(${background})`}}>
//       {/* Header */}
//       {/* <header className={`flex justify-between items-center px-6 py-4 ${bgColor}`}> */}
//         {/* Logo */}
//         {/* <div className="text-xl font-bold text-orange-500">
//           <span className="text-white ${textColor}">SOLVI</span> GLOBE
//         </div> */}

//         <Nav bgColor="" textColor="text-white" />
//         {/* <Nav bgColor="" textColor="text-white" /> */}
//         {/* Navigation */}


//         <main className="flex flex-col items-center justify-center text-center h-[calc(100vh_-_80px)] px-6">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
//           From Raw to Refined:{" "}
//           <span className="text-orange-500">We Deliver Excellence.</span>
//         </h1>
//         <p className="text-lg md:text-xl text-gray-300 mb-8">
//           Connecting{" "}
//           <span className="text-orange-500 font-semibold">Your Needs</span> with
//           Our Expertise.
//         </p>

//       </main>

//       </header>



//       {/* Footer */}

//      {/* </header> */}
//     </>
//   );
// }



import React, { useEffect, useRef, useState } from "react";

import Nav from "./Nav";


import background from "../Images/background.png";
import serach from "../Images/serach.png";

const PLACEHOLDER = "Search Product & Services";
// Updated background image

export default function Header1() {
  const [placeholder, setPlaceholder] = useState("");
  const indexRef = useRef(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    function typeWriter() {
      if (indexRef.current <= PLACEHOLDER.length) {
        setPlaceholder(PLACEHOLDER.slice(0, indexRef.current));
        indexRef.current += 1;
        timeoutRef.current = setTimeout(typeWriter, 80);
      } else {
        timeoutRef.current = setTimeout(() => {
          setPlaceholder("");
          indexRef.current = 0;
          typeWriter();
        }, 2000);
      }
    }

    typeWriter();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <>
      <header className="min-h-screen bg-cover bg-center z-10" style={{ backgroundImage: `url(${background})` }}>
        <Nav bgColor="" textColor="text-white" />

        <main className="flex flex-col items-center justify-center text-center h-[calc(100vh_-_80px)] px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            From Raw to Refined: {" "}
            <span className="text-orange-500">We Deliver Excellence.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Connecting {" "}
            <span className="text-orange-500 font-semibold">Your Needs</span> with Our Expertise.
          </p>

          {/* Search Section */}
          {/* <div className="flex items-center bg-white rounded-lg p-2 shadow-md w-full max-w-md">
          <button className="px-4 py-2  text-white rounded-lg">
              <img src={serach}/>
            </button>
            <input
              type="text"
              placeholder="Search Product & Services"
              className="flex-1 p-2 outline-none text-blue-800"
            />
           
          </div> */}
          <div className="flex items-center bg-white rounded-lg p-2 shadow-md w-full max-w-md">
            <button className="px-4 py-2 text-white rounded-lg">
              <img src={serach} alt="search" />
            </button>
            <input
              type="text"
              placeholder={placeholder}
              className="flex-1 p-2 outline-none text-blue-800"
            />
          </div>
        </main>
      </header>
    </>
  );
}
