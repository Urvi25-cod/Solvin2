import React from "react";
import { Heart, ShoppingCart } from 'lucide-react';

import p1 from "../Images/p1.svg";
import p2 from "../Images/p2.png";
import b1 from "../Images/b1.png";
import b2 from "../Images/b2.png";
import c1 from "../Images/c1.png";
import c2 from "../Images/c2.png";
import j1 from "../Images/j1.png";
import g1 from "../Images/g1.png";
import h1 from "../Images/h1.png";
import h2 from "../Images/h2.png";
import g2 from "../Images/g2.png";
import black from "../Images/black.png";

const Home = () => {
  const products = {
    product1: {
      title: "Slim Fit Easy-iron shirt",
      category: "t-shirt men",
      price: 1200,
      originalPrice: 2500,
      rating: 4.8,
      reviews: 41,
      imageUrl: b1, // Replace with actual image URL
    },
    product2: {
      title: "Casual Cotton T-Shirt",
      category: "t-shirt men",
      price: 900,
      originalPrice: 1500,
      rating: 4.5,
      reviews: 20,
      imageUrl: b2, // Replace with actual image URL
    },
    product3: {
      title: "Formal Dress Shirt",
      category: "dress shirt men",
      price: 1800,
      originalPrice: 3000,
      rating: 4.9,
      reviews: 15,
      imageUrl: b1, // Replace with actual image URL
    },
    product4: {
      title: "Athletic Wear T-Shirt",
      category: "t-shirt men",
      price: 1000,
      originalPrice: 1800,
      rating: 4.7,
      reviews: 30,
      imageUrl: b2, // Replace with actual image URL
    },
    product5: {
      title: "Slim Fit Polo Shirt",
      category: "polo shirt men",
      price: 1200,
      originalPrice: 2000,
      rating: 4.6,
      reviews: 25,
      imageUrl: b1, // Replace with actual image URL
    },
    product6: {
      title: "Long Sleeve T-Shirt",
      category: "t-shirt men",
      price: 1100,
      originalPrice: 1900,
      rating: 4.4,
      reviews: 22,
      imageUrl: b2, // Replace with actual image URL
    },
    product7: {
      title: "Graphic T-Shirt",
      category: "t-shirt men",
      price: 900,
      originalPrice: 1600,
      rating: 4.3,
      reviews: 18,
      imageUrl: b1, // Replace with actual image URL
    },
    product8: {
      title: "Henley Shirt",
      category: "henley shirt men",
      price: 1300,
      originalPrice: 2200,
      rating: 4.5,
      reviews: 28,
      imageUrl: b2, // Replace with actual image URL
    },
  };

  const categories = [
    {
      title: "Men Clothing",
      imageUrl: b1, // Replace with actual image URL
    },
    {
      title: "Women Clothing",
      imageUrl: b2, // Replace with actual image URL
    },
    {
      title: "Home Accessories",
      imageUrl: c1, // Replace with actual image URL
    },
    {
      title: "Jewelry",
      imageUrl: c2, // Replace with actual image URL
    },
  ];

  const Jewelry = [
    {
      image: c2, // Replace with actual image URLs
      category: "t-shirt men",
      title: "Slim Fit Easy-iron shirt",
      price: 1200,
      originalPrice: 2500,
      rating: 4.8,
      reviews: 41,
    },
    {
      image: j1, // Replace with actual image URLs
      category: "t-shirt men",
      title: "Slim Fit Easy-iron shirt",
      price: 1200,
      originalPrice: 2500,
      rating: 4.8,
      reviews: 41,
    },
    {
      image: c2, // Replace with actual image URLs
      category: "t-shirt men",
      title: "Slim Fit Easy-iron shirt",
      price: 1200,
      originalPrice: 2500,
      rating: 4.8,
      reviews: 41,
    },
    {
      image: j1, // Replace with actual image URLs
      category: "t-shirt men",
      title: "Slim Fit Easy-iron shirt",
      price: 1200,
      originalPrice: 2500,
      rating: 4.8,
      reviews: 41,
    },
    {
      image: c2, // Replace with actual image URLs
      category: "t-shirt men",
      title: "Slim Fit Easy-iron shirt",
      price: 1200,
      originalPrice: 2500,
      rating: 4.8,
      reviews: 41,
    },
    {
      image: j1, // Replace with actual image URLs
      category: "t-shirt men",
      title: "Slim Fit Easy-iron shirt",
      price: 1200,
      originalPrice: 2500,
      rating: 4.8,
      reviews: 41,
    },
    {
      image: c2, // Replace with actual image URLs
      category: "t-shirt men",
      title: "Slim Fit Easy-iron shirt",
      price: 1200,
      originalPrice: 2500,
      rating: 4.8,
      reviews: 41,
    },
    {
      image: j1, // Replace with actual image URLs
      category: "t-shirt men",
      title: "Slim Fit Easy-iron shirt",
      price: 1200,
      originalPrice: 2500,
      rating: 4.8,
      reviews: 41,
    },
  ];
  

  const house = [
    {
      image: h1, // Replace with actual image URLs
      category: "t-shirt men",
      title: "Slim Fit Easy-iron shirt",
      price: 1200,
      originalPrice: 2500,
      rating: 4.8,
      reviews: 41,
    },
    {
      image: h2, // Replace with actual image URLs
      category: "t-shirt men",
      title: "Slim Fit Easy-iron shirt",
      price: 1200,
      originalPrice: 2500,
      rating: 4.8,
      reviews: 41,
    },
    {
      image: h1, // Replace with actual image URLs
      category: "t-shirt men",
      title: "Slim Fit Easy-iron shirt",
      price: 1200,
      originalPrice: 2500,
      rating: 4.8,
      reviews: 41,
    },
    {
      image: h2, // Replace with actual image URLs
      category: "t-shirt men",
      title: "Slim Fit Easy-iron shirt",
      price: 1200,
      originalPrice: 2500,
      rating: 4.8,
      reviews: 41,
    },
    {
      image: h1, // Replace with actual image URLs
      category: "t-shirt men",
      title: "Slim Fit Easy-iron shirt",
      price: 1200,
      originalPrice: 2500,
      rating: 4.8,
      reviews: 41,
    },
    {
      image: h2, // Replace with actual image URLs
      category: "t-shirt men",
      title: "Slim Fit Easy-iron shirt",
      price: 1200,
      originalPrice: 2500,
      rating: 4.8,
      reviews: 41,
    },
    {
      image: h1, // Replace with actual image URLs
      category: "t-shirt men",
      title: "Slim Fit Easy-iron shirt",
      price: 1200,
      originalPrice: 2500,
      rating: 4.8,
      reviews: 41,
    },
    {
      image: h2, // Replace with actual image URLs
      category: "t-shirt men",
      title: "Slim Fit Easy-iron shirt",
      price: 1200,
      originalPrice: 2500,
      rating: 4.8,
      reviews: 41,
    },

    // Add more products as needed
  ];
  return (
    <>
      <div>
        {/* Header Section */}
        <main className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1fr_2fr_1fr] gap-8 items-center relative">
            {/* Left Image */}
            <div className="flex justify-center">
              <img
                src={p1}
                alt="Left Item"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="text-center sm:text-left relative z-10">
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Nunito Sans' }}>NEW ARRIVAL</h1>
              <p className="text-gray-600 mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                has been the industry's standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type.
              </p>
              {/* <button className="bg-[#7B4F2A] rounded-lg text-white items-center p-3 px-10 ">
                Shop Now
              </button> */}
              <button className="bg-[#7B4F2A] rounded-lg text-white  items-center p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14">
                Shop Now
              </button>

            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <img
                src={p2}
                alt="Right Item"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md object-cover"
              />
            </div>

            {/* Background Circle */}
            <div className="absolute inset-y-[20%] right-[15%] w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] bg-brown-500 rounded-full z-[0]"></div>

            {/* Text Overlay */}
            <h1 className="absolute inset-x-[5%] bottom-[10%] text-gray-200 text-[4rem] sm:text-[5rem] md:text-[6rem] font-bold tracking-widest opacity-[0.1] select-none hidden md:block">
              CLOTHING
            </h1>
          </div>

          {/* Products Section */}
          <div className="py-5">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">Clothing Product</h1>
            <br></br>
            <div className="text-gray-500 mb-6">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been </p>
              <span>the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type.</span>
            </div>
            {/* Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {Object.values(products).map((product, index) => (
                <div
                  key={index}
                  className="border border-gray-400 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
                >
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-t-lg"
                  />
                  <div className="p-4 sm:p-6 md:p-8">
                    <p className="text-sm text-gray-500">{product.category}</p>
                    <h2 className="font-semibold text-lg sm:text-xl md:text-2xl">{product.title}</h2>
                    <div className="flex items-center mt-2">
                      <span className="text-yellow-500 text-sm font-bold">
                        {product.rating}
                      </span>
                      <span className="text-gray-400 text-sm ml-1">({product.reviews})</span>
                    </div>
                    <div className="flex items-center mt-2">
                      <span className="line-through text-gray-400 mr-2">₹{product.originalPrice}</span>
                      <span className="font-bold text-lg sm:text-xl md:text-2xl">₹{product.price}</span>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <button className="text-gray-400 hover:text-black transition">
                        <Heart size={24} />
                      </button>
                      <button className="text-gray-400 hover:text-black transition">
                        <ShoppingCart size={24} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <a href="#" className="block text-right mt-6 text-blue-500 hover:underline">
              View All →
            </a>
          </div>




          <div className="py-10">
            <h1 className="text-2xl sm:text-3xl font-bold">Describe Category</h1>
            <br></br>
            <p className="text-gray-500  text-sm sm:text-base md:text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
            </p>
            <span className="text-gray-500 text-sm sm:text-base md:text-lg"> the industry's standard dummy text ever since the 1500s.</span>

            {/* Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-10">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  {/* Image */}
                  <img
                    src={category.imageUrl}
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
                  {/* Title */}
                  <div className="absolute bottom-4 left-4 text-white font-semibold text-lg sm:text-xl md:text-2xl">
                    {category.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Categories Section */}
          <div className="py-10">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Jewelry Product</h1>
                <br></br>
                <div className="text-gray-500 mt-2 text-sm sm:text-base md:text-lg">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
                  <span>industry's standard dummy text ever since the 1500s.</span>
                </div>
              </div>
              <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center text-sm sm:text-base md:text-lg">
                View All →
              </a>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-6  overflow-hidden">
              {Jewelry.map((item, index) => (
                <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  {/* Product Image */}
                  <img src={item.image} alt={item.title} className="w-full h-48 sm:h-64 md:h-80 object-cover" />

                  {/* Product Details */}
                  <div className="p-4 sm:p-6 md:p-8">
                    <p className="text-sm text-gray-500">{item.category}</p>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">{item.title}</h3>

                    {/* Price Section */}
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-gray-500 line-through text-sm sm:text-base md:text-lg">₹{item.originalPrice}</span>
                      <span className="text-green-600 font-bold text-sm sm:text-base md:text-lg">₹{item.price}</span>
                    </div>

                    {/* Rating Section */}
                    <div className="flex items-center mt-2">
                      <span className="text-yellow-500 text-sm">{item.rating} ★</span>
                      <span className="ml-2 text-gray-500 text-sm">({item.reviews})</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-between mt-4">
                      <button className="text-gray-400 hover:text-black">
                        <Heart size={24} />
                      </button>
                      <button className="text-gray-400 hover:text-black">
                        <ShoppingCart size={24} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


          <div className="py-10">
            {/* Hero Section */}
            <div className="relative bg-white rounded-lg shadow-sm sm:shadow-md md:shadow-lg lg:shadow-xl xl:shadow-2xl overflow-hidden">
              {/* Background Image */}
              <img
                src={g1} // Replace with actual image URL
                alt="New Arrival"
                className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/10"></div>
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-start text-start text-white p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase">New Arrival</h1>
                <p className="mt-4 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl max-w-md">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
                <button className="mt-6 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-2 sm:py-3 md:py-3 lg:py-4 xl:py-4 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition">
                  Shop Now
                </button>
              </div>
            </div>
          </div>



          <div className="py-10">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">House Hold Product</h1>
                <br></br>
                <div className="text-gray-500 mt-2 text-sm sm:text-base md:text-lg">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been </p>
                  <span>the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</span>
                </div>
              </div>
              <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center text-sm sm:text-base md:text-lg">
                View All →
              </a>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6">
              {house.map((product, index) => (
                <div key={index} className="bg-white border border-gray-400 rounded-lg overflow-hidden shadow-sm sm:shadow-md md:shadow-lg lg:shadow-xl xl:shadow-2xl hover:shadow-lg transition-shadow">
                  {/* Product Image */}
                  <img src={product.image} alt={product.title} className="w-full h-48 sm:h-64 md:h-80 object-cover" />

                  {/* Product Details */}
                  <div className="p-4 sm:p-6 md:p-8">
                    <p className="text-sm text-gray-500">{product.category}</p>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">{product.title}</h3>

                    {/* Price Section */}
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-gray-500 line-through text-sm sm:text-base md:text-lg">₹{product.originalPrice}</span>
                      <span className="text-green-600 font-bold text-sm sm:text-base md:text-lg">₹{product.price}</span>
                    </div>

                    {/* Rating Section */}
                    <div className="flex items-center mt-2">
                      <span className="text-yellow-500 text-sm">{product.rating} ★</span>
                      <span className="ml-2 text-gray-500 text-sm">({product.reviews})</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-between mt-4">
                      <button className="text-gray-400 hover:text-black">
                        <Heart size={24} />
                      </button>
                      <button className="text-gray-400 hover:text-black">
                        <ShoppingCart size={24} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


          <div className="py-10">
            {/* Hero Section */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="relative bg-white rounded-lg shadow-sm sm:shadow-md md:shadow-lg lg:shadow-xl xl:shadow-2xl overflow-hidden">
                {/* Background Image */}
                <img
                  src={g2} // Replace with actual image URL
                  alt="New Arrival"
                  className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30"></div>
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase">New Arrival</h1>
                  <p className="mt-4 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl max-w-md">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </p>
                  <button className="mt-6 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-2 sm:py-3 md:py-3 lg:py-4 xl:py-4 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition">
                    Shop Now
                  </button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative bg-white rounded-lg shadow-sm sm:shadow-md md:shadow-lg lg:shadow-xl xl:shadow-2xl overflow-hidden">
                {/* Background Image */}
                <img
                  src={g2} // Replace with actual image URL
                  alt="New Arrival"
                  className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30"></div>
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase">New Arrival</h1>
                  <p className="mt-4 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl max-w-md">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </p>
                  <button className="mt-6 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-2 sm:py-3 md:py-3 lg:py-4 xl:py-4 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>


        </main>
        <div>

          
          <div className="relative w-full overflow-hidden shadow-md md:shadow-lg lg:shadow-xl">
            {/* Background Image with responsive height */}
            <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px]">
              <img
                src={black}
                alt="Hero background"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay for better text visibility if needed */}
              <div className="absolute inset-0 bg-black/10"></div>
            </div>

            {/* Content with responsive positioning and spacing */}
            <div className="absolute inset-0 flex items-center sm:items-center md:items-center">
              <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
                <button
                
                  className="bg-[#7B4F2A] text-white text-sm sm:text-base md:text-lg 
                     font-semibold py-2 px-4 sm:py-2.5 sm:px-5 md:py-3 md:px-6 lg:py-3.5 lg:px-7
                     rounded-md hover:bg-[#5a3a20] transition duration-300
                     shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#7B4F2A]/50"
                >
                   Contact Us
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>

  )
}
export default Home;



