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
    // const settings = {
    //     dots: false,
    //     infinite: true,
    //     speed: 6000, // Make this large for slow, smooth movement (e.g., 6000ms)
    //     slidesToShow: 5,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 0, // Set to 0 for continuous scroll
    //     cssEase: "linear", // Makes the animation linear and smooth
    //     pauseOnHover: false,
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 1,
    //                 infinite: true,
    //             },
    //         },
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 1,
    //                 infinite: true,
    //             },
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 infinite: true,
    //             },
    //         },
    //     ],
    // };

     const settings = {
        dots: false,
        infinite: true,
        speed: 5000, // Make the transition take longer (slower scroll)
        cssEase: "linear", // Smooth continuous animation
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0, // Needed for continuous scroll
        pauseOnHover: true, // Stop scroll on hover
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
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
            <div className="container mx-auto px-8">
                {/* Heading Section */}
                <h3 className="text-orange-500 text-lg font-semibold mb-2 text-center">Our Associate</h3>
                <h2 className="text-2xl md:text-3xl font-bold  text-[#1F4278] text-center mb-8">
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
                                    className="w-full max-w-[120px] sm:max-w-[150px] h-auto cursor-pointer"
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

