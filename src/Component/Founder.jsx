import React from 'react';
import background from "../Images/background.png";
// Add your calendar image here
import Boy from "../Images/Boy.png";

import Nav from "./Nav";




const Founder = () => {


    return (
        <>
            <Nav bgColor="bg-white" textColor="text-black" />

            {/* Hero Section */}
            <div
                className="relative h-[40vh] w-full bg-cover bg-center flex items-center"
                style={{ backgroundImage: `url(${background})` }}
            >

                {/* Content Container */}
                <div className="relative  h-full flex flex-col justify-center px-6 md:px-12 lg:px-20">
                    {/* Breadcrumb Navigation */}
                    {/* <div className="absolute inset-0  bg-opacity-50"></div> */}

                    <div className="mb-2 text-white text-sm md:text-base">
                        <a href="/" className="hover:text-orange-400 transition-colors">
                            Home
                        </a>
                        <span className="mx-2">/</span>
                        <a
                            href="/About"
                            className="hover:text-orange-400 transition-colors"
                        >
                            About
                        </a>
                        <span className="mx-2">/</span>
                        <a
                            href="/Founder"
                            className="hover:text-orange-400 transition-colors"
                        >
                            Founder
                        </a>
                    </div>

                    {/* Page Title */}
                    <h1 className="text-orange-500 text-3xl sm:text-4xl md:text-5xl font-bold">
                        Founder’s Note
                    </h1>
                </div>
            </div>

            <div className="px-4 md:px-6 lg:px-12  py-20">
                {/* Card */}

                <div className="flex flex-col md:flex-row items-center md:items-start bg-white p-4 md:p-12">
                    {/* Left Section - Image */}
                    <div className="relative w-full lg:w-1/2 flex justify-center">
                        <div className=" xl:w-80 w-[95%] xl:h-[600px] h-[500px] md:h-[500px] bg-orange-500"></div>
                        <img
                            src={Boy}
                            alt="Profile"
                            className="absolute w-[90%] h-[400px] md:w-[95%] md:h-[80%] xl:h-[70%] xl:left-25 xl:top-23 top-15 md:top-10 left-10 object-contain z-10 "
                        />
                    </div>


                    {/* Right Section - Text Content */}
                    <div className="w-full lg:w-1/1 px-4 md:px-8 ml-10">
                        <p className="text-orange-500 font-semibold text-sm">Co-founder & CEO</p>
                        <h1 className="text-[#1F4278] font-bold text-2xl md:text-3xl mt-2">Brijeshkumar Kakdiya</h1>
                        <p className="text-blue-800 text-sm md:text-base mt-4 leading-relaxed text-justify">
                            SolviGlobe Ltd, founded in 2022 and based in India, is a supplier of raw materials,
                            semi-finished products, finished goods, and services across a multitude of industries
                            across the world. Our mission is to empower businesses worldwide with efficient,
                            reliable, and innovative solutions, facilitating seamless operations and exceptional growth.
                        </p>
                        <p className="text-blue-800 text-sm md:text-base mt-4 leading-relaxed text-justify">
                            Our vision is to become the world's leading supplier of raw materials, semi-finished
                            products, and finished goods across all industries. Through our commitment to efficiency,
                            reliability, and innovation, we aim to empower global businesses to achieve seamless
                            operations and exceptional growth, benefiting all our stakeholders. Our mission is to
                            revolutionize the global market through customer-centric approaches and advanced technologies.
                            We aim to deliver superior products and services promptly, fostering long-term partnerships and driving global
                            commerce. By eliminating delays and enhancing efficiency, we empower our clients to achieve their goals and succeed
                            in a competitive market.
                        </p>
                        <p className="text-blue-800 text-sm md:text-base mt-4 leading-relaxed text-justify">
                            SolviGlobe Ltd, founded in 2022 and based in India, is a supplier of raw materials, semi-finished products,
                            finished goods, and services across a multitude of industries across the world. Our mission is to empower
                            businesses worldwide with efficient, reliable, and innovative solutions, facilitating seamless operations
                            and exceptional growth.</p>
                        <p className="text-blue-800 text-sm md:text-base mt-4 leading-relaxed text-justify">
                            Our vision is to become the world’s leading supplier of raw materials, semi-finished products, and finished goods
                            across all industries. Through our commitment to efficiency, reliability, and innovation, we aim to empower global
                            businesses to achieve seamless operations and exceptional growth, benefiting all our stakeholders. Our mission is
                            to revolutionize the global market through customer-centric approach and advance technologies. We aim to deliver
                            superior products and services promptly, fostering long-term partnerships and driving global commerce. By eliminating
                            delays and enhancing efficiency, we empower our clients to achieve their goals and succeed in a competitive market.
                        </p>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Founder;