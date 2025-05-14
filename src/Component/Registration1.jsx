import React from "react";
import { useFormik } from "formik";
import {SignUpSchema} from "./Component/SignUpSchema";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const Registration1 = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =  useFormik({
      initialValues,
      validationSchema: SignUpSchema,
      onSubmit: (values, action) => {
        console.log("Form values:", values);
        action.resetForm();
      },
    });

  return (
    <>
      <section className="fixed inset-0 flex items-center justify-center bg-[#efedee]">
        <div className="w-full flex flex-col items-center justify-center bg-[rgba(51,51,51,0.5)] transition-all">
          <div className="flex w-full max-w-[60vw] md:max-w-[90vw] bg-white rounded-lg overflow-hidden absolute transition duration-300">
            <div className="flex-1.5 p-16 bg-white">
              <h1 className="text-[#55311c] font-normal text-2xl mb-2">Welcome!</h1>
              <p className="mb-6">To the thapa technical website for programmers.</p>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col border border-[#ddd] rounded-md mb-5 p-2 focus-within:border-[#8c7569]">
                  <label htmlFor="name" className="text-[11px] font-semibold uppercase tracking-wider text-[#8c7569]">Name</label>
                  <input
                    type="text"
                    autoComplete="off"
                    name="name"
                    id="name"
                    placeholder="Name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="text-sm focus:outline-none"
                  />
                  {errors.name && touched.name && <p className="text-sm text-[#b22b27]">{errors.name}</p>}
                </div>

                <div className="flex flex-col border border-[#ddd] rounded-md mb-5 p-2 focus-within:border-[#8c7569]">
                  <label htmlFor="email" className="text-[11px] font-semibold uppercase tracking-wider text-[#8c7569]">Email</label>
                  <input
                    type="email"
                    autoComplete="off"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="text-sm focus:outline-none"
                  />
                  {errors.email && touched.email && <p className="text-sm text-[#b22b27]">{errors.email}</p>}
                </div>

                <div className="flex flex-col border border-[#ddd] rounded-md mb-5 p-2 focus-within:border-[#8c7569]">
                  <label htmlFor="password" className="text-[11px] font-semibold uppercase tracking-wider text-[#8c7569]">Password</label>
                  <input
                    type="password"
                    autoComplete="off"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="text-sm focus:outline-none"
                  />
                  {errors.password && touched.password && <p className="text-sm text-[#b22b27]">{errors.password}</p>}
                </div>

                <div className="flex flex-col border border-[#ddd] rounded-md mb-5 p-2 focus-within:border-[#8c7569]">
                  <label htmlFor="confirm_password" className="text-[11px] font-semibold uppercase tracking-wider text-[#8c7569]">Confirm Password</label>
                  <input
                    type="password"
                    autoComplete="off"
                    name="confirm_password"
                    id="confirm_password"
                    placeholder="Confirm Password"
                    value={values.confirm_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="text-sm focus:outline-none"
                  />
                  {errors.confirm_password && touched.confirm_password && <p className="text-sm text-[#b22b27]">{errors.confirm_password}</p>}
                </div>

                <div className="flex justify-between items-center mb-5">
                  <a href="#" className="text-sm text-gray-600">Want to register using Gmail?</a>
                  <button type="submit" className="bg-[#8c7569] hover:bg-[#55311c] text-white py-2 px-8 rounded uppercase font-sans transition">Registration</button>
                </div>
              </form>
              <p className="text-sm text-center mt-16">Already have an account? <a href="#" className="text-[#8c7569]">Sign In now</a></p>
            </div>

            <div className="flex-2 hidden md:block text-0 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80"
                alt=""
                className="w-full h-full object-cover transition duration-1000"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration1;