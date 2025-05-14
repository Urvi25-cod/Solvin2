import React from 'react';
import supply from "../Images/supply.png"; // Replace with actual image path
import globalsupply from "../Images/globalsupply.png";
import Nav from "./Nav";
import background from "../Images/background.png";
import tick from "../Images/tick.png";
import tick2 from "../Images/tick2.png";
import About2 from './About2';

const About = () => {


  return (

    <>
      <Nav bgColor="bg-white" textColor="text-black" />
      <div
        className="relative h-[40vh] w-full bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${background})` }}
      >

        {/* Content Container */}
        <div className="relative container mx-auto  z-10 h-full flex flex-col justify-center px-16 py-8 ">
          {/* Breadcrumb Navigation */}
          {/* <div className="absolute inset-0  bg-opacity-50"></div> */}

          <div className="mb-2 text-white text-sm md:text-base">
            <a href="/" className="hover:text-orange-400 transition-colors">
              Home
            </a>
            <span className="mx-2">/</span>
            <a
              href="/product"
              className="hover:text-orange-400 transition-colors"
            >
              About Us
            </a>
          </div>

          {/* Page Title */}
          <h1 className="text-orange-500 text-3xl sm:text-4xl md:text-5xl font-bold">
            About Us
          </h1>
        </div>
      </div>

      {/* <section className="container mx-auto px-4 sm:px-6 lg:px-12 py-12 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center"> */}
      <section className="container mx-auto lg:px-16   md:px-20  sm:px-6 py-12 p-2 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
        {/* Image Container */}
        <div className="w-full flex lg:col-span-1">
          <img
            src={supply}
            alt="Supply Chain"
            className="w-full  object-cover rounded-md"
          />
        </div>


        {/* Text Content */}
        <div className="px-4 text-center sm:text-left  lg:col-span-2">
          <h4 className="text-orange-500 font-semibold">Who we are</h4>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F4278]">
            Global Supply, <span className="text-orange-500">Innovation, Reliability,</span>
            <span className="text-[#1F4278]"> Efficiency, Growth</span>
          </h2>
          <p className="mt-4 text-[#1F4278] text-sm sm:text-base  text-justify leading-relaxed">
            SolviGlobe Ltd, founded in 2022 and based in India, is a supplier of raw materials, semi-
            finished products, finished goods, and services across multiple industries worldwide.
            Our mission is to empower businesses with efficient, reliable, and innovative solutions,
            facilitating seamless operations and exceptional growth.
          </p>
          <p className="mt-4 text-[#1F4278] text-sm sm:text-base text-justify leading-relaxed">
            Our vision is to become the world’s leading supplier of raw materials, semi-finished products, and finished goods across all industries. Through our commitment to efficiency, reliability, and innovation, we aim to empower global businesses to achieve seamless operations and exceptional growth, benefiting all our stakeholders.
          </p>
          <p className="mt-4 text-[#1F4278] text-sm sm:text-base text-justify leading-relaxed">
            Our mission is to revolutionize the global market through customer-centric approach and advance technologies. We aim to deliver superior products and services promptly, fostering long-term partnerships and driving global commerce. By eliminating delays and enhancing efficiency, we empower our clients to achieve their goals and succeed in a competitive market.
          </p>
        </div>
      </section>



      <div className="container mx-auto lg:px-16   md:px-20  sm:px-6 py-12 p-2 py-8">
        <div>
          <h3 className="text-orange-500 mb-4">
            Our Mission & Vision </h3>
          <h1 className="text-2xl md:text-4xl font-semibold text-[#1F4278] mb-4">
            Empowering Global <span className="text-orange-500">Growth & Innovation </span></h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Our Mission */}
            <div className="bg-white rounded-xl shadow-lg  shadow-lg  shadow-gray-500/50 p-6">
              <h2 className="text-2xl font-bold text-[#1F4278] mb-4">Our Mission</h2>
              <p className="text-[#1F4278] text-justify mb-4">
                Our mission is to revolutionize the global market through
                customer-centric approach and advanced technologies. We aim to
                deliver superior products and services promptly, fostering long-term
                partnerships and driving global commerce. By eliminating delays and
                enhancing efficiency, we empower our clients to achieve their goals
                and succeed in a competitive market.
              </p>
              <ul className="space-y-2">
                {[
                  "Revolutionizing Global Markets with Innovation",
                  "Customer-Centric Approach for Lasting Partnerships",
                  "Enhancing Efficiency for Seamless Operations",
                  "Driving Global Commerce Through Advanced Technologies",
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <img src={tick} alt="Blue Check Icon" className="w-6 h-6" />
                    <span className="text-[#1F4278]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>


            {/* Our Vision */}
            <div className="bg-white rounded-xl shadow-lg  shadow-gray-500/50 p-6">
              <h2 className="text-2xl font-bold text-orange-500 mb-4">Our Vision</h2>
              <p className="text-orange-500 text-justify mb-4">
                Our vision is to become the world's leading supplier of raw
                materials, semi-finished products, and finished goods across all
                industries. Through our commitment to efficiency, reliability, and
                innovation, we aim to empower global businesses to achieve seamless
                operations and exceptional growth, benefiting all our stakeholders.
              </p>
              <ul className="space-y-2">
                {[
                  "Revolutionizing Global Markets with Innovation",
                  "Customer-Centric Approach for Lasting Partnerships",
                  "Enhancing Efficiency for Seamless Operations",
                  "Driving Global Commerce Through Advanced Technologies",
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <img src={tick2} alt="Blue Check Icon" className="w-6 h-6" />
                    <span className="text-orange-500">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Purpose */}

            <div className="bg-white rounded-xl shadow-lg  shadow-lg  shadow-gray-500/50 p-6">
              <h2 className="text-2xl font-bold text-[#1F4278] mb-4">Our Purpose</h2>
              <p className="text-[#1F4278] text-justify mb-4">
                We strive to connect global markets by offering dependable delivery
                of raw materials, finished products, semi-finished goods, and
                services. Our focus is on supporting businesses everywhere with
                consistent access to critical resources and pioneering solutions to
                drive their success.
              </p>
              <ul className="space-y-2">
                {[
                  "Connecting Global Markets with Reliable Supply",
                  "Ensuring Consistent Access to Critical Resources",
                  "Supporting Businesses with Dependable Delivery",
                  "Driving Success Through Innovative Solutions",
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <img src={tick} alt="Blue Check Icon" className="w-6 h-6" />
                    <span className="text-[#1F4278]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Beliefs */}
            <div className="bg-white rounded-xl shadow-lg shadow-lg  shadow-gray-500/50 p-6">
              <h2 className="text-2xl font-bold text-orange-500 mb-4">Our Beliefs</h2>
              <p className=" text-orange-500 text-justify mb-4">
                We are confident in the transformative power of synergy and
                collaboration, recognizing the potential of every stakeholder in our
                ecosystem—from our employees to our clients. We believe that by
                upholding integrity, dedication, and mutual respect, we can
                revolutionize the global trade landscape.
              </p>
              <ul className="space-y-2">
                {[
                  "The Power of Synergy and Collaboration",
                  "Empowering Stakeholders for Collective Growth",
                  "Integrity, Dedication, and Mutual Respect in Business",
                  "Revolutionizing Global Trade Through Strong Partnerships",
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <img src={tick2} alt="Blue Check Icon" className="w-6 h-6" />
                    <span className="text-orange-500">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <About2 />
    </>
  )
}


export default About;