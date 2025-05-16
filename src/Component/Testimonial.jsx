// import { useState } from "react";
// import testi from "../Images/testi.png";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


// const Testimonial = () => {

//   const[index, setIndex] = useState(0);

//   const nextSlide = () => {
//     setIndex((prevIndex) => (prevIndex + 1) % features.length);
//   };

//   const prevSlide = () => {
//     setIndex((prevIndex) => (prevIndex - 1 + features.length) % features.length);
//   };



//   return (
//     <div className="container mx-auto px-6 py-12">
//       <h4 className="text-orange-500 font-semibold">Testimonial</h4>
//       <h2 className="text-2xl md:text-4xl font-bold text-[#1F4278]">
//         To <span className="text-orange-500">increase productivity</span>
//         <span className="text-[#1F4278]"> and cost effectiveness</span>




//       </h2>

//       <button
//         className="absolute left-4 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 z-10"
//         onClick={prevSlide}
//       >
//         <FaArrowLeft className="text-orange-500 text-xl" />
//       </button>

//       <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-6 ml-15  ">



//         <img src={testi}
//           alt="testi"
//           className="w-[80%] h-full rounded-lg" />

//         <img src={testi}
//           alt="testi"
//           className="w-[80%] h-full rounded-lg" />


//         <img src={testi}
//           alt="testi"
//           className="w-[80%] h-full rounded-lg" />




//         <button
//           className="absolute right-4 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 z-10"
//           onClick={nextSlide}
//         >
//           <FaArrowRight className="text-orange-500 text-xl" />
//         </button>

//       </div>


//     </div>
//   );
// };

// export default Testimonial;
// import { useState } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import testi from "../Images/testi.png"; // Replace with your image path

// const testimonials = [
//   {
//     id: 1,
//     image: testi,

//   },
//   {
//     id: 2,
//     image: testi,

//   },
//   {
//     id: 3,
//     image: testi,

//   },
//   {
//     id: 4,
//     image: testi,

//   },
//   {
//     id: 5,
//     image: testi,

//   },
// ];

// const Testimonial = () => {
//   const [index, setIndex] = useState(0);

//   const nextSlide = () => {
//     setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//   };

//   const prevSlide = () => {
//     setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
//   };

//   return (
//     <div className="container mx-auto px-6 py-12 relative">
//       {/* Heading */}
//       <h4 className="text-orange-500 font-semibold">Testimonial</h4>
//       <h2 className="text-2xl md:text-4xl font-bold text-[#1F4278]">
//         To <span className="text-orange-500">increase productivity</span> and{" "}
//         <span className="text-[#1F4278]">cost effectiveness</span>
//       </h2>

//       {/* Slider */}
//       <div className="relative mt-8 flex items-center justify-center">
//         {/* Left Arrow */}
//         <button
//           className="absolute left-4 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 z-10"
//           onClick={prevSlide}
//         >
//           <FaArrowLeft className="text-orange-500 text-xl" />
//         </button>

//         {/* Testimonial Card */}
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-6 ml-15  ">
//           <div className="bg-white p-6 rounded-lg  w-full max-w-md">
//             <img
//               src={testimonials[index].image}
//               alt="testimonial"
//               className="w-[80%] h-full  rounded-full mx-auto mb-4"
//             />

//           </div>
//         </div>

//         {/* Right Arrow */}
//         <button
//           className="absolute right-4 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 z-10"
//           onClick={nextSlide}
//         >
//           <FaArrowRight className="text-orange-500 text-xl" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Testimonial;


// import { useState } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import testi from "../Images/testi.png"; // Replace with your image path

// const testimonials = [
//   { id: 1, image: testi },
//   { id: 2, image: testi },
//   { id: 3, image: testi },
//   { id: 4, image: testi },
//   { id: 5, image: testi },
// ];

// const Testimonial = () => {
//   const [index, setIndex] = useState(0);

//   // Function to move to the next slide
//   const nextSlide = () => {
//     setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//   };

//   // Function to move to the previous slide
//   const prevSlide = () => {
//     setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
//   };

//   return (
//     <div className="container mx-auto px-6 py-12 relative">
//       {/* Heading */}
//       <h4 className="text-orange-500 font-semibold">Testimonial</h4>
//       <h2 className="text-2xl md:text-4xl font-bold text-[#1F4278]">
//         To <span className="text-orange-500">increase productivity</span> and{" "}
//         <span className="text-[#1F4278]">cost effectiveness</span>
//       </h2>

//       {/* Slider */}
//       <div className="relative mt-8">
//         {/* Left Arrow */}
//         <button
//           className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 z-10"
//           onClick={prevSlide}
//         >
//           <FaArrowLeft className="text-orange-500 text-xl" />
//         </button>

//         {/* Image Slider */}
//         <div className="flex overflow-hidden">
//           <div
//             className="flex transition-transform duration-500"
//             style={{ transform: `translateX(-${index * 100}%)` }}
//           >
//             {testimonials.map((testimonial) => (
//               <div
//                 key={testimonial.id}
//                 className="w-full md:w-1/3 px-4 flex-shrink-0"
//               >
//                 <div className="p-6 rounded-lg">
//                   {/* Image */}
//                   <img
//                     src={testimonial.image}
//                     alt={`testimonial-${testimonial.id}`}
//                     className="w-full h-auto rounded-lg mx-auto"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Arrow */}
//         <button
//           className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 z-10"
//           onClick={nextSlide}
//         >
//           <FaArrowRight className="text-orange-500 text-xl" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Testimonial;



// import React, { useState } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import testi from "../Images/testi.png";

