// import React from "react";
// import Nav from "./Nav";



// export default function InquiryForm() {
//   return (
//     <>
//       <Nav bgColor="bg-white" textColor="text-black" />
//       {/* <div className="sm:px-6 px-6 lg:px-18 py-4"> */}
//       <div className="container mx-auto px-8 py-8">
//         {/* Header Section */}
//         <div className="mb-8 flex flex-col justify-start">
//           <p className="text-orange-500 font-semibold text-lg">Inquiry Form</p>
//           <h1 className="text-3xl sm:text-4xl font-bold text-[#1F4278]">
//             Let’s Connect <span className="text-orange-500">Solvi Glob</span>
//           </h1>
//         </div>

//         {/* Form Section */}
//         <form className="space-y-8">
//           {/* Personal & Business Details */}
//           <div>
//             <h2 className="text-2xl  text-[#1F4278] mb-4">
//               Personal & Business Details
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {/* Full Name */}
//               <div>
//                 <label
//                   htmlFor="fullName"
//                   className="block text-xl font-medium text-gray-700"
//                 >
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   id="fullName"
//                   placeholder="John Doe"
//                   className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-xl font-medium text-gray-700"
//                 >
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   placeholder="johndoe@gmail.com"
//                   className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="phoneNumber"
//                   className="block text-xl font-medium text-gray-700"
//                 >
//                   Phone Number (with Country Code)
//                 </label>
//                 <input
//                   type="tel"
//                   id="phoneNumber"
//                   placeholder="+91 83000 8300"
//                   className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="companyName"
//                   className="block text-xl font-medium text-gray-700"
//                 >
//                   Company Name
//                 </label>
//                 <input
//                   type="text"
//                   id="companyName"
//                   placeholder="Company name"
//                   className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="website"
//                   className="block text-xl font-medium text-gray-700"
//                 >
//                   Company Website / LinkedIn Profile
//                 </label>
//                 <input
//                   type="url"
//                   id="website"
//                   placeholder="www.example.com"
//                   className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="location"
//                   className="block text-xl font-medium text-gray-700"
//                 >
//                   Country / Location
//                 </label>
//                 <input
//                   type="text"
//                   id="location"
//                   placeholder="Country / Location"
//                   className="mt-1 block w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//             </div>

//             {/* Inquiry Details */}
//             <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-4">
//               Inquiry Details
//             </h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
//               {["Product Inquiry", "Custom Order", "Bulk Order", "Partnership / Collaboration", "Other (Specify)"].map(
//                 (type) => (
//                   <label key={type} className="flex items-center  text-xl space-x-2">
//                     <input
//                       type="checkbox"
//                       value={type}
//                       className="form-checkbox  h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
//                     />
//                     <span>{type}</span>
//                   </label>
//                 )
//               )}
//             </div>
//             <br></br>
//             <div className="mb-6">
//               <label
//                 htmlFor="inquiryDetails"
//                 className="block text-xl font-medium text-gray-700"
//               >
//                 Describe Your Inquiry in Detail
//               </label>
//               <textarea
//                 id="inquiryDetails"
//                 placeholder="Share your details requirements with quantity"
//                 rows="5"
//                 className="mt-2 block w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
//               ></textarea>
//               <p className="text-sm text-gray-500 mt-1">
//                 Please provide as much detail as possible about your requirements.
//               </p>
//             </div>

//             {/* Additional Information */}
//             <h2 className="text-xl font-semibold text-[#1F4278] mb-4">
//               Additional Information
//             </h2>

//             {/* Preferred Mode of Contact */}
//             <div className="mb-6">
//               <label className="block text-xl font-medium text-gray-700 mb-2">
//                 Preferred Mode of Contact (Select two)
//               </label>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
//                 {["Email", "WhatsApp", "Phone", "Other (Specify)"].map((mode) => (
//                   <label key={mode} className="flex items-center space-x-2">
//                     <input
//                       type="checkbox"
//                       value={mode}
//                       className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
//                     />
//                     <span>{mode}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Upload Supporting Documents */}
//             <div className="mb-6">
//               <label
//                 htmlFor="uploadDocuments"
//                 className="block text-xl font-medium text-gray-700 mb-2"
//               >
//                 Upload Supporting Documents (Optional)
//               </label>
//               <input
//                 type="file"
//                 id="uploadDocuments"
//                 accept=".pdf,.doc,.jpg,.png"
//                 className="block w-full sm:w-[75%] md:w-[50%] border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
//               />

//               <p className="text-lg text-gray-500 mt-1">
//                 Accepted formats: PDF, DOC, JPG, PNG (Max 10MB)
//               </p>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="lg:w-120 sm:w-auto bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300 transition duration-200 ease-in-out"
//             >
//               Send Inquiry
//             </button>


//           </div>
//         </form>
//       </div>
//     </>
//   );
// }




import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Nav from "./Nav";

// Validation schema using Yup
const InquirySchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  companyName: Yup.string().required("Company name is required"),
  location: Yup.string().required("Location is required"),
  inquiryTypes: Yup.array().min(1, "Select at least one inquiry type"),
  inquiryDetails: Yup.string().required("Please describe your inquiry"),
  contactModes: Yup.array().min(1, "Select at least one contact mode"),
  uploadDocuments: Yup.mixed()
    .test("fileSize", "File size must be less than 10MB", value => {
      if (!value) return true;
      return value.size <= 10 * 1024 * 1024;
    }),
});

