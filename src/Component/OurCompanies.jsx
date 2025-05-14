import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bright from "../Images/bright.png";
import delment from "../Images/delment.png";

const OurCompanies = () => {
    const settings = {
        dots: false, // Disable dots for manual scrolling
        infinite: true,
        speed: 1000, // Speed of the auto-scroll (in milliseconds)
        slidesToShow: 5, // Number of logos visible on large screens
        slidesToScroll: 1,
        autoplay: true, // Enable auto-scrolling
        autoplaySpeed: 1000, // Time interval between auto-scrolls (in milliseconds)
        responsive: [
            {
                breakpoint: 1024, // Tablet devices
                settings: {
                    slidesToShow: 3, // Number of logos visible on tablets
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 768, // Mobile devices
                settings: {
                    slidesToShow: 2, // Number of logos visible on mobile devices
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 480, // Small mobile devices
                settings: {
                    slidesToShow: 1, // Single logo visible on very small screens
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    };

    const companies = [
        { id: 1, logoUrl: delment }, // Replace with actual logo paths
        { id: 2, logoUrl: bright },
        { id: 3, logoUrl: delment },
        { id: 4, logoUrl: bright },
        { id: 5, logoUrl: delment },
        { id: 6, logoUrl: bright },
    ];

    return (
        <div className="py-12 bg-gray-50">
            <div className="container mx-auto px-16">
                {/* Heading Section */}
                <h3 className="text-orange-500 text-lg font-semibold mb-2 text-center">Our Network</h3>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1F4278] text-center mb-8">
                    Pioneering Together:
                    <span className="text-orange-500"> Our Companies</span>
                </h2>

                {/* Slider Section */}
                <Slider {...settings} className="mx-auto">
                    {companies.map((company) => (
                        <div key={company.id} className="p-4">
                            <div className="flex justify-center items-center">
                                <img
                                    src={company.logoUrl}
                                    alt={`Logo of ${company.id}`}
                                    className="w-full max-w-[120px] sm:max-w-[150px] h-auto"
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default OurCompanies;
