


import React from "react";
// import stacked from "../Images/stacked.png";
import background from "../Images/background.png"; // Replace with actual image path
// import oil from "../Images/oil.png";
import Nav from "./Nav";
import sky3 from "../Images/sky3.png";



const Blog3 = () => {
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
                 <img  src={sky3} className="w-full h-auto rounded-lg"></img>
               </div>
      <div className="w-full lg:w-1/3 px-4 md:px-8 lg:px-0">
        <h4 className="text-orange-500 font-semibold">Zinc Carbonate - Hydrogen Sulphide Scavenger</h4>
        <h2 className="text-2xl md:text-4xl font-bold text-[#1F4278]">
          Global Supply, <span className="text-orange-500">Innovation, Reliability,</span>
            <span className="text-[#1F4278]"> Efficiency, Growth</span>
        </h2>
        <p className="mt-4 text-[#1F4278] text-justify text-sm md:text-base">
        At SolviGlobe Ltd, our mission has always been clear: to empower businesses across industries with reliable products, innovative services, and efficient supply chain solutions.
         From manufacturing to construction and consumer goods, we have helped companies streamline operations, reduce lead times, and access high-quality materials without disruption. 
         Our tailored approach allows us to understand each client’s unique challenges and deliver solutions that fuel sustainable business growth.
        </p>

        <p className="mt-4 text-[#1F4278]  text-justify text-sm md:text-base">
        One success story involves a mid-sized manufacturing firm that was struggling with delayed shipments and inconsistent material quality.
         After partnering with SolviGlobe, they experienced a 30% reduction in production downtime and a significant boost in customer satisfaction.
          Through consistent supply and real-time inventory support,
        we helped them expand into new markets within a year — a true testament to the power of dependable partnerships.
        </p>

        
        <p className="mt-4 text-[#1F4278] text-justify  text-sm md:text-base">
        Across different sectors, SolviGlobe’s impact remains the same: driving efficiency, enhancing competitiveness, and accelerating business expansion.
         Our global reach, combined with a customer-centric mindset, ensures that whether a client is scaling regionally or globally, they have a trusted partner
          by their side to support every step of their growth journey.


      
        </p>
        
      </div>
    </section>

    

    </>

    
  );
};

export default Blog3;
