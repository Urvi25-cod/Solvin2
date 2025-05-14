// import React from "react";
// import Nav from "./Nav";

// export default function Career() {
//     return (
//         <>
//             <Nav bgColor="bg-white" textColor="text-black" />
//             {/* <div className="sm:px-6 px-6 lg:px-18 py-4"> */}
//             <div className="container mx-auto px-8 py-8">
//                 {/* Header Section */}
//                 <div className="mb-8 flex flex-col justify-start">
//                     <p className="text-orange-500 font-semibold text-lg">Career Form</p>
//                     <h1 className="text-3xl sm:text-4xl font-bold text-[#1F4278]">
//                         Let’s Connect <span className="text-orange-500">Join Our Team Solvi Glob</span>
//                     </h1>
//                 </div>

//                 {/* Form Section */}
//                 <form className="space-y-8">
//                     {/* Personal & Business Details */}
//                     <div>
//                         <h2 className="text-2xl  text-[#1F4278] mb-4">
//                             Personal & Contact Details
//                         </h2>



//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                             {/* Full Name */}
//                             <div>
//                                 <label
//                                     htmlFor="fullName"
//                                     className="block text-xl font-medium text-gray-700"
//                                 >
//                                     Full Name
//                                 </label>
//                                 <input
//                                     type="text"
//                                     id="fullName"
//                                     placeholder="John Doe"
//                                     className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
//                                 />
//                             </div>

//                             {/* Email Address */}
//                             <div>
//                                 <label
//                                     htmlFor="email"
//                                     className="block text-xl font-medium text-gray-700"
//                                 >
//                                     Email Address
//                                 </label>
//                                 <input
//                                     type="email"
//                                     id="email"
//                                     placeholder="john.doe@example.com"
//                                     className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
//                                 />
//                             </div>

//                             {/* Phone Number */}
//                             <div>
//                                 <label
//                                     htmlFor="phoneNumber"
//                                     className="block text-xl font-medium text-gray-700"
//                                 >
//                                     Phone Number (With Country Code)
//                                 </label>
//                                 <input
//                                     type="tel"
//                                     id="phoneNumber"
//                                     placeholder="+91 83200 83200"
//                                     className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
//                                 />
//                             </div>

//                             {/* LinkedIn Profile / Portfolio URL */}
//                             <div>
//                                 <label
//                                     htmlFor="linkedinProfile"
//                                     className="block text-xl font-medium text-gray-700"
//                                 >
//                                     LinkedIn Profile / Portfolio URL
//                                 </label>
//                                 <input
//                                     type="url"
//                                     id="linkedinProfile"
//                                     placeholder="Enter URL"
//                                     className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
//                                 />
//                             </div>

//                             {/* Current Location */}
//                             <div className="md:col-span-2">
//                                 <label
//                                     htmlFor="location"
//                                     className="block text-xl font-medium text-gray-700"
//                                 >
//                                     Current Location (City & Country)
//                                 </label>
//                                 <input
//                                     type="text"
//                                     id="location"
//                                     placeholder="United States"
//                                     // className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
//                                     className="block w-full sm:w-[75%] md:w-[50%] border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
//                                 />
//                             </div>

//                             {/* Job Preferences */}
//                             {/* <h2 className="text-xl font-semibold text-[#1F4278] md:col-span-2">
//                                 Job Preferences
//                             </h2> */}

//                             {/* Position Applying For */}
//                             {/* <div>
//                                 <label
//                                     htmlFor="positionApplyingFor"
//                                     className="block text-xl font-medium text-gray-700"
//                                 >
//                                     Position Applying For
//                                 </label>
//                                 <select
//                                     id="positionApplyingFor"
//                                     className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
//                                 >
//                                     <option>Select Position</option>
//                                     {/* Add dynamic options here */}
//                             {/* </select>
//                             </div> */}

//                             {/* Preferred Job Type */}
//                             {/* <div>
//                                 <label
//                                     htmlFor="preferredJobType"
//                                     className="block text-xl font-medium text-gray-700"
//                                 >
//                                     Preferred Job Type
//                                 </label> */}
//                             {/* <select
//                                     id="preferredJobType"
//                                     className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
//                                 >
//                                     <option>Select Job Type</option>
//                                     {/* Add dynamic options here */}
//                             {/* </select> */}
//                             {/* </div> */}

