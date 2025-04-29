import React from "react";
import Nav from "./Nav";

import background from "../Images/background.png";
import warehousing from "../Images/warehousing.png";

export default function Warehousing() {


    return (
        <>
            <Nav bgColor="bg-white" textColor="text-black" />
            <div
                className="relative h-[40vh] w-full bg-cover bg-center flex items-center"
                style={{ backgroundImage: `url(${background})` }}
            >

                {/* Content Container */}
                <div className="relative  h-full flex flex-col justify-center px-6 md:px-12 lg:px-20">
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
            <section className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center gap-10">

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
                        src={warehousing}
                        alt="Overview"
                        className="relative w-[60%] h-auto lg:w-[90%] lg:h-[50vh] mt-[30%] mb-[20%] ml-[30%] z-10 
               sm:w-[50%] sm:h-auto mb-20 sm:mt-40 sm:ml-[10%] object-contain"
                    />
                </div>


                {/* Right Section - Text */}
                <div className="w-full lg:w-1/2 px-4 md:px-8 lg:px-0">
                    <h3 className="text-orange-500 font-semibold text-lg md:text-xl mb-2">
                        Sourcing & Processing
                    </h3>
                    <h2 className="text-2xl md:text-4xl font-bold leading-tight text-gray-800 mb-4">
                        Global Supply,{" "}
                        <span className="text-orange-500">Innovation, Reliability, Efficiency, Growth</span>
                    </h2>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-lg text-justify">
                        Warehousing services play a vital role in the import-export industry by acting as a secure hub for storing goods before they are distributed to their final destination. These services are essential for managing inventory, reducing transit time, and streamlining international logistics. Import-export companies rely on strategically located warehouses near ports, airports, or trade zones to temporarily store incoming or outgoing products.
                    </p>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-lg text-justify">
                        This helps in maintaining a steady supply chain, especially when dealing with bulk shipments, fluctuating demand, or delays in customs clearance.
                        Import-export warehousing services offer a wide range of functionalities, including inventory management, labeling, repackaging, order fulfillment, and cargo consolidation.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-lg text-justify">
                        Bonded warehousing is particularly useful in international trade, as it allows goods to be stored without paying customs duties until the products are officially imported. Temperature-controlled storage is also available for perishable or sensitive items. Many warehouses today are equipped with advanced tracking systems that provide real-time visibility of stock levels, order status, and storage conditions, ensuring efficient and transparent operations.
                    </p>
                </div>


            </section>


            <br></br><br></br>
        </>

    )
}