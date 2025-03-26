// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Framelogo from "./Framelogo";

// const About2 = () => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         responsive: [
//             {
//                 breakpoint: 1024, // Tablet and smaller devices
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     dots: true,
//                 },
//             },
//             {
//                 breakpoint: 768, // Mobile devices
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     dots: true,
//                 },
//             },
//         ],
//     };

//     const coreValues = [
//         {
//             id: 1,
//             number:"1",
//             title: "Reliability",
//             description:
//                 "Trust is our cornerstone. We promise timely and efficient delivery, ensuring that our clients receive what they need.",
//             icon: "/path-to-icon/reliability-icon.png", // Replace with your icon path
//         },
//         {
//             id: 2,
//             number:"2",
//             title: "Adaptability",
//             description:
//                 "In a constantly evolving global market, flexibility is key. We embrace change and swiftly adjust to meet challenges.",
//             // Replace with your icon path
//         },
//         {
//             id: 3,
//             number:"3",
//             title: "Respect for All Stakeholders",
//             description:
//                 "We value every relationship and believe in treating all stakeholders with respect and dignity.",
//              // Replace with your icon path
//         },
//         {
//             id: 4,
//             number:"4",
//             title: "Excellence",
//             description:
//                 "Striving for excellence drives us. We set high standards and are relentless in our pursuit of superior results.",
//            // Replace with your icon path
//         },
//         {
//             id: 5,
//             number:"5",
//             title: "Excellence",
//             description:
//                 "Striving for excellence drives us. We set high standards and are relentless in our pursuit of superior results.",
//              // Replace with your icon path
//         },
//     ];

//     return (
//         <>
//             <div className="py-12">
//                 <div className=" container mx-auto px-6">
//                     <h3 className="flex justify-start text-orange-500">Our Core Value</h3>
//                     {/* <h2 className="text-center text-3xl font-bold text-[#1F4278] mb-8 flex justify-start gap-2">
//           Excellence Through <span className="text-orange-500">Collaboration & Innovation</span>
//         </h2> */}
//                     <h2 className="text-2xl sm:text-3xl font-bold text-[#1F4278] mb-8 flex flex-col sm:flex-row sm:justify-start gap-2 text-center sm:text-left">
//                         Excellence Through
//                         <span className="text-orange-500">Collaboration & Innovation</span>
//                     </h2>

//                     <Slider {...settings}>
//                         {coreValues.map((value) => (
//                             <div key={value.id} className="p-4">
//                                 <div className="bg-white rounded-lg shadow-lg w-full h-60 text-center">
                                   
//                                     <div className="mx-auto mb-4 w-20 h-20 flex items-center justify-center rounded-full bg-orange-200 text-orange-500 text-xl font-bold">
//                                         {value.number}
//                                     </div>
                                    
//                                     <h3 className="text-xl font-semibold text-[#1F4278] mb-2">
//                                         {value.title}
//                                     </h3>
//                                     <p className="text-gray-600">{value.description}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </Slider>
//                 </div>
//             </div>
//             <Framelogo />
//         </>
//     );
// };

// export default About2;



import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OurCompanies from "./OurCompanies";

const About2 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1440, // Tablet and smaller devices
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1024, // Tablet and smaller devices
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768, // Mobile devices
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 425, // Mobile devices
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
        ],
    };

    const coreValues = [
        { id: 1, number: "1", title: "Reliability", description: "Trust is our cornerstone. We promise timely and efficient delivery, ensuring that our clients receive what they need." },
        { id: 2, number: "2", title: "Adaptability", description: "In a constantly evolving global market, flexibility is key. We embrace change and swiftly adjust to meet challenges." },
        { id: 3, number: "3", title: "Respect for All Stakeholders", description: "We value every relationship and believe in treating all stakeholders with respect and dignity." },
        { id: 4, number: "4", title: "Excellence", description: "Striving for excellence drives us. We set high standards and are relentless in our pursuit of superior results." },
        { id: 5, number: "5", title: "Innovation", description: "We continuously strive to innovate and improve, ensuring we stay ahead in the competitive landscape." },
    ];

    return (
        <>
        <div className="py-12 bg-gray-50">
            <div className="container mx-auto px-6">
                <h3 className="text-orange-500 text-lg font-semibold mb-4 text-center">Our Core Values</h3>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1F4278] mb-8 text-center">
                    Excellence Through <span className="text-orange-500">Collaboration &     Innovation</span>
                </h2>

                <Slider {...settings}>
                    {coreValues.map((value) => (
                        <div key={value.id} className="">
                            <div className="w-72 h-60 bg-white rounded-lg shadow-lg p-6 text-center flex flex-col items-center">
                                {/* Circular Number */}
                                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 text-xl font-bold mb-4">
                                    {value.number}
                                </div>
                                {/* Title */}
                                <h3 className="text-lg font-semibold text-[#1F4278] mb-2">{value.title}</h3>
                                {/* Description */}
                                <p className="text-gray-600 text-sm">{value.description}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>

        <OurCompanies/>
        </>
    );
};

export default About2;
