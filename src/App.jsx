import React from 'react';
import Product from './Component/Product';
import Footer from './Component/Footer';
import Services from './Component/Services';
import Blog from './Component/Blog';
import ContactUs from './Component/ContactUs';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homes from "./Component/Homes";
import About from './Component/About';
import OurTeam from './Component/OurTeam';
import InquiryForm from './Component/InquiryForm';
import Registration from './Component/Registration';
import Career from './Component/Career';
import FounderNote from './Component/FounderNote';
// import Abc from './Component/Abc';









function App() {

  return (
    <>
      <div>

        <Router>
          {/* <Navbar /> */}
          <Routes>
            <Route path='/' element={<Homes />} />
            <Route path='/Product' element={<Product />} />
            <Route path='/Services' element={<Services />} />
            <Route path='/About' element={<About />} />
            <Route path='/OurTeam' element={<OurTeam/>} />
            <Route path='/FounderNote' element={< FounderNote/>} />
            <Route path='/Blog' element={<Blog />} />
            <Route path='/ContactUs' element={<ContactUs />} />
            <Route path='/InquiryForm' element={<InquiryForm/>} />
            <Route path='/Registration' element={< Registration/>} />
            <Route path='/Career' element={< Career/>} />
            {/* <Route path='/Abc' element={< Abc/>} /> */}
          </Routes>
          <Footer />
      {/* <Abc/> */}
        </Router>
      </div>

    </>
  )
}

export default App
