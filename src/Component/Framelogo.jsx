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

import React, { useEffect, useRef } from "react";
import logo from "../Images/logo.svg";

const Framelogo = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = containerRef.current;

    const scroll = () => {
      if (scrollContainer) {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0; // Reset when half scrolled (Loop effect)
        } else {
          scrollContainer.scrollLeft += 1; // Move left slowly
        }
      }
    };

    const interval = setInterval(scroll, 2); // Adjust speed here

    return () => clearInterval(interval);
  }, []);

  const logos = Array(10).fill(logo); // More logos for smooth looping

  return (
    <div className="overflow-hidden py-12">
      <div
        ref={containerRef}
        className="flex space-x-8 w-full whitespace-nowrap"
        style={{ overflow: "hidden", scrollBehavior: "smooth" }}
      >
        {[...logos, ...logos].map((logoSrc, index) => ( // Duplicated array for infinite loop
          <img
            key={index}
            src={logoSrc}
            alt={`logo-${index + 1}`}
            className="w-auto h-20 rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default Framelogo;



