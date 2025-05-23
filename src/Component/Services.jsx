// import React from "react";
// import Nav from "./Nav";

// import background from "../Images/background.png";
// import s3 from "../Images/s3.png";

// export default function Services() {


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
//                         src={s3}
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
//                         SolviGlobe Ltd, founded in 2022 and based in India, is a supplier of raw materials,
//                         semi-finished products, finished goods, and services across multiple industries worldwide.
//                         Our mission is to empower businesses with efficient, reliable, and innovative solutions.
//                     </p>
//                     <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-lg text-justify">
//                         Our vision is to become the world’s leading supplier of raw materials and finished goods
//                         across all industries. Through our commitment to efficiency and innovation, we help
//                         global businesses achieve seamless operations and exceptional growth.
//                     </p>
//                     <p className="text-gray-600 leading-relaxed text-sm md:text-lg text-justify">
//                         Our mission is to revolutionize the global market through a customer-centric approach
//                         and advanced technologies. We aim to deliver superior products and services promptly,
//                         fostering long-term partnerships and driving global commerce.
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
import s3 from "../Images/s3.png";

export default function Services() {


    return (
        <>
            <Nav bgColor="bg-white" textColor="text-black" />
            <div
                className="relative h-[40vh] w-full bg-cover bg-center flex items-center"
                style={{ backgroundImage: `url(${background})` }}
            >

                {/* Content Container */}
                {/* <div className="relative container mx-auto   h-full flex flex-col justify-center px-6 md:px-12 lg:px-20"> */}
                    
                <div className="relative container mx-auto  px-16 py-8  h-full flex flex-col justify-center ">
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
            <section className="container mx-auto px-6  py-8 flex flex-col lg:flex-row items-center gap-10">

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
                        src={s3}
                        alt="Overview"
                        className="relative w-[60%] h-auto lg:w-[90%] lg:h-[50vh] mt-[30%] mb-[20%] ml-[30%] z-10 
               sm:w-[50%] sm:h-auto mb-20 sm:mt-40 sm:ml-[10%] object-contain"
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
                        SolviGlobe Ltd, founded in 2022 and based in India, is a supplier of raw materials,
                        semi-finished products, finished goods, and services across multiple industries worldwide.
                        Our mission is to empower businesses with efficient, reliable, and innovative solutions.
                    </p>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-lg text-justify">
                        Our vision is to become the world’s leading supplier of raw materials and finished goods
                        across all industries. Through our commitment to efficiency and innovation, we help
                        global businesses achieve seamless operations and exceptional growth.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-lg text-justify">
                        Our mission is to revolutionize the global market through a customer-centric approach
                        and advanced technologies. We aim to deliver superior products and services promptly,
                        fostering long-term partnerships and driving global commerce.
                    </p>
                </div>


            </section>


            <br></br><br></br>
        </>

    )
}