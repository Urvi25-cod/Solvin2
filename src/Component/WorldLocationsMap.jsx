import { useState } from "react";
import { MapPin } from "lucide-react";
import maps from "../Images/maps.svg";
// Location data
const locations = [
  {
    id: 1,
    country: "INDIA",
    address:
      "  6, Ground Floor, Opera House, Mini Bazaar, Varachha Road, SURAT, Gujarat State, INDIA, 395006",
    icon: "/india.svg",
    position: { top: "40%", left: "67%" },
    mobilePosition: { top: "45%", left: "5%" }, // Adjusted for mobile
  },
 
];

export default function WorldLocationsMap() {
  const [activeLocation, setActiveLocation] = useState(null);

  return (
    <>
    <div className="container mx-auto px-4 py-2">
    <div className="text-center">
      <h2 className="text-orange-500 font-semibold text-sm md:text-base lg:text-lg">
        Our Synergy in Trade
      </h2>
      <h1 className="md:text-3xl lg:text-4xl font-bold text-[#1F4278] py-4 leading-tight md:leading-snug lg:leading-relaxed">
        Our synergy in trade fosters growth,
        <span className="text-orange-500">trust</span>,
        <span>innovation,</span>
        <span className="text-orange-500">efficiency</span>,
        and success.
      </h1>
    </div>
    </div>
    <section className="w-full  bg-white">
      <div className="container mx-auto px-4 py-2">
        {/* World Map with Location Markers */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] mb-12">
          {/* World Map Image */}
          <img
            src={maps}
            alt="World Map"
            className="object-contain w-full h-full"
          />

          {/* Location Markers */}
          {locations.map((location) => (
            <div
              key={location.id}
              className="absolute"
              style={{
                top: location.position.top,
                left: location.position.left,
              }}
            >
              {/* Location Pin (Different Positions for Mobile & Desktop) */}
              <div
                className="relative cursor-pointer md:absolute"
                style={{
                  top: location.mobilePosition.top,
                  left: location.mobilePosition.left,
                }}
                onMouseEnter={() => setActiveLocation(location.id)}
                onMouseLeave={() => setActiveLocation(null)}
              >
                <MapPin className="h-6 w-6 md:h-8 md:w-8 text-lime-700 drop-shadow-md" />

                {/* Tooltip */}
                {activeLocation === location.id && (
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-lime-700 text-white px-4 py-1 rounded-md whitespace-nowrap z-10 animate-fadeIn">
                    {location.country.charAt(0) +
                      location.country.slice(1).toLowerCase()}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-lime-700"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