//                             {/* Notice Period */}
//                             {/* <div className="md:col-span-2">
//                                 <label
//                                     htmlFor="noticePeriod"
//                                     className="block text-xl font-medium text-gray-700"
//                                 >
//                                     Notice Period (If Applicable)
//                                 </label>
//                                 <select
//                                     id="noticePeriod"
//                                     className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
//                                 >
//                                     <option>Select Notice Period</option>
//                                     {/* Add dynamic options here */}
//                             {/* </select>
//                             </div>  */}

//                             {/* Job Preferences Section */}
//                             <div>
//                                 <h2 className="text-2xl text-[#1F4278] mb-4">Job Preferences</h2>
//                                 <div className="space-y-6">
//                                     {/* Position Applying For */}
//                                     <div>
//                                         <label className="block text-xl font-medium text-gray-700">
//                                             Position Applying For <span className="text-red-500">*</span>
//                                         </label>
//                                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
//                                             {["Sales", "Marketing", "Operations", "IT / Software Development", "HR / Administration", "Finance / Accounts", "Logistics / Supply Chain", "Other (Specify)"].map((position) => (
//                                                 <label key={position} className="flex items-center space-x-2">
//                                                     <input
//                                                         type="radio"
//                                                         name="positionApplyingFor"
//                                                         value={position}
//                                                         className="form-radio h-5 w-5 text-blue-600"
//                                                     />
//                                                     <span>{position}</span>
//                                                 </label>
//                                             ))}
//                                         </div>
//                                     </div>

//                                     {/* Preferred Job Type */}
//                                     <div>
//                                         <label className="block text-xl font-medium text-gray-700">
//                                             Preferred Job Type <span className="text-red-500">*</span>
//                                         </label>
//                                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
//                                             {["Full-Time", "Part-Time", "Internship", "Freelance / Contract"].map((jobType) => (
//                                                 <label key={jobType} className="flex items-center space-x-2">
//                                                     <input
//                                                         type="radio"
//                                                         name="preferredJobType"
//                                                         value={jobType}
//                                                         className="form-radio h-5 w-5 text-blue-600"
//                                                     />
//                                                     <span>{jobType}</span>
//                                                 </label>
//                                             ))}
//                                         </div>
//                                     </div>

//                                     {/* Notice Period */}
//                                     <div>
//                                         <label className="block text-xl font-medium text-gray-700">
//                                             Notice Period (If Applicable) <span className="text-red-500">*</span>
//                                         </label>
//                                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
//                                             {["Immediately Available", "15 Days", "1 Month", "2 Months", "Other (Specify)"].map((noticePeriod) => (
//                                                 <label key={noticePeriod} className="flex items-center space-x-2">
//                                                     <input
//                                                         type="radio"
//                                                         name="noticePeriod"
//                                                         value={noticePeriod}
//                                                         className="form-radio h-5 w-5 text-blue-600"
//                                                     />
//                                                     <span>{noticePeriod}</span>
//                                                 </label>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                         </div>


//                         {/* Job Preferences Section */}





//                         <div>
//                             <h2 className="text-2xl text-[#1F4278]  mt-5">Education & Experience</h2>
//                             <br></br>
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                 {/* Highest Educational Qualification */}
//                                 <div>
//                                     <label
//                                         htmlFor="education"
//                                         className="block text-xl font-medium text-gray-700"
//                                     >
//                                         Highest Educational Qualification
//                                     </label>
//                                     <select
//                                         id="education"
//                                         className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
//                                     >
//                                         <option>Select Education Level</option>
//                                         <option>High School</option>
//                                         <option>Bachelor's Degree</option>
//                                         <option>Master's Degree</option>
//                                         <option>PhD</option>
//                                     </select>
//                                 </div>

//                                 {/* Total Work Experience */}
//                                 <div>
//                                     <label
//                                         htmlFor="workExperience"
//                                         className="block text-xl font-medium text-gray-700"
//                                     >
//                                         Total Work Experience
//                                     </label>
//                                     <select
//                                         id="workExperience"
//                                         className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
//                                     >
//                                         <option>Select experience level</option>
//                                         <option>0-1 Year</option>
//                                         <option>1-3 Years</option>
//                                         <option>3-5 Years</option>
//                                         <option>5+ Years</option>
//                                     </select>
//                                 </div>

//                                 {/* Key Skills & Certifications */}
//                                 <div className="md:col-span-2">
//                                     <label
//                                         htmlFor="skills"
//                                         className="block text-xl font-medium text-gray-700"
//                                     >
//                                         Key Skills & Certifications
//                                     </label>
//                                     <textarea
//                                         id="skills"
//                                         placeholder="+91 83200 83200"
//                                         rows="3"
//                                         className="mt-2 block w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
//                                     ></textarea>
//                                 </div>