// const testimonials = [
//   { id: 1, image: testi },
//   { id: 2, image: testi },
//   { id: 3, image: testi },
//   { id: 4, image: testi },
//   { id: 5, image: testi },
// ];

// const Testimonial = () => {
//   const [index, setIndex] = useState(0);

//   const prevSlide = () => {
//     setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <div className="container mx-auto px-6 py-12 relative">
//       {/* Heading */}
//       <h4 className="text-orange-500 font-semibold">Testimonial</h4>
//       <h2 className="text-2xl md:text-4xl font-bold text-[#1F4278]">
//         To <span className="text-orange-500">increase productivity</span> and {" "}
//         <span className="text-[#1F4278]">cost effectiveness</span>
//       </h2>

//       {/* Slider */}
//       <div className="relative mt-8 w-full  mx-auto">
//         {/* Left Arrow */}
//         <button
//           className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 sm:p-3 md:p-4 rounded-full shadow-md hover:bg-gray-100 z-10"
//           onClick={prevSlide}
//         >
//           <FaArrowLeft className="text-orange-500 text-lg sm:text-xl md:text-2xl" />
//         </button>


//         {/* Image Slider */}
//         <div className=" flex overflow-hidden">
//           <div
//             className="flex transition-transform duration-500"
//             style={{ transform: `translateX(-${index * 100}%)` }}
//           >
//             {testimonials.map((testimonial) => (
//               <div
//                 key={testimonial.id}
//                 className="w-full md:w-1/3  flex-shrink-0 px-4"
//               >
//                 <div className="p-4 rounded-lg">
//                   {/* Image */}
//                   <img
//                     src={testimonial.image}
//                     alt={`testimonial-${testimonial.id}`}
//                     className="w-full h-auto rounded-lg object-cover"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Arrow */}
//         <button
//           className="absolute right-1 sm:right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 sm:p-3 md:p-4  rounded-full shadow-md hover:bg-gray-100 z-10"
//           onClick={nextSlide}
//         >
//           <FaArrowRight className="text-orange-500 text-base sm:text-lg md:text-2xl" />
//         </button>

//       </div>
//     </div>
//   );
// };

// export default Testimonial;

import React from "react";
import Slider from "react-slick";
import review from "../Images/review.svg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    desc: "Pengalaman yang sangat menyenangkan, di tambah pelayananya ramah banget, top banget, rekomend buat yang mau cobain!",
    image: review, // Replace with actual image path
    rating: 4,
  },
  {
    id: 2,
    desc: "Pengalaman yang sangat menyenangkan, di tambah pelayananya ramah banget, top banget, rekomend buat yang mau cobain!",
    image: review, // Replace with actual image path
    rating: 4,
  },
  {
    id: 3,
    desc: "Pengalaman yang sangat menyenangkan, di tambah pelayananya ramah banget, top banget, rekomend buat yang mau cobain!",
    image: review, // Replace with actual image path
    rating: 4,
  },
  {
    id: 4,
    desc: "Pengalaman yang sangat menyenangkan, di tambah pelayananya ramah banget, top banget, rekomend buat yang mau cobain!",
    image: review, // Replace with actual image path
    rating: 4,
  },
  // add more...
];


const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3, // desktop me 3 slides
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
};

const Testimonial = () => {
  return (
    <div className="container mx-auto  px-4  py-12 relative">
      {/* Heading */}
      <h4 className="text-orange-500 text-lg font-semibold mb-2 text-center">Testimonial</h4>
      <h2 className="text-2xl md:text-3xl font-bold  text-[#1F4278] text-center">
        <span className="">Built on {" "}</span><span className="text-orange-500 text-center">Trust Proven {" "}</span>
        <span className="text-[#1F4278] text-center">by Clients</span>
      </h2>

      {/* Slider */}
      <div className="relative mt-8 w-full mx-auto">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-4">
              <div className="p-5 rounded-lg">
                {/* <div
                  className="bg-white text-black px-6 pt-10 pb-6 w-full border border-gray-200 shadow-xl relative transition-all duration-200"
                  style={{
                    borderTopRightRadius: "100px",
                    borderTopLeftRadius: "10px",
                    borderBottomRightRadius: "5px",
                    borderBottomLeftRadius: "100px",
                  }}
                > */}
                {/* Image */}

                <div
                  className="bg-white text-black px-4 md:px-6 pt-8 md:pt-10 pb-6 md:w-[300px]  h-[178px] w-[280px] max-w-md  mx-auto border border-gray-200 shadow-xl relative transition-all duration-200"
                  style={{
                    borderTopRightRadius: "100px",
                    borderTopLeftRadius: "10px",
                    borderBottomRightRadius: "5px",
                    borderBottomLeftRadius: "100px",
                  }}
                >
                  <div className="absolute -top-6 left-6 w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                    <img
                      src={testimonial.image}
                      alt={`testimonial-${testimonial.id}`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Stars */}
                  <div className="flex pl-20 mt-2 space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 ${i < testimonial.rating ? "text-orange-400" : "text-gray-300"
                          }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.042 3.2a1 1 0 00.95.69h3.364c.969 0 1.371 1.24.588 1.81l-2.722 1.975a1 1 0 00-.364 1.118l1.042 3.2c.3.921-.755 1.688-1.538 1.118L10 13.011l-2.722 1.975c-.783.57-1.838-.197-1.538-1.118l1.042-3.2a1 1 0 00-.364-1.118L3.696 8.627c-.783-.57-.38-1.81.588-1.81h3.364a1 1 0 00.95-.69l1.042-3.2z" />
                      </svg>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-700 mt-4 leading-relaxed text-center">
                    “{testimonial.desc}”
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
	