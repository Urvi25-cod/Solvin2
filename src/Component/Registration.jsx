import React from "react";
import Nav from "./Nav";

export default function Registration() {
    return (
        <>
            <Nav bgColor="bg-white" textColor="text-black" />
            {/* <div className="sm:px-6 px-6 lg:px-18 py-4">
             */}
              <div className="container mx-auto px-4 py-8">
                {/* Header Section */}
                <div className="mb-8 flex flex-col justify-start">
                    <p className="text-orange-500 font-semibold text-lg">Vendor Registration Form</p>
                    <h1 className="text-3xl sm:text-4xl font-bold text-[#1F4278]">
                        Let’s Connect <span className="text-orange-500">Became our Vender Solvi Glob</span>
                    </h1>
                </div>

                {/* Form Section */}
                <form className="space-y-8">
                    {/* Personal & Business Details */}
                    <div>
                        <h2 className="text-2xl  text-[#1F4278] mb-4">
                            Business Details
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Full Name */}

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
                                    placeholder="Your Company LTD."

                                    className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            {/* Registered Business Name */}
                            <div>
                                <label
                                    htmlFor="registeredBusinessName"
                                    className="block text-xl font-medium text-gray-700"
                                >
                                    Registered Business Name (If Different)
                                </label>
                                <input
                                    type="text"
                                    id="registeredBusinessName"
                                    placeholder="Legal Business Name"

                                    className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            {/* Company Address */}
                            <div className="md:col-span-2">
                                <label
                                    htmlFor="companyAddress"
                                    className="block text-xl font-medium text-gray-700"
                                >
                                    Company Address
                                </label>
                                <textarea
                                    id="companyAddress"
                                    placeholder="Full Company Address"
                                    rows={3}

                                    className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
                                ></textarea>
                            </div>

                            {/* Country / Region */}
                            <div>
                                <label
                                    htmlFor="countryRegion"
                                    className="block text-xl font-medium text-gray-700"
                                >
                                    Country / Region
                                </label>
                                <input
                                    type="text"
                                    id="countryRegion"
                                    placeholder="United States"

                                    className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            {/* Website / LinkedIn Profile */}
                            <div>
                                <label
                                    htmlFor="websiteProfile"
                                    className="block text-xl font-medium text-gray-700"
                                >
                                    Website / LinkedIn Profile
                                </label>
                                <input
                                    type="url"
                                    id="websiteProfile"
                                    placeholder="www.solviglob.com"

                                    className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            {/* Years in Business */}
                            <div>
                                <label
                                    htmlFor="yearsInBusiness"
                                    className="block text-xl font-medium text-gray-700"
                                >
                                    Years in Business
                                </label>
                                <select
                                    id="preferredJobType"
                                    className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option>0-1  Years</option>
                                    <option>2-5  Years</option>
                                    <option>6-10 Years</option>
                                    <option>10+  Years</option>
                                    {/* Add dynamic options here */}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Business Details */}
                    <div>
                        <h2 className="text-xl font-semibold text-[#1F4278] mb-4">Business Details</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                            {/* Full Name */}
                            <div>
                                <label
                                    htmlFor="fullNameContactPerson"
                                    className="block text-xl font-medium text-gray-700"
                                >
                                    Full Name (Contact Person)
                                </label>
                                <input
                                    type="text"
                                    id="fullNameContactPerson"
                                    placeholder="John Doe"

                                    className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            {/* Designation / Role */}
                            <div>
                                <label
                                    htmlFor="designationRole"
                                    className="block text-xl font-medium text-gray-700"
                                >
                                    Designation / Role
                                </label>
                                <input
                                    type="text"
                                    id="designationRole"
                                    placeholder="Procurement Manager"

                                    className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            {/* Business Email Address */}
                            <div>
                                <label
                                    htmlFor="businessEmailAddress"
                                    className="block text-xl font-medium text-gray-700"
                                >
                                    Business Email Address
                                </label>
                                <input
                                    type="email"
                                    id="businessEmailAddress"
                                    placeholder="solviglob@gmail.com"

                                    className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label
                                    htmlFor="phoneNumber"
                                    className="block text-xl font-medium text-gray-700"
                                >
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    placeholder="1234567890"

                                    className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>
                    </div>



                    <h2 className="text-xl font-semibold text-[#1F4278] mb-4">
                        Business Type & Offerings
                    </h2>

                    {/* Preferred Mode of Contact */}
                    <div className="mb-6">
                        <label className="block text-lg font-medium text-gray-700 mb-2">
                            Business Type (Select Multiple)
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                            {["Manufacturer", "Exporter / Importer", "Other (Specify)", "Wholesaler / Distributor", "Service Provider"].map((mode) => (
                                <label key={mode} className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"

                                        className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                                    />
                                    <span>{mode}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="inquiryDetails"
                            className="block text-xl font-medium text-gray-700"
                        >
                            Products or Services You Offer
                        </label>
                        <textarea
                            id="inquiryDetails"
                            placeholder="Share your details requirements with quantity"
                            rows="5"
                            className="mt-2 block w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
                        ></textarea>

                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="uploadDocuments"
                            className="block text-xl font-medium text-gray-700 mb-2"
                        >
                            Product Catalogue (If Any)
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

                    <h2 className="text-xl font-semibold text-[#1F4278] mb-4">
                        Business Type & Offerings
                    </h2>

                    <div>
                        <label htmlFor="gstTaxIdNumber" className="block text-xl font-medium text-gray-700">
                            GST / Tax ID Number
                        </label>
                        <input
                            type="text"
                            id="gstTaxIdNumber"
                            placeholder="GST / Tax ID Number"

                            className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    {/* Preferred Payment Terms */}
                    <div className="md:col-span-2">
                        <label className="block text-xl font-medium text-gray mb-[5px]">Preferred Payment Terms</label>
                        {["Advance Payment", "Credit Payment", "Part Payment"].map((term) => (
                            <label key={term} className="flex items-center space-x-5 mb-[10px]">
                                <input
                                    type="radio"
                                    name={"preferredPaymentTerms"}

                                    className={"form-radio h-[18px] w-[18px]"}
                                />
                                {term}
                            </label>))}

                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="inquiryDetails"
                            className="block text-xl font-medium text-gray-700"
                        >
                            Existing Clients / Business References
                        </label>
                        <textarea
                            id="inquiryDetails"
                            placeholder="List your major client or business reference"
                            rows="5"
                            className="mt-2 block w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
                        ></textarea>
                        <p className="text-lg text-gray-500 mt-1">
                        Optional, but helps us understand your business better
                        </p>
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="uploadDocuments"
                            className="block text-xl font-medium text-gray-700 mb-2"
                        >
                            Upload Business Registration Documents
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
                    <div>
                        <label htmlFor="gstTaxIdNumber" className="block text-xl font-medium text-gray-700">
                            Preferred Mode of Communication
                        </label>
                        <input
                            type="text"
                            id="gstTaxIdNumber"
                            placeholder="Select Communication mode"

                            className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    {/* Send Inquiry */}
                    <button
                        type="submit"
                        className="lg:w-120 sm:w-auto bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300 transition duration-200 ease-in-out"
                    >
                        Send Inquiry
                    </button>
                </form >
            </div >
        </>
    );
}