//                                 {/* Upload Resume (CV) */}
//                                 <div className="md:col-span-2 mb-6">
//                                     <label
//                                         htmlFor="resume"
//                                         className="block text-xl font-medium text-gray-700"
//                                     >
//                                         Upload Resume (CV)
//                                     </label>
//                                     <input
//                                         type="file"
//                                         id="resume"
//                                         className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
//                                     />
//                                     <p className="text-sm text-gray-500 mt-1">
//                                         Accepted formats: PDF, DOC, JPG, PNG (Max 10MB)
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Additional Information */}
//                         <div>
//                             <h2 className="text-xl text-[#1F4278] mb-4">Additional Information</h2>

//                             {/* Why Do You Want to Join Us? */}
//                             <div className="mb-6">
//                                 <label
//                                     htmlFor="whyJoinUs"
//                                     className="block text-xl font-medium text-gray-700"
//                                 >
//                                     Why Do You Want to Join Us?
//                                 </label>
//                                 <textarea
//                                     id="whyJoinUs"
//                                     placeholder="Tell us why you want to join our Team"
//                                     rows="5"
//                                     className="mt-2 block w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
//                                 ></textarea>
//                                 <p className="text-sm text-gray-500 mt-1">Minimum 100 words required</p>
//                             </div>

//                             <div className="mb-6">
//                                 <label
//                                     htmlFor="whyJoinUs"
//                                     className="block text-xl font-medium text-gray-700"
//                                 >
//                                     References (If Any)
//                                 </label>
//                                 <textarea
//                                     id="whyJoinUs"
//                                     placeholder="Tell us why you want to join our Team"
//                                     rows="5"
//                                     className="mt-2 block w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
//                                 ></textarea>

//                             </div>

//                             {/* Submit Button */}
//                             <button
//                                 type="submit"
//                                 className="lg:w-120 sm:w-auto bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300 transition duration-200 ease-in-out"
//                             >
//                                 Send Inquiry
//                             </button>
//                         </div>
//                     </div>
//                 </form >
//             </div >
//         </>
//     );
// }




import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Nav from "./Nav";

const CareerSchema = Yup.object({
  fullName: Yup.string().required("Please enter your full name"),
  email: Yup.string().email("Invalid email").required("Please enter your email"),
  phoneNumber: Yup.string()
    .matches(/^\+?\d{10,15}$/, "Enter a valid phone number with country code")
    .required("Please enter your phone number"),
  linkedinProfile: Yup.string().url("Enter a valid URL"),
  location: Yup.string().required("Please enter your current location"),
  positionApplyingFor: Yup.string().required("Select a position"),
  preferredJobType: Yup.string().required("Select preferred job type"),
  noticePeriod: Yup.string().required("Select notice period"),
  education: Yup.string().required("Select education level"),
  workExperience: Yup.string().required("Select work experience"),
  skills: Yup.string().required("Enter your key skills & certifications"),
  resume: Yup.string().required("Resume is required"),
  whyJoinUs: Yup.string().min(100, "Minimum 100 words required").required("This field is required"),
  references: Yup.string().required("This  field is required")
});

const initialValues = {
  fullName: "",
  email: "",
  phoneNumber: "",
  linkedinProfile: "",
  location: "",
  positionApplyingFor: "",
  preferredJobType: "",
  noticePeriod: "",
  education: "",
  workExperience: "",
  skills: "",
  resume: null,
  whyJoinUs: "",
  references: "",
};

