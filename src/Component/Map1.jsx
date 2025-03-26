import React from "react";

import map from "../Images/map.svg";


const Map1 = () => {
  return (
   <>
 

                 

      {/* Map Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
        <div className="text-center mb-8">
        <h2 className="text-orange-500 font-semibold text-sm">Our Synergy in Trade</h2>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1F4278]">
        Our synergy in trade fosters growth ,<span className="text-orange-500">trust</span><span>,innovation,</span>
        <span className="text-orange-500">efficiency</span><span>,and success.</span>
        </h1>
      </div>
          <div className="relative">
            {/* World Map */}
            <div className="relative w-full h-full">
              {/* Add your map image or use a library like Leaflet.js */}
              <img src={map} alt="World Map" className="w-full h-full object-cover" />

              {/* Location Markers */}
              <div className="absolute top-[40%] left-[60%] transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-orange-500 text-white px-2 py-1 rounded-md text-sm">India</div>
              </div>
              {/* Add more markers as needed */}
            </div>
          </div>
        </div>
      </section>
      
      </>
  );
};

export default Map1;
