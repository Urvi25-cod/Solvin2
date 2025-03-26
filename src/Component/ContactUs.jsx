import { useState } from "react"
import background from "../Images/background.png";
import map from "../Images/map.svg";
import Nav from "./Nav";
import indiaIcon from "../Images/india.png";
import usaIcon from "../Images/usa.png";
import germanyIcon from "../Images/germany.png";
import australiaIcon from "../Images/australia.png"
import mapImage from "../Images/mapImage.png";
// import Abc from "./Abc";

const ContactUs = () => {


  const locations = [
    {
      name: "INDIA",
      address: "701 E Parks Hwy, Wasilla, Alaska United States, 61.581765, 99654",
      number: "+91 23409 12348",
      email: "solviglobe@gmail.com",
      icon: indiaIcon,
    },
    {
      name: "USA",
      address: "701 E Parks Hwy, Wasilla, Alaska United States, 61.581765, 99654",
      number: "+91 23409 12348",
      email: "solviglobe@gmail.com",
      icon: usaIcon,
    },
    {
      name: "GERMANY",
      address: "701 E Parks Hwy, Wasilla, Alaska United States, 61.581765, 99654",
      number: "+91 23409 12348",
      email: "solviglobe@gmail.com",
      icon: germanyIcon,
    },
    {
      name: "AUSTRALIA",
      address: "701 E Parks Hwy, Wasilla, Alaska United States, 61.581765, 99654",
      number: "+91 23409 12348",
      email: "solviglobe@gmail.com",
      icon: australiaIcon,
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
  }
  return (
    <>

      <Nav bgColor="bg-white" textColor="text-black" />
      <div>
        {/* Header Section */}
        <div
          className="relative h-[40vh] w-full bg-cover bg-center flex items-center"
          style={{ backgroundImage: `url(${background})` }}
        >

          {/* Content Container */}
          <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-20">
            {/* Breadcrumb Navigation */}
            {/* <div className="absolute inset-0  bg-opacity-50"></div> */}

            <div className="mb-2 text-white text-sm md:text-base">
              <a href="/" className="hover:text-orange-400 transition-colors">
                Home
              </a>
              <span className="mx-2">/</span>
              <a
                href="/Contact Us"
                className="hover:text-orange-400 transition-colors"
              >
                Contact Us
              </a>
            </div>

            {/* Page Title */}
            <h1 className="text-orange-500 text-3xl sm:text-4xl md:text-5xl font-bold">
              Contact Us
            </h1>
          </div>
        </div>

        {/* Map Section */}
        <section className="">
          <div className="px-4 md:px-6 lg:px-12 xl:px-20 py-10">
            <div className="text-center mb-8 md:mb-12 lg:mb-16">
              <h2 className="text-orange-500 font-semibold text-sm md:text-base lg:text-lg">
                Our Synergy in Trade
              </h2>
              <h1 className="md:text-3xl lg:text-4xl font-bold text-[#1F4278] leading-tight md:leading-snug lg:leading-relaxed">
                Our synergy in trade fosters growth,
                <span className="text-orange-500">trust</span>,
                <span>innovation,</span>
                <span className="text-orange-500">efficiency</span>,
                and success.
              </h1>
            </div>

            <div className="relative">
              {/* World Map */}
              <div className="relative w-full h-full">
                {/* Add your map image or use a library like Leaflet.js */}
                <img src={map} alt="World Map" className="w-full h-full object-cover" />

                {/* Location Markers */}
                <div className="absolute top-[40%] left-[60%] transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-orange-500 text-white px-2 py-1 rounded-md text-sm">India</div>
                </div>
                {/* Add more markers as needed */}
              </div>
            </div>
          </div>

        </section>
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {locations.map((location, index) => (
              <div
                key={index}
                className="bg-white rounded-4xl shadow-md p-4 md:p-6 lg:p-8 border border-gray-300 flex flex-col items-center text-center hover:shadow-4xl transition-shadow duration-300"
              >
                {/* Icon */}
                <img
                  src={location.icon}
                  alt={`${location.name} Icon`}
                  className="w-12 md:w-16 lg:w-20 mb-4"
                />
                {/* Location Name */}
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-2">{location.name}</h3>
                {/* Address */}
                <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-2">{location.address}</p>
                {/* Contact Details */}
                <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-1">Number: {location.number}</p>
                <p className="text-sm md:text-base lg:text-lg text-gray-600">Email: {location.email}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Main Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 xl:gap-10">
            {/* Map Section */}
            <div className="w-full h-[400px] md:h-[600px] lg:h-[700px] xl:h-[800px] rounded-lg overflow-hidden">
              <img
                src={mapImage}
                alt="Map"
                className="object-cover h-full w-full"
              />
            </div>

            {/* Contact Form Section */}
            <div className="flex flex-col justify-center">
              {/* Header */}
              <div className="text-orange-500 font-medium mb-2">Contact us</div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-blue-900 mb-4">
                Get in touch
              </h1>

              <p className="text-gray-600 mb-8">
                Get in touch with us for expert guidance, seamless support, and
                innovative solutions. Whether you have questions, need assistance,
                or want to explore new opportunities, we're here to help. Connect
                with us today and let's collaborate to achieve success together.
                Your journey starts with a simple conversation!
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 xl:gap-8">
                  <input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-5 w-full"
                  />

                  <input
                    name="email"
                    type="email"
                    placeholder="Email ID"
                    value={formData.email}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-5 w-full"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 xl:gap-8">
                  <input
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-5 w-full"
                  />

                  <input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-5 w-full"
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-5 w-full min-h-[180px] md:min-h-[220px] lg:min-h-[250px]"
                />

                <button
                  type="submit"
                  className="w-full py-6 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* <Abc/> */}
      </div>



    </>
  );
};

export default ContactUs;