export default function Career() {
//   const formik = useFormik({
//     initialValues,
//     validationSchema: CareerSchema,
//     onSubmit: (values, { resetForm }) => {
//       for (const [key, value] of Object.entries(values)) {
//         console.log(`${key}:`, value);
//       }
//       alert("Form submitted successfully!");
//       resetForm();
//     },
//   });
const { values, errors, touched, handleBlur, handleChange, handleSubmit } =  useFormik({
      initialValues,
      validationSchema: CareerSchema,
      onSubmit: (values, action) => {
        console.log("Form values:", values);
        action.resetForm();
      },
    });

  return (
    <>
      <Nav bgColor="bg-white" textColor="text-black" />
      <div className="container mx-auto sm:px-6 px-6 lg:px-16 py-4">
        {/* Header Section */}
        <div className="mb-8 flex flex-col text-center">
          <p className="text-orange-500 font-semibold text-lg">Career Form</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1F4278]">
            Let’s Connect <span className="text-orange-500">Join Our Team Solvi Glob</span>
          </h1>
        </div>

        {/* Form Section */}
        <form className="space-y-8" onSubmit={handleSubmit} noValidate>
          <div>
            <h2 className="text-2xl text-[#1F4278] mb-4">Personal & Contact Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-xl font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="John Doe"
                  className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
                  value={values.fullName}
                      onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.fullName && touched.fullName && (
                  <div className="text-red-500 text-sm">{errors.fullName}</div>
                )}
              </div>
              {/* Email Address */}
              <div>
                <label className="block text-xl font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john.doe@example.com"
                  className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
                  value={values.email}
                     onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched.email && errors.email && (
                  <div className="text-red-500 text-sm">{errors.email}</div>
                )}
              </div>
              {/* Phone Number */}
              <div>
                <label className="block text-xl font-medium text-gray-700">Phone Number (With Country Code)</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="+91 83200 83200"
                  className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
                  value={values.phoneNumber}
                      onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched.phoneNumber && errors.phoneNumber && (
                  <div className="text-red-500 text-sm">{errors.phoneNumber}</div>
                )}
              </div>
              {/* LinkedIn Profile / Portfolio URL */}
              <div>
                <label className="block text-xl font-medium text-gray-700">LinkedIn Profile / Portfolio URL</label>
                <input
                  type="url"
                  name="linkedinProfile"
                  placeholder="Enter URL"
                  className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
                  value={values.linkedinProfile}
                     onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched.linkedinProfile && errors.linkedinProfile && (
                  <div className="text-red-500 text-sm">{errors.linkedinProfile}</div>
                )}
              </div>
              {/* Current Location */}
              <div className="md:col-span-2">
                <label className="block text-xl font-medium text-gray-700">Current Location (City & Country)</label>
                <input
                  type="text"
                  name="location"
                  placeholder="United States"
                  className="block w-full sm:w-[75%] md:w-[50%] border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
                  value={values.location}
                      onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched.location && errors.location && (
                  <div className="text-red-500 text-sm">{errors.location}</div>
                )}
              </div>
            </div>
          </div>

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
                  {[
                    "Sales",
                    "Marketing",
                    "Operations",
                    "IT / Software Development",
                    "HR / Administration",
                    "Finance / Accounts",
                    "Logistics / Supply Chain",
                    "Other (Specify)",
                  ].map((position) => (
                    <label key={position} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="positionApplyingFor"
                        value={position}
                        className="form-radio h-5 w-5 text-blue-600"
                        checked={values.positionApplyingFor === position}
                            onChange={handleChange}
                    onBlur={handleBlur}
                      />
                      <span>{position}</span>
                    </label>
                  ))}
                </div>
                {touched.positionApplyingFor && errors.positionApplyingFor && (
                  <div className="text-red-500 text-sm">{errors.positionApplyingFor}</div>
                )}
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
                        checked={values.preferredJobType === jobType}
                         onChange={handleChange}
                    onBlur={handleBlur}
                      />
                      <span>{jobType}</span>
                    </label>
                  ))}
                </div>
                {touched.preferredJobType && errors.preferredJobType && (
                  <div className="text-red-500 text-sm">{errors.preferredJobType}</div>
                )}
              </div>
              {/* Notice Period */}
              <div>
                <label className="block text-xl font-medium text-gray-700">
                  Notice Period (If Applicable) <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                  {[
                    "Immediately Available",
                    "15 Days",
                    "1 Month",
                    "2 Months",
                    "Other (Specify)",
                  ].map((noticePeriod) => (
                    <label key={noticePeriod} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="noticePeriod"
                        value={noticePeriod}
                        className="form-radio h-5 w-5 text-blue-600"
                        checked={values.noticePeriod === noticePeriod}
                        onChange={handleChange}
                    onBlur={handleBlur}
                      />
                      <span>{noticePeriod}</span>
                    </label>
                  ))}
                </div>
                {touched.noticePeriod && errors.noticePeriod && (
                  <div className="text-red-500 text-sm">{errors.noticePeriod}</div>
                )}
              </div>
            </div>
          </div>

          {/* Education & Experience */}
          <div>
            <h2 className="text-2xl text-[#1F4278] mt-5 mb-4">Education & Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Highest Educational Qualification */}
              <div>
                <label className="block text-xl font-medium text-gray-700">
                  Highest Educational Qualification
                </label>
                <select
                  name="education"
                  className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
                  value={values.education}
                   onChange={handleChange}
                    onBlur={handleBlur}
                >
                  <option value="">Select Education Level</option>
                  <option>High School</option>
                  <option>Bachelor's Degree</option>
                  <option>Master's Degree</option>
                  <option>PhD</option>
                </select>
                {touched.education && errors.education && (
                  <div className="text-red-500 text-sm">{errors.education}</div>
                )}
              </div>
              {/* Total Work Experience */}
              <div>
                <label className="block text-xl font-medium text-gray-700">
                  Total Work Experience
                </label>
                <select
                  name="workExperience"
                  className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
                  value={values.workExperience}
                 onChange={handleChange}
                    onBlur={handleBlur}
                >
                  <option value="">Select experience level</option>
                  <option>0-1 Year</option>
                  <option>1-3 Years</option>
                  <option>3-5 Years</option>
                  <option>5+ Years</option>
                </select>
                {touched.workExperience && errors.workExperience && (
                  <div className="text-red-500 text-sm">{errors.workExperience}</div>
                )}
              </div>
              {/* Key Skills & Certifications */}
              <div className="md:col-span-2">
                <label className="block text-xl font-medium text-gray-700">
                  Key Skills & Certifications
                </label>
                <textarea
                  name="skills"
                  placeholder="List your key skills and certifications"
                  rows="3"
                  className="mt-2 block w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
                  value={values.skills}
                     onChange={handleChange}
                    onBlur={handleBlur}
                ></textarea>
                {touched.skills && errors.skills && (
                  <div className="text-red-500 text-sm">{errors.skills}</div>
                )}
              </div>
              {/* Upload Resume (CV) */}
              <div className="md:col-span-2 mb-6">
                <label className="block text-xl font-medium text-gray-700">
                  Upload Resume (CV)
                </label>
                <input
                  type="file"
                  name="resume"
                  className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  accept=".pdf,.doc,.docx,.jpg,.png"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Accepted formats: PDF, DOC, JPG, PNG (Max 10MB)
                </p>
                {touched.resume && errors.resume && (
                  <div className="text-red-500 text-sm">{errors.resume}</div>
                )}
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div>
            <h2 className="text-xl text-[#1F4278] mb-4">Additional Information</h2>
            {/* Why Do You Want to Join Us? */}
            <div className="mb-6">
              <label className="block text-xl font-medium text-gray-700">
                Why Do You Want to Join Us?
              </label>
              <textarea
                name="whyJoinUs"
                placeholder="Tell us why you want to join our Team"
                rows="5"
                className="mt-2 block w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
                value={values.whyJoinUs}
                    onChange={handleChange}
                    onBlur={handleBlur}
              ></textarea>
              <p className="text-sm text-gray-500 mt-1">Minimum 100 words required</p>
              {touched.whyJoinUs && errors.whyJoinUs && (
                <div className="text-red-500 text-sm">{errors.whyJoinUs}</div>
              )}
            </div>
            {/* References */}
            <div className="mb-6">
              <label className="block text-xl font-medium text-gray-700">
                References (If Any)
              </label>
              <textarea
                name="references"
                placeholder="References (Optional)"
                rows="5"
                className="mt-2 block w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
                value={values.references}
                   onChange={handleChange}
                    onBlur={handleBlur}
              ></textarea>
               {touched.references && errors.references && (
                <div className="text-red-500 text-sm">{errors.references}</div>
              )}
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











