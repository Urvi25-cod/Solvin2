import React from "react";
import stacked from "../Images/stacked.png"; // Replace with actual image path
import oil from "../Images/oil.png";




const Singleproduct = () => {
  return (
    <section className="container mx-auto px-6 py-12 md:flex items-center">
     <div className="relative w-full lg:w-1/2 ">
               <img
                 src={stacked}
                 alt="Model 1"
                 className="lg:w-[80%] w-[70%] xl:w-[70%]"
               />
               <div className="absolute xl:top-[59%] xl:right-[-22%] top-[60%] right-[-31%] transform -translate-x-1/2 -translate-y-1/2 w-[50%]">
                 <img src={oil}
                  alt="Model 2" 
                  className="lg:w-[80%] w-[90%] " />
               </div>
               </div>
      <div className="md:w-1/2 mt-10 md:mt-0 md:pl-10 ">
        <h4 className="text-orange-500 font-semibold">Zinc Carbonate - Hydrogen Sulphide Scavenger</h4>
        <h2 className="text-2xl md:text-4xl font-bold text-[#1F4278]">
          Global Supply, <span className="text-orange-500">Innovation, Reliability,</span>
            <span className="text-[#1F4278]"> Efficiency, Growth</span>
        </h2>
        <p className="mt-4 text-[#1F4278] text-sm md:text-base">
          SolviGlobe Ltd, founded in 2022 and based in India, is a supplier of raw materials, semi-
          finished products, finished goods, and services across multiple industries worldwide. 
          Our mission is to empower businesses with efficient, reliable, and innovative solutions, 
          facilitating seamless operations and exceptional growth.
        </p>

        <p className="mt-4 text-[#1F4278] text-sm md:text-base">
        Our vision is to become the world’s leading supplier of raw materials, semi-finished products, and finished goods across all industries. Through our commitment to efficiency, reliability, and innovation, we aim to empower global businesses to achieve seamless operations and exceptional growth, benefiting all our stakeholders.
        </p>

        
        <p className="mt-4 text-[#1F4278] text-sm md:text-base">

        Our mission is to revolutionize the global market through customer-centric approach and advance technologies. We aim to deliver superior products and services promptly, fostering long-term partnerships and driving global commerce. By eliminating delays and enhancing efficiency, we empower our clients to achieve their goals and succeed in a competitive market.
        </p>
        
      </div>
    </section>

    

    

    
  );
};

export default Singleproduct;
