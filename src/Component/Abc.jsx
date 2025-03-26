
// import { useState } from "react"
// import mapimage from "../Images/mapimage.png";
// // import { Button } from "@/components/ui/button"
// // import { Input } from "@/components/ui/input"
// // import { Textarea } from "@/components/ui/textarea"

// export default function Abc() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: ""
//   })

//   const handleChange = e => {
//     const { name, value } = e.target
//     setFormData(prev => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = e => {
//     e.preventDefault()
//     console.log("Form submitted:", formData)
//     // Here you would typically send the data to your backend
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
//         {/* Map Section */}
//         <div className="w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-lg overflow-hidden relative order-2 md:order-1">
//           <img
//             src={mapimage}
//             alt="Location Map"
//             fill
//             className="object-cover"
//             priority
//           />
//         </div>

//         {/* Contact Form Section */}
//         <div className="order-1 md:order-2">
//           <div className="text-orange-500 font-medium mb-2">Contact us</div>
//           <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
//             Get in touch
//           </h1>

//           <p className="text-gray-600 mb-8">
//             Get in touch with us for expert guidance, seamless support, and
//             innovative solutions. Whether you have questions, need assistance,
//             or want to explore new opportunities, we're here to help. Connect
//             with us today and let's collaborate to achieve success together.
//             Your journey starts with a simple conversation!
//           </p>

//           <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <input
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="border rounded-md p-3 w-full"
//             />

//             <input
//               name="email"
//               type="email"
//               placeholder="Email ID"
//               value={formData.email}
//               onChange={handleChange}
//               className="border rounded-md p-3 w-full"
//             />
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <input
//               name="phone"
//               placeholder="Phone"
//               value={formData.phone}
//               onChange={handleChange}
//               className="border rounded-md p-3 w-full"
//             />

//             <input
//               name="subject"
//               placeholder="Subject"
//               value={formData.subject}
//               onChange={handleChange}
//               className="border rounded-md p-3 w-full"
//             />
//             </div>

//             <textarea
//               name="message"
//               placeholder="Message"
//               value={formData.message}
//               onChange={handleChange}
//               className="border rounded-md p-3 w-full min-h-[180px]"
//             />

//             <button
//               type="submit"
//               className="w-full py-6 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }


import React, { useState } from "react";

const Abc = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 8;

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-6">
      {/* Pagination Container */}
      <div className="flex items-center space-x-2">
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`px-4 py-2 text-sm font-medium border rounded-lg ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          Previous
        </button>

        {/* Page Numbers */}
        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          return (
            <button
              key={page}
              onClick={() => handlePageClick(page)}
              className={`px-4 py-2 text-sm font-medium border rounded-lg ${
                currentPage === page
                  ? "bg-orange-500 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          );
        })}

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 text-sm font-medium border rounded-lg ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          Next
        </button>
      </div>

      {/* Current Page Indicator */}
      <p className="mt-4 text-sm text-gray-600">
        Page <span className="font-bold">{currentPage}</span> of{" "}
        <span className="font-bold">{totalPages}</span>
      </p>
    </div>
  );
};

export default Abc;

