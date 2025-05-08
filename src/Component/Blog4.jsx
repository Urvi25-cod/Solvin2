


import React from "react";
// import stacked from "../Images/stacked.png";
import background from "../Images/background.png"; // Replace with actual image path
// import oil from "../Images/oil.png";
import sky4 from "../Images/sky4.png";
import Nav from "./Nav";




const Blog4 = () => {
  return (
    <>
    

<Nav bgColor="bg-white" textColor="text-black" />

      {/* Hero Section */}
      <div
        className="relative h-[40vh] w-full bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${background})` }}
      >

        {/* Content Container */}
        <div className="relative  h-full flex flex-col justify-center container mx-auto px-4 py-8">
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


    
    <section className="container mx-auto px-4 py-8 flex flex-col lg:flex-row items-center gap-10">
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
                 <img  src={sky4} className="w-full h-auto rounded-lg"></img>
               </div>
      <div className="w-full lg:w-1/2 px-4 md:px-8 lg:px-0">
        <h4 className="text-orange-500 font-semibold">Zinc Carbonate - Hydrogen Sulphide Scavenger</h4>
        <h2 className="text-2xl md:text-4xl font-bold text-[#1F4278]">
          Global Supply, <span className="text-orange-500">Innovation, Reliability,</span>
            <span className="text-[#1F4278]"> Efficiency, Growth</span>
        </h2>
        <p className="mt-4 text-[#1F4278]  text-justify text-sm md:text-base">
        At SolviGlobe Ltd, our supply chain journey begins with the strategic sourcing of high-quality raw materials. We collaborate with trusted suppliers to procure essential components, 
        ensuring that each material meets our stringent quality standards. This foundational step is crucial, as the integrity of raw materials directly influences the excellence of the final
         products we deliver to our clients.
        </p>

        <p className="mt-4 text-[#1F4278] text-justify  text-sm md:text-base">
        Once the raw materials are secured, they enter our streamlined production process. Here, advanced manufacturing techniques and rigorous quality control measures are employed to transform these materials into semi-finished and finished goods.
         Our operations are designed to be efficient and adaptable, allowing us to meet diverse industry demands while maintaining consistency and reliability in our outputs.
        </p>

        
        <p className="mt-4 text-[#1F4278]  text-justify text-sm md:text-base">
        The final phase involves the distribution of finished goods to our clients across various industries worldwide. Leveraging a robust logistics network, we ensure timely and secure delivery, minimizing disruptions and maximizing client satisfaction. At every stage of this journey, 
        SolviGlobe's commitment to efficiency, innovation, and reliability ensures that our clients receive superior products that support their operational success and growth.
        </p>
        
      </div>
    </section>

    

    </>

    
  );
};

export default Blog4;
