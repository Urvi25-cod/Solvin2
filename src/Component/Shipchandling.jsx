import React from "react";
import Nav from "./Nav";

import background from "../Images/background.png";
import shipping from "../Images/shipping.png";

export default function Shipchandling() {


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
            <section className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center gap-10">
                {/* Left Section - Image */}
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
                        src={shipping}
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
                        Ship chandling services are a specialized part of the import-export and maritime industry,
                        focused on supplying necessary goods and provisions to ships while they are docked at ports.
                        These services ensure that vessels are fully stocked with food, fuel, spare parts, safety equipment,
                        and other essential supplies needed for their journey.
                    </p>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-lg text-justify">
                        As ships play a critical role in global trade, efficient ship chandling is vital for minimizing downtime,
                        maintaining operations, and supporting the smooth flow of import-export activities across international waters.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-lg text-justify">
                        Ship chandlers provide a wide range of products and services including food and beverage supplies,
                        deck and engine stores, cleaning materials, medical supplies, and technical equipment.
                        They coordinate with shipping companies, agents, and port authorities to deliver these goods quickly
                        and accurately, often within tight schedules.
                    </p>
                </div>
            </section>


        </>

    )
}