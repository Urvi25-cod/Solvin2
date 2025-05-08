


import React from "react";
// import stacked from "../Images/stacked.png";
import background from "../Images/background.png"; // Replace with actual image path
// import oil from "../Images/oil.png";
import sky5 from "../Images/sky5.png";
import Nav from "./Nav";




const Blog5 = () => {
  return (
    <>
    

<Nav bgColor="bg-white" textColor="text-black" />

      {/* Hero Section */}
      <div
        className="relative h-[40vh] w-full bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${background})` }}
      >

        {/* Content Container */}
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


    
    <section className="container mx-auto px-8 py-8 flex flex-col lg:flex-row items-center gap-10">
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
                 <img  src={sky5} className="w-full h-auto rounded-lg"></img>
               </div>
      <div className="w-full lg:w-1/2 px-4 md:px-8 lg:px-0">
        <h4 className="text-orange-500 font-semibold">Zinc Carbonate - Hydrogen Sulphide Scavenger</h4>
        <h2 className="text-2xl md:text-4xl font-bold text-[#1F4278]">
          Global Supply, <span className="text-orange-500">Innovation, Reliability,</span>
            <span className="text-[#1F4278]"> Efficiency, Growth</span>
        </h2>
        <p className="mt-4 text-[#1F4278]  text-justify text-sm md:text-base">
        In the world of global commerce, speed and innovation may attract attention, but reliability is what truly builds lasting success. 
        In today’s interconnected economy, businesses rely heavily on consistent suppliers and partners to maintain operations, meet customer expectations,
         and fuel growth. Delays, inconsistent quality, and communication gaps can cause significant financial losses and damage reputations overnight. 
         As industries become more complex and customer demands more immediate, reliability has emerged as the most valuable "currency" in global trade —
          one that determines trust, loyalty, and long-term success in business relationships.
        </p>

        <p className="mt-4 text-[#1F4278] text-justify text-sm md:text-base">
        At SolviGlobe Ltd, reliability is not just a promise; it’s a practice embedded in every part of our operations. From sourcing premium raw materials to delivering finished
         goods on strict timelines, we have built robust systems that ensure accuracy, consistency, and transparency. 
        </p>

        
        <p className="mt-4 text-[#1F4278]  text-justify text-sm md:text-base">

        We rigorously vet our suppliers, monitor every shipment, and maintain proactive communication with clients to avoid any uncertainties. Our advanced logistics management and
         real-time tracking technologies allow clients to plan and operate confidently, knowing that SolviGlobe is a dependable extension of their own team. This commitment to 
         reliability minimizes risks, reduces operational bottlenecks, and strengthens the supply chain at every level.
        </p>
        
      </div>
    </section>

    

    </>

    
  );
};

export default Blog5;
