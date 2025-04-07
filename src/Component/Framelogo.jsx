// import React from "react";
// import logo from "../Images/logo.svg";

// const Framelogo = () => {
//   return (
//     <div className="container mx-auto px-6 py-12">
//     <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-6 ml-15 ">
//       <img src={logo} 
//       alt="logo" 
//       className="w-40 h-full rounded-lg" />
//       <img src={logo} 
//       alt="logo" 
//       className="w-40 h-full rounded-lg" />
//       <img src={logo} 
//       alt="logo" 
//       className="w-40 h-full rounded-lg" />
//       <img src={logo} 
//       alt="logo" 
//       className="w-40 h-full rounded-lg" />
//       <img src={logo} 
//       alt="logo" 
//       className="w-40 h-full rounded-lg" />
//       <img src={logo} 
//       alt="logo" 
//       className="w-40 h-full rounded-lg" />
//     </div>
//     </div>
//   );
// };

// export default Framelogo;


// import React from "react";
// import logo from "../Images/logo.svg";

// const Framelogo = () => {
//   return (
//     <div className="container mx-auto px-4 md:px-6 py-12">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mt-6">
//         <img src={logo} 
//              alt="logo" 
//              className="w-auto h-20 rounded-lg mx-auto md:mx-0" />
        
//         <img src={logo} 
//              alt="logo" 
//              className="w-auto h-20 rounded-lg mx-auto md:mx-0" />
        
//         <img src={logo} 
//              alt="logo" 
//              className="w-auto h-20 rounded-lg mx-auto md:mx-0" />
        
//         <img src={logo} 
//              alt="logo" 
//              className="w-auto h-20 rounded-lg mx-auto md:mx-0" />
        
//         <img src={logo} 
//              alt="logo" 
//              className="w-auto h-20 rounded-lg mx-auto md:mx-0" />
        
//         <img src={logo} 
//              alt="logo" 
//              className="w-auto h-20 rounded-lg mx-auto md:mx-0" />
//       </div>
//     </div>
//   );
// };

// export default Framelogo;


// import React from "react";
// import logo from "../Images/logo.svg";

// const Framelogo = () => {
//   // Array to represent logos (you can replace with actual logo sources if needed)
//   const logos = Array(6).fill(logo);

//   return (
//     <div className="container mx-auto px-4 md:px-6 py-12">
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-2 mt-6">
//         {logos.map((logoSrc, index) => (
//           <img 
//             key={index} 
//             src={logoSrc} 
//             alt={`logo-${index + 1}`} 
//             className="w-auto h-20 rounded-lg mx-auto md:mx-0"
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Framelogo;

// import React, { useEffect, useRef } from "react";
// import logo from "../Images/logo.svg";

// const Framelogo = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const scrollContainer = containerRef.current;

//     const scroll = () => {
//       if (scrollContainer) {
//         if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
//           scrollContainer.scrollLeft = 0; // Reset when half scrolled (Loop effect)
//         } else {
//           scrollContainer.scrollLeft += 1; // Move left slowly
//         }
//       }
//     };

//     const interval = setInterval(scroll, 2); // Adjust speed here

//     return () => clearInterval(interval);
//   }, []);

//   const logos = Array(10).fill(logo); // More logos for smooth looping

//   return (
//     <div className="overflow-hidden py-12">
//       <div
//         ref={containerRef}
//         className="flex space-x-8 w-full whitespace-nowrap"
//         style={{ overflow: "hidden", scrollBehavior: "smooth" }}
//       >
//         {[...logos, ...logos].map((logoSrc, index) => ( // Duplicated array for infinite loop
//           <img
//             key={index}
//             src={logoSrc}
//             alt={`logo-${index + 1}`}
//             className="w-auto h-20 rounded-lg"
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Framelogo;






import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bright from "../Images/bright.png";
import delment from "../Images/delment.png";

const Framelogo = () => {
    const settings = {
        dots: false, // Disable dots for manual scrolling
        infinite: true,
        speed: 1000, // Speed of the auto-scroll (in milliseconds)
        slidesToShow: 5, // Number of logos visible on large screens
        slidesToScroll: 1,
        autoplay: true, // Enable auto-scrolling
        autoplaySpeed: 1000, // Time interval between auto-scrolls (in milliseconds)
        responsive: [
            {
                breakpoint: 1024, // Tablet devices
                settings: {
                    slidesToShow: 3, // Number of logos visible on tablets
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 768, // Mobile devices
                settings: {
                    slidesToShow: 2, // Number of logos visible on mobile devices
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 480, // Small mobile devices
                settings: {
                    slidesToShow: 1, // Single logo visible on very small screens
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    };

    const companies = [
        { id: 1, logoUrl: delment }, // Replace with actual logo paths
        { id: 2, logoUrl: bright },
        { id: 3, logoUrl: delment },
        { id: 4, logoUrl: bright },
        { id: 5, logoUrl: delment },
        { id: 6, logoUrl: bright },
    ];

    return (
        <div className="py-12 bg-gray-50">
            <div className="container mx-auto px-6">
                {/* Heading Section */}
                <h3 className="text-orange-500 text-lg font-semibold mb-2 text-center">Our Associate</h3>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1F4278] text-center mb-8">
                  Our <span className="text-orange-500">Network</span><span className="text-[#1F4278]"> of Excellence</span>
                </h2>

                {/* Slider Section */}
                <Slider {...settings} className="mx-auto">
                    {companies.map((company) => (
                        <div key={company.id} className="p-4">
                            <div className="flex justify-center items-center">
                                <img
                                    src={company.logoUrl}
                                    alt={`Logo of ${company.id}`}
                                    className="w-full max-w-[120px] sm:max-w-[150px] h-auto"
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Framelogo;

