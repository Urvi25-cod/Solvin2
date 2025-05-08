// import React from "react";
// import Nav from "./Nav";

// import background from "../Images/background.png";
// import itservices from "../Images/itservices.png";

// export default function ITOutsourcing() {


//     return (
//         <>
//             <Nav bgColor="bg-white" textColor="text-black" />
//             <div
//                 className="relative h-[40vh] w-full bg-cover bg-center flex items-center"
//                 style={{ backgroundImage: `url(${background})` }}
//             >

//                 {/* Content Container */}
//                 <div className="relative  h-full flex flex-col justify-center px-6 md:px-12 lg:px-20">
//                     {/* Breadcrumb Navigation */}
//                     {/* <div className="absolute inset-0  bg-opacity-50"></div> */}

//                     <div className="mb-2 text-white text-sm md:text-base">
//                         <a href="/" className="hover:text-orange-400 transition-colors">
//                             Home
//                         </a>
//                         <span className="mx-2">/</span>
//                         <a
//                             href="/product"
//                             className="hover:text-orange-400 transition-colors"
//                         >
//                             Services
//                         </a>
//                     </div>

//                     {/* Page Title */}
//                     <h1 className="text-orange-500 text-3xl sm:text-4xl md:text-5xl font-bold">
//                         Services
//                     </h1>
//                 </div>
//             </div>
//             <section className="container mx-auto px-4 py-12 md:flex items-center space-x-0 md:space-x-6">

//                 <div className="relative w-full lg:w-1/2 flex justify-center">
//                     {/* Orange Background Box */}
//                     <div className="absolute w-[60%] h-[120%] bg-orange-500 md:left-20 lg:left-9"></div>

//                     {/* Main Image */}
//                     <img
//                         src={itservices}
//                         alt="Overview"
//                         className="relative w-[60%] h-auto lg:w-[90%] lg:h-[50vh] mt-[30%] ml-[30%] z-10 
//                    sm:w-[50%] sm:h-auto sm:mt-40 sm:ml-[10%] object-contain"
//                     />
//                 </div>


//                 {/* Right Section - Text */}
//                 <div className="w-full lg:w-1/3 px-4 md:px-8 lg:px-0 py-19">
//                     <h3 className="text-orange-500 font-semibold text-lg md:text-xl mb-2">
//                         Sourcing & Processing
//                     </h3>
//                     <h2 className="text-2xl md:text-4xl font-bold leading-tight text-gray-800 mb-4">
//                         Global Supply,{" "}
//                         <span className="text-orange-500">Innovation, Reliability, Efficiency, Growth</span>
//                     </h2>
//                     <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-lg text-justify">
//                     IT outsourcing services in the import-export industry involve delegating technology-related tasks to third-party specialists to improve operational efficiency, reduce costs, and enhance digital capabilities. These services support the digital backbone of global trade operations, such as supply chain management systems, inventory tracking, customer relationship management (CRM), and online order processing. By leveraging external IT expertise, import-export businesses can adopt modern technology solutions without maintaining a full in-house IT team, allowing them to remain agile and competitive in a fast-paced global market.
//                     </p>
//                     <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-lg text-justify">
//                     Common IT outsourcing services in the import-export domain include software development for logistics platforms, maintenance of ERP systems, data security and compliance management, cloud storage solutions, and real-time tracking systems integration. 
//                     </p>
//                     <p className="text-gray-600 leading-relaxed text-sm md:text-lg text-justify">
//                     Companies also outsource technical support, database management, and automation of customs and shipping documentation. With the growing importance of e-commerce and digital trade portals, IT outsourcing partners help businesses build and maintain responsive websites, mobile apps, and secure payment gateways, facilitating smoother international transactions and customer communication.
//                     </p>
//                 </div>


//             </section>


//             <br></br><br></br>
//         </>

//     )
// }


import React from "react";
import Nav from "./Nav";

import background from "../Images/background.png";
import itservices from "../Images/itservices.png";

export default function ITOutsourcing() {


    return (
        <>
            <Nav bgColor="bg-white" textColor="text-black" />
            <div
                className="relative h-[40vh] w-full bg-cover bg-center flex items-center"
                style={{ backgroundImage: `url(${background})` }}
            >

                {/* Content Container */}
                <div className="relative container mx-auto  h-full flex flex-col justify-center px-10 md:px-16 lg:px-24">
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
                            Services
                        </a>
                    </div>

                    {/* Page Title */}
                    <h1 className="text-orange-500 text-3xl sm:text-4xl md:text-5xl font-bold">
                        Services
                    </h1>
                </div>
            </div>
            <section className="container mx-auto px-8 py-12 flex flex-col lg:flex-row items-center gap-10">

                <div className="relative w-full lg:w-1/2 flex justify-center">
                    {/* Orange Background Box */}
                    <div
                        className="absolute bg-orange-500 -z-0
             w-[60%] h-[100%] left-[20%] 
             sm:w-[50%]
             md:w-[45%] 
             lg:w-[62%] lg:h-[100%] lg:left-9">
                    </div>

                    {/* Main Image */}
                    <img
                        src={itservices}
                        alt="Overview"
            //             className="relative w-[60%] h-auto lg:w-[90%] lg:h-[50vh] mt-[30%] mb-[20%] ml-[30%] z-10 
            //    sm:w-[50%] sm:h-auto mb-20 sm:mt-40 sm:ml-[10%] object-contain"
             className="relative w-[60%] h-auto lg:w-[50%] lg:h-[40vh]- mt-[30%] mb-[20%] ml-[30%] z-10   sm:w-[50%] sm:h-auto mb-20 sm:mt-40 sm:ml-[10%] object-contain"
                    />
                </div>


                {/* Right Section - Text */}
                <div className="w-full lg:w-1/2 px-4 md:px-8 lg:px-4">
                    <h3 className="text-orange-500 font-semibold text-lg md:text-xl mb-2">
                        Sourcing & Processing
                    </h3>
                    <h2 className="text-2xl md:text-4xl font-bold leading-tight text-gray-800 mb-4">
                        Global Supply,{" "}
                        <span className="text-orange-500">Innovation, Reliability, Efficiency, Growth</span>
                    </h2>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-lg text-justify">
                        IT outsourcing services in the import-export industry involve delegating technology-related tasks to third-party specialists to improve operational efficiency, reduce costs, and enhance digital capabilities. These services support the digital backbone of global trade operations, such as supply chain management systems, inventory tracking, customer relationship management (CRM), and online order processing. By leveraging external IT expertise, import-export businesses can adopt modern technology solutions without maintaining a full in-house IT team, allowing them to remain agile and competitive in a fast-paced global market.
                    </p>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-lg text-justify">
                        Common IT outsourcing services in the import-export domain include software development for logistics platforms, maintenance of ERP systems, data security and compliance management, cloud storage solutions, and real-time tracking systems integration.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-lg text-justify">
                        Companies also outsource technical support, database management, and automation of customs and shipping documentation. With the growing importance of e-commerce and digital trade portals, IT outsourcing partners help businesses build and maintain responsive websites, mobile apps, and secure payment gateways, facilitating smoother international transactions and customer communication.
                    </p>
                </div>


            </section>


            <br></br><br></br>
        </>

    )
}