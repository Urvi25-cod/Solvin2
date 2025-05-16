// import { useState } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// // import mirror from "../Images/mirror.png";
// import { FaCheckCircle } from "react-icons/fa"; // Example icon, replace with actual icons

// const features = [
//   {
//     title: "Quality",
//     description:
//       "Maintaining the highest standards of quality in all products and services, ensuring excellence in every aspect of operations.",
//     // icon: <FaCheckCircle className="text-orange-500 text-4xl" />,


//   },
//   {
//     title: "Reliability",
//     description:
//       "Trust is our cornerstone. We ensure timely delivery, providing reliable solutions that fuel clients' success.",
//     // icon: <FaCheckCircle className="text-orange-500 text-4xl" />,
//   },
//   {
//     title: "Experience",
//     description:
//       "Leveraging industry expertise to provide insightful solutions, enhancing client satisfaction, and driving continuous improvement.",
//     // icon: <FaCheckCircle className="text-orange-500 text-4xl" />,
//   },
//   {
//     title: "Customer Centric",
//     description:
//       "Surpassing customer expectations with outstanding service and innovative solutions that adapt to their evolving needs.",
//     // icon: <FaCheckCircle className="text-orange-500 text-4xl" />,
//   },
//   {
//     title: "Customer Centric",
//     description:
//       "Surpassing customer expectations with outstanding service and innovative solutions that adapt to their evolving needs.",
//     // icon: <FaCheckCircle className="text-orange-500 text-4xl" />,
//   },
//   {
//     title: "Customer Centric",
//     description:
//       "Surpassing customer expectations with outstanding service and innovative solutions that adapt to their evolving needs.",
//     // icon: <FaCheckCircle className="text-orange-500 text-4xl" />,
//   },
//    {
//     title: "Customer Centric",
//     description:
//       "Surpassing customer expectations with outstanding service and innovative solutions that adapt to their evolving needs.",
//     // icon: <FaCheckCircle className="text-orange-500 text-4xl" />,
//   },
// ];

// export default function Whychoose() {
//  const [index, setIndex] = useState(0);

//   const nextSlide = () => {
//     setIndex((prevIndex) => (prevIndex + 1) % features.length);
//   };

//   const prevSlide = () => {
//     setIndex((prevIndex) => (prevIndex - 1 + features.length) % features.length);
//   };

//   return (
//     <div className="container mx-auto px-6 py-12">
//       <h3 className="text-orange-500 font-semibold">Why choose us?</h3>
//       <h2 className="text-3xl font-bold text-[#1F4278] mt-2">
//         To <span className="text-orange-500">increase productivity</span> and cost effectiveness
//       </h2>
//       <div className="relative mt-8 flex items-center overflow-hidden">
//         <button
//           className="absolute left-4 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 z-10"
//           onClick={prevSlide}
//         >
//           <FaArrowLeft className="text-orange-500 text-xl" />
//         </button>
//         <div className="w-full overflow-hidden">
//           <div
//             className="flex transition-transform duration-500"
//             style={{ transform: `translateX(-${index * 100}%)` }}
//           >
//             {features.map((feature, idx) => (
//               <div key={idx} className="min-w-full sm:min-w-[50%] md:min-w-[33.33%] lg:min-w-[25%] p-4">
//                 <div className="bg-white p-6 shadow-lg rounded-lg text-left flex flex-col items-center">
//                   <div className="mb-4">{feature.images}</div>
//                   <h3 className="text-lg font-bold text-[#1F4278]">{feature.title}</h3>
//                   <p className="text-gray-600 mt-2 text-center">{feature.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <button
//           className="absolute right-4 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 z-10"
//           onClick={nextSlide}
//         >
//           <FaArrowRight className="text-orange-500 text-xl" />
//         </button>
//       </div>
//     </div>
//   );
// }


// import { useState } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { FaCheckCircle } from "react-icons/fa"; // Example icon, replace with actual icons

import React from "react";
import q1 from "../Images/q1.png";
import q2 from "../Images/q2.png";
import q3 from "../Images/q3.png";
import q4 from "../Images/q4.png";


const features = [
  {
    title: "Quality",
    description:
      "Maintaining the highest standards of quality in all products and services, ensuring excellence in every aspect of operations.",
    icon: q1,
  },
  {
    title: "Reliability",
    description:
      "Trust is our cornerstone. We ensure timely delivery, providing reliable solutions that fuel clients' success.",
    icon: q2,
  },
  {
    title: "Experience",
    description:
      "Leveraging industry expertise to provide insightful solutions, enhancing client satisfaction, and driving continuous improvement.",
    icon: q3,
  },
  {
    title: "Customer Centric",
    description:
      "Surpassing customer expectations with outstanding service and innovative solutions that adapt to their evolving needs.",
    icon: q4,
  },
  {
    title: "Customer Centric",
    description:
      "Surpassing customer expectations with outstanding service and innovative solutions that adapt to their evolving needs.",
    icon: q4,
  },

  {
    title: "Customer Centric",
    description:
      "Surpassing customer expectations with outstanding service and innovative solutions that adapt to their evolving needs.",
    icon: q4,
  },
];

export default function Whychoose() {
  // const [index, setIndex] = useState(0);

  // const nextSlide = () => {
  //   setIndex((prevIndex) => (prevIndex + 1) % features.length);
  // };

  // const prevSlide = () => {
  //   setIndex((prevIndex) => (prevIndex - 1 + features.length) % features.length);
  // };

  return (
    <div className="container mx-auto px-8 md:px-10 py-12">
      <div className="text-center mb-8">
        <h3 className="text-orange-500 font-semibold">Why choose us?</h3>
        <h2 className="text-2xl md:text-3xl font-bold text-[#1F4278] mt-2">
          To <span className="text-orange-500">increase productivity</span> and cost effectiveness
        </h2>
      </div>
      <div className="relative mt-8 flex items-center overflow-hidden">
        {/* <button
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 z-10"
          onClick={prevSlide}
        >
          <FaArrowLeft className="text-orange-500 text-xl" />
        </button> */}
        <div className="w-full overflow-hidden">
          <div
            className="flex flex-col sm:flex-row transition-transform duration-500"
          // style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="w-full sm:min-w-[50%] md:min-w-[33.33%] lg:min-w-[25%] p-4"
              >
                <div className="p-6 border border-gray-300 rounded-lg text-left flex flex-col items-center xl:h-[300px] 2xl:h-[270px] md:h-[355px]">
                  <img src={feature.icon} alt={feature.title} className="mb-4" />
                  <h3 className="text-lg font-bold text-[#1F4278]">{feature.title}</h3>
                  <p className="text-gray-600 mt-2 text-center">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <button
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 z-10"
          onClick={nextSlide}
        >
          <FaArrowRight className="text-orange-500 text-xl" />
        </button> */}
      </div>
    </div>
  );
}