// import React from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";

// const CareerForm = () => {
//   const initialValues = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     jobTitle: "",
//     location: "",
//     experience: "",
//     education: "",
//     skills: "",
//     resume: null,
//   };

//   const CareerSchema = Yup.object().shape({
//     firstName: Yup.string().required("First Name is required"),
//     lastName: Yup.string().required("Last Name is required"),
//     email: Yup.string().email("Invalid email").required("Email is required"),
//     phone: Yup.string()
//       .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
//       .required("Phone is required"),
//     jobTitle: Yup.string().required("Job Title is required"),
//     location: Yup.string().required("Location is required"),
//     experience: Yup.string().required("Experience is required"),
//     education: Yup.string().required("Education is required"),
//     skills: Yup.string().required("Skills are required"),
//     resume: Yup.mixed().required("Resume is required"),
//   });

//   const { values,errors,touched,handleBlur,handleChange,handleSubmit,setFieldValue,} = useFormik({
//     initialValues,
//     validationSchema: CareerSchema,
//     onSubmit: (values, actions) => {
//       console.log("Form values:", values);
//       console.log("Uploaded Resume File:", values.resume);
//       actions.resetForm();
//     },
//   });

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-3xl mx-auto bg-white p-8 shadow-md rounded-lg"
//     >
//       <h2 className="text-2xl font-semibold mb-6">Career Form</h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* First Name */}
//         <div>
//           <label className="block text-gray-700 font-medium">First Name</label>
//           <input
//             type="text"
//             name="firstName"
//             value={values.firstName}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
//           />
//           {errors.firstName && touched.firstName && (
//             <p className="text-red-600 text-sm mt-1">{errors.firstName}</p>
//           )}
//         </div>

