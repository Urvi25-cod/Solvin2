// import React from "react";
// import background from "../Images/background.png"; // Replace with your background image path


// export default function Blog() {
//     return (
//         <>
//             <div
//                 className="relative h-[50vh] w-full bg-cover bg-center flex items-center"
//                 style={{ backgroundImage: `url(${background})` }}
//             >
//                 {/* Overlay */}
//                 <div className="absolute inset-0  bg-opacity-50"></div>

//                 {/* Content */}
//                 <div className="relative z-10 container mx-auto px-4">
//                     {/* Breadcrumb */}
//                     <p className="text-sm md:text-base text-white mb-2">
//                         Home / Services
//                     </p>

//                     {/* Title */}
//                     <h1 className="text-3xl md:text-5xl font-bold text-orange-500">
//                         Services
//                     </h1>
//                 </div>
//             </div>


//         </>
//     );
// }


// import React from 'react';
// import background from "../Images/background.png";
// import sky from "../Images/sky.png";
// import Nav from "./Nav";

// const blogPosts = [
//   {
//     image: sky, // Replace with your actual image URL
//     title: 'SolviGlobe Ltd',
//     date: 'December 20, 2024',
//     description: 'Founded in 2022 and based in India, is a supplier of raw materials.',
//   },
//   {
//     image: sky,
//     title: 'SolviGlobe Ltd',
//     date: 'December 20, 2024',
//     description: 'Founded in 2022 and based in India, is a supplier of raw materials.',
//   },
//   {
//     image: sky,
//     title: 'SolviGlobe Ltd',
//     date: 'December 20, 2024',
//     description: 'Founded in 2022 and based in India, is a supplier of raw materials.',
//   },
//   {
//     image: sky,
//     title: 'SolviGlobe Ltd',
//     date: 'December 20, 2024',
//     description: 'Founded in 2022 and based in India, is a supplier of raw materials.',
//   },
//   {
//     image: sky,
//     title: 'SolviGlobe Ltd',
//     date: 'December 20, 2024',
//     description: 'Founded in 2022 and based in India, is a supplier of raw materials.',
//   },
//   {
//     image: sky,
//     title: 'SolviGlobe Ltd',
//     date: 'December 20, 2024',
//     description: 'Founded in 2022 and based in India, is a supplier of raw materials.',
//   },
// ];

// const Blog = () => {
//   return (
//     <>
//       <Nav bgColor="bg-white" textColor="text-black" />


//  <div
//         className="relative h-[40vh] w-full bg-cover bg-center flex items-center"
//         style={{ backgroundImage: `url(${background})` }}
//       >

//       {/* Content Container */}
//       <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-20">
//         {/* Breadcrumb Navigation */}
//         {/* <div className="absolute inset-0  bg-opacity-50"></div> */}

//         <div className="mb-2 text-white text-sm md:text-base">
//           <a href="/" className="hover:text-orange-400 transition-colors">
//             Home
//           </a>
//           <span className="mx-2">/</span>
//           <a
//             href="/product"
//             className="hover:text-orange-400 transition-colors"
//           >
//             Product
//           </a>
//         </div>

//         {/* Page Title */}
//         <h1 className="text-orange-500 text-3xl sm:text-4xl md:text-5xl font-bold">
//           Product
//         </h1>
//       </div>
//     </div>


//       {/* Blog Cards */}
//       <div className="px-20 py-10">
//         <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//           {blogPosts.map((post, index) => (
//             <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
//               <img src={post.image} alt={post.title} className="w-full h-80 object-cover" />
//               <div className="p-4">
//                 <p className="text-sm text-gray-500 flex items-center">
//                   <span className="material-icons mr-2">calendar_today</span>
//                   {post.date}
//                 </p>
//                 <h3 className="text-lg font-semibold mt-2">{post.title}</h3>
//                 <p className="text-gray-700 mt-2">{post.description}</p>
//                 <a href="#" className="text-blue-500 text-sm mt-2 inline-block">View Post</a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Blog;



// import React from 'react';
// import background from "../Images/background.png";
// import sky from "../Images/sky.png";
// import Nav from "./Nav";

// const blogPosts = [
//   {
//     image: sky, // Replace with your actual image URL
//     title: 'SolviGlobe Ltd',
//     date: 'December 20, 2024',
//     description: 'Founded in 2022 and based in India, is a supplier of raw materials.',
//   },
//   {
//     image: sky,
//     title: 'SolviGlobe Ltd',
//     date: 'December 20, 2024',
//     description: 'Founded in 2022 and based in India, is a supplier of raw materials.',
//   },
//   {
//     image: sky,
//     title: 'SolviGlobe Ltd',
//     date: 'December 20, 2024',
//     description: 'Founded in 2022 and based in India, is a supplier of raw materials.',
//   },
//   {
//     image: sky,
//     title: 'SolviGlobe Ltd',
//     date: 'December 20, 2024',
//     description: 'Founded in 2022 and based in India, is a supplier of raw materials.',
//   },
//   {
//     image: sky,
//     title: 'SolviGlobe Ltd',
//     date: 'December 20, 2024',
//     description: 'Founded in 2022 and based in India, is a supplier of raw materials.',
//   },
//   {
//     image: sky,
//     title: 'SolviGlobe Ltd',
//     date: 'December 20, 2024',
//     description: 'Founded in 2022 and based in India, is a supplier of raw materials.',
//   },
// ];

// const Blog = () => {
//   return (
//     <>
//       <Nav bgColor="bg-white" textColor="text-black" />

