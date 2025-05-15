import { useState } from "react"
import background from "../Images/background.png";
import map from "../Images/map.svg";
import Nav from "./Nav";
import India from "../Images/India.png";
import Usa from "../Images/Usa.png";
import germany from "../Images/germany.png";
import ausr from "../Images/ausr.svg"
import mapimages from "../Images/mapimages.png";
import WorldLocationsMap from "./WorldLocationsMap";
// import Abc from "./Abc";

const ContactUs = () => {


  const locations = [
    {
      name: "INDIA",
      address: "701 E Parks Hwy, Wasilla, Alaska United States, 61.581765, 99654",
      number: "+91 23409 12348",
      email: "solviglobe@gmail.com",
      icon: India,
    },
    {
      name: "USA",
      address: "701 E Parks Hwy, Wasilla, Alaska United States, 61.581765, 99654",
      number: "+91 23409 12348",
      email: "solviglobe@gmail.com",
      icon: Usa,
    },
    {
      name: "GERMANY",
      address: "701 E Parks Hwy, Wasilla, Alaska United States, 61.581765, 99654",
      number: "+91 23409 12348",
      email: "solviglobe@gmail.com",
      icon: germany,
    },
    {
      name: "AUSTRALIA",
      address: "701 E Parks Hwy, Wasilla, Alaska United States, 61.581765, 99654",
      number: "+91 23409 12348",
      email: "solviglobe@gmail.com",
      icon: ausr,
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
          {/* <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-20"> */}
          {/* Breadcrumb Navigation */}
          {/* <div className="absolute inset-0  bg-opacity-50"></div> */}
          <div className="relative z-10 h-full flex flex-col justify-center container mx-auto px-16 py-8">
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
        <WorldLocationsMap />
        <div className="container mx-auto px-12 py-8">
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

        <div className="container mx-auto px-12 py-8">
          {/* Main Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 xl:gap-10 mt-10">
            {/* Map Section */}
            <div className="w-full h-[400px] md:h-[600px] lg:h-[700px] xl:h-[800px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1859.418684617869!2d72.8895756262605!3d21.23829665968726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s34%20Meridian%20Business%20Center%20Lajamni%20Chowk%20opposite%20Opera%20Business%20center%20Mota%20Varachha%20Surat%20Gujarat%20394105!5e0!3m2!1sen!2sin!4v1747218022977!5m2!1sen!2sin"
                width="600"
                height="700"
                // style="border:0;"
                // allowfullscreen
                loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
              ></iframe>

            </div>

            {/* Contact Form Section */}
            <div className="flex flex-col justify-center ">
              {/* Header */}
              <div className="text-orange-500 font-medium mb-2">Contact us</div>
              {/* <h1 className="text-3xl md:text-4xl  xl:text-4xl font-bold text-blue-900 mb-4">
                Get in touch
              </h1>

              <p className="text-gray-600 mb-8">
                Get in touch with us for expert guidance, seamless support, and
                innovative solutions. Whether you have questions, need assistance,
                or want to explore new opportunities, we're here to help. Connect
                with us today and let's collaborate to achieve success together.
                Your journey starts with a simple conversation!
              </p> */}

              {/* Form */}
              {/* <form onSubmit={handleSubmit} className="space-y-4 mb-40">
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
              </form> */}

              <form onSubmit={handleSubmit} className="space-y-4 mb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 xl:gap-8">
                  <input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    // className="border border-gray-300 rounded-md p-2 max-w-xs md:max-w-sm lg:max-w-md"
                    className="border border-gray-300 rounded-md p-5 h-[80%] w-full"

                  />


                  <input
                    name="email"
                    type="email"
                    placeholder="Email ID"
                    value={formData.email}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-5 w-full  h-[80%] max-w-md"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 xl:gap-8">
                  <input
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-5 h-[80%]  w-full max-w-md"
                  />

                  <input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-5 h-[80%]  w-full max-w-md"
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-5 w-full max-w-3xl  lg:min-h-[250px]"
                />

                <button
                  type="submit"
                  className="w-full py-3  bg-orange-500  text-white font-medium cursor-pointer rounded-md max-w-md"
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
