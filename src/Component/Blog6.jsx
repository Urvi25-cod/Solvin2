


import React from "react";
// import stacked from "../Images/stacked.png";
import background from "../Images/background.png"; // Replace with actual image path
// import oil from "../Images/oil.png";
import sky from "../Images/sky.png";
import Nav from "./Nav";




const Blog6 = () => {
    return (
        <>


            <Nav bgColor="bg-white" textColor="text-black" />

            {/* Hero Section */}
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
                            href="/Blog"
                            className="hover:text-orange-400 transition-colors"
                        >
                            Blog/Blog Name
                        </a>
                    </div>

                    {/* Page Title */}
                    <h1 className="text-orange-500 text-3xl sm:text-4xl md:text-5xl font-bold">
                        Blog
                    </h1>
                </div>
            </div>



            <section className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center gap-10">
                <div className="relative w-full lg:w-1/2 ">
                    {/* <img
                        src={stacked}
                        alt="Model 1"
                        className="lg:w-[80%] w-[70%] xl:w-[70%]"
                    />
                    <div className="absolute xl:top-[59%] xl:right-[-22%] top-[60%] right-[-31%] transform -translate-x-1/2 -translate-y-1/2 w-[50%]">
                        <img src={oil}
                            alt="Model 2"
                            className="lg:w-[80%] w-[90%] " />
                    </div> */}
                      <img  src={sky} className="w-full h-auto"></img>
                </div>
                <div className="w-full lg:w-1/3 px-4 md:px-8 lg:px-0">
                    <h4 className="text-orange-500 font-semibold">Zinc Carbonate - Hydrogen Sulphide Scavenger</h4>
                    <h2 className="text-2xl md:text-4xl font-bold text-[#1F4278]">
                        Global Supply, <span className="text-orange-500">Innovation, Reliability,</span>
                        <span className="text-[#1F4278]"> Efficiency, Growth</span>
                    </h2>
                    <p className="mt-4 text-[#1F4278] text-sm md:text-base">
                        Efficiency is no longer just an advantage — it’s a necessity in today’s competitive markets. At SolviGlobe Ltd, we specialize in optimizing supply chain processes to minimize waste, shorten lead times,
                        and streamline operations. By adopting lean practices and advanced technologies, we help businesses operate more smoothly and reduce the hidden costs that often slow growth.
                    </p>

                    <p className="mt-4 text-[#1F4278] text-sm md:text-base">
                        Our smart logistics systems ensure real-time visibility, faster transportation routes, and minimal handling delays. Through predictive inventory management and accurate demand
                        forecasting, we prevent overstocking and stockouts, saving businesses significant operational costs. Every step of our supply chain is designed to move products faster and
                        smarter, directly benefiting our clients' bottom line.
                    </p>


                    <p className="mt-4 text-[#1F4278] text-sm md:text-base">
                        With SolviGlobe’s focus on efficiency, companies can shift their energy from solving supply problems to expanding their core business. Our commitment to delivering timely, cost-effective
                        solutions empowers clients to maximize productivity, improve profitability, and stay ahead in a fast-changing global environment.
                    </p>

                </div>
            </section>



        </>


    );
};

export default Blog6;
