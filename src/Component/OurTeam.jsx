// import React from 'react';
// import background from "../Images/background.png";
// // Add your calendar image here
// import gril from "../Images/gril.png";

// import Nav from "./Nav";




// const OurTeam = () => {


//     return (
//         <>
//             <Nav bgColor="bg-white" textColor="text-black" />

//             {/* Hero Section */}
//             <div
//                 className="relative h-[40vh] w-full bg-cover bg-center flex items-center"
//                 style={{ backgroundImage: `url(${background})` }}
//             >

//                 {/* Content Container */}
//                 <div className="relative  h-full flex flex-col justify-center px-6 md:px-12 lg:px-20">
//                     {/* Breadcrumb Navigation */}
//                     {/* <div className="absolute inset-0  bg-opacity-50"></div> */}

//                     <div className="mb-2 text-white text-sm md:text-base">
//                         <a href="/" className="hover:text-orange-400 transition-colors">
//                             Home
//                         </a>
//                         <span className="mx-2">/</span>
//                         <a
//                             href="/About"
//                             className="hover:text-orange-400 transition-colors"
//                         >
//                             About
//                         </a>
//                         <span className="mx-2">/</span>
//                         <a
//                             href="/OurTeam"
//                             className="hover:text-orange-400 transition-colors"
//                         >
//                             OurTeam
//                         </a>
//                     </div>

//                     {/* Page Title */}
//                     <h1 className="text-orange-500 text-3xl sm:text-4xl md:text-5xl font-bold">
//                         OurTeam
//                     </h1>
//                 </div>
//             </div>

//             <div className="px-4 md:px-6 lg:px-12 xl:px-20 py-10">
//                 {/* Card */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
//                     {/* Card 1 */}
//                     <div className="bg-white overflow-hidden">
//                         <img
//                             src={gril}
//                             alt="Profile"
//                             className="w-fit h-auto object-cover"
//                         />
//                         <div className="p-4">
//                             <h2 className="text-lg font-bold text-gray-800">Brijeshkumar Kakdiya</h2>
//                             <p className="text-gray-600">Co-Founder & CEO</p>
//                             <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
//                                 Email Now
//                             </button>
//                         </div>
//                     </div>

//                     {/* Card 2 */}
//                     <div className="bg-white shadow-md rounded-lg overflow-hidden">
//                         <img
//                             src={gril}
//                             alt="Profile"
//                             className="w-fit h-auto  object-cover"
//                         />
//                         <div className="p-4">
//                             <h2 className="text-lg font-bold text-gray-800">Brijeshkumar Kakdiya</h2>
//                             <p className="text-gray-600">Co-Founder & CEO</p>
//                             <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
//                                 Email Now
//                             </button>
//                         </div>
//                     </div>

//                     {/* Card 3 */}
//                     <div className="bg-white shadow-md rounded-lg overflow-hidden">
//                         <img
//                             src={gril}
//                             alt="Profile"
//                             className="w-fit h-auto  object-cover"
//                         />
//                         <div className="p-4">
//                             <h2 className="text-lg font-bold text-gray-800">Brijeshkumar Kakdiya</h2>
//                             <p className="text-gray-600">Co-Founder & CEO</p>
//                             <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
//                                 Email Now
//                             </button>
//                         </div>
//                     </div>

//                     {/* Card 4 */}
//                     <div className="bg-white shadow-md rounded-lg overflow-hidden">
//                         <img
//                             src={gril}
//                             alt="Profile"
//                             className="w-fit h-auto  object-cover"
//                         />
//                         <div className="p-4">
//                             <h2 className="text-lg font-bold text-gray-800">Brijeshkumar Kakdiya</h2>
//                             <p className="text-gray-600">Co-Founder & CEO</p>
//                             <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
//                                 Email Now
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//             </div>

//         </>
//     );
// }

// export default OurTeam;


// import React from 'react';
// import background from "../Images/background.png";
// import gril from "../Images/gril.png";
// import Nav from "./Nav";

// const teamMembers = [
//   {
//     name: "Brijeshkumar Kakdiya",
//     position: "Co-Founder & CEO",
//     image: gril,
//   },
//   {
//     name: "Brijeshkumar Kakdiya",
//     position: "Co-Founder & CEO",
//     image: gril,
//   },
//   {
//     name: "Brijeshkumar Kakdiya",
//     position: "Co-Founder & CEO",
//     image: gril,
//   },
//   {
//     name: "Brijeshkumar Kakdiya",
//     position: "Co-Founder & CEO",
//     image: gril,
//   },
// ];