//       {/* Hero Section */}
//       <div
//         className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] w-full bg-cover bg-center flex items-center"
//         style={{ backgroundImage: `url(${background})` }}
//       >
//         {/* Content Container */}
//         <div className="relative z-10 h-full flex flex-col justify-center px-4 md:px-6 lg:px-12 xl:px-20">
//           {/* Breadcrumb Navigation */}
//           <div className="mb-2 text-white text-sm md:text-base">
//             <a href="/" className="hover:text-orange-400 transition-colors">
//               Home
//             </a>
//             <span className="mx-2">/</span>
//             <a
//               href="/product"
//               className="hover:text-orange-400 transition-colors"
//             >
//               Product
//             </a>
//           </div>

//           {/* Page Title */}
//           <h1 className="text-orange-500 text-3xl sm:text-4xl md:text-5xl font-bold">
//             Product
//           </h1>
//         </div>
//       </div>

//       {/* Blog Cards */}
//       <div className="px-4 md:px-6 lg:px-12 xl:px-20 py-10">
//         <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//           {blogPosts.map((post, index) => (
//             <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
//               <img src={post.image} alt={post.title} className="w-full h-80 object-cover" />
//               <div className="p-4">
//                 <p className="text-sm text-gray-500 flex items-center">
//                   <span className="material-icons mr-2">calendar_today</span>
//                   {post.date}
//                 </p>
//                 <h3 className="text-lg font-semibold mt-2">{post.title}</h3>
//                 <p className="text-gray-700 mt-2">{post.description}</p>
//                 <a href="#" className="text-blue-500 text-sm mt-2 inline-block">View Post</a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Blog;

import React from 'react';
import background from "../Images/background.png";
import sky from "../Images/sky.png";
import sky2 from "../Images/sky2.png";
import sky3 from "../Images/sky3.png";
import sky4 from "../Images/sky4.png";
import sky5 from "../Images/sky5.png";

import calendar from "../Images/calendar.png"; // Add your calendar image here
import Nav from "./Nav";
import {  useNavigate } from 'react-router-dom';


const blogPosts = [
  {
    image: sky,
    title: 'SolviGlobe Ltd',
    date: 'December 20, 2024',
    description: 'Founded in 2022 and based in India, is a supplier of raw materials.',
    filename: '/Blog1'
  },
  {
    image: sky2,
    title: 'SolviGlobe Ltd',
    date: 'December 20, 2024',
    description: 'Founded in 2022 and based in India, is a supplier of raw materials.',
    filename: '/Blog2'
  },
  {
    image: sky3,
    title: 'SolviGlobe Ltd',
    date: 'December 20, 2024',
    description: 'Founded in 2022 and based in India, is a supplier of raw materials.',
    filename: '/Blog3'
  },
  {
    image: sky4,
    title: 'SolviGlobe Ltd',
    date: 'December 20, 2024',
    description: 'Founded in 2022 and based in India, is a supplier of raw materials.',
    filename: '/Blog4'
  },
  {
    image: sky5,
    title: 'SolviGlobe Ltd',
    date: 'December 20, 2024',
    description: 'Founded in 2022 and based in India, is a supplier of raw materials.',
    filename: '/Blog5'
  },
  {
    image: sky,
    title: 'SolviGlobe Ltd',
    date: 'December 20, 2024',
    description: 'Founded in 2022 and based in India, is a supplier of raw materials.',
    filename: '/Blog6'
  },
];

const Blog = () => {

  const navigate = useNavigate();

  return (
    <>
      <Nav bgColor="bg-white" textColor="text-black" />

      {/* Hero Section */}
      <div
        className="relative h-[40vh] w-full bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${background})` }}
      >

        {/* Content Container */}
        {/* <div className="relative  h-full flex flex-col justify-center px-6 md:px-12 lg:px-20"> */}
        <div className="relative  h-full flex flex-col justify-center container mx-auto px-16 py-8"> 
          {/* Breadcrumb Navigation */}
          {/* <div className="absolute inset-0  bg-opacity-50"></div> */}

          <div className="mb-2 text-white text-sm md:text-base">
            <a href="/" className="hover:text-orange-400 transition-colors">
              Home
            </a>
            <span className="mx-2">/</span>
            <a
              href="/Blog"
              className="hover:text-orange-400 transition-colors"
            >
              Blog
            </a>
          </div>

          {/* Page Title */}
          <h1 className="text-orange-500 text-3xl sm:text-4xl md:text-5xl font-bold">
          Blog
          </h1>
        </div>
      </div>

      {/* Blog Cards */}
      {/* <div className="px-4 md:px-6 lg:px-12 xl:px-20 py-10"> */}
      <div className="container mx-auto px-12 py-8"> 
  <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
    {blogPosts.map((post, index) => (
      <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
        {/* Post Image */}
    
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-auto object-cover md:h-80 lg:h-96"
            onClick={() => navigate(post.filename)}
          />
      

        {/* Post Content */}
        <div className="p-3 sm:p-2">
          {/* Calendar Icon and Date */}
          <p className="text-xs sm:text-xs md:text-sm text-[#1F4278] flex items-center">
            <img src={calendar} alt="Calendar" className="w-4 h-4 mr-2" />
            {post.date}
          </p>

          {/* Title */}
          <h3 className="text-sm font-semibold mt-1 sm:text-xs md:text-sm">
            {post.title}
          </h3>

          {/* Description */}
          <p className="text-gray-700 mt-1 text-xs sm:text-xs md:text-lg line-clamp-4">
            {post.description}
          </p>

          {/* View Post Link */}
          <a href="#" className="text-blue-500 text-xs mt-1 inline-block">
            View Post
          </a>
        </div>
      </div>
    ))}
  </div>
</div>

    </>
  );
};

export default Blog;
