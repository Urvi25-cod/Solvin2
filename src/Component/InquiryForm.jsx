import React from "react";
import Nav from "./Nav";

export default function InquiryForm() {
  return (
    <>
      <Nav bgColor="bg-white" textColor="text-black" />
      {/* <div className="sm:px-6 px-6 lg:px-18 py-4"> */}
      <div className="container mx-auto px-8 py-8">
        {/* Header Section */}
        <div className="mb-8 flex flex-col justify-start">
          <p className="text-orange-500 font-semibold text-lg">Inquiry Form</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1F4278]">
            Let’s Connect <span className="text-orange-500">Solvi Glob</span>
          </h1>
        </div>

        {/* Form Section */}
        <form className="space-y-8">
          {/* Personal & Business Details */}
          <div>
            <h2 className="text-2xl  text-[#1F4278] mb-4">
              Personal & Business Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xl font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="John Doe"
                  className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xl font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="johndoe@gmail.com"
                  className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-xl font-medium text-gray-700"
                >
                  Phone Number (with Country Code)
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  placeholder="+91 83000 8300"
                  className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="companyName"
                  className="block text-xl font-medium text-gray-700"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  placeholder="Company name"
                  className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="website"
                  className="block text-xl font-medium text-gray-700"
                >
                  Company Website / LinkedIn Profile
                </label>
                <input
                  type="url"
                  id="website"
                  placeholder="www.example.com"
                  className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="location"
                  className="block text-xl font-medium text-gray-700"
                >
                  Country / Location
                </label>
                <input
                  type="text"
                  id="location"
                  placeholder="Country / Location"
                  className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Inquiry Details */}
            <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-4">
              Inquiry Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
              {["Product Inquiry", "Custom Order", "Bulk Order", "Partnership / Collaboration", "Other (Specify)"].map(
                (type) => (
                  <label key={type} className="flex items-center  text-xl space-x-2">
                    <input
                      type="checkbox"
                      value={type}
                      className="form-checkbox  h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                    />
                    <span>{type}</span>
                  </label>
                )
              )}
            </div>
            <br></br>
            <div className="mb-6">
              <label
                htmlFor="inquiryDetails"
                className="block text-xl font-medium text-gray-700"
              >
                Describe Your Inquiry in Detail
              </label>
              <textarea
                id="inquiryDetails"
                placeholder="Share your details requirements with quantity"
                rows="5"
                className="mt-2 block w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
              <p className="text-sm text-gray-500 mt-1">
                Please provide as much detail as possible about your requirements.
              </p>
            </div>

            {/* Additional Information */}
            <h2 className="text-xl font-semibold text-[#1F4278] mb-4">
              Additional Information
            </h2>

            {/* Preferred Mode of Contact */}
            <div className="mb-6">
              <label className="block text-xl font-medium text-gray-700 mb-2">
                Preferred Mode of Contact (Select two)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                {["Email", "WhatsApp", "Phone", "Other (Specify)"].map((mode) => (
                  <label key={mode} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      value={mode}
                      className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                    />
                    <span>{mode}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Upload Supporting Documents */}
            <div className="mb-6">
              <label
                htmlFor="uploadDocuments"
                className="block text-xl font-medium text-gray-700 mb-2"
              >
                Upload Supporting Documents (Optional)
              </label>
              <input
                type="file"
                id="uploadDocuments"
                accept=".pdf,.doc,.jpg,.png"
                className="block w-full sm:w-[75%] md:w-[50%] border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
              />

              <p className="text-lg text-gray-500 mt-1">
                Accepted formats: PDF, DOC, JPG, PNG (Max 10MB)
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="lg:w-120 sm:w-auto bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300 transition duration-200 ease-in-out"
            >
              Send Inquiry
            </button>


          </div>
        </form>
      </div>
    </>
  );
}