// const OurTeam = () => {
//   return (
//     <>
//       <Nav bgColor="bg-white" textColor="text-black" />

//       {/* Hero Section */}
//       <div
//         className="relative h-[40vh] w-full bg-cover bg-center flex items-center"
//         style={{ backgroundImage: `url(${background})` }}
//       >
//         {/* Content Container */}
//         <div className="relative  h-full flex flex-col justify-center px-6 md:px-12 lg:px-20">
//           {/* Breadcrumb Navigation */}
//           <div className="mb-2 text-white text-sm md:text-base">
//             <a href="/" className="hover:text-orange-400 transition-colors">
//               Home
//             </a>
//             <span className="mx-2">/</span>
//             <a
//               href="/About"
//               className="hover:text-orange-400 transition-colors"
//             >
//               About
//             </a>
//             <span className="mx-2">/</span>
//             <a
//               href="/OurTeam"
//               className="hover:text-orange-400 transition-colors"
//             >
//               OurTeam
//             </a>
//           </div>

//           {/* Page Title */}
//           <h1 className="text-orange-500 text-3xl sm:text-4xl md:text-5xl font-bold">
//             OurTeam
//           </h1>
//         </div>
//       </div>

//       <div className="px-4 md:px-6 lg:px-12 xl:px-20 py-10">
//         {/* Card */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
//           {teamMembers.map((member, index) => (
//             <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
//               <img
//                 src={member.image}
//                 alt="Profile"
//                 className="w-fit h-auto object-cover"
//               />
//               <div className="p-4">
//                 <h2 className="text-lg font-bold text-gray-800">{member.name}</h2>
//                 <p className="text-gray-600">{member.position}</p>
//                 <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
//                   Email Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default OurTeam;



import React from 'react';
import background from "../Images/background.png";
import gril from "../Images/gril.png";
import email from "../Images/email.png"; // Import the email icon image
import linkded from "../Images/linkded.png"
import Nav from "./Nav";

const teamMembers = [
    {
        name: "Brijeshkumar Kakdiya",
        position: "Co-Founder & CEO",
        image: gril,
    },
    {
        name: "Brijeshkumar Kakdiya",
        position: "Co-Founder & CEO",
        image: gril,
    },
    {
        name: "Brijeshkumar Kakdiya",
        position: "Co-Founder & CEO",
        image: gril,
    },
    {
        name: "Brijeshkumar Kakdiya",
        position: "Co-Founder & CEO",
        image: gril,
    },
];

const OurTeam = () => {
    return (
        <>
            <Nav bgColor="bg-white" textColor="text-black" />

            {/* Hero Section */}
            <div
                className="relative h-[40vh] w-full bg-cover bg-center flex items-center"
                style={{ backgroundImage: `url(${background})` }}
            >
                {/* Content Container */}
                <div className="relative h-full flex flex-col justify-center px-6 md:px-12 lg:px-20">
                    {/* Breadcrumb Navigation */}
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
                            href="/OurTeam"
                            className="hover:text-orange-400 transition-colors"
                        >
                            OurTeam
                        </a>
                    </div>

                    {/* Page Title */}
                    <h1 className="text-orange-500 text-3xl sm:text-4xl md:text-5xl font-bold">
                        OurTeam
                    </h1>
                </div>
            </div>

            <div className="px-4 md:px-6 lg:px-12 xl:px-20 py-10">
                {/* Card */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                            <img
                                src={member.image}
                                alt="Profile"
                                className="w-fit h-auto object-cover"
                            />
                            <div className="p-4">
                                <div className='flex justify-between'>
                                <h2 className="text-lg font-semibold text-blue-900">{member.name}</h2>
                                <img src={linkded} alt="Email Icon" className="w-[20px] h-[20px]" />
                                </div>
                                <p className="text-blue-900">{member.position}</p>

                                {/* Email Icon and Link */}
                                <div className="mt-4 flex items-center gap-2">
                                    <img src={email} alt="Email Icon" className="w-[30px] h-[30px]" />
                                    <a
                                        href="mailto:example@example.com" // Replace with the actual email address
                                        className="text-blue-900 font-semibold hover:underline"
                                    >
                                        Email Now
                                    </a>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default OurTeam;
