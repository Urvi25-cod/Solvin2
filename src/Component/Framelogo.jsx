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


import React from "react";
import logo from "../Images/logo.svg";

const Framelogo = () => {
  // Array to represent logos (you can replace with actual logo sources if needed)
  const logos = Array(6).fill(logo);

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-2 mt-6">
        {logos.map((logoSrc, index) => (
          <img 
            key={index} 
            src={logoSrc} 
            alt={`logo-${index + 1}`} 
            className="w-auto h-20 rounded-lg mx-auto md:mx-0"
          />
        ))}
      </div>
    </div>
  );
};

export default Framelogo;
