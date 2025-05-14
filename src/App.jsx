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
import Singleproduct from './Component/Singleproduct';
import Founder from './Component/Founder';  
import Blog1 from './Component/Blog1';
import Blog2 from './Component/Blog2';
import Blog3 from './Component/Blog3';
import Blog4 from './Component/Blog4';
import Blog5 from './Component/Blog5';
import Blog6 from './Component/Blog6';
import E2Eservices from './Component/E2Eservices';
import Distribution from './Component/Distribution';
import Warehousing from './Component/Warehousing';
import ITOutsourcing from './Component/ITOutsourcing';
import Tradefinance from './Component/Tradefinance';
import ProductRandD from './Component/ProductRandD';
import Shipchandling from './Component/Shipchandling';
// import Registration1 from './Component/Registration1';



function App() {

  return (
    <>

      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<Homes />} />
          <Route path='/Product' element={<Product />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/E2Eservices' element={<E2Eservices/>} />
          <Route path='/Distribution' element={<Distribution/>} />
          <Route path='/Warehousing' element={<Warehousing/>} />
          <Route path='/ITOutsourcing' element={<ITOutsourcing/>} />
          <Route path='/Tradefinance' element={<Tradefinance/>} />
          <Route path='/ProductRandD' element={<ProductRandD/>} />
          <Route path='/Shipchandling' element={<Shipchandling/>} />
          <Route path='/About' element={<About />} />
          <Route path='/OurTeam' element={<OurTeam />} />
          <Route path='/Founder' element={<Founder/>} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/Singleproduct' element={<Singleproduct />} />
          <Route path='/ContactUs' element={<ContactUs />} />
          <Route path='/InquiryForm' element={<InquiryForm />} />
          <Route path='/Registration' element={< Registration />} />
          <Route path='/Career' element={< Career />} />
          <Route path='/Blog1' element={< Blog1/>} />
          <Route path='/Blog2' element={< Blog2/>} />
          <Route path='/Blog3' element={< Blog3/>} />
          <Route path='/Blog4' element={< Blog4/>} />
          <Route path='/Blog5' element={< Blog5/>} />
          <Route path='/Blog6' element={< Blog6/>} /> 
          {/* <Route path='/Abc' element={< Abc/>} /> */}
        </Routes>
        <Footer />
        {/* <Registration1 /> */}
        {/* <Abc/> */}
      </Router>

    </>
  )
}

export default App
