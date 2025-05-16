import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bright from "../Images/bright.png";
import delment from "../Images/delment.png";

const OurCompanies = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 6000, // Make this large for slow, smooth movement (e.g., 6000ms)
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0, // Set to 0 for continuous scroll
        cssEase: "linear", // Makes the animation linear and smooth
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
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
