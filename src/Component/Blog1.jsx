


import React from "react";
// import stacked from "../Images/stacked.png";
import background from "../Images/background.png"; // Replace with actual image path
// import oil from "../Images/oil.png";
import sky from "../Images/sky.png";
import Nav from "./Nav";




const Blog1 = () => {
  return (
    <>
    

<Nav bgColor="bg-white" textColor="text-black" />

      {/* Hero Section */}
      <div
        className="relative h-[40vh] w-full bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${background})` }}
      >

        {/* Content Container */}
        {/* <div className="relative  h-full flex flex-col justify-center px-6 md:px-12 lg:px-20"> */}
        <div className="relative  h-full flex flex-col justify-center container mx-auto px-8 py-8">
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


    
    <section className="container mx-auto px-8 py-12 flex flex-col lg:flex-row items-center gap-10">
     <div className="relative w-full lg:w-1/2 ">
               {/* <img
                 src={stacked}
                 alt="Model 1"
                 className="lg:w-[80%] w-[70%] xl:w-[70%]"
               />
               <div className="absolute xl:top-[59%] xl:right-[-22%] top-[60%] right-[-31%] transform -translate-x-1/2 -translate-y-1/2 w-[50%]">
                 <img src={oil}
                  alt="Model 2" 
                  className="lg:w-[80%] w-[90%] " /> */}
                  <img  src={sky} className="w-full h-auto rounded-lg"></img>
               </div>
              
      <div className="w-full lg:w-1/2 px-4 md:px-8 lg:px-0">
        <h4 className="text-orange-500 font-semibold">Zinc Carbonate - Hydrogen Sulphide Scavenger</h4>
        <h2 className="text-2xl md:text-4xl font-bold text-[#1F4278]">
          Global Supply, <span className="text-orange-500">Innovation, Reliability,</span>
            <span className="text-[#1F4278]"> Efficiency, Growth</span>
        </h2>
        <p className="mt-4 text-[#1F4278] text-justify text-sm md:text-base">
        In today’s rapidly evolving global marketplace, supply chains must be more agile, efficient, and resilient than ever before.
         SolviGlobe Ltd, founded in 2022, stands at the forefront of this transformation by offering a seamless bridge between raw materials, 
         semi-finished products, and finished goods across multiple industries. With a foundation built on efficiency, innovation, and reliability, 
         SolviGlobe doesn’t just supply products — it delivers end-to-end solutions that optimize operations for businesses worldwide. Our customer-centric 
         approach ensures that every partnership is tailored to meet specific operational challenges, enabling clients to scale faster, reduce costs, and eliminate 
         inefficiencies in their supply chains.
        </p>

        <p className="mt-4 text-[#1F4278]  text-justify text-sm md:text-base">
        At the heart of SolviGlobe’s success is a commitment to innovation and advanced technologies. From intelligent sourcing methods and
         predictive inventory management to digitalized tracking systems, SolviGlobe integrates cutting-edge solutions that enhance transparency and 
         agility at every step of the supply journey. By embracing these technologies, we minimize delays, anticipate market shifts, and provide our 
         clients with real-time visibility and control over their supply chain operations. 
        </p>

        
        <p className="mt-4 text-[#1F4278]  text-justify text-sm md:text-base">

        This proactive approach not only reduces risk but also empowers businesses to make strategic decisions faster — a critical 
        advantage in today’s competitive and unpredictable markets.
        </p>
        
      </div>
    </section>

    

    </>

    
  );
};

export default Blog1;
