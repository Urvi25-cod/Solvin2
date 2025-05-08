import React from "react";
import Nav from "./Nav";

export default function Career() {
    return (
        <>
            <Nav bgColor="bg-white" textColor="text-black" />
            {/* <div className="sm:px-6 px-6 lg:px-18 py-4"> */}
            <div className="container mx-auto px-8 py-8">
                {/* Header Section */}
                <div className="mb-8 flex flex-col justify-start">
                    <p className="text-orange-500 font-semibold text-lg">Career Form</p>
                    <h1 className="text-3xl sm:text-4xl font-bold text-[#1F4278]">
                        Let’s Connect <span className="text-orange-500">Join Our Team Solvi Glob</span>
                    </h1>
                </div>

                {/* Form Section */}
                <form className="space-y-8">
                    {/* Personal & Business Details */}
                    <div>
                        <h2 className="text-2xl  text-[#1F4278] mb-4">
                            Personal & Contact Details
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

                            {/* Email Address */}
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
                                    placeholder="john.doe@example.com"
                                    className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label
                                    htmlFor="phoneNumber"
                                    className="block text-xl font-medium text-gray-700"
                                >
                                    Phone Number (With Country Code)
                                </label>
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    placeholder="+91 83200 83200"
                                    className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            {/* LinkedIn Profile / Portfolio URL */}
                            <div>
                                <label
                                    htmlFor="linkedinProfile"
                                    className="block text-xl font-medium text-gray-700"
                                >
                                    LinkedIn Profile / Portfolio URL
                                </label>
                                <input
                                    type="url"
                                    id="linkedinProfile"
                                    placeholder="Enter URL"
                                    className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            {/* Current Location */}
                            <div className="md:col-span-2">
                                <label
                                    htmlFor="location"
                                    className="block text-xl font-medium text-gray-700"
                                >
                                    Current Location (City & Country)
                                </label>
                                <input
                                    type="text"
                                    id="location"
                                    placeholder="United States"
                                    // className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
                                    className="block w-full sm:w-[75%] md:w-[50%] border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
                                />
                            </div>

                            {/* Job Preferences */}
                            {/* <h2 className="text-xl font-semibold text-[#1F4278] md:col-span-2">
                                Job Preferences
                            </h2> */}

                            {/* Position Applying For */}
                            {/* <div>
                                <label
                                    htmlFor="positionApplyingFor"
                                    className="block text-xl font-medium text-gray-700"
                                >
                                    Position Applying For
                                </label>
                                <select
                                    id="positionApplyingFor"
                                    className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option>Select Position</option>
                                    {/* Add dynamic options here */}
                            {/* </select>
                            </div> */}

                            {/* Preferred Job Type */}
                            {/* <div>
                                <label
                                    htmlFor="preferredJobType"
                                    className="block text-xl font-medium text-gray-700"
                                >
                                    Preferred Job Type
                                </label> */}
                            {/* <select
                                    id="preferredJobType"
                                    className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option>Select Job Type</option>
                                    {/* Add dynamic options here */}
                            {/* </select> */}
                            {/* </div> */}

                            {/* Notice Period */}
                            {/* <div className="md:col-span-2">
                                <label
                                    htmlFor="noticePeriod"
                                    className="block text-xl font-medium text-gray-700"
                                >
                                    Notice Period (If Applicable)
                                </label>
                                <select
                                    id="noticePeriod"
                                    className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option>Select Notice Period</option>
                                    {/* Add dynamic options here */}
                            {/* </select>
                            </div>  */}

                            {/* Job Preferences Section */}
                            <div>
                                <h2 className="text-2xl text-[#1F4278] mb-4">Job Preferences</h2>
                                <div className="space-y-6">
                                    {/* Position Applying For */}
                                    <div>
                                        <label className="block text-xl font-medium text-gray-700">
                                            Position Applying For <span className="text-red-500">*</span>
                                        </label>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                                            {["Sales", "Marketing", "Operations", "IT / Software Development", "HR / Administration", "Finance / Accounts", "Logistics / Supply Chain", "Other (Specify)"].map((position) => (
                                                <label key={position} className="flex items-center space-x-2">
                                                    <input
                                                        type="radio"
                                                        name="positionApplyingFor"
                                                        value={position}
                                                        className="form-radio h-5 w-5 text-blue-600"
                                                    />
                                                    <span>{position}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Preferred Job Type */}
                                    <div>
                                        <label className="block text-xl font-medium text-gray-700">
                                            Preferred Job Type <span className="text-red-500">*</span>
                                        </label>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                                            {["Full-Time", "Part-Time", "Internship", "Freelance / Contract"].map((jobType) => (
                                                <label key={jobType} className="flex items-center space-x-2">
                                                    <input
                                                        type="radio"
                                                        name="preferredJobType"
                                                        value={jobType}
                                                        className="form-radio h-5 w-5 text-blue-600"
                                                    />
                                                    <span>{jobType}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Notice Period */}
                                    <div>
                                        <label className="block text-xl font-medium text-gray-700">
                                            Notice Period (If Applicable) <span className="text-red-500">*</span>
                                        </label>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                                            {["Immediately Available", "15 Days", "1 Month", "2 Months", "Other (Specify)"].map((noticePeriod) => (
                                                <label key={noticePeriod} className="flex items-center space-x-2">
                                                    <input
                                                        type="radio"
                                                        name="noticePeriod"
                                                        value={noticePeriod}
                                                        className="form-radio h-5 w-5 text-blue-600"
                                                    />
                                                    <span>{noticePeriod}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>


                        {/* Job Preferences Section */}





                        <div>
                            <h2 className="text-2xl text-[#1F4278]  mt-5">Education & Experience</h2>
                            <br></br>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Highest Educational Qualification */}
                                <div>
                                    <label
                                        htmlFor="education"
                                        className="block text-xl font-medium text-gray-700"
                                    >
                                        Highest Educational Qualification
                                    </label>
                                    <select
                                        id="education"
                                        className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
                                    >
                                        <option>Select Education Level</option>
                                        <option>High School</option>
                                        <option>Bachelor's Degree</option>
                                        <option>Master's Degree</option>
                                        <option>PhD</option>
                                    </select>
                                </div>

                                {/* Total Work Experience */}
                                <div>
                                    <label
                                        htmlFor="workExperience"
                                        className="block text-xl font-medium text-gray-700"
                                    >
                                        Total Work Experience
                                    </label>
                                    <select
                                        id="workExperience"
                                        className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
                                    >
                                        <option>Select experience level</option>
                                        <option>0-1 Year</option>
                                        <option>1-3 Years</option>
                                        <option>3-5 Years</option>
                                        <option>5+ Years</option>
                                    </select>
                                </div>

                                {/* Key Skills & Certifications */}
                                <div className="md:col-span-2">
                                    <label
                                        htmlFor="skills"
                                        className="block text-xl font-medium text-gray-700"
                                    >
                                        Key Skills & Certifications
                                    </label>
                                    <textarea
                                        id="skills"
                                        placeholder="+91 83200 83200"
                                        rows="3"
                                        className="mt-2 block w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
                                    ></textarea>
                                </div>

                                {/* Upload Resume (CV) */}
                                <div className="md:col-span-2 mb-6">
                                    <label
                                        htmlFor="resume"
                                        className="block text-xl font-medium text-gray-700"
                                    >
                                        Upload Resume (CV)
                                    </label>
                                    <input
                                        type="file"
                                        id="resume"
                                        className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                    <p className="text-sm text-gray-500 mt-1">
                                        Accepted formats: PDF, DOC, JPG, PNG (Max 10MB)
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Additional Information */}
                        <div>
                            <h2 className="text-xl text-[#1F4278] mb-4">Additional Information</h2>

                            {/* Why Do You Want to Join Us? */}
                            <div className="mb-6">
                                <label
                                    htmlFor="whyJoinUs"
                                    className="block text-xl font-medium text-gray-700"
                                >
                                    Why Do You Want to Join Us?
                                </label>
                                <textarea
                                    id="whyJoinUs"
                                    placeholder="Tell us why you want to join our Team"
                                    rows="5"
                                    className="mt-2 block w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
                                ></textarea>
                                <p className="text-sm text-gray-500 mt-1">Minimum 100 words required</p>
                            </div>

                            <div className="mb-6">
                                <label
                                    htmlFor="whyJoinUs"
                                    className="block text-xl font-medium text-gray-700"
                                >
                                    References (If Any)
                                </label>
                                <textarea
                                    id="whyJoinUs"
                                    placeholder="Tell us why you want to join our Team"
                                    rows="5"
                                    className="mt-2 block w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
                                ></textarea>

                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="lg:w-120 sm:w-auto bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300 transition duration-200 ease-in-out"
                            >
                                Send Inquiry
                            </button>
                        </div>
                    </div>
                </form >
            </div >
        </>
    );
}

