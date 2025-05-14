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
  WhenDoYouRequireIt:Yup.array().min(1, "Select at least one inquiry type"),
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
const DoYouRequireIt = ["When Do You Require It?", "Within a Week", "Within a Month","Flexible / No Urgent Timeline"];


export default function InquiryForm() {
  return (
    <>
      <Nav bgColor="bg-white" textColor="text-black" />
            {/* <div className="container mx-auto sm:px-6 px-6 lg:px-16 py-4"> */}

      <div className="container mx-auto sm:px-6 px-6 lg:px-16 py-4 bg-white rounded-xl shadow-lg">
        <div className="mb-8 flex flex-col text-center">
          <p className="text-orange-500 font-semibold text-lg">Business Inquiry</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1F4278]">
            Let’s Connect With SolviGlobe Limited <span className="text-orange-500">SolviGlobe Limited </span>
          </h1>
        </div>
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            phoneNumber: "",
            companyName: "",
            website: "",
            location: "",
            WhenDoYouRequireIt:[],
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
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              </div>
              {/* Website */}
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              </div>
              {/* Inquiry Types */}
              <div>
                <label className="block text-lg font-medium mb-2">Inquiry Type *</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
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

               {/* <div className="md:col-span-2">
            <label className="block text-xl font-medium text-gray mb-[5px]">
              When Do You Require It?
            </label>
            {["When Do You Require It?", "Within a Week", "Within a Month","Flexible / No Urgent Timeline"].map((term) => (
              <label key={term} className="flex items-center space-x-5 mb-[10px]">
                <Field
                  type="radio"
                  name="WhenDoYouRequireIt"
                  value={term}
                  className="form-radio h-[18px] w-[18px]"
                />
               {term}
              </label>
            ))}
           <ErrorMessage name="WhenDoYouRequireIt" component="div" className="text-red-500 text-sm" />
          </div> */}
          <div>
                <label className="block text-lg font-medium mb-2">When Do You Require It? *</label>
                <div className="flex flex-wrap gap-4">
                  {DoYouRequireIt.map((term) => (
                    <label key={term} className="flex items-center space-x-2">
                      <Field
                        type="radio"
                        name="WhenDoYouRequireIt"
                        value={term}
                        className="form-radio h-5 w-5 text-blue-600 border-gray-300 rounded"
                      />
                      <span>{term}</span>
                    </label>
                  ))}
                </div>
                <ErrorMessage name="WhenDoYouRequireIt" component="div" className="text-red-500 text-sm" />
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