const inquiryTypesList = [
  "Product Inquiry",
  "Custom Order",
  "Bulk Order",
  "Partnership",
  "Support",
  "Other",
];

const contactModesList = ["Email", "Phone", "WhatsApp"];

export default function InquiryForm() {
  return (
    <>
      <Nav bgColor="bg-white" textColor="text-black" />
            {/* <div className="container mx-auto sm:px-6 px-6 lg:px-16 py-4"> */}

      <div className="container mx-auto sm:px-6 px-6 lg:px-16 py-4 bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Inquiry Form</h2>
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            phoneNumber: "",
            companyName: "",
            website: "",
            location: "",
            inquiryTypes: [],
            inquiryDetails: "",
            contactModes: [],
            uploadDocuments: null,
          }}
          validationSchema={InquirySchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            for (const [key, value] of Object.entries(values)) {
            console.log(`${key}:`, value);
          }
                    console.log("Submitted data:", values);

            setTimeout(() => {
              alert("Form submitted successfully!");
              setSubmitting(false);
              resetForm();
            }, 400);
          }}

        >
          {({ setFieldValue, isSubmitting, values }) => (
            <Form className="space-y-6" noValidate>
              {/* Full Name */}
              <div>
                <label className="block text-lg font-medium mb-1">Full Name *</label>
                <Field
                  type="text"
                  name="fullName"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
                />
                <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm" />
              </div>
              {/* Email */}
              <div>
                <label className="block text-lg font-medium mb-1">Email *</label>
                <Field
                  type="email"
                  name="email"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>
              {/* Phone Number */}
              <div>
                <label className="block text-lg font-medium mb-1">Phone Number *</label>
                <Field
                  type="text"
                  name="phoneNumber"
                  maxLength={10}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
                />
                <ErrorMessage name="phoneNumber" component="div" className="text-red-500 text-sm" />
              </div>
              {/* Company Name */}
              <div>
                <label className="block text-lg font-medium mb-1">Company Name *</label>
                <Field
                  type="text"
                  name="companyName"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
                />
                <ErrorMessage name="companyName" component="div" className="text-red-500 text-sm" />
              </div>
              {/* Website */}
              <div>
                <label className="block text-lg font-medium mb-1">Website</label>
                <Field
                  type="text"
                  name="website"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              {/* Location */}
              <div>
                <label className="block text-lg font-medium mb-1">Location *</label>
                <Field
                  type="text"
                  name="location"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
                />
                <ErrorMessage name="location" component="div" className="text-red-500 text-sm" />
              </div>
              {/* Inquiry Types */}
              <div>
                <label className="block text-lg font-medium mb-2">Inquiry Type *</label>
                <div className="flex flex-wrap gap-4">
                  {inquiryTypesList.map((type) => (
                    <label key={type} className="flex items-center space-x-2">
                      <Field
                        type="checkbox"
                        name="inquiryTypes"
                        value={type}
                        className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded"
                      />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>
                <ErrorMessage name="inquiryTypes" component="div" className="text-red-500 text-sm" />
              </div>
              {/* Inquiry Details */}
              <div>
                <label className="block text-lg font-medium mb-1">Inquiry Details *</label>
                <Field
                  as="textarea"
                  name="inquiryDetails"
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
                />
                <ErrorMessage name="inquiryDetails" component="div" className="text-red-500 text-sm" />
              </div>
              {/* Contact Modes */}
              <div>
                <label className="block text-lg font-medium mb-2">Preferred Contact Mode *</label>
                <div className="flex flex-wrap gap-4">
                  {contactModesList.map((mode) => (
                    <label key={mode} className="flex items-center space-x-2">
                      <Field
                        type="checkbox"
                        name="contactModes"
                        value={mode}
                        className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded"
                      />
                      <span>{mode}</span>
                    </label>
                  ))}
                </div>
                <ErrorMessage name="contactModes" component="div" className="text-red-500 text-sm" />
              </div>
              {/* File Upload */}
              <div>
              <label className="block text-lg font-medium mb-1">Upload Document (optional, max 10MB)</label>
              <input
                type="file"
                name="uploadDocuments"
                accept=".pdf,.doc,.docx,.jpg,.png"
                className="block w-full text-gray-700"
                onChange={event => {
                  setFieldValue("uploadDocuments", event.currentTarget.files[0]);
                }}
              />
              <p className="text-lg text-gray-500 mt-1">
                  Accepted formats: PDF, DOC, JPG, PNG (Max 10MB)
                </p>
              <ErrorMessage name="uploadDocuments" component="div" className="text-red-500 text-sm" />
            </div>

              {/* Submit Button */}
              {/* <div className="mb-6">
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
              </div> */}
              <button
                type="submit"
                className="lg:w-120 sm:w-auto bg-orange-500 text-white py-3 px-6 rounded-lg cursor-pointer focus:outline-none focus:ring focus:ring-orange-300 transition duration-200 ease-in-out"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Inquiry"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}




