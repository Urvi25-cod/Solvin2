import React, { useEffect, useRef, useState } from "react";

// Import your images
import respect from "../Images/respect.png";
import Innovation from "../Images/Innovation.png";
import Adaptability from "../Images/Adaptability.png";
import Excellence from "../Images/Innovation.png";
import Reliability from "../Images/Reliability.png";
import OurCompanies from "./OurCompanies";

const coreValues = [
  {
    id: 1,
    icon: Reliability,
    title: "Reliability",
    description:
      "Trust is our cornerstone. We promise timely and efficient delivery, ensuring that our clients receive what they need.",
  },
  {
    id: 2,
    icon: Adaptability,
    title: "Adaptability",
    description:
      "In a constantly evolving global market, flexibility is key. We embrace change and swiftly adjust to meet challenges.",
  },
  {
    id: 3,
    icon: respect,
    title: "Respect for All Stakeholders",
    description:
      "We value every relationship and believe in treating all stakeholders with respect and dignity.",
  },
  {
    id: 4,
    icon: Excellence,
    title: "Excellence",
    description:
      "Striving for excellence drives us. We set high standards and are relentless in our pursuit of superior results.",
  },
  {
    id: 5,
    icon: Innovation,
    title: "Innovation",
    description:
      "We continuously strive to innovate and improve, ensuring we stay ahead in the competitive landscape.",
  },
];

const getSlidesToShow = () => {
  if (window.innerWidth < 600) return 1;
  if (window.innerWidth < 900) return 2;
  if (window.innerWidth < 1200) return 3;
  return 4;
};

const About2 = () => {
  const containerRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());

  // Update slidesToShow on window resize
  useEffect(() => {
    const handleResize = () => setSlidesToShow(getSlidesToShow());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-scroll logic
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let animationFrame;

    const scroll = () => {
      if (container.scrollLeft + 2 >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += 1;
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, [slidesToShow]);

  // Calculate card width based on slidesToShow
  const cardWidth = () => {
    if (slidesToShow === 1) return "90vw";
    if (slidesToShow === 2) return "45vw";
    if (slidesToShow === 3) return "30vw";
    return "22vw";
  };

  return (
    <>
      <div className="py-8 bg-gray-50">
        <div className="container mx-auto sm:px-6 px-6 lg:px-16 py-4">
          <h3 className="text-orange-500 text-lg font-semibold mb-4 text-center">
            Our Core Values
          </h3>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F4278] mb-8 text-center">
            Excellence Through{" "}
            <span className="text-orange-500">Collaboration & Innovation</span>
          </h2>
          <div
            ref={containerRef}
            className="flex overflow-x-hidden"
            style={{
              scrollBehavior: "smooth",
              width: "100%",
            }}
          >
            {/* Duplicate items for infinite scroll */}
            {[...coreValues, ...coreValues].map((value, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 px-2"
                style={{
                  width: cardWidth(),
                  minWidth: 220,
                  maxWidth: 350,
                  scrollSnapAlign: "center",
                }}
              >
                <div className="w-full h-60 bg-white rounded-lg shadow-lg p-6 text-center flex flex-col items-center justify-center border border-gray-200">
                  <div className="w-14 h-14 flex items-center justify-center mb-4">
                    <img
                      src={value.icon}
                      alt={value.title}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <h3 className="text-base font-semibold text-[#1F4278] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <OurCompanies />
    </>
  );
};

export default About2;