//         {/* Last Name */}
//         <div>
//           <label className="block text-gray-700 font-medium">Last Name</label>
//           <input
//             type="text"
//             name="lastName"
//             value={values.lastName}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
//           />
//           {errors.lastName && touched.lastName && (
//             <p className="text-red-600 text-sm mt-1">{errors.lastName}</p>
//           )}
//         </div>

//         {/* Email */}
//         <div>
//           <label className="block text-gray-700 font-medium">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={values.email}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
//           />
//           {errors.email && touched.email && (
//             <p className="text-red-600 text-sm mt-1">{errors.email}</p>
//           )}
//         </div>

//         {/* Phone */}
//         <div>
//           <label className="block text-gray-700 font-medium">Phone</label>
//           <input
//             type="text"
//             name="phone"
//             value={values.phone}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
//           />
//           {errors.phone && touched.phone && (
//             <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
//           )}
//         </div>

//         {/* Job Title */}
//         <div>
//           <label className="block text-gray-700 font-medium">Job Title</label>
//           <input
//             type="text"
//             name="jobTitle"
//             value={values.jobTitle}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
//           />
//           {errors.jobTitle && touched.jobTitle && (
//             <p className="text-red-600 text-sm mt-1">{errors.jobTitle}</p>
//           )}
//         </div>

//         {/* Location */}
//         <div>
//           <label className="block text-gray-700 font-medium">Location</label>
//           <input
//             type="text"
//             name="location"
//             value={values.location}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
//           />
//           {errors.location && touched.location && (
//             <p className="text-red-600 text-sm mt-1">{errors.location}</p>
//           )}
//         </div>

//         {/* Experience */}
//         <div>
//           <label className="block text-gray-700 font-medium">Experience</label>
//           <input
//             type="text"
//             name="experience"
//             value={values.experience}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
//           />
//           {errors.experience && touched.experience && (
//             <p className="text-red-600 text-sm mt-1">{errors.experience}</p>
//           )}
//         </div>

//         {/* Education */}
//         <div>
//           <label className="block text-gray-700 font-medium">Education</label>
//           <input
//             type="text"
//             name="education"
//             value={values.education}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
//           />
//           {errors.education && touched.education && (
//             <p className="text-red-600 text-sm mt-1">{errors.education}</p>
//           )}
//         </div>

//         {/* Skills */}
//         <div className="md:col-span-2">
//           <label className="block text-gray-700 font-medium">Skills</label>
//           <textarea
//             name="skills"
//             value={values.skills}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             rows={4}
//             className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
//           />
//           {errors.skills && touched.skills && (
//             <p className="text-red-600 text-sm mt-1">{errors.skills}</p>
//           )}
//         </div>

//         {/* Resume Upload */}
//         <div className="md:col-span-2">
//           <label className="block text-gray-700 font-medium">Upload Resume</label>
//           <input
//             type="file"
//             name="resume"
//             className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
//             onChange={(e) => setFieldValue("resume", e.currentTarget.files[0])}
//             onBlur={handleBlur}
//             accept=".pdf,.doc,.docx,.jpg,.png"
//           />
//           {values.resume && (
//             <p className="text-green-600 text-sm mt-1">
//               Selected File: {values.resume.name}
//             </p>
//           )}
//           {errors.resume && touched.resume && (
//             <p className="text-red-600 text-sm mt-1">{errors.resume}</p>
//           )}
//         </div>
//       </div>

//       <div className="mt-8">
//         <button
//           type="submit"
//           className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg w-full md:w-auto"
//         >
//           Submit Application
//         </button>
//       </div>
//     </form>
//   );
// };

// export default CareerForm;
