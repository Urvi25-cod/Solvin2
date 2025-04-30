import React, { useEffect, useState } from "react";
import supply from "../Images/supply.png"; // Replace with actual image path
import rain from "../Images/rain.png";

const Frame = () => {
  const [partnerships, setPartnerships] = useState(0);
  const [countries, setCountries] = useState(0);
  const [experience, setExperience] = useState(0);

  useEffect(() => {
    let start = 0;
    let endValues = { partnerships: 250, countries: 31, experience: 9 };
    let duration = 1000; // 3 seconds
    let stepTime = 50; // Update every 50ms
    let steps = duration / stepTime;

    let interval = setInterval(() => {
      start++;
      setPartnerships(Math.min(Math.floor((start / steps) * endValues.partnerships), endValues.partnerships));
      setCountries(Math.min(Math.floor((start / steps) * endValues.countries), endValues.countries));
      setExperience(Math.min(Math.floor((start / steps) * endValues.experience), endValues.experience));

      if (start >= steps) clearInterval(interval);
    }, stepTime);
  }, []);

  return (
    <>
      {/* <div className="min-h-screen bg-cover bg-center text-white" style={{ backgroundImage:`url(${background})`}}> */}
      {/* <main className="flex flex-col items-center justify-center text-center h-[calc(100vh_-_80px)] px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          From Raw to Refined:{" "}
          <span className="text-orange-500">We Deliver Excellence.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Connecting{" "}
          <span className="text-orange-500 font-semibold">Your Needs</span> with
          Our Expertise.
        </p>
      
      </main> */}

      {/* </div>  mx-auto px-4 md:px-6 py-12 */}

      {/* <section className="container mx-auto px-4 sm:px-6 md:px-6  py-12 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center"> */}
      <section className="px-4 py-12 container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center md:px-6">
        <div className="relative w-full flex justify-center ">
          <img
            src={supply}
            alt="Model 1"
            className="w-full max-w-[80%] sm:max-w-[70%] lg:max-w-[70%] object-cover rounded-md"
          />

          <div className="absolute top-1/2 right-[-1%] transform -translate-y-1/2 w-[50%] max-w-[40%] lg:mt-[5%]  ">
            <img src={rain}
              alt="Model 2"
              className="w-full object-cover rounded-md" />
          </div>
        </div>

        <div className="px-4 sm:px-8 text-center sm:text-left">
          <h4 className="text-orange-500 font-semibold">Who we are</h4>
          <h2 className="text-2xl md:text-4xl font-bold text-[#1F4278]">
            Global Supply, <span className="text-orange-500">Innovation, Reliability,</span>
            <span className="text-[#1F4278]"> Efficiency, Growth</span>
          </h2>

          <p className="mt-4 text-[#1F4278] text-justify text-sm md:text-base">
            SolviGlobe Ltd, founded in 2022 and based in India, is a supplier of raw materials, semi-
            finished products, finished goods, and services across multiple industries worldwide.
            Our mission is to empower businesses with efficient, reliable, and innovative solutions,
            facilitating seamless operations and exceptional growth.
          </p>

          <p className="mt-4 text-[#1F4278] text-justify  text-sm md:text-base">
            Our vision is to become the world’s leading supplier of raw materials, semi-finished products,
            and finished goods across all industries. Through our commitment to efficiency, reliability,
            and innovation, we aim to empower global businesses to achieve seamless operations and exceptional
            growth, benefiting all our stakeholders.
          </p>

          <p className="mt-4 text-[#1F4278] text-justify  text-sm md:text-base">
            Our mission is to revolutionize the global market through customer-centric approach
            and advance technologies. We aim to deliver superior products and services promptly,
            fostering long-term partnerships and driving global commerce. By eliminating delays
            and enhancing efficiency, we empower our clients to achieve their goals and succeed
            in a competitive market.
          </p>

          {/* <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start border-r border-gray-400 pr-6 last:border-r-0">
              <p className="text-orange-500 text-3xl font-bold">{partnerships}+</p>
              <p className="text-[#1F4278] text-base">Successful Partnerships</p>
            </div>

            <div className="flex flex-col items-center md:items-start border-r border-gray-400 pr-6 last:border-r-0">
              <p className="text-orange-500 text-3xl font-bold">{countries}+</p>
              <p className="text-[#1F4278] text-base">Countries Covered</p>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <p className="text-orange-500 text-3xl font-bold">{experience}+</p>
              <p className="text-[#1F4278] text-base">Years of Experience</p>
            </div>
          </div> */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start border-r border-gray-400 pr-6 last:border-r-0">
              <p className="text-orange-500 text-3xl font-bold">{partnerships}+</p>
              <p className="text-[#1F4278] text-base">Successful Partnerships</p>
            </div>

            <div className="flex flex-col items-center md:items-start border-r border-gray-400 pr-6 last:border-r-0">
              <p className="text-orange-500 text-3xl font-bold">{countries}+</p>
              <p className="text-[#1F4278] text-base">Countries Covered</p>
            </div>

            <div className="flex flex-col items-center md:items-start border-r sm:border-r-0 border-gray-400 pb-4 sm:pb-0">
              <p className="text-orange-500 text-3xl font-bold">{experience}+</p>
              <p className="text-[#1F4278] text-base">Years of Experience</p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Frame;
